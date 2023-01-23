import User from '../models/User';

class UserController {
  // Criando um Usuário
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.status(200).json({
        id, nome, email,
      });
    } catch (e) {
      return res.status(400).json(
        { errors: e.errors.map((err) => err.message) },
      );
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      // const { id } = req.params;
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      // recebendo os dados do usuário direto do banco
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário consta na base de dados!'],
        });
      }

      // atulizando o user
      const novoDadosUser = await user.update(req.body);
      const { id, nome, email } = novoDadosUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json(
        { errors: e.errors.map((err) => err.message) },
      );
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      // recebendo os dados do usuário direto do banco
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }

      // atulizando o user
      await user.destroy();

      return res.json({ msg: 'Dados deletados com sucesso!' });
    } catch (e) {
      return res.status(400).json(
        { errors: e.errors.map((err) => err.message) },
      );
    }
  }
}

export default new UserController();
