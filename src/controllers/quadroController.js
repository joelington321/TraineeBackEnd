const Quadro = require('../models/quadro');
const Task = require('../models/task');

module.exports = {
    async create(request, response) {
        try {

            const { nomeQuadro, cor } = request.body;
            if (!nomeQuadro || !cor)
                return response.status(400).json({ message: 'Erro: informacoes invalidas para criar o quadro' });

            await Quadro.create({
                nomeQuadro,
                cor,
            });
            return response.status(200).json({ message: 'Quadro Criado com sucesso' });
        } catch (error) {
            return response.status(400).json({ message: 'Erro na criação do Quadro' });
        }

    },

    async index(request, response) {
        try {
            const quadros = await Quadro.find();
            return response.status(200).json(quadros)

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao listar Quadros' });
        }
    },

    async destroy(request, response) {
        try {
            const id = request.params.id;
            const quadro = await Quadro.findOne({ _id: id });

            if (!quadro)
                return response.status(400).json({ message: 'Erro: Não existe Quadro com esse ID!' });
            await Quadro.deleteOne({ _id: id });

            return response.status(200).json({ message: 'Quadro apagado com sucesso' });

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao deletar Quadro' });
        }
    },

    async update(request, response) {
        try {
            const id = request.params.id;
            const quadro = await Quadro.findOne({ _id: id });

            if (!quadro)
                return response.status(400).json({ message: 'ERROR Não existe quadro com esse ID' });

            const { nomeQuadro, cor } = request.body;

            if (!nomeQuadro || !cor)
                return response.status(400).json({ message: 'Erro: informacoes invalidas para criar o quadro' });

            await Quadro.findOneAndUpdate({ _id: id }, {
                nomeQuadro,
                cor,
            });

            return response.status(200).json({ message: 'Quadro Editado com sucesso' });

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao atualizar Quadro' });
        }
    },

    async show(request, response) {
        try {
            const id = request.params.id;
            const quadro = await Quadro.findOne({ _id: id });

            if (!quadro) {
                return response.status(400).json({ message: 'Erro: Não existe quadro com esse ID' });
            }
            return response.status(200).json(quadro);

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao buscar quadro' });
        }
    },

    async showTasks(request, response) {
        try {
            const idQuadro = request.params.idQuadro;
            const tasks = await Task.find({ idQuadro: idQuadro });
            return response.status(200).json(tasks);
        } catch (error) {
            return response.status(400).json({ message: 'Erro ao listar task do quadro pedido' });
        }

    }
}