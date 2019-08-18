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
    ],
    searchText: '',
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
    this.setState({ todos: todos.filter(({ id }) => id !== removedId) });
  };

  addItem = (label) => {
    const { todos } = this.state;
    const newItem = this.createTodoItem(label);
    this.setState({ todos: [...todos, newItem] });
  };

  onToggleImportant = (importantId) => {
    const { todos } = this.state;
    this.setState({ todos: todos.map(item =>
      item.id === importantId
      ? {...item, important: !item.important }
      : item)
    });
  };

  onToggleDone = (doneId) => {
    const { todos } = this.state;
    this.setState({ todos: todos.map(item =>
      item.id === doneId
      ? {...item, done: !item.done }
      : item)
    });
  };

  search = (items, text) =>
    items.filter(item => item.label.toLowerCase().includes(text.toLowerCase()));

  onSearch = (text) => {
    this.setState({ searchText: text });
  }
  
  render() {
    const { todos, searchText } = this.state;
    const doneCount = todos.filter(item => item.done).length;
    const todoCount = todos.length - doneCount;
    const visibleItems = this.search(todos, searchText);

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch}/>
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={visibleItems}
          onRemove={this.removeItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
        <ItemAddForm addItem={this.addItem}/>
      </div>
    );
  }
};
