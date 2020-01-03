import React, { Component } from 'react';
import Todoitem from './todoitem';

export default class todolist extends Component {
    render() {
        const {items, clearlist, deleteitem, edititem}=this.props
        return (
            <div>
                <ul className="list-group my-5"> 
                <h3 className="text-capitalize text-center">
                    Todo List
                     </h3>
                     {items.map((title)=><Todoitem item={title.item} deleteitem={()=>deleteitem(title.id)} 
                                                   edititem={()=>edititem(title.id)}/>)}
                     <button type="button" className="btn btn-block btn-danger text-capitalize mt-5" onClick={clearlist}> 
                     Clear List
                     </button>
                 </ul>
            </div>
        )
    }
}
