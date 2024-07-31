import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import All from './Pages/All';
import FullStackDevelopment from './Pages/FullStackDevelop';
import DataScience from './Pages/DataScience';
import CyberSecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  </Router>
);

export default App;
