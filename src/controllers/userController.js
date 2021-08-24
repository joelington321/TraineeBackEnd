const User = require('../models/user');

module.exports = {
    async create(request, response) {
        try {

            const { user, email, phone, password } = request.body;

            if (!user || !email || !password) //retorna um erro caso o usuario nao digite variavel "user" ou "password"
                return response.status(400).json({ message: 'Erro: informacoes de login invalidas' });

            await User.create({
                user,
                email,
                phone,
                password
            });

            return response.status(200).json({ message: 'Login realizado com sucesso' });
        } catch (error) {
            return response.status(400).json({ message: 'Erro ao realizar login' });
        }
    },

    async index(request, response) {
        try {
            const UserCredenciais = await User.find();
            return response.status(200).json(UserCredenciais)

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao listar usuarios' });
        }
    },

    async destroy(request, response) {
        try {
            const id = request.params.id;
            const user = await User.findOne({ _id: id });

            if (!user)
                return response.status(400).json({ message: 'Erro: Não existe usuario com essa ID!' });

            await User.deleteOne({ _id: id });

            return response.status(200).json({ message: 'Usuario deletado com sucesso!' });

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao deletar usuario' });
        }
    },

    async show(request, response) {
        try {
            const id = request.params.id;
            const user = await User.findOne({ _id: id });

            if (!user) {
                return response.status(400).json({ message: 'Erro: Não existe usuario com esse ID' });
            }
            return response.status(200).json(user);

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao buscar usuario' });
        }
    },

    async update(request, response) {
        try {
            const id = request.params.id;
            const users = await User.findOne({ _id: id });

            if (!users)
                return response.status(400).json({ message: 'ERROR Não existe usuario com esse ID' });

            const { user, email, phone, password } = request.body;

            if (!user || !email || !phone || !password) //retorna um erro caso o usuario nao digite variavel "user" ou "password"
                return response.status(400).json({ message: 'Erro: informacoes de login invalidas' });

            await User.findOneAndUpdate({ _id: id }, {
                user,
                email,
                phone,
                password
            });

            return response.status(200).json({ message: 'Dados do usuario editado com sucesso' });

        } catch (error) {
            return response.status(400).json({ message: 'Erro ao atualizar dados do usuario' });
        }
    }

}