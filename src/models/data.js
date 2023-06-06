import { Schema, model } from "mongoose"

const schema = new Schema({
  
  cedula: {
    type: String,
    require: true
  },
  nombre: {
    type: String,
    require: true
  }
}, {
    timestamps: true
});

export default model('profes',schema)