var express = require('express');
var router = express.Router();

var AlunoService = require('../services/AlunoService')

router.get('/list', function(req,res,next){
    res.json(AlunoService.list())
})

router.post('/register', function(req,res,next){
    res.json(AlunoService.register(req.body))
})

router.put('/update/:id', function(req,res,next){
    const aluno = AlunoService.update(req.params.id, req.body);
    return res.json(aluno);
})

router.delete('/delete/:id', function(req,res,next){
    const ok = AlunoService.delete(req.params.id);
    if(ok) return res.json({"sucess": true});
    else return res.json({"sucess": false});
})

router.get('/retrieve/:id', function(req,res,next){
    const ok = AlunoService.retrieve(req.params.id);
    return res.json(aluno);
})

module.exports = router