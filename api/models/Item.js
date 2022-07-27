var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: String,
  price: String,
});

export const Item = mongoose.model("Item", ItemSchema);