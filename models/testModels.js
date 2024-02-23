import { Schema, model, models } from 'mongoose';

const testSchema = new Schema({
  name: String,
  age: Number,
  message: String,
});

const Test = models.Users || model('Users', testSchema);

export default Test;