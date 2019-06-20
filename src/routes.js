const express = require('express');
const routes = express.Router();

//Chamando a Controller
const ProductController = require('./controllers/ProductController');

//Rotas 
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

//Exportando
module.exports = routes;