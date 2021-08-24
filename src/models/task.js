const mongoose = require('../database/conection');

const TaskSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    descricao: {
        type: String,
        require: true,
    },
    idQuadro: {
        type: String,
        require: true,
    },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;