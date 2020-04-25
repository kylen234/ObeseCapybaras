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

const employeeSchema = new Schema(
    {
        firstName: {type: String},
        lastName: {type: String},
        companyId: {type: Number},
        password: {type: String},
        positionTitle: {type: String},
        companyName: {type: String},
        employeeId: {type: Number},
        managerId: {type: Number},
        email: {type: String},
        startDate: {type: String},
        personalReviews: {
                type: [reviewSchema]
        },
        outgoingReviews: {
                type: [reviewSchema]
        }
    }
);

const Employee = mongoose.model('collection2', employeeSchema);
module.exports =  Employee;