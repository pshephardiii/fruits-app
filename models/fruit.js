const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
  name: { type: String, require: true },
  color: { type: String, require: true },
  readyToEat: Boolean
})

const Fruit = mongoose.model('Fruit', fruitSchema) // make sure you write 'Fruit' with upper case and in singular tense!

module.exports = Fruit