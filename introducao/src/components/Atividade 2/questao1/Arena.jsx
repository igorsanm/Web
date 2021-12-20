import React, { Component } from "react"
import Hero from "./Hero"
import Enemy from "./Enemy"
import { IMG_ENEMY, IMG_HEROI, NOME_ENEMY, NOME_HEROI } from "../../../strings"

 

class Arena extends Component {
    render(){

        return(
            <div>
                <Hero name = {NOME_HEROI} img = {IMG_HEROI}/>
                <Enemy name = {NOME_ENEMY} img = {IMG_ENEMY} />
            </div>

        )

    }


}
export default Arena