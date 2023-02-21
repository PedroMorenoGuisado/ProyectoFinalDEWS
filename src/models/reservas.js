import mongoose from 'mongoose';
const { Schema, model, types } = mongoose;

const usuarioSchema = new Schema({
  fecha : {type: Date, require: true},
  trabajo : {type: String, require: true},
});

module.exports = model('Usuario', usuarioSchema);