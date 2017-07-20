import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddAndShowBar from './components/addAndShowBar';
import TodoLists from './components/todoLists';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <AddAndShowBar />
        <TodoLists />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.querySelector('.container'));
