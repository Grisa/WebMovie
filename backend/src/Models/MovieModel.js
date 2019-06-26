const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    },
    users: []
});

const MovieSchema = new mongoose.Schema({
    name: String,
    description: String,
    genre: String,
    duration: Number,
    data: Date,
    type: String,
    rating: RatingSchema,
    favorite: [{
			    user: String,
			    type: String
			  }]
}, {
        timestamps: true
    });	

MovieSchema.pre("save", function (next) {
    if (!this.rating) {
        console.log("Rating vazio")
        this.rating = {
            count: 0,
            users: []
        };
    }

    if (!this.favorite) {
        console.log("Favorite vazio")
        this.favorite = [];
    }

    next();
});

module.exports = mongoose.model("Movie", MovieSchema);