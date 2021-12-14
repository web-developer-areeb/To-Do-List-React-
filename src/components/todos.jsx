import React from "react";
import '../css/Todos.css';

class Todos extends React.Component {

    renderList(todos) {
        return todos.map(todo => {
            return (
                <div key={todo.id} className="todo__container" >
                    <div className="todo__title">
                        {todo.title}
                    </div>
                    <div className="todo__description">
                        {todo.description}
                    </div>
                    <div className="todo__action">
                        <button className="btn btn-edit">Edit</button>
                        <button className="btn btn-delete">Delete</button>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                {this.renderList(this.props.todoItems)}
            </div>
        );
    }
}

export default Todos;