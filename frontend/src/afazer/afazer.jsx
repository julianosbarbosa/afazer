import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import Afazerform from './afazerform'
import Afazerlist from './afazerlist'

export default class Afazer extends Component{
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <Afazerform/>
                <Afazerlist/>
            </div>
        )
    }
}