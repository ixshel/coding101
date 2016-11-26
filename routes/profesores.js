var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://curso123:curso123@ds151697.mlab.com:51697/curso', ['profesores']); 

/* GET All profesores */
router.get('/profesores', function(req, res, next) {
    db.profesores.find(function(err, profesores) {
        if (err) {
            res.send(err);
        } else {
            res.json(profesores);
        }
    });
});

/* GET One profeesor with the provided ID */
router.get('/profesores/:id', function(req, res, next) {
    db.profesores.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, profesores) {
        if (err) {
            res.send(err);
        } else {
            res.json(profesores);
        }
    });
});

/* POST/SAVE a assistant */
router.post('/newProfesor', function(req, res, next) {
    var profesor = req.body;
    if (!profesor.name) {
        res.status(400);
        res.json({
            "error": "Invalid Data",
            'profesor': profesor
        });
    } else {
        db.profesores.save(profesor, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});

/* PUT/UPDATE a profeesor */
router.put('/edit/:id', function(req, res, next) {
    var profeesor = req.body;
    
    var updObj = {};
    if (profeesor.isHere) {
        updObj.isHere = profeesor.isHere;
    }
    if (profeesor.name) {
        updObj.name = profeesor.name;
    }
    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.profesores.update({
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
    db.profesores.remove({
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