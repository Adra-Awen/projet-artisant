const express = require('express');
const router = express.Router();
const specialityController = require('../controllers/specialityController');

router.get ('/', specialityController.getAllSpecialities);

module.exports = router;