import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';

export default class App extends Component {
  state = {
    todos: [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
    ]
  }

  removeItem = (removedId) => {
    const { todos } = this.state;
    const result = todos.filter(({ id }) => id !== removedId);
    this.setState({ todos: result });
  }
  
  render() {
    const { todos } = this.state;
    return (
      <div className='todo-app'>
        <AppHeader toDo={3} done={1} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todos} onRemove={this.removeItem}/>
      </div>
    );
  }
};
