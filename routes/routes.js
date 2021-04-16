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
    //router.get("/home", taskController.displayHome);
    router.get("/home", async (req,res) =>{
        var message = req.session.user1;
        //var message2 = await taskController.displayHome;
        res.render("home", {data: message});
    })

    router.post("/register", accountController.createAccount);
    router.post("/login", accountController.loginAccount);
    
    router.get("/logout",(req,res)=>{
        message = null
        res.redirect('/')
    })
    return app.use("/", router);
}


module.exports = initWebRoutes;