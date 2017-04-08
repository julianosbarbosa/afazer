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
        this.handleSearch=this.handleSearch.bind(this)
        this.handleClear=this.handleClear.bind(this)

        this.handleMarckAsDone=this.handleMarckAsDone.bind(this)
        this.handleMarckAsPending=this.handleMarckAsPending.bind(this)
        this.handleRemove=this.handleRemove.bind(this)
        this.refresh()

    }
    refresh(description=''){
        const search = description ? `&description__regex=/${description}/`:''
        axios.get(`${URL}?sort=-createAt${search}`)
        .then(resp => this.setState({...this.state, description, list: resp.data}))
    }
    handleSearch(){
        this.refresh(this.state.description)
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
            .then(resp=>this.refresh(this.state.description))
    }
    handleMarckAsDone(afazer){
        axios.put(`${URL}/${afazer._id}`,{...afazer, done:true})
            .then(resp=>this.refresh(this.state.description))
    }
    handleMarckAsPending(afazer){
        axios.put(`${URL}/${afazer._id}`,{...afazer, done:false})
            .then(resp=>this.refresh(this.state.description))
    }
    handleClear(){
        this.refresh()
    }
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <Afazerform description={this.state.description}
                            handleChange={this.handleChange}
                            handleAdd={this.handleAdd}
                            handleSearch={this.handleSearch}
                            handleClear={this.handleClear} />
                <Afazerlist list={this.state.list}
                            handleMarckAsDone={this.handleMarckAsDone}
                            handleMarckAsPending={this.handleMarckAsPending} 
                            handleRemove={this.handleRemove}/>
            </div>
        )
    }
}