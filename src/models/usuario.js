import mongoose from 'mongoose';
const { Schema, model, types } = mongoose;

const usuarioSchema = new Schema({
  alias: { type: String, require: true, unique: true },
  nombre: { type: String, require: true },
  password: { type: String, require: true },
  reserva: { type: types.ObjectId, ref: 'Reserva' },
  historial: [{ type: types.ObjectId, ref: 'Reserva' }],
});

module.exports = model('Usuario', usuarioSchema);