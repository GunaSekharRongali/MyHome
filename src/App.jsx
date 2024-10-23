import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Newsfeed from './components/Newsfeed';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Albums from './components/Albums';
import Boards from './components/Boards';
import Followers from './components/Followers';
import Following from './components/Following';
import Organizations from './components/Organizations';
import Progress from './components/Progress';
import Todo from './components/Todo';
import Events from './components/Events'

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Newsfeed />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/boards" element={<Boards />} />
              <Route path="/followers" element={<Followers />} />
              <Route path="/following" element={<Following />} />
              <Route path="/organizations" element={<Organizations />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/events" element={<Events />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
