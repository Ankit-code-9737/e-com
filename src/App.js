// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Project Page</Link>
            </li>
            <li>
              <Link to="/cart">Cart Page</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
