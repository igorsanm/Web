import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class TableRow extends Component {

    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this) 
    }

    apagar(){
        axios.delete('http://localhost:3002/alunos/delete/'+this.props.aluno._id) //express
        
        .then(res=>this.props.apagarElementoPorId(this.props.aluno._id))
        .catch(error=>console.log(error))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.aluno._id}
                </td>
                <td>
                    {this.props.aluno.nome}
                </td>
                <td>
                    {this.props.aluno.curso}
                </td>
                <td>
                    {this.props.aluno.IRA}
                </td>
                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/"+this.props.aluno._id} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button onClick={this.apagar} className="btn btn-danger">Apagar</button>
                </td>
            </tr>
        )
    }
}