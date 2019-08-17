import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
  <h1>Hello World!</h1>
);

ReactDom.render(<App />, 
  document.getElementById('root'));