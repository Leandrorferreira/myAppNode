const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    //Buscar todos os produtos
    async index(req, res){ 
        //req.query são os dados via GET           
        const { page = 1 } = req.query;

        const products = await Product.paginate({}, { page, limit: 10});

        return res.json(products);
    },

    //Buscar um Produto por Id
    async show(req, res){
        //req.params são os dados passados na url
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    //Cadastrar novo Produto
    async store(req, res){
        //req.body é para o corpo da requisição
        const product = await Product.create(req.body);
        //Retorna o produto recem criado
        return res.json(product); 
    },

    //Alterar dados do Produto
    async update(req, res){
        //O parametro new: true diz para retornar o produto com os dados atualizados
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.json(product);
    },

    //Excuir produto
    async destroy(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);

        //Retorna sucesso
        return res.send();
    },
}