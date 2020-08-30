const express   = require('express');
var router      = express.Router();
var ObjectId    = require('mongoose').Types.ObjectId;
var passport = require('passport');

var { Student } = require('../models/student');

// => localhost:3000/students/
router.get('/', (req, res) => {
    Student.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Students :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Student.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Student :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var st = new Student({
        enroll            : req.body.enroll,
        name              : req.body.name,
        dept              : req.body.dept,
        year_of_admission : req.body.year_of_admission,
        city              : req.body.city,
        gender            : req.body.gender,
        contact_no        : req.body.contact_no,
        email             : req.body.email,
        address           : req.body.address,
    });
    st.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Student Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var st = {
       enroll            : req.body.enroll,
       name              : req.body.name,
       dept              : req.body.dept,
       year_of_admission : req.body.year_of_admission,
       city              : req.body.city,
       gender            : req.body.gender,
       contact_no        : req.body.contact_no,
       email             : req.body.email,
       address           : req.body.address,
    };
    Student.findByIdAndUpdate(req.params.id, { $set: st }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Student Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Student Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;