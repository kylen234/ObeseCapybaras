// Requiring DB

const jwt = require('jsonwebtoken');
const passport = require('passport');

const db = require('../models');

const httpResponse = {
    onUserNotFound: {
        success: false,
        message: 'User not found.'
    },
    onAuthenticationFail: {
        success: false,
        message: 'Passwords did not match.'
    }
};


loginUser = (req, res) => {
    let { email, password } = req.body;

    // console.log(email);
    // console.log(password);

    db.Employee.findOne({
        email: email
    }, function(error, user) {
        if(error) throw error;
        if(!user) res.send(httpResponse.onUserNotFound);

        // Check if password matches
        user.comparePassword(password, function(error, isMatch) {
            console.log(isMatch);
            if (isMatch && !error) {
                let token = jwt.sign(user.toJSON(), "mongodb+srv://timothynguye:MisterMonkey80@obesecapy-d0xxf.mongodb.net/test?retryWrites=true&w=majority\"", {
                    expiresIn: 10080
                });
                return res.json({ success: true, token: 'JWT ' + token });
            }

            res.send(httpResponse.onAuthenticationFail);
        });
    });
};

createEmployee = (req, res) => {
    db.Employee.create(req.body)
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json(err));
};

updateEmployee = (req, res) => {
    // Find Employee by ID and update personalReviews to req.body.personalReviews
    db.Employee.findOneAndUpdate({_id: req.params.id}, {$set: { personalReviews: req.body.personalReviews}}, {new: true})
        // Then send Updated Employee back to client
        .then(Employee => res.json(Employee))
        // If an error occurs, send the err to the client  instead
        .catch(err => res.status(422).json(err));
};

deleteEmployee = (req, res) => {
    // Deletes Specific Employee based upon unique ID
    db.Employee.deleteOne({_id: req.params.id})
        // Then send response back to client
        .then(response => res.json(response))
        // If an error occurs, send the err to the client instead
        .catch(err => res.status(422).json(err));
};

// Probably not gonna be used since it's so fucking long
getEmployee = (req, res) => {
    // Target Employee who's ID is equal to req.params.id
    db.Employee.findOne({_id: req.params.id})
        // Then send Employee's info back to client
        .then(Employee => res.json(Employee))
        // If an error occurs, send the error to the client instead
        .catch(err => res.status(400).json(err));
};


getEmployeeID = (req, res) => {
    db.Employee.findOne({employeeId: req.params.employeeId})
        // Then send Employee's info back to client
        .then(Employee => res.json(Employee))
        // If an error occurs, send the error to the client instead
        .catch(err => res.status(400).json(err));
};

getEmail = (req, res) => {
    db.Employee.findOne({email: req.params.email})
        // Then send Employee's info back to client
        .then(Employee => res.json(Employee))
        // If an error occurs, send the error to the client instead
        .catch(err => res.status(400).json(err));
};

// Get All Employees Method
getAllEmployees = async(req, res) => {
    // Gather all Employees in DB
    await db.Employee.find()
        // Then send Employees back to client
        .then(Employees => res.json(Employees))
        // If an error occurs, send the error to the client instead
        .catch(err => res.status(400).json(err));
};


module.exports = {
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
    getAllEmployees,
    getEmployeeID,
    getEmail,
    loginUser,
};