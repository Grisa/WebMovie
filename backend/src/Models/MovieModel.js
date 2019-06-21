const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    name: String,
    description: String,
    genre: String,
    duration: Number,
    data: Date,
    type: Number,
    rating: [{count: Number, users: {user:String, type: Number}}],
    favorite: [{user:String, type: Number}]
}, {
    timestamps: true
});

module.exports = mongoose.model("Movie", MovieSchema);