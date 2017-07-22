import React, { Component } from 'react';

import ListItem from './listItem';

export default class TodoList extends Component {

  addListItem() {

  }

  deleteListItem() {

  }

  render() {
    return (
      <div>
        Posts
        {this.props.todoList.id}
        {this.porps.todoList.title}
        {this.props.todoList.content}
      </div>
    );
  }
}
