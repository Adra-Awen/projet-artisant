const { category, entreprise, speciality } = require('../models/index');

exports.getAllCategories = async () => {
    try {
        const categories = await category.findAll({
            order: [['nom', 'ASC']]
        });
        return categories;
    } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
        throw error;
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await category.findByPk(id, {
                include: [{model: speciality, include: [{model: entreprise}]}]
        });
        if (!result) {
            return res.status(404).json({ error: 'Catégorie non trouvée.' });
        }

        let listeEntreprises = [];

        const specs = result.Specialities || result.specialities || [];        
        specs.forEach(spec => {
            const ents = spec.Entreprises || spec.entreprises || [];
        
        ents.forEach(ent => {
            ent.speciality = spec.nom;
            listeEntreprises.push(ent);
        });
        });

        res.render('category', {
            title: result.nom,
            category: result,
            entreprises: listeEntreprises
        });
    } catch (error) {
        console.error('Erreur lors de la récupération de la catégorie :', error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de la catégorie.' });
    }
};