import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import Afazerform from './afazerform'
import Afazerlist from './afazerlist'

export default class Afazer extends Component{
    constructor(props){
        super(props)
        this.state={description: '', list: []}
        this.handleChange=this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
    handleAdd(){
        console.log(this.state.description)
    }
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <Afazerform description={this.state.description}
                            handleChange={this.handleChange}
                            handleAdd={this.handleAdd} />
                <Afazerlist/>
            </div>
        )
    }
}