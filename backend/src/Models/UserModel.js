const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    login: String,
    idade: String,
    sobrenome: String
}, {
        timestamps: true
    });

UserSchema.pre("save", async function hashPassword(next) {
    if (!this.isModified("password")) next();

    this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
    compareHash(hash) {
        return bcrypt.compare(hash, this.password);
    },
    generateToken() {
        return jwt.sign({ id: this.id }, "secret", {
            expiresIn: 86400
        });
    }
}

module.exports = mongoose.model("User", UserSchema);