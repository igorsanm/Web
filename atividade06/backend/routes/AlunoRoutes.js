var express = require('express');
var router = express.Router();
var AlunoService = require('../services/AlunoService')

router.get('/list', function (req, res, next) {
    AlunoService.list(req, res);
});
router.post('/register', function (req, res, next) {
    AlunoService.register(req, res);
});

router.put('/update/:id', function (req, res, next) {
    AlunoService.update(req, res);
});

router.delete('/delete/:id', function (req, res, next) {
    AlunoService.delete(req, res);
});

router.get('/retrieve/:id', function (req, res, next) {
    AlunoService.retrieve(req, res);
});

module.exports = router