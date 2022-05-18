import React from 'react'
import './App.css';
import Body from './components/Body/Body';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header/>
      <Counter/>
      <Body/>
    </>
  );
}

export default App;
