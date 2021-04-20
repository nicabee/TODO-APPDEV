const express = require("express");
const router = express.Router();
const accountController = require("../controller/accountController");
const taskController = require("../controller/taskController");
var session = require('express-session');



//router.get("/register", accountController.createAccount);

let initWebRoutes = (app) => {
    router.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));

    router.get("/", (req,res) =>{
        res.render("index");
    })
    router.get("/login", (req,res) =>{
        res.render("index");
    })
    router.get("/register", (req,res) =>{
        res.render("register");
    })
   
    
    router.get("/home",  (req,res) =>{
        var message = req.session.user1;
        var message2 = req.session.usertwo;
       // var message = req.session.userthree;
        res.render("home", {data: message, tasks:message2});

    })

    router.get("/add",  (req,res) =>{
           var message = req.session.user1;
           res.render("addTask", {data: message});
 
    })

    router.get("/update", taskController.updateTask);
    router.get("/delete", taskController.deleteTask);
    router.post("/add", taskController.createTask);
    router.post("/register", accountController.createAccount);
    router.post("/login", accountController.loginAccount);
    
    router.get("/logout",(req,res)=>{
        message = null
        res.redirect('/')
    })
    return app.use("/", router);
}


module.exports = initWebRoutes;