const account = require("../models/user");
const {v4 : uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
var user1;
exports.loginAccount = async (req, res) => {
        let data = await account.model.findOne(
            {
                where: {
                    username: req.body.username
                }
            }
        ).then(function(user){
            if(!user){
                res.render("index.ejs", {err: "Account does not exist"});
            }else{
                bcrypt.compare(req.body.password,user.password).then((isMatch) => {   
                    if (isMatch) {   
                        user1 = user;
                        console.log("Saksespol");
                        res.redirect("/home");
                         
                    } else {
                        res.render("index",{ err:"Password is incorrect!"} ) 
                    }
                    });
                
            }
        })
}

exports.createAccount = async (req, res) => {
    try{
        const tok = uuidv4();
        if (req.body.password === req.body.passwordConfirmation){
            let salt = bcrypt.genSaltSync(10)
        let data = await account.model.create({
            uuid: tok,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, salt)
            }      
        ).then(user => {
            console.log("New auto-generated ID:", user.id);
            res.render("index.ejs");
        })
        }else{
            console.log("Password mismatch");
        }
    }catch(err){
        res.render("register.ejs", {errors: "Username exists!"});
    }
}

exports.goHome = async (req, res) => {
    console.log(user1.uuid);
}