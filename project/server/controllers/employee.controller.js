// Requiring DB
// const Employee = require('../models/employee_model');
const db = require('../models');
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

getEmployee = (req, res) => {
    // Target Employee who's ID is equal to req.params.id
    db.Employee.findOne({_id: req.params.id})
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
  getAllEmployees
};