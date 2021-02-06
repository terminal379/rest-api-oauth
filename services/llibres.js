const db = require('../models');

exports.crearLlibre = async (req, res) => {
    const llibre = new db.Llibre({
        nom: req.body.nom,
        autor: req.body.autor
    });

    try {
        const nouLlibre = await llibre.save();
        res.status(201).json(nouLlibre);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

exports.obtenirLlibres = async (req,res) => {
    try {
        const llibres = await db.Llibre.find();
        res.json(llibres);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};
