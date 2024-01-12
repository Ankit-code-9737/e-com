// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import CartPage from "./components/CartPage";
import ColorChanger from "./features/ColorChanger";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="mb-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Project Page</Link>
            </li>
            <li>
              <Link to="/cart">Cart Page</Link>
            </li>
            <li>
              <Link to="/colorset">Color Set</Link>
            </li>
          </ul>
        </nav>

        <div className="container pt-5">
          <Routes>
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/colorset" element={<ColorChanger />} />
            <Route
              path="/"
              element={<h1 className="text-center">Home Page</h1>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
