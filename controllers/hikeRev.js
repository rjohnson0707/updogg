var Hike = require('../models/hike');

module.exports = {
    create
};

function create(req, res) {
    Hike.findById(req.params.id, function(err, hike) {
        hike.reviews.push(req.body);
        hike.save(function(err) {
            res.redirect(`/hikes/${hike._id}`);
        });
    });
}