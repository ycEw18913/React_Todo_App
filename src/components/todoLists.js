import React, { Component } from 'react';
import _ from 'lodash';

import TodoList from './todoList';

export default class TodoLists extends Component {

  doneCount() {

  }

  toggleCheckBox() {

  }

  deleteTodoList() {

  }

  editTodoList() {

  }

  renderTodoLists() {
    return _.map(this.props.todoLists, list => {
      return (
        <TodoList
          key={list.id}
          title={list.title}
          content={list.content}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="col-md-6 done">Finished: </div>
          <div className="col-md-6 undone">Unfinished: </div>
        </div>
          {this.renderTodoLists.bind(this)}
      </div>
    );
  }
}
