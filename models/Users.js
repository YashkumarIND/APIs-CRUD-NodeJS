const mongoose = require("mongoose");

//include schema in model
const UsersSchema = new mongoose.Schema({
    user_name: String,
    email: String,
    joined_at: Date
},{ versionKey: false });

//export to be used anywhere else
module.exports = mongoose.model("Users", UsersSchema);