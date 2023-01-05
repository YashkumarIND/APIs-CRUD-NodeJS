const Users = require("../models/Users.js");
//these methods to be created 

// Get all users
const users_all = async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        res.json({ message: error });
    }
};

//single user get
const users_any = async (req, res) => {
    try {
        const users = await Users.find({
            _id: req.params.userID
        });
        res.json(users);
    } catch (error) {
        res.json({ message: error });
    }
};

//add new user
const users_add = async (req, res) => {
    const users = new Users({
        user_name: req.body.user_name,
        email: req.body.email,
        joined_at: Date.now()
    });
    try {
        const savedusers = await users.save();
        res.json(savedusers);
    } catch (error) {
        res.status(400).send(error);
    }
};


//update user
const users_update = async (req, res) => {
    try {
        const users = {
            user_name: req.body.user_name,
            email: req.body.email
        };

        const updatedusers = await Users.findByIdAndUpdate(
            {
                _id: req.params.userID
            },
            users
        );
        res.json(updatedusers);
    } catch (error) {
        res.json({ message: error });
    }
};

//delete user 
const users_delete = async (req, res) => {
    try {
        const removeUsers = await Users.findByIdAndDelete(req.params.userID);
        res.json(removeUsers);
        console.log("work done of deletion !");
    } catch (error) {
        res.json({ message: error });
    }
};

//export modules
module.exports = {
    users_all,
    users_any,
    users_add,
    users_update,
    users_delete
}