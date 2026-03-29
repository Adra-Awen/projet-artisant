const express = require('express');
const router = express.Router();
const db = require('../models');
const Entreprise = db.entreprise;
const Speciality = db.speciality;

const categoryRoutes = require('./categoryRoutes');
const specialityRoutes = require('./specialityRoutes');
const entrepriseRoutes = require('./entrepriseRoutes');

const entrepriseController = require('../controllers/entrepriseController');
const categoryController = require('../controllers/categoryController');

router.get('/', async (req, res, next) => {
    try {
        const categories = await categoryController.getAllCategories();
        const topEntreprises = await entrepriseController.getTopEntreprises();
        res.render('index', {
            title: 'Accueil',
            categories,
            topEntreprises
        });
    } catch (error) {
        next(error);
    }
});

router.get('/entreprise/:id', entrepriseController.getEntrepriseById);

router.use('/categories', categoryRoutes);
router.use('/specialities', specialityRoutes);
router.use('/entreprises', entrepriseRoutes);

module.exports = router;