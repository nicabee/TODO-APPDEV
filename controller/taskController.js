const task = require("../models/task");
var user2;
exports.displayHome = async (req, res) => {
    let data = await task.model.findOne(
        {
            where: {
                uuid: req.session.user1.uuid
            }
        }
    ).then(function(user){
        if(!user){
            console.log("ops");
        }else{
            // bcrypt.compare(req.body.password,user.password).then((isMatch) => {   
                // if (isMatch) {   
                //     //user1 = user;
                    console.log("Saksespol2");
                    //req.session.user2 = user;
                    user2 = user;
                   // res.redirect("/home");
                     return user2;
                // } else {
                //     res.render("index",{ err:"Password is incorrect!"} ) 
                // }
                // });
            
        }
    })
}