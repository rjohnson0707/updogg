var Food = require('../models/food');

module.exports = {
    create
};

function create(req, res) {
    Food.findById(req.params.id, function(err, food) {
        food.reviews.push(req.body);
        food.save(function(err) {
            res.redirect(`/foods/${food._id}`);
        });
    });
}