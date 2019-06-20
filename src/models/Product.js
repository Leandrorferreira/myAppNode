const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },   
});

//Paginação de dados
ProductSchema.plugin(mongoosePaginate);

//Registrar a Model na aplicação
mongoose.model('Product', ProductSchema);