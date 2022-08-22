const mongoose = require("mongoose");
const writeSchema = new mongoose.Schema({
  name: String,
  content: String,
});

module.exports = mongoose.model("writings", writeSchema);
