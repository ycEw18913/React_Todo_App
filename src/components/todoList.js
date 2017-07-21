import React, { Component } from 'react';

import ListItem from './listItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

      this.state = {
      
    }
  }

  addListItem() {

  }

  deleteListItem() {

  }

  render() {
    return (
      <div>
        Posts
        {this.state.title}
        {this.state.content}
      </div>
    );
  }
}
