import React from 'react';
import './App.css';
import Counter from './Counter/Counter';
import CounterHook from './CounterHooks/CounterHook.js';

const App = () => {
  return (
    <div className="App">
      <Counter />
      <CounterHook />

    </div>  );
}


export default App;
