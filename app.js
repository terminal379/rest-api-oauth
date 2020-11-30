const express = require('express');
const mongoose = require('mongoose');
const app = express();

// db
mongoose.connect('mongodb://localhost/projecte-llibres');
const db = mongoose.connection;

db.on('error', (error) => console.log(error));

// middlewares
app.use(express.json());
const llibresRouter = require('./routes/llibres');
app.use('/llibres', llibresRouter);

// inicialitzar el srevidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor inicialitzat al port ${port}`));