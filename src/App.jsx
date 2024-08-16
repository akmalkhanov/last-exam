import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Single from "./pages/Single";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:coinId" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default App;
