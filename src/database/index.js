import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
// acessando o model
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

// madando as configurações da database config
const connection = new Sequelize(databaseConfig);

// chamando o init do model Aluno
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
