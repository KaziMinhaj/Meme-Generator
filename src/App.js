import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Header from './Components/Header'
import Memegenerator from './Components/Memegenerator';

function App() {
  return (
    <div className="App">
        <Header/>
        <Memegenerator/>
    </div>
  );
}

export default App;
