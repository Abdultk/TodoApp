import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Todoinput extends Component {

    render() {
        const {item,handleChange, handleSubmit,editItem} = this.props;
        return (
            <div className="card card-body my-3">
               <form onSubmit={handleSubmit}>
                   <div className="input-group">
                       <div className="input-group-prepend">
                           <div className="input-group-text bg-primary text-white">
                               <i className="fa fa-book"/>

                           </div>

                       </div>
                       <input type="text" className="form-control text-capitalize" placeholder="Add a Todo List" value={item}
                         onChange={handleChange}
                       />
                   </div>
                   <button type="submit" className={ editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>
                       {editItem ? "Update Item":"Add Item"}</button>
               </form>
            </div>
        );
    }
}

