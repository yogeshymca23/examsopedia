import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/post.js"
import Home from "./components/home.js"

import './App.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route exact path="/post" element={<Post />} />
        
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
