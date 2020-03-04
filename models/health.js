const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
  }, {
    timestamps: true
  });

const healthSchema = new Schema({
    name: String,
    address: String,
    type: String,
    description: String,
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Health', healthSchema);