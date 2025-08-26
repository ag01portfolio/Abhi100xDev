
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import './App.css';
import  Projects  from './componets/Screen/Projects';
import Chat from './componets/Screen/Chat';

function Abhi() {
  return <h1>Abhi</h1>;
}

function Games() {
  return <h1>Games</h1>;
}

function Apps() {
  return <h1>Apps</h1>;
}

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
  <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Abhi />} />
            <Route path="/games" element={<Games />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

