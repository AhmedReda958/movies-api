const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    wachList: [
      {
        movie: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Movie",
        },
        watched: Boolean,
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const model = mongoose("User", modelSchema);

module.exports = model;
