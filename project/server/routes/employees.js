const EmployeeCtrl = require('../controllers/employee.controller');
const router = require('express').Router();

router.post('/createEmployee', EmployeeCtrl.createEmployee);
router.put('/updateEmployee/:id', EmployeeCtrl.updateEmployee);
router.delete('/deleteEmployee/:id', EmployeeCtrl.deleteEmployee);
router.get('/getEmployee/:id', EmployeeCtrl.getEmployee);
router.get('/getAllEmployees', EmployeeCtrl.getAllEmployees);


module.exports = router;