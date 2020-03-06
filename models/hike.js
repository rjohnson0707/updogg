const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: String,
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
  }, {
    timestamps: true
  });

const hikeSchema = new Schema({
    createdBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    name: String,
    address: String,
    description: String,
    leash: String,
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Hike', hikeSchema);