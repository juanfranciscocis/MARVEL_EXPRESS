//express
const express = require('express');
const router = express.Router();
// my modules
//controllers
const {personajes} = require("../controllers/personajes");

/* GET personajes. */
router.get('/', personajes);

module.exports = router;
