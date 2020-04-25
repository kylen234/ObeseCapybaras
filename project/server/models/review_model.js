const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
        author: { type: Schema.Types.ObjectID, ref: "Employee"},
        target: { type: Schema.Types.ObjectID, ref: "Employee"},
        description: { type: String, required: true },
        employeeFeedback: { type: String },
        reviewerFeedback: [{ type: String }],
        isReviewed: { type: Boolean, default: false},
        timestamp: {type: Date, default: new Date()}
    },
);

const Review = mongoose.model('reviews', reviewSchema);

module.exports = Review;