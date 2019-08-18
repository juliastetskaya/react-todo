import React from 'react';

const TodoListItem = (props) => {
  const {
    label,
    onRemove,
    onToggleImportant,
    onToggleDone,
    done,
    important
  } = props;

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
        onClick={onToggleDone}>
          {label}
      </span>

      <button
        type="button"
        onClick={onToggleImportant}
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
};

export default TodoListItem;