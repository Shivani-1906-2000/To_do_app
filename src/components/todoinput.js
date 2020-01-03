import React, { Component } from 'react'

export default class todoinput extends Component {
        
    render() {
        const {item,HandleChange,handleSubmit,edititem}=this.props
        return (
            <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
            <div className="input-group">
            <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
            <i className="fa fa-book" aria-hidden="true"></i>
            </div>
            </div>
            <input type="text" className="form-control" placeholder="add item to the list" value={item} onChange={HandleChange}/>
            </div> 
            <input type="submit" className={edititem?"btn btn-block btn-primary mt-3":"btn btn-block btn-success mt-3"}
                    value={edititem?"edit item":"add item"} />
            </form>
            </div>
        )
    }
}
