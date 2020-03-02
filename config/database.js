var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', function() {
    console.log(`Mongoose Connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;