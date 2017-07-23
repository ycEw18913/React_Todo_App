import React, { Component } from 'react';
import generateID from 'uniqid';
import _ from 'lodash';

import ListItem from './listItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.term !== '') {
      this.props.todoList.title = this.state.term;
      this.setState({ term: '' });
    }
  }

  onItemSubmit(event) {
    event.preventDefault();
    const newListItem = { key: generateID('IDL') };
    this.props.todoList.content = { ...this.props.todoList.content, [newListItem.key]: newListItem };
    this.setState({ term: '' });
  }

  onDeleteClick() {
    this.props.deleteList(this.props.todoList.key);
  }

  deleteListItem(key) {
    console.log(key, this.props.todoList.content);
    this.props.todoList.content = _.omit(this.props.todoList.content, key);
  }

  renderListItems() {
    return _.map(this.props.todoList.content, item => {
      return (
        <ListItem
          key={item.key}
          deleteListItem={this.deleteListItem.bind(this)}
        />
        );
    });
  }

  render() {
    const { todoList } = this.props;
    console.log(todoList);
    return (
      <div className="col-md-5 list">
        <form className="form-group dec" onSubmit={this.onFormSubmit.bind(this)}>
          <div className="col-xs-6 name">
            <h3>{this.props.todoList.title}</h3>
          </div>
          <div className="col-xs-6 pull-xs-right">
            <input
              className="form-control"
              type="text"
              value={this.state.term}
              placeholder="edit list title"
              onChange={this.onInputChange.bind(this)}
            />
          </div>
        </form>
        <div>
          {this.renderListItems()}
        </div>
        <form onSubmit={this.onItemSubmit.bind(this)} className="input-group">
          <button type="submit" className="btn btn-info add">＋</button>
        </form>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-warning pull-xs-right modi"
        >
          Delete List
        </button>
      </div>
    );
  }
}
