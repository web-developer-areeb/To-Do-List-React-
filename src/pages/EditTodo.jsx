import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const EditTodo = ({ todo, onEdit }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [valid, setValid] = useState('inactive');


    const navigate = useNavigate();

    useEffect(() => {
        if (todo === undefined) {
            navigate("/");
            return;
        }
        setTitle(todo.title);
        setDescription(todo.description);
    }, [todo, navigate]);


    const onSubmit = (event) => {
        event.preventDefault();
        if (title === null || title.match(/^ *$/) !== null) {
            setValid('active')
        } else {
            onEdit(title, description);
        }
    }

    // const onEnter = (event) => {
    //     if (event.key === 'Enter') {
    //         onSubmit(event);
    //     }
    // }

    return (
        <div className="form__container">
            <form>
                <div className="form__title">
                    <label>Enter Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <span
                        className={`form__warn-msg-${valid}`}
                    >
                        Title can not be left blank
                    </span>
                </div>
                <div className="form__description">
                    <label>Enter Description <i className="italic-light">(optional)</i> :</label>
                    <textarea
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    // onKeyUp={e => onEnter(e)}
                    />
                </div>
                <button className="btn btn-submit" onClick={(e) => onSubmit(e)}>Update</button>
            </form>
        </div>
    )
};

export default EditTodo;




////////////////  Navigate is not working properly. react-router-dom version 6   ////////////////



// import { Navigate } from 'react-router-dom';

// class EditTodo extends React.Component {

//     state = {
//         title: '',
//         description: ''
//     }

//     componentDidMount() {
//         if (this.props.todo === undefined) {
//             <div>
//                 <Navigate to="/" replace={true} />
//             </div>
//         } else {
//             const title = this.props.todo.title;
//             const description = this.props.todo.description;

//             this.setState({ title: title, description: description });
//         }
//     }


//     onSubmit = (event) => {
//         event.preventDefault();
//         this.props.onEdit(this.state);
//     }

//     onTitleChange = (event) => {
//         this.setState({ title: event.target.value });
//     }

//     onDescriptionChange = (event) => {
//         this.setState({ description: event.target.value });
//     }

//     onEnter = (event) => {
//         if (event.key === 'Enter') {
//             this.onSubmit(event);
//         }
//     }


//     render() {
//         return (
//             <div className="form__container">
//                 <form>
//                     <div className="form__title">
//                         <label>Enter Title:</label>
//                         <input
//                             type="text"
//                             onChange={this.onTitleChange}
//                             value={this.state.title}
//                         />
//                     </div>
//                     <div className="form__description">
//                         <label>Enter Description:</label>
//                         <textarea
//                             onChange={this.onDescriptionChange}
//                             value={this.state.description}
//                             onKeyUp={this.onEnter}
//                         />
//                     </div>
//                     <button className="btn btn-submit" onClick={this.onSubmit}>Update</button>
//                 </form>
//             </div>
//         );
//     }
// };
