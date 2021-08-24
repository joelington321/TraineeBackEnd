const Task = require('../models/task');
const Quadro = require('../models/quadro');

module.exports = {
    async create(request, response) {
        try {

            const { nome, descricao, idQuadro } = request.body;

            const quadro = await Quadro.findOne({ _id: idQuadro });

            if (!quadro) {
                return response.status(400).json({ message: 'Não existe o quadro' });
            }

            if (!nome || !descricao || !idQuadro)
                return response.status(400).json({ message: 'Erro: informacoes invalidas' });

            await Task.create({
                nome,
                descricao,
                idQuadro
            });

            return response.status(200).json({ message: 'Tarefa adicionada com sucesso' });
        } catch (error) {
            return response.status(400).json({ message: 'Erro ao adicionar tarefa ou quadro invalido' });
        }
    },

    async index(request, response) { //listar as tarefas
        try {
            const tasks = await Task.find(); //todas as tarefas listadas

            return response.status(200).json(tasks)
        } catch (error) {
            return response.status(400).json({ message: 'Erro ao listar tarefas' });
        }
    },

    async destroy(request, response) {
        try {
            const id = request.params.id;
            const task = await Task.findOne({ _id: id });

            if (!task)
                return response.status(400).json({ message: 'Erro: Não existe tarefa com essa ID!' });

            await Task.deleteOne({ _id: id });

            return response.status(200).json({ message: 'Tarefa deletada com sucesso!' });

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao deletar tarefa' });
        }
    },

    async update(request, response) {
        try {
            const id = request.params.id;
            const task = await Task.findOne({ _id: id });

            if (!task)
                return response.status(400).json({ message: 'ERROR Não existe task com esse ID' });

            const { nome, descricao, idQuadro } = request.body;

            const quadro = await Quadro.findOne({ _id: idQuadro });

            if (!quadro) {
                return response.status(400).json({ message: 'Quadro não existente' });
            }

            if (!nome || !descricao || !idQuadro)
                return response.status(400).json({ message: 'Erro: informacoes invalidas' });

            await Task.findOneAndUpdate({ _id: id }, {
                nome,
                descricao,
                idQuadro,
            });

            return response.status(200).json({ message: 'Task Editado com sucesso' });

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao atualizar Task' });
        }
    },

    async show(request, response) {
        try {
            const id = request.params.id;
            const task = await Task.findOne({ _id: id });

            if (!task) {
                return response.status(400).json({ message: 'Erro: Não existe task com esse ID' });
            }
            return response.status(200).json(task);

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao buscar task' });
        }
    }
}


