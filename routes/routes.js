const express = require("express");
const router = express.Router();
const accountController = require("../controller/accountController");
const taskController = require("../controller/taskController");


//router.get("/register", accountController.createAccount);

let initWebRoutes = (app) => {
    router.get("/", (req,res) =>{
        res.render("index");
    })
    router.get("/login", (req,res) =>{
        res.render("index");
    })
    router.get("/register", (req,res) =>{
        res.render("register");
    })
    router.get("/home", accountController.goHome);
    router.post("/register", accountController.createAccount);
    router.post("/login", accountController.loginAccount);
    
    return app.use("/", router);
}


module.exports = initWebRoutes;