import React from "react";
import { Link } from "react-router-dom";
import '../css/TodosList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

class Todos extends React.Component {


    renderList(todos) {
        return todos.map((todo, index) => {
            return (
                <div key={todo.id} className="todo__container" >
                    <div className="todo__item">
                        <div className="todo__content" >
                            <div className="todo__title">
                                {todo.title}
                            </div>
                            <div className="todo__description" >
                                {todo.description}
                            </div>
                        </div>
                        <div className="todo__action">
                            <Link to="/edit" className="icon todo__edit">
                                <FontAwesomeIcon icon={faEdit} onClick={() => this.props.onEditClick(index)} />
                            </Link>
                            <Link to="/" className="icon todo__delete">
                                <FontAwesomeIcon icon={faTrash} onClick={() => this.props.onDelete(index)} />
                            </Link>
                        </div>
                    </div>
                    <div className="icon todo__done" onClick={() => this.props.handleTodoStatus(index)} >
                        <FontAwesomeIcon className={todo.status} icon={faCheck} />
                        {todo.todoStatus}
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