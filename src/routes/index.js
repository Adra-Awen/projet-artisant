const express = require('express');
const router = express.Router();

const categoryRoutes = require('./categoryRoutes');
const specialityRoutes = require('./specialityRoutes');
const entrepriseRoutes = require('./entrepriseRoutes');

router.use('/categories', categoryRoutes);
router.use('/specialities', specialityRoutes);
router.use('/entreprises', entrepriseRoutes);

module.exports = router;