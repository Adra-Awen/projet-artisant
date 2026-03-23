const express = require('express');
const router = express.Router();
const entrepriseController = require('../controllers/entrepriseController');

router.get ('/', entrepriseController.getAllEntreprises);

module.exports = router;