/*
In order to interact with our database, we need to create a
model for each of our resources. So, create a folder called
models in the root, and inside the models folder, create a
file called Book.js and update it with this:
*/


// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    published_date: {
        type: Date
    },
    publisher: {
        type: String
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Book = mongoose.model('book', BookSchema);
