import React, { Component } from 'react';
import _ from 'lodash';

//import ListItem from './listItem';

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
      this.setState({ term: '' });
      this.props.todoList.title = this.state.term;
    }
  }

  renderListItems() {
    return _.map(this.props.todoList.content, item => {
      return (<ListItem listitem={item} key={list.key}/>);
      });
  }

  render() {
    const { todoList } = this.props;
    console.log(todoList);
    return (
      <div className="col-md-4 list">
        <form className="form-group" onSubmit={this.onFormSubmit.bind(this)}>
          <div className="col-xs-7">
            <input
              className="form-control"
              type="text"
              placeholder="edit list title"
              onChange={this.onInputChange.bind(this)}
            />
          </div>
        </form>
        <button className="btn btn-danger pull-xs-right">Delete</button>
      </div>
    );
  }
}
