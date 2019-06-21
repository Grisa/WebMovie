const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

mongoose.connect('mongodb+srv://chinaakt:@hfpat1abv@cluster0-juhv0.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
app.use(bodyparser.json({type:"*/*"}));
app.use(cors());

app.use(require('./routes.js'));

app.listen(3333);