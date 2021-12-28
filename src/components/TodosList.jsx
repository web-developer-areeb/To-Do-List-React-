import React from "react";
import { Link } from "react-router-dom";
import '../css/TodosList.css';

class Todos extends React.Component {


    renderList(todos) {
        return todos.map((todo, index) => {
            return (
                <div key={todo.id} className="todo__container" >
                    <div className="todo__title">
                        {todo.title}
                    </div>
                    <div className="todo__description" >
                        {todo.description}
                    </div>
                    <div className="todo__action">
                        <Link to="/edit" className="todo__edit">
                            <button className="btn btn-edit"
                                onClick={() => this.props.onEditClick(index)}
                            >Edit</button>
                        </Link>
                        <Link to="/">
                            <button
                                className="btn btn-delete"
                                onClick={() => this.props.onDelete(index)}
                            >Delete</button>
                        </Link>
                    </div>
                </div >
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