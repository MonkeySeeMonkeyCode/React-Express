var Note = require('../models/note');
var User = require('../models/user');

var async = require('async');
const validator = require('express-validator');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');

exports.allNotes = function(req,res) {

    Note.find({},'summary')
    .populate('createdby')
    .exec(function (err, list_note) {
        if (err) {
            res.json(err); // need to figure out how to handle errors
        }
        else { 
            // successful so send list of notes
            res.json(list_note);
        }
    })
};

exports.allUsers = (req,res) => {

    User.find({},'name')
    .exec((err, list_user) => {
        if (err) {
            res.json(err); // need to figure out how to handle errors
        }
        else {
            // successful so send list of users
            res.json(list_user);
        }
    })
};