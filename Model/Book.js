const { ObjectId } = require("bson");
const mongoose = require("mongoose");

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
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
    },
    isbn: {
        type: Number,
    }
})

module.exports = mongoose.model("Book", BookSchema)