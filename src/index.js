import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import generateID from 'uniqid';

import AddBar from './components/addBar';
import TodoLists from './components/todoLists';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = { todoLists: {} };
  }

  addTodoList(term) {
    const oldTodoLists = this.state.todoLists;
    const newTodoList = {
      key: generateID('ID'),
      title: term,
      content: {},
    };
    const newTodoLists = { ...oldTodoLists, [newTodoList.key]: newTodoList };
    this.setState({ todoLists: newTodoLists });
  }

  render() {
    console.log(this.state.todoLists);
    return (
      <div>
        <AddBar addTodoList={this.addTodoList.bind(this)} />
        <TodoLists todoLists={this.state.todoLists} />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.querySelector('.container'));
