const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const { stringify } = require("querystring");

const BookSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
    },
    book_ID: {
        type: Number,
    },
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    isbn: {
        type: Number,
    }
})

module.exports = mongoose.model("Book", BookSchema)