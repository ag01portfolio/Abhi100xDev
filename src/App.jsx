
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import './App.css';
import Achievement from './componets/Screen/Achievement';
import Chat from './componets/Screen/Chat';
import Games from './componets/Screen/Games';
import Apps from './componets/Screen/Apps';

function Abhi() {
  return <h1>Abhi</h1>;
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
            <Route path="/projects" element={<Achievement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

