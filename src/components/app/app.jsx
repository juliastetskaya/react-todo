import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../ItemAddForm';

export default class App extends Component {
  id = 1;

  state = {
    todos: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.id++,
    }
  };

  removeItem = (removedId) => {
    const { todos } = this.state;
    const result = todos.filter(({ id }) => id !== removedId);
    this.setState({ todos: result });
  };

  addItem = (label) => {
    const { todos } = this.state;
    const newItem = this.createTodoItem(label);
    this.setState({ todos: [...todos, newItem] });
  };

  onToggleImportant = (importantId) => {
    const { todos } = this.state;
    const result = todos.map(item =>
      item.id === importantId
      ? {...item, important: !item.important }
      : item);
    this.setState({ todos: result});
  };

  onToggleDone = (doneId) => {
    const { todos } = this.state;
    const result = todos.map(item =>
      item.id === doneId
      ? {...item, done: !item.done }
      : item);
    this.setState({ todos: result});
  };
  
  render() {
    const { todos } = this.state;
    return (
      <div className='todo-app'>
        <AppHeader toDo={3} done={1} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todos}
          onRemove={this.removeItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
        <ItemAddForm addItem={this.addItem}/>
      </div>
    );
  }
};
