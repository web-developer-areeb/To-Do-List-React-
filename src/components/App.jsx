import React, { useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';

import '../css/App.css';
import Home from '../pages/Home';
import EditTodo from '../pages/EditTodo';


///////////////////////// FUNCTION BASED APPROACH ///////////////

const App = () => {

    const [todos, setTodos] = useState([]);
    const [nextId, setNextId] = useState(1);
    const [editTodoIndex, setEditTodoIndex] = useState(-1);
    const navigate = useNavigate();


    const onFormSubmit = (formValues) => {

        const updatedTodos = [
            {
                id: nextId,
                title: formValues.title,
                description: formValues.description,
                status: formValues.status
            }, ...todos];
        const updatedId = nextId + 1;

        setTodos(updatedTodos);
        setNextId(updatedId);
    }

    const onDelete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);

        setTodos(updatedTodos);
    }

    const onEditClick = (index) => {
        setEditTodoIndex(index)
    }

    const todo = todos[editTodoIndex];

    const onEdit = (title, description) => {
        const index = editTodoIndex;
        const updatedTodo = { ...todos[index], title: title, description: description };


        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1, updatedTodo);

        setTodos([...updatedTodos]);
        navigate("/");
    }

    const handleTodoStatus = (index) => {
        const newStatus = todos[index].status === 'todo-incomplete' ? 'todo-completed' : 'todo-incomplete';
        let updatedTodo = todos[index];
        updatedTodo.status = newStatus;
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1, updatedTodo);
        setTodos([...updatedTodos]);
    }

    return (
        <div className='container'>
            <div className="header">
                <h1 >Todo App</h1>
            </div>

            <Routes >
                <Route path="/" exact element={<Home
                    onFormSubmit={onFormSubmit}
                    todoItems={todos}
                    onDelete={onDelete}
                    onEditClick={onEditClick}
                    handleTodoStatus={handleTodoStatus}
                />}
                />
                <Route path="/edit" exact element={<EditTodo
                    todo={todo}
                    onEdit={onEdit}
                />}
                />
            </Routes>

        </div>
    );
};

////////////////////////// CLASS BASED APPROACH ///////////////////////

// class App extends React.Component {
//     state = {
//         todos: [
//             {
//                 id: 1,
//                 title: 'Test todo 1',
//                 description: 'This is the description of first todo. Do you like it or not. It looks preety awesome.'
//             },
//             {
//                 id: 2,
//                 title: 'Test todo 2',
//                 description: 'This is the description of second todo. Do you like it or not. It looks preety awesome.'
//             }
//         ],
//         nextId: 3,
//         editTodoIndex: -1
//     }

//     onFormSubmit = (formValues) => {

//         this.setState({
//             todos: [
//                 {
//                     id: this.state.nextId,
//                     title: formValues.title,
//                     description: formValues.description
//                 }, ...this.state.todos],
//             nextId: this.state.nextId + 1
//         });
//     }

//     onDelete = (index) => {
//         const updatedTodos = [...this.state.todos];
//         updatedTodos.splice(index, 1);
//         this.setState({
//             todos: updatedTodos
//         });
//     }

//     onEditClick = (index) => {
//         this.setState({ editTodoIndex: index })
//     }

//     todo() {
//         return this.state.todos[this.state.editTodoIndex];
//     }

//     onEdit = ({ title, description }) => {
//         const index = this.state.editTodoIndex;
//         const updatedTodo = { ...this.state.todos[index], title: title, description: description }

//         const updatedTodos = [...this.state.todos];
//         updatedTodos.splice(index, 1, updatedTodo);
//         this.setState({
//             todos: updatedTodos
//         });

//         // Not working
//         // <Navigate to="/" />
//     }


//     render() {
//         return (
//             <div className='container'>
//                 <div className="header">
//                     <h1 >To Do List</h1>
//                 </div>

//                 <Routes >
//                     <Route path="/" exact element={<Home
//                         onFormSubmit={this.onFormSubmit}
//                         todoItems={this.state.todos}
//                         onDelete={this.onDelete}
//                         onEditClick={this.onEditClick}
//                     />}
//                     />
//                     <Route path="/edit" exact element={<EditTodo
//                         onEdit={this.onEdit}
//                         todo={this.todo()}
//                     />}
//                     />
//                 </Routes>

//             </div>
//         );
//     };
// };



export default App;