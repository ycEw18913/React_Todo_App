import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import generateID from 'uniqid';
import _ from 'lodash';

import AddBar from './components/addBar';
import TodoLists from './components/todoLists';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoLists: [],
    };
  }

  addTodoList(term) {
    const newTodoList = {
      key: generateID(),
      title: term,
      content: [],
    };
    this.setState({ todoLists: [...this.state.todoLists, newTodoList] });
  }

  render() {
    return (
      <div>
        <AddBar addTodoList={this.addTodoList.bind(this)} />
        <TodoLists todoLists={this.state.todoLists} />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.querySelector('.container'));
