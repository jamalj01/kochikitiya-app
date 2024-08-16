import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from "./content/Content.js";
import imagePage from './content/imagePage.js';  // New component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/image" element={<imagePage />} />  {/* New route */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
