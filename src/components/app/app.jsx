import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../ItemAddForm';

export default class App extends Component {
  state = {
    todos: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    searchText: '',
    filter: 'all',
  };

  removeItem = (removedId) => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(({ id }) => id !== removedId) });
  };

  addItem = (label) => {
    if (label.trim().length > 0) {
      const { todos } = this.state;
      const newItem = this.createTodoItem(label);
      this.setState({ todos: [...todos, newItem] });
    }
  };

  onToggleImportant = (importantId) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((item) => (item.id === importantId
        ? { ...item, important: !item.important }
        : item)),
    });
  };

  onToggleDone = (doneId) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((item) => (item.id === doneId
        ? { ...item, done: !item.done }
        : item)),
    });
  };

  search = (items, text) => items
    .filter((item) => item.label.toLowerCase().includes(text.toLowerCase()));

  onSearch = (text) => {
    this.setState({ searchText: text });
  }

  onFilter = (filter) => {
    this.setState({ filter });
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: uniqueId(),
    };
  }

  render() {
    const { todos, searchText, filter } = this.state;
    const visibleItems = this.search(todos, searchText);
    const doneItems = visibleItems.filter((item) => item.done);
    const todoItems = visibleItems.filter((item) => !item.done);
    const filteredItems = {
      all: visibleItems,
      done: doneItems,
      active: todoItems,
    };

    return (
      <div className="todo-app">
        <AppHeader toDo={todoItems.length} done={doneItems.length} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter onFilter={this.onFilter} filter={filter} />
        </div>
        <TodoList
          todos={filteredItems[filter]}
          onRemove={this.removeItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
