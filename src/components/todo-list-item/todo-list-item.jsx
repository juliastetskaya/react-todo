import React from 'react';
import cn from 'classnames';

const TodoListItem = (props) => {
  const {
    label,
    onRemove,
    onToggleImportant,
    onToggleDone,
    done,
    important,
  } = props;

  const itemClasses = cn({
    'todo-list-item': true,
    done,
    important,
  });

  return (
    <span className={itemClasses}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}
        role="presentation"
      >
        {label}
      </span>

      <button
        type="button"
        onClick={onToggleImportant}
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        onClick={onRemove}
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
