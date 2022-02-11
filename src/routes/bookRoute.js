const express = require('express');
const app = express.Router();
const bookController = require('../controllers/bookController');
const auth = require("../middleware/auth");

app.post("/",auth, bookController.addBook);


module.exports = app;

