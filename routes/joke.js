const controller = require("../controllers/controller");
const express = require('express');
const router = express.Router();

router
    .get('/', function (req, res) {
        controller.getJokes()
            .then(function (val) {
                res.json(val);
            })
            .catch(function (err) {
                console.error("Error: " err)
                if (err.stack) console.error(err.stack);
                res.status(500).send(err);
            });
    })

    .post('/', function (req, res) {
        controller.createJoke(req.body.name, req.body.hours)
            .then(function () {
                res.json({message: 'Halløj'})
            })
            .catch(function (err) {
                console.error("Error: " + err);
                if (err.stack) console.error(err.stack);
                res.status(500).send(err);
            })
    })

module.exports = router;