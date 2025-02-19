import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import the Router and routing components
import React from 'react';
import Navbar from './components/ui/shared/Navbar';  // Import your Navbar component

function App() {
  return (
    <Router>  {/* Wrap your app in BrowserRouter */}
      <Navbar />
      <Routes>  {/* Define your routes */}
      
      </Routes>
    </Router>
  );
}

export default App;
