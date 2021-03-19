const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
    //   http = require("http"),
    //   server = http.createServer(app),
const bcrypt = require('bcrypt');
const {v4 : uuidv4} = require('uuid');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use( express.static("public"));
// var loggedIn = false
var user
var dbConnection = mysql.createPool({
        connectionLimit: 10,        
        host:"localhost",
        user:"root",
        password:"",
        database:"todolizt"
})

dbConnection.getConnection((err)=>{
    if(err){
        throw err
    }else{
        console.log("Connected to Database!")
    }
})

// var generateCode = () => {
//     let generate = "";
//     const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const length = 32;
//     for ( var i = 0; i < length; i++ ) {
//         generate += char.charAt(Math.floor(Math.random() * char.length));
//     }
//     return generate;
// }

// bcrypt.genSalt(11).then(salt =>{
//     bcrypt.hash('password', salt).then(hash =>{
//         bcrypt.compare('password',hash).then(res=>null)
//     })
// })  

app.get("/", (req,res) =>{
    res.render("index");
})

app.get("/register", (req,res) =>{
    res.render("register");
})

// app.get("/task",(req,res) =>{
//     res.render("createTask",{data:user,loggedIn:loggedIn})
// })

app.get("/add",(req,res) =>{
    res.render("addTask",{data:user})
})

app.get("/home",(req,res) =>{
    dbConnection.query(
        ' SELECT * FROM `tasks` WHERE `accountUuid` = ?  ', user[0].uuid,
        function(err, rows) {
            if (err) {
                throw err
            }
                res.render("home",{data:user, tasks: rows})
            }
        );
    // dbConnection.query("select * from tasks where accountUuid = ?",[user[0].uuid],(err,result)=>{
    //     if(err){
    //         throw err
    //     }else{
    //         res.render("home",
    //         {data:user,tasks: result,loggedIn:loggedIn}
    //         )
    //     }
    // })

})

app.post("/register", (req,res) =>{
    var data = req.body;
    if(data.password === data.passwordConfirmation){

        const tok = uuidv4();
        let salt = bcrypt.genSaltSync(10);
        let userItem = {
            uuid: tok,
            username: data.username,
            password: bcrypt.hashSync(data.password, salt),
        };
        dbConnection.query('INSERT INTO users set ?', userItem,
            function(err, rows) {
                if (err) {
                    throw err
                }
                res.render("index",{status:"account created successfully!"});
            }
        )
        // bcrypt.genSalt(11).then(salt =>{
        //     bcrypt.hash(data.password, salt).then(hash =>{
        //         db.query("INSERT INTO accounts (uuid,username,password) VALUES (?,?,?)",[generateCode(),data.username,hash],(err,result)=>{
        //             if(err){
        //                 throw err
        //             }else{
        //                res.render("index",{status:"account created successfully!"});
        //             }
        //         })
        //     })
        // })  
        
    }else{
        res.render("register", {errors: "Passwords do not match!"})
    }
})

app.post("/login", (req,res)=>{
    var data = req.body
   
    dbConnection.query('SELECT username, password, uuid FROM users WHERE username = ?', data.username,
        function(err, rows) {
            if (err) {
                throw err
            }else{
                if(rows[0].username === data.username){
                    // bcrypt.compare(data.password,rows[0].password,(err,success)=>{
                    //     if(success === true){
                    //         loggedIn = true
                    //         user=rows
                    //         res.redirect("/home")
                    //     }else{
                    //         res.render("index",{err:"Password is incorrect!"})
                    //     }
                    // })
                    bcrypt.compare(data.password,rows[0].password).then((isMatch) => {   
                        if (isMatch) {   
                            user = rows;
                            // loggedIn = true;
                            res.redirect("/home");
                    } else {
                        res.render("index",{ err:"Password is incorrect!"} ) 
                    }
                    });
                }else{
                    res.render("index",{err:"Username does not exist"});
                }
            }
            
        }
    )

    // dbConnection.query("SELECT username,password,uuid FROM accounts WHERE username = ?",[data.username],(err,results)=>{
    //     if(err){
    //         throw err
    //     }else{
    //         if(results[0].username === data.username){
    //             bcrypt.compare(data.password,results[0].password,(err,success)=>{
    //                 if(success === true){
    //                     loggedIn = true
    //                     user=results
    //                     res.redirect("/home")
    //                 }else{
    //                     res.render("index",{err:"Password is incorrect!"})
    //                 }
    //             })
    //         }else{
    //             res.render("index",{err:"Username not found!"})
    //         }
    //     }
    // })
})

app.post("/add", (req,res)=>{
    var data = req.body
    let userItem = {
        accountUuid:data.uuid,
        task: data.task,
        description:data.desc,
        status: "pending",
    };
    dbConnection.query('INSERT INTO tasks set ?', userItem,
            function(err, rows) {
                if (err) {
                    throw err
                }
                res.redirect("/home")
            }
        )
    // dbConnection.query("insert into task (accountUuid,task,description,status) values (?,?,?,?)",[data.uuid,data.task,data.desc,"pending"],(err)=>{
    //     if(err){
    //         throw err
    //     }else{
    //         res.redirect("/home")
    //     }
    // })
})

app.get("/delete",(req,res)=>{
    dbConnection.query("delete from tasks where id = ?",[req.query.id],(err)=>{
        if(err){
            throw err
        }else{
            res.redirect("/home")
        }
    })
})

app.get("/update",(req,res)=>{
    var a = new Date();
    var startTime = a.toJSON().replace(/T/, ' ').replace(/\..+/, '');
    dbConnection.query("update tasks set status = ?, completed_at = ? where id = ?",['completed',startTime,req.query.id],(err)=>{
        if(err){
            throw err
        }else{
            res.redirect("/home")
        }
    })
})

app.get("/logout",(req,res)=>{
    // loggedIn = false
    user = null
    res.redirect('/')
})



app.listen(8080, () => console.log(`Running on port 8080!`));