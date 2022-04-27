
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poemaSchema = new Schema({
    titulo: String,
    texto: String,
    autor: String
})

// crear modelo
const Poema = mongoose.model('Poema', poemaSchema);

module.exports = Poema;