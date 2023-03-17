const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    catagory: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    rate: {
      type: number,
      default: 0,
    },

    reviews: {
      type: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          comment: String,
          rate: number,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const model = mongoose("Movie", modelSchema);

module.exports = model;
