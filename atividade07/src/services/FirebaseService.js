export default class FirebaseService {

    static list = (firestore, callback) => {

        let ref = firestore.collection('alunos')
        ref.onSnapshot((query) => {
            let alunos = []

            query.forEach((doc) => {
                const { nome, curso, IRA } = doc.data()
                alunos.push({
                    _id: doc.id,
                    nome,
                    curso,
                    IRA
                })
            })
            callback(alunos)
        })

    }

    static delete = (firestore, callback, id) => {

        firestore.collection('alunos').doc(id).delete()
            .then(
                () => {
                    callback('ok')
                }
            )
            .catch(
                (error) => {
                    callback('error')
                }
            )
    }

    static create = (firestore, callback, aluno) => {

        firestore.collection('alunos').add(
            {
                nome: aluno.nome,
                curso: aluno.curso,
                IRA: aluno.IRA
            }
        )
            .then(
                () => {
                    callback('ok')
                }
            )
            .catch(
                (error) => {
                    callback('error')
                }
            )
    }

    static retrieve = (firestore, callback, id) => {

        firestore.collection('alunos').doc(id).get()
            .then((doc) => {
                const aluno = {
                    nome: doc.data().nome,
                    curso: doc.data().curso,
                    IRA: doc.data().IRA
                }
                callback(aluno)
            })
            .catch(error => callback(null))

    }

    static edit = (firestore, callback, id, aluno) => {

        firestore.collection('alunos').doc(id).set({
            nome: aluno.nome,
            curso: aluno.curso,
            IRA: aluno.IRA
        })
            .then(() => {
                callback('ok')
            })
            .catch(() => {
                callback('error')
            });
    }
}