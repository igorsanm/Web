
import React, {Component} from "react";

const cidadesStr = ['Fortaleza', 'Quixadá', 'Russas', 'Itapipoca']

export default class VotacaoCidades extends Component{

    constructor(props) {
        super(props);
        this.state = { fort: 0, quix: 0, russ: 0, itap: 0, maior: 0, menor: 0}
    }


    componentDidUpdate(prevProps, prevState){

        if( prevState.fort !== this.state.fort ||
            prevState.quix !== this.state.quix ||
            prevState.russ !== this.state.russ ||
            prevState.itap !== this.state.itap){

                const cidades = [this.state.fort, this.state.quix, this.state.russ, this.state.itap]
                let localMaior = this.state.maior
                let contador = this.state.cont

                for (let i = 0; i < cidades.length; i++){
                    if (cidades[i] > localMaior)
                        localMaior = cidades[i]

                }
                
                this.setState ({maior: localMaior})


                let localMenor = this.state.maior
                for (let i = 0; i < cidades.length; i++){
                    if (cidades[i] < localMenor)
                        localMenor = cidades[i]    

                }
                this.setState ({menor: localMenor})

            }

    }

    maisVotadas(){
        let saida = ''
        const cidades = [this.state.fort, this.state.quix, this.state.russ, this.state.itap]
        for (let i=0; i < cidades.length; i++){
            if(cidades[i]===this.state.maior) saida+=cidadesStr[i]+' '
        }
        return saida 
    }

    menosVotadas(){
        let saida = ''
        const cidades = [this.state.fort, this.state.quix, this.state.russ, this.state.itap]
        for (let i=0; i < cidades.length; i++){
            if(cidades[i]===this.state.menor) saida+=cidadesStr[i]+' '
        }
        return saida 
    }


    render(){
   
        return(
            <div>
                <h2>Fortaleza: {this.state.fort}</h2>
                <h2>Quixadá: {this.state.quix}</h2>
                <h2>Russas: {this.state.russ}</h2>
                <h2>Itapipoca: {this.state.itap}</h2>
                <h4>Maior: {this.state.maior} : {this.maisVotadas()}</h4>
                <h4>Menor: {this.state.menor} : {this.menosVotadas()}</h4>
                <h4>Total de votos: {this.state.fort + this.state.quix + this.state.russ + this.state.itap}</h4>
                <button onClick={ ()=> this.setState( {fort: this.state.fort +1})} >Votar em Fortaleza</button>
                <button onClick={ ()=> this.setState( {quix: this.state.quix +1})} >Votar em Quixadá</button>
                <button onClick={ ()=> this.setState( {russ: this.state.russ +1})} >Votar em Russas</button>
                <button onClick={ ()=> this.setState( {itap: this.state.itap +1})} >Votar em Itapipoca</button>
            </div>
        )
    }

}