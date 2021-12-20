const AlunoModel = require('../models/AlunoModel')

let alunos = [
    {_id:0,nome:'Fulano',curso:'ES',IRA:5.6},
    {_id:1,nome:'Sicrano',curso:'ES',IRA:5.6},
    {_id:2,nome:'Beltrano',curso:'ES',IRA:5.6}
]
let _id = 3

class AlunoService{

    static register(data){
        let aluno = new AlunoModel(
            _id++,
            data.nome,
            data.curso,
            data.IRA

        )
        alunos.push(aluno)
        return aluno
    }

    static list(){
        return alunos;
    }

    static update(_id,data){
        for(let a of alunos){ 
            if(a._id == _id){
                a.nome = data.nome
                a.curso = data.curso
                a.IRA = data.IRA
                return a
            }
        }
        return null
    }

    static delete(_id){
        for(let i=0;i<alunos.length;i++){
            if(alunos[i]._id == _id){
                alunos.splice(i,1)
                return true
            }
        }
        return false
    }

    static retrieve(_id){
        for(let i=0;i<alunos.length;i++){
            if(alunos[i]._id == _id){
                return alunos[i]
            }
        }
        return {}
    }

}

module.exports = AlunoService