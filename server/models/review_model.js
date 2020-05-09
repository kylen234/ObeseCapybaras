const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
        author: { type: Schema.Types.ObjectID, ref: "Employee"},
        authorName: {type: String},
        target: { type: Schema.Types.ObjectID, ref: "Employee"},
        targetName: {type: String},
        description: { type: String, required: true },
        timestamp: {type: Date, default: new Date()}
    },
);

const Review = mongoose.model('reviews', reviewSchema);

module.exports = Review;