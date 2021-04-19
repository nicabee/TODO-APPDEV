const task = require("../models/task");
var user2;
exports.createTask = async (req, res) => {
   // try{
        
        let data = await task.model.create({
            uuid: req.body.uuid,
            task: req.body.task,
            description: req.body.desc,
            status: "pending"
            }      
        ).then(user => {
            if(!user){
                console.log("oopps");
            }else{
                console.log("Task Generated");
                let data2 = task.model.findAll(
                    {
                    where: {
                        uuid: user.uuid
                    }
                }).then(function(user2){
                    if(!user2){
                        console.log("HAKDOG1");
                    }else{
                        console.log("taskcontroller");
                        req.session.usertwo = user2;
                        res.redirect("/home");
                    }
                })

            }
            
        })
        
    // }catch(err){
    //     res.render("home", {errors: "Failed to add task!"});
    // }
}