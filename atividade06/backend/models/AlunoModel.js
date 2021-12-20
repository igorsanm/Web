var mongoose = require('mongoose');

var AlunoSchema = mongoose.Schema(
    {
        nome: { type: String, required: true, max: 150 },
        curso: { type: String, required: true, max: 100 },
        IRA: { type: Number, required: true },
    }
);

var AlunoModel = mongoose.model('alunos', AlunoSchema);

module.exports = AlunoModel;required: true