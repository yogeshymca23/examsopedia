import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/post.js"
import Home from "./components/home.js"
import Approve from "./components/approve.js"
import ReactGA from "react-ga";
import './App.css';
const G_ID = process.env.TRACKING_ID;
ReactGA.initialize(G_ID);


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/adminyogesh" element={<Approve />} />
        
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
