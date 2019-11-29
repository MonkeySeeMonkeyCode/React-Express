var Note = require('../models/note');
var User = require('../models/user');

var async = require('async');
const validator = require('express-validator');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');

exports.first = function(req,res) {

    Note.find({},'summary')
    // .populate('createdby')
    .exec(function (err, list_note) {
        if (err) {
            res.json();
        }
        // successful so send list of notes
        // let notesJSON = JSON.stringify(list_note);
        // res.json(notesJSON);
        res.json(list_note);
        }
    )
};
