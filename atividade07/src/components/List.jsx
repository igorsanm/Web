import React, { Component } from 'react'
import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const ListPage = () => (
    <FirebaseContext.Consumer>
        {contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

class List extends Component {

    constructor(props) {
        super(props)

        this._isMounted = false

        this.state = { alunos: [], loading: false }
    }

    componentDidMount() {
        this._isMounted = true
        this.setState({ loading: true })

        FirebaseService.list(this.props.firebase.getFirestore(),
            (alunos) => {
                this._isMounted && this.setState({ alunos: alunos, loading: false })
            })
    }

    componentWillUnmount() {
        this._isMounted = false
    }


    montarTabela() {
        if (!this.state.alunos) return
        return this.state.alunos.map(
            (al, i) => {
                return <TableRow aluno={al}
                    key={i}
                    firebase={this.props.firebase} />
            }
        )
    }

    loadingSpinner() {
        return (
            <tr style={{ backgroundColor: '#fff' }}>
                <td colSpan='6'>
                    <div className="text-center">

                        <div className="spinner-border ml-auto"
                            role="status"
                            aria-hidden="true"
                            style={{ width: '3rem', height: '3rem' }}></div><br />
                        <strong>Loading...</strong>
                    </div>
                </td>
            </tr>
        )
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
export default ListPage;