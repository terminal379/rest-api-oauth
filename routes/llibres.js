const express = require('express');
const router = express.Router();
const { crearLlibre, obtenirLlibres } = require('../services/llibres');

// rutes
router.get('/', obtenirLlibres);
router.post('/', crearLlibre);

module.exports = router;