const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://niki123:niki123@cluster0.9ruu2.mongodb.net/student?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;