import React, { Component } from 'react'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const EditPage = (props) => (
    <FirebaseContext.Consumer>
        {contexto => <Edit firebase={contexto} id={props.match.params.id}/>}
    </FirebaseContext.Consumer>
)

class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = { nome: '', curso: '', IRA: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIRA = this.setIRA.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        FirebaseService.retrieve(this.props.firebase.getFirestore(),
            (aluno) => {
                if (aluno)
                    this.setState({
                        nome: aluno.nome,
                        curso: aluno.curso,
                        IRA: aluno.IRA
                    })
            },
            this.props.id
        )
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
        FirebaseService.edit(
            this.props.firebase.getFirestore(),
            (mensagem) => {
                console.log(mensagem)
            },
            this.props.id,
            {
                nome: this.state.nome,
                curso: this.state.curso,
                IRA: this.state.IRA
            }
        )
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
export default EditPage;