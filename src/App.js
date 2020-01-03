import React, { Component } from 'react';
import Todoinput from './components/todoinput';
import Todolist from './components/todolist.js';
import uuid from 'uuid'

export default class App extends Component {
    state={items:[],
        id:0,
        item:'',
        edititem:false}

    HandleChange = e =>
    {
        this.setState({item:e.target.value})
    }

    handleSubmit = e =>
    {
        e.preventDefault();
        const newitem={id:this.state.id,
        item:this.state.item}

        const updateditems=[...this.state.items,newitem]
        this.setState({items:updateditems,
        item:'',
        id:uuid(),
        edititem:false})
    }

    clearList = e =>
    {
        this.setState({items:[]})
    }

    deleteItem=(id)=>
    {
       const sorteditems=this.state.items.filter(item=>item.id!=id);
       this.setState({
           items:sorteditems
       });
    }

    handleEdit=(id)=>
    {
        const sorteditems=this.state.items.filter(item=>item.id!=id);
        this.setState({
           items:sorteditems,
           edititem:true
       });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-4 col-10 mx-auto">
                        <h3 className="text-capitalize text-center">
                        <Todoinput HandleChange={this.HandleChange} item={this.item} handleSubmit={this.handleSubmit} 
                                edititem={this.state.edititem}/>
                        <Todolist items={this.state.items} clearlist={this.clearList} deleteitem={this.deleteItem} 
                                  edititem={this.handleEdit} />
                        </h3>
                        </div>
                        </div>
            </div>
        )
    }
}

