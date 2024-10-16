import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import TaskManager from './components/TaskManager';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top-right button for adding a new task will be inside TaskManager */}
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<TaskManager />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
       
      </div>
    </Router>
  );
}

export default App;
