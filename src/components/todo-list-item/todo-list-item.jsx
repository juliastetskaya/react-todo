import React, { Component } from 'react';

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false,
  }

  onClickLabel = () => {
    this.setState(({ done }) => ({ done: !done }));
  }

  onMarkImportant = () => {
    this.setState(({ important }) => ({ important: !important }));
  }

  render() {
    const { label, onRemove } = this.props;
    const { done, important } = this.state;

    let classes = "todo-list-item";
    if (done) {
      classes += ' done';
    }

    if (important) {
      classes += ' important';
    }

    return (
      <span className={classes}>
        <span
          className="todo-list-item-label"
          onClick={this.onClickLabel}>
            {label}
        </span>
  
        <button
          type="button"
          onClick={this.onMarkImportant}
          className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation" />
        </button>
  
        <button
          type="button"
          onClick={onRemove}
          className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
};
