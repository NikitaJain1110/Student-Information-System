const mongoose = require('mongoose');

var Student = mongoose.model('Student', {
    enroll            : {type: String},
    name              : {type: String},
    dept              : {type: String},
    year_of_admission : {type: Number},
    city              : {type: String},
    gender            : {type: String},
    contact_no        : {type: Number},
    email             : {type: String},
    address           : {type: String},
});

module.exports = { Student };