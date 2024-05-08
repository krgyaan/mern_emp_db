const express = require('express');
const router = express.Router();

const { addLogin, login } = require('../controllers/login.controller');
const { getAllEmployee } = require('../controllers/employee.controller');

// Route for user login (POST request)
router.post('/login', login);
router.post('/add-login', addLogin);

// Route for retrieving all employees (GET request)
router.get('/employees', getAllEmployee);

module.exports = router;
