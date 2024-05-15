const mongoose = require("mongoose");

const PorductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter a product"],
    },
    quantity: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    image: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const Porduct = mongoose.model("Product", PorductSchema);
module.exports = Porduct
