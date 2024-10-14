import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top-right button for adding a new task will be inside TaskManager */}
        <Routes>
          <Route path="/" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
