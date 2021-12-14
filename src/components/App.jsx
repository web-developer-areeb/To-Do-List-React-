import React from 'react';

import Todos from './todos';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 >To Do List</h1>
                <Todos />
            </div>
        );
    };
};

export default App;