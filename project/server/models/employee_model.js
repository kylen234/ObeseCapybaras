const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const reviewSchema = new Schema({
        author: { type: Schema.Types.ObjectID, ref: "Employee"},
        target: { type: Schema.Types.ObjectID, ref: "Employee"},
        description: { type: String, required: true },
        timestamp: {type: Date, default: new Date()}
    },
);

const requestEvaluationsSchema = new Schema({
    author: { type: Schema.Types.ObjectID, ref: "Employee"},
    target: { type: Schema.Types.ObjectID, ref: "Employee"},
    firstName: {type: String},
    lastName: {type: String},
    accepted: {type:Boolean, default: false},
    timestamp: {type: Date, default: new Date()}
});


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
        },
        yourRequests: {
            type: [requestEvaluationsSchema]
        },
        othersRequests: {
            type: [requestEvaluationsSchema]
        }
    }
);

employeeSchema.pre('save', function(next) {
        let user = this;
        if (this.isModified('password') || this.isNew) {
                bcrypt.genSalt(10, (err, salt) => {
                        if (err) {
                                console.log(err);
                                return next(err);
                        }

                        bcrypt.hash(user.password, salt, (err, hash) => {
                                if (err) {
                                        console.log(err);
                                        return next(err);
                                }

                                user.password = hash;
                                next();
                        });
                });
        } else {
                return next();
        }
});

// Create method to compare password input to password saved in database
employeeSchema.methods.comparePassword = function(pw, cb) {
        // console.log(pw);
        //cb(null, true);

        if(pw == this.password) {
              cb(null, true);
        } else {
                cb(null, false);
        }

        /*
        bcrypt.compare(pw, this.password, function(err, isMatch) {
                if (err) {
                        return cb(err);
                }
                cb(null, isMatch);
        });
        */
};

const Employee = mongoose.model('collection2', employeeSchema);
module.exports =  Employee;