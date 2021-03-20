const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const {v4 : uuidv4} = require('uuid');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use( express.static("public"));
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

app.get("/", (req,res) =>{
    res.render("index");
})

app.get("/register", (req,res) =>{
    res.render("register");
})


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
                    bcrypt.compare(data.password,rows[0].password).then((isMatch) => {   
                        if (isMatch) {   
                            user = rows;
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
    user = null
    res.redirect('/')
})

app.listen(8080, () => console.log(`Running on port 8080!`));