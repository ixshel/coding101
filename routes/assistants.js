var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
// var db = mongojs('mongodb://localhost:27017/curso', ['assistants']);
var db = mongojs('mongodb://curso123:curso123@ds151697.mlab.com:51697/curso', ['assistants']);
// var db = mongojs('mongodb://meancourse:demo@ds149557.mlab.com:49557/course', ['Professor']);

/* GET All assistants */
router.get('/assistants', function(req, res, next) {
    db.assistants.find(function(err, assistants) {
        if (err) {
            res.send(err);
        } else {
            res.json(assistants);
        }
    });
});

/* GET One assistants with the provided ID */
router.get('/assistants/:id', function(req, res, next) {
    db.assistants.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, assistants) {
        if (err) {
            res.send(err);
        } else {
            res.json(assistants);
        }
    });
});

/* POST/SAVE a assistant */
router.post('/assistants', function(req, res, next) {
    var assistant = req.body;
    if (!assistant.name) {
        res.status(400);
        res.json({
            "error": "Invalid Data",
            'assistant': assistant
        });
    } else {
        db.assistants.save(assistant, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});

/* PUT/UPDATE a assistant */
router.put('/edit/:id', function(req, res, next) {
    var assistants = req.body;
    
    var updObj = {};
    if (assistants.isHere) {
        updObj.isHere = assistants.isHere;
    }
    if (assistants.name) {
        updObj.name = assistants.name;
    }
    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.assistants.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});

/* DELETE an assistant */
router.delete('/delete/:id', function(req, res) {
    db.assistants.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;