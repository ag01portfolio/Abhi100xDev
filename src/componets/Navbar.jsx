import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav style={{ display: 'flex', alignItems: 'center', padding: '16px', background: '#4f8cff', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
            <Link style={{ color: '#fff', textDecoration: 'none', paddingLeft: '24px', paddingRight: '32px', fontWeight: 'bold', fontSize: '1.2rem' }} to="/">Abhi</Link>
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link style={{ color: '#fff', textDecoration: 'none' }} to="/games">Games</Link>
            <Link style={{ color: '#fff', textDecoration: 'none' }} to="/apps">Apps</Link>
            <Link style={{ color: '#fff', textDecoration: 'none' }} to="/chat">Chat</Link>
            <Link style={{ color: '#fff', textDecoration: 'none' }} to="/projects">Achievement</Link>
        </div>
    </nav>
);

export default Navbar;
