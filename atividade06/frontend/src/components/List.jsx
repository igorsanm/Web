import React, { Component } from 'react'
import axios from 'axios'

import TableRow from './TableRow'

export default class List extends Component {

    constructor(props){
        super(props)
        this.state = {alunos:[]}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3002/alunos/list') //express
        
        .then(
            (res)=>{

                this.setState({alunos:res.data})

            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    montarTabela(){
        if(!this.state.alunos) return
        return this.state.alunos.map(
            (al,i)=>{
                return <TableRow aluno={al} 
                                 key={i} 
                                 apagarElementoPorId={this.apagarElementoPorId}/>
            }
        )
    }

    apagarElementoPorId(id){
        let tempAlunos = this.state.alunos
        for(let i=0;i<tempAlunos.length;i++){
            if(tempAlunos[i]._id === id){
                tempAlunos.splice(i,1)
            } 
        }
        this.setState({alunos:tempAlunos})
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Listar Alunos</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>

                </table>


            </div>
        )
    }
}