import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import Afazerform from './afazerform'
import Afazerlist from './afazerlist'

const URL='http://localhost:3003/api/afazeres'

export default class Afazer extends Component{
    constructor(props){
        super(props)
        this.state={description: '', list: []}

        this.handleChange=this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
        this.handleRemove=this.handleRemove.bind(this)
        this.refresh()

    }
    refresh(){
        axios.get(`${URL}?sort=-createAt`)
        .then(resp => this.setState({...this.state, description: '',list: resp.data}))
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value })
    }
    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp=>this.refresh())
    }
    handleRemove(afazer){
        axios.delete(`${URL}/${afazer._id}`)
            .then(resp=>this.refresh())
    }
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <Afazerform description={this.state.description}
                            handleChange={this.handleChange}
                            handleAdd={this.handleAdd} />
                <Afazerlist list={this.state.list} 
                            handleRemove={this.handleRemove}/>
            </div>
        )
    }
}