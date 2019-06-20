//Importa o express
const express = require('express');
//Importar o CORS para permitir que a API seja acessada de outros dominios
const cors = require('cors');
//Importar o ORM
const mongoose = require('mongoose');
//Importar require-dir
const requireDir = require('require-dir');

//Iniciando o App
const app = express();

//Permitir enviar dados via JSON para aplicação
app.use(express.json());

//Permitir acesso a outros dominios (Web) e não apenas local
app.use(cors());

//Iniciando o Database
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true }
);

//Chamando a Model Product
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

//Ouvir nossa aplicação na porta 3001 do navegador
app.listen(3001);