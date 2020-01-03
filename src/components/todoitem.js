import React, { Component } from 'react'
import { isTemplateElement } from '@babel/types'

export default class todoitem extends Component {
    render() {
        const {item,deleteitem,edititem}=this.props
        return (
            <div>
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2"> 
                <h6> {item} </h6>
                <div className="todoitem"> <span className="mx-2 text-success"> 
                <i className="fa fa-pencil" aria-hidden="true" onClick={edititem}></i>
                </span>
                <span className="mx-2 text-danger">
                    <i className="fa fa-trash" onClick={deleteitem}> </i>
                </span>
                 </div>
                 </li> 
            </div>
        )
    }
}
