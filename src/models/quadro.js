const mongoose = require('../database/conection');

const QuadroSchema = new mongoose.Schema({
    nomeQuadro: {
        type: String,
        require: true,
    },
    cor: {
        type: String,
        require: true,
    },
});

const Quadro = mongoose.model('Quadro', QuadroSchema);

module.exports = Quadro;