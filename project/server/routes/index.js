// Require Express Router
const router = require("express").Router();

// Require Routes here.
const employeeRoutes = require('./employees');
const reviewRoutes = require('./reviews');

// Use Routes
// Employee Routes
router.use("/collection2", employeeRoutes);

// Review Routes
router.use("/reviews", reviewRoutes);

// Export Router
module.exports = router;

/*
const express = require('express');
const EmployeeCtrl = require('../controllers/employee.controller');
const ReviewCtrl = require('../controllers/review.controller');
const router = express.Router();

router.post('/createEmployee', EmployeeCtrl.createEmployee);
router.put('/updateEmployee/:id', EmployeeCtrl.updateEmployee);
router.delete('/deleteEmployee/:id', EmployeeCtrl.deleteEmployee);
router.get('/getEmployee/:id', EmployeeCtrl.getEmployee);
router.get('/getAllEmployees', EmployeeCtrl.getAllEmployees);

router.post('/createReview/:id', ReviewCtrl.createReview);
router.post('/reviews', ReviewCtrl.assignToReview);
router.post('/reviews', ReviewCtrl.deleteReview);
router.get('/getReviews/:id', ReviewCtrl.getReview);
router.put('/reviews', ReviewCtrl.updateReview);

module.exports = router;
*/