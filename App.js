import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ContactUs from './ContactUs';
import Login from './Login';
import DF from './DF';
import StudentMarks from './StudentMarks';
import FetchPosts from './FetchPosts';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/contact" style={linkStyle}>Contact Us</Link>
          <Link to="/login" style={linkStyle}>Login</Link>
          <Link to="/df" style={linkStyle}>DF</Link>
          <Link to="/marks" style={linkStyle}>Student Marks</Link>
          <Link to="/fetch" style={linkStyle}>Fetch Data</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome to the React App</h2>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/df" element={<DF />} />
          <Route path="/marks" element={<StudentMarks />} />
          <Route path="/fetch" element={<FetchPosts />} />
        </Routes>
      </div>
    </Router>
  );
}

const linkStyle = {
  marginRight: '15px',
  textDecoration: 'none',
  color: 'blue',
  fontWeight: 'bold'
};

export default App;
