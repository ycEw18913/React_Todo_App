import React, { Component } from 'react';

export default class listItem extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onToggle() {

  }

  onInputChange(event) {

  }

  onFinalChange(event) {
    event.preventDefault();
  }

  onClickDelete() {

  }

  editListItem() {

  }

  render() {
    return ();
    return (
      <div>・
          <input
            type="checkbox"
            className="checkbox"
            onClick={this.onToggle.bind(this)}
          />
          <input
            type="text"
            onChange={this.onInputChange.bind(this)}
            onSubmit={this.onFinalChange.bind(this)}
          />
          <button className="btn btn-danger" onClick={this.oneClickDelete.bind(this)}>
            DELETE
          </button>
      </div>
    );
  }
}
