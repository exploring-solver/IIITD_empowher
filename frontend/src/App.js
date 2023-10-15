import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import CommunityComponent from './components/CommunityComponent';
import ContentLibrary from './components/ContentLibrary';
import StartupHub from './components/StartupHub';

function App() {
  const [loggedin, setLoggedin] = useState(false);

  const hardcodedCredentials = {
    username: 'user1',
    password: 'password123',
  };

  const handleLogin = (username, password) => {
    if (username === hardcodedCredentials.username && password === hardcodedCredentials.password) {
      // If the provided credentials match the hardcoded credentials, set the user as logged in
      setLoggedin(true);
      localStorage.setItem('loggedin', 'true');
    }
  };

  const handleLogout = () => {
    setLoggedin(false);
    localStorage.setItem('loggedin', 'false');
  };

  useEffect(() => {
    // Initialize the loggedin state by checking localStorage
    const initialLoggedIn = localStorage.getItem('loggedin') === 'true';
    setLoggedin(initialLoggedIn);
  }, []);

  return (
    <Router>
      <Navbar loggedin={loggedin} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<Home loggedin={loggedin} onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard loggedin={loggedin} />}
        />
        <Route
          path="/login"
          element={<Login loggedin={loggedin} onLogin={handleLogin} />}
        />
        <Route path="/signup" element={<Signup loggedin={loggedin} />} />
        <Route path="/community" element={<CommunityComponent loggedin={loggedin} />} />
        <Route path="/content" element={<ContentLibrary loggedin={loggedin} />} />
        <Route path="/startup" element={<StartupHub loggedin={loggedin} />} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
