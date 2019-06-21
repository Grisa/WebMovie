const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    password: String, 
    email: String, 
    login: String, 
    idade: Number, 
    sobrenome: String
}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);