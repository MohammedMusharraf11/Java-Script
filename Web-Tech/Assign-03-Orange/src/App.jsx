import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appointments from './pages/Home'; // Import the Home component as your main page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Appointments />} />
        {/* You can add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
