import mongoose from 'mongoose';
const { Schema, model, types } = mongoose;

const usuarioSchema = new Schema({
  fecha : {type: Date, require: true},
  trabajo : {type: String, require: true},
  usuario: { type: Types.ObjectId, ref: "User"},
  peluquero: { type: Types.ObjectId, ref: "Peluquero"},
});

module.exports = model('Reserva', usuarioSchema);