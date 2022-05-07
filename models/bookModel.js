const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    price: Number,
    category: { type: String, require: true },
    image: { type: String, require: true },
    description: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const bookModel = mongoose.model("books", bookSchema);

module.exports = bookModel;
