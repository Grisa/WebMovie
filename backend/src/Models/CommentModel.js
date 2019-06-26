const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    name: String,
    comment:[]
}, {
        timestamps: true
    });

module.exports = mongoose.model("Comment", CommentSchema);