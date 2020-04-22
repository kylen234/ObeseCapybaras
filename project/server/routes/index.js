const express = require('express');
const EmployeeCtrl = require('../controllers/employee.controller');
const ReviewCtrl = require('../controllers/review.controller');
const router = express.Router();

router.post('/createEmployee', EmployeeCtrl.createEmployee);
router.put('/updateEmployee/:id', EmployeeCtrl.updateEmployee);
router.delete('/deleteEmployee/:id', EmployeeCtrl.deleteEmployee);
router.get('/getEmployee/:id', EmployeeCtrl.getEmployee);
router.get('/getAllEmployees', EmployeeCtrl.getAllEmployees);

router.post('/reviews', ReviewCtrl.createReview);
router.post('/reviews', ReviewCtrl.assignToReview);
router.post('/reviews', ReviewCtrl.deleteReview);
router.post('/reviews', ReviewCtrl.getReview);
router.post('/reviews', ReviewCtrl.updateReview);
router.post('/reviews', ReviewCtrl.assignToReview);

module.exports = router;