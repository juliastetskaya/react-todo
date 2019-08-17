import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => (
  <ul>
    <li><TodoListItem label='Drink Coffee'/></li>
    <li><TodoListItem
      label='Create React App'
      important /></li>
  </ul>
);

export default TodoList;