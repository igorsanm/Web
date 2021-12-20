import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = { nome: '', curso: '', IRA: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIRA = this.setIRA.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3002/alunos/retrieve/'+this.props.match.params.id) //express
        
        .then((res)=>{
            this.setState({
                nome:res.data.nome,
                curso:res.data.curso,
                IRA:res.data.IRA
            })
        })
        .catch(error=>console.log(error))
    }

    setNome(a) {
        this.setState({ nome: a.target.value })
    }
    
    setCurso(a) {
        this.setState({ curso: a.target.value })
    }

    setIRA(a) {
        this.setState({ IRA: a.target.value })
    }

    onSubmit(a){
        a.preventDefault()
        
        const alunoEditado = {nome:this.state.nome, 
                                  curso:this.state.curso,
                                  IRA:this.state.IRA}
        axios.put('http://localhost:3002/alunos/update/'+this.props.match.params.id, alunoEditado) //express
        .then(
            (res)=>{
                this.props.history.push('/list');    
            }
        )
        .catch(error=>console.log(error))
        
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Editar Aluno</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control" 
                        value={this.state.nome} onChange={this.setNome}/>
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control" 
                        value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text" className="form-control" 
                        value={this.state.IRA} onChange={this.setIRA}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Editar Aluno" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}