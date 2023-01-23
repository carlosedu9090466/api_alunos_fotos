# api_alunos_fotos

TOKEN_SECRET='sua_secret_key_aqui'

Execute os comandos abaixo:

npm i
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev



Para MySQL/MariaDB as configurações são:

require('dotenv').config();

module.exports = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
}

Headers:

Content-Type	application/json; charset=utf-8
