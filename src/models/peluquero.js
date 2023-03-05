import mongoose from 'mongoose';
const { Schema, model, types } = mongoose;

const usuarioSchema = new Schema({
  nombre : {type: String, require: true},
  horario : {type: Date, require: true},
  precio : {type: Number, require: true},
  valoracion : {type: Number, require: true},
});

module.exports = model('Peluquero', usuarioSchema);