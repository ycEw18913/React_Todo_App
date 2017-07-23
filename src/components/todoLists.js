import React, { Component } from 'react';
import _ from 'lodash';

import TodoList from './todoList';

export default class TodoLists extends Component {
  deleteTodoList(key) {
    this.props.deleteTodoList(key);
  }

  renderTodoLists() {
    return _.map(this.props.todoLists, list => {
      return (
        <TodoList
          todoList={list}
          deleteList={this.deleteTodoList.bind(this)}
          key={list.key}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="col-md-6 done">Finished:
          </div>
          <div className="col-md-6 undone">Unfinished:
          </div>
        </div>
        <div className="col-md-12">
          {this.renderTodoLists()}
        </div>
      </div>
    );
  }
}
