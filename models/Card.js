const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    get: value => value.toUpperCase()
  },
  description: String,
  tags: [String],
  bookmarked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Card", cardSchema);

//hier ist backend
// das gibt das schema vor das der Title ein string sein soll, weil es auch aus string rein gegebn wird von dem user und das er automatisch großgeschrieben wird
