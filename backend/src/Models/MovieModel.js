const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    name: String,
    description: String,
    genre: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model("User", MovieSchema);