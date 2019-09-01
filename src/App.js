import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
        <Dashboard />
        <Todo />
    </div>
  );
}

export default App;
