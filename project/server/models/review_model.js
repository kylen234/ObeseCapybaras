const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref:"Employee"},
    target: { type: Schema.Types.ObjectId, ref:"Employee"},
    description: { type: String, required: true},
    employeeFeedback: { type: String },
    reviewerFeedback: [{ type: String }],
    isReviewed: { type: Boolean, default: false},
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;