var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
// var db = mongojs('mongodb://localhost:27017/curso', ['assistants']);
var db = mongojs('mongodb://curso123:curso123@ds151697.mlab.com:51697/curso', ['assistants']);

/* GET All assistants */
router.get('/assistants', function (req, res, next) {
    db.assistants.find(function (err, assistants) {
        if (err) {
            res.send(err);
        } else {
            res.json(assistants);
        }
    });
});

/* GET One assisntant with the provided ID */
router.get('/assistant/:id', function (req, res, next) {
    db.assistants.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, assistants) {
        if (err) {
            res.send(err);
        } else {
            res.json(assistants);
        }
    });
});

/* POST/SAVE a assistant */
router.post('/newAssistant', function (req, res, next) {
    var assistant = req.body;
    if (!assistant.name) {
        res.status(400);
        res.json({
            "error": "Invalid Data",
            'assistant': assistant
        });
    } else {
        db.assistants.save(assistant, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});

/* PUT/UPDATE a assisntant */
router.put('/edit/', function (req, res, next) {
    console.log('new data', req.body);
    var newData = {
        name: req.body.name,
        lastname: req.body.lastname,
        course: req.body.course
    }
    db.assistants.update({
        _id: mongojs.ObjectId(req.body._id)
    }, newData, {}, function (err, result) {
        if (err) {
            console.log('err', err)
        } else {
            console.log('updated...');
            res.json(result);
        }
    })
});

/* DELETE an assistant */
router.delete('/delete/:id', function (req, res) {
    db.assistants.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;