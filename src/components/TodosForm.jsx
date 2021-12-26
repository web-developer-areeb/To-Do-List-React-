import React from 'react';
import '../css/TodosForm.css';


class TodosForm extends React.Component {

    state = {
        title: '',
        description: '',
        check: 'inactive'
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.title.length > 0) {
            this.props.onFormSubmit(this.state);
        }
    }

    onTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    onDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    // onEnter = (event) => {
    //     if (event.key === 'Enter') {
    //         this.onSubmit(event);
    //     }
    // }

    handleBlur() {
        if (this.state.title.length === 0) {
            this.setState({ check: 'active' });
        } else {
            this.setState({ check: 'inactive' });
        }
    }

    render() {
        return (
            <div className="form__container">
                <form>
                    <div className="form__title">
                        <label>Enter Title:</label>
                        <input
                            type="text"
                            onChange={this.onTitleChange}
                            value={this.state.title}
                            onBlur={() => this.handleBlur()}
                        />
                        <span className={`form__warn-msg-${this.state.check}`}>Title can not be left blank</span>
                    </div>
                    <div className="form__description">
                        <label>Enter Description <i className="italic-light">(optional)</i> :</label>
                        <textarea
                            onChange={this.onDescriptionChange}
                            value={this.state.description}
                        // onKeyUp={this.onEnter}
                        />
                    </div>
                    <button className="btn btn-submit" onClick={this.onSubmit}>Create</button>
                    {/* <input type="checkbox" />
                    <label >Enter is submit</label> */}
                </form>
            </div>
        );
    }
};

export default TodosForm;