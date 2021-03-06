import React, {Component} from 'react';
import TodoItem from "./TodoItem";

export default class Todolist extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit,editItem} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo Lists</h3>
                {items.map(item =>{
                    return <TodoItem key={item.id}
                                  title={item.title}
                                  handleDelete={()=> handleDelete(item.id)}
                                  handleEdit = {()=> handleEdit(item.id)}
                                  editItem = {()=> editItem}
                        />;
                })}



                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5"
                onClick={clearList}>Clear List</button>

            </ul>
        );
    }
}

