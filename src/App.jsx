
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import './App.css';
import  Projects  from './componets/Screen/Projects';

function Abhi() {
  return <h1>Abhi</h1>;
}

function Games() {
  return <h1>Games</h1>;
}

function Apps() {
  return <h1>Apps</h1>;
}

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    try {
      // Gemini API integration
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        })
      });
      const data = await response.json();
      let botText = 'No response.';
      if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0].text) {
        botText = data.candidates[0].content.parts[0].text;
      } else if (data && data.choices && data.choices[0] && data.choices[0].message) {
        botText = data.choices[0].message;
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: botText }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error: Could not reach Gemini API.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="chat-app-bg">
      <div className="chat-app-center">
        <div className="chat-app-container">
          <h2 className="chat-app-title">Chat App</h2>
          <div className="chat-app-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.sender === 'user' ? 'chat-app-message user' : 'chat-app-message bot'}>
                <span className={msg.sender === 'user' ? 'chat-app-bubble user' : 'chat-app-bubble bot'}>
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-app-input-row">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              className="chat-app-input"
              disabled={loading}
              onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="chat-app-send-btn"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
      <div className="chat-app-footer">
        &copy; {new Date().getFullYear()} Chat App
      </div>
    </div>
  );
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

