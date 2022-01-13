import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from './Components/Dashboard'
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard/>} />
        <Route exact path="/sign-up" element={<SignUp/>} />
        <Route exact path="/sign-in" element={<SignIn/>} />
      </Routes>
    </Router>
  );
}

export default Routers;
