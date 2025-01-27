import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from "./content/Content.js";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Content />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
