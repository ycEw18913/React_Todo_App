import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import generateID from 'uniqid';

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
      //content: [],
    };
    this.setState({ todoLists: [...this.state.todoLists, newTodoList] });
  }

  render() {
    console.log(this.state.todoLists); // test usage
    if (this.state.todoLists === []) return <div className="col-md-12">no todo-lists to show</div>;
    return (
      <div>
        <AddBar addTodoList={this.addTodoList.bind(this)} />
        <TodoLists todoLists={this.state.todoLists} />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.querySelector('.container'));
