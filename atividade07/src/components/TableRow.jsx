import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FirebaseService from '../services/FirebaseService'

export default class TableRow extends Component {

    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this) 
    }

    apagar(id,nome){
        
        let res = window.confirm(`Deseja apagar ${nome}?`)
        if (res) {
            FirebaseService.delete(this.props.firebase.getFirestore(),
                (mensagem) => {
                    console.log(mensagem)
                }, id)
        }
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
                    <button onClick={()=> this.apagar(this.props.aluno._id,
                                                      this.props.aluno.nome)
                        } className="btn btn-danger">Apagar</button>
                </td>
            </tr>
        )
    }
}