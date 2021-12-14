import React from 'react';
import '../css/App.css';

import Todos from './todos';

class App extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'First todo',
                description: 'This is the description of first todo. Do you like it or not. It looks preety awesome.'
            },
            {
                id: 2,
                title: 'Second todo',
                description: 'This is the description of first todo. Do you like it or not. It looks preety awesome.'
            }
        ]
    }

    render() {
        return (
            <div className='container'>
                <div className="header">
                    <h1 >To Do List</h1>
                </div>
                <Todos todoItems={this.state.todos} />
            </div>
        );
    };
};

export default App;