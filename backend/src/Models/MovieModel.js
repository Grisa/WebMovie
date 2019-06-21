const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    },
    users: []
});

const FavoriteSchema = new mongoose.Schema({
    user: String,
    fav: {
        type: Number,
        enum: [1, 2]
    }
});

const MovieSchema = new mongoose.Schema({
    name: String,
    description: String,
    genre: {
        type: String,
        enum: ["Terror", "Suspense", "Comédia", "Animação", "Ação"]
    },
    duration: Number,
    data: Date,
    type: {
        type: Number,
        enum: [1, 2, 3]
    },
    rating: RatingSchema,
    favorite: [FavoriteSchema]
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