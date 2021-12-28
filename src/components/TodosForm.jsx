import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


import '../css/TodosForm.css';


class TodosForm extends React.Component {

    state = {
        title: '',
        description: '',
        check: 'inactive',
        view: 'basic'
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.title === null || this.state.title.match(/^ *$/) !== null) {
            this.handleBlur();
        }
        else {
            this.props.onFormSubmit(this.state);
            this.setState({ title: '', description: '', titleValidation: false })
        }
    }

    onTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    onDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    handleMoreOptions = () => {
        this.setState({ view: 'more options' })
    }
    handleLessOptions = () => {
        this.setState({ view: 'basic' })
    }

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            this.onSubmit(event);
        }
    }

    handleBlur() {
        if (this.state.title.length === 0) {
            this.setState({ check: 'active' });
        } else {
            this.setState({ check: 'inactive' });
        }
    }

    handleFocus = () => {
        this.setState({ check: 'inactive' });
    }

    basicForm() {
        // const element = <FontAwesomeIcon icon={faCoffee} />
        return (
            <div className="form__container">
                <form className="form">
                    <div className="form__content">
                        <div className="form__title basic-form__title">
                            <input
                                type="text"
                                onChange={this.onTitleChange}
                                value={this.state.title}
                                onBlur={() => this.handleBlur()}
                                onFocus={this.handleFocus}
                                onKeyPress={this.handleEnter}
                                placeholder="Add your new todo"
                            />
                            <span className={`form__warn-msg-${this.state.check}`}>Title can not be left blank</span>
                        </div>
                        <div className="add">
                            <FontAwesomeIcon icon={faPlus} onClick={this.onSubmit} />
                        </div>
                    </div>
                    <button className="btn btn-options" onClick={this.handleMoreOptions}>Show More Options</button>
                </form>
            </div>
        );
    }

    completeForm() {
        return (
            <div className="form__container">
                <form>
                    <div className="form__title complete-form__title">
                        <label className="form__title-label">Enter Title:</label>
                        <input
                            type="text"
                            onChange={this.onTitleChange}
                            value={this.state.title}
                            onBlur={() => this.handleBlur()}
                            onFocus={this.handleFocus}
                            onKeyPress={this.handleEnter}
                        />
                        <span
                            className={`form__warn-msg-${this.state.check} complete-form__  warn-msg`}
                        >Title can not be left blank</span>
                    </div>
                    <div className="form__description">
                        <label>Enter Description <i className="italic-light">(optional)</i> :</label>
                        <textarea
                            onChange={this.onDescriptionChange}
                            value={this.state.description}
                        // onKeyUp={this.onEnter}
                        />
                    </div>
                    <button className="btn btn-options" onClick={this.handleLessOptions}>Show Less Options</button>
                    <button className="btn btn-submit" onClick={this.onSubmit}>Add</button>
                </form>
            </div>
        );
    };

    render() {
        if (this.state.view === 'more options') {
            return this.completeForm();
        } else {
            return this.basicForm();
        }
    }
};

export default TodosForm;