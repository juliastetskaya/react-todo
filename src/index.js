import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';
import TodoList from './components/todo-list';

import './index.css';

const App = () => {
  const todos = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ];

  return (
    <div className='todo-app'>
      <AppHeader toDo={3} done={1} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todos} />
    </div>
  );

};

ReactDom.render(<App />, 
  document.getElementById('root'));