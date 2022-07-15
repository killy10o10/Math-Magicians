/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quotes from './components/Quote';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="calculator" element={<Calculator />} />
            <Route path="/" element={<Home />} />
            <Route path="quote" element={<Quotes />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
