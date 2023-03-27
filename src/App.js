import React from "react";
import {Routes, Route } from 'react-router-dom';

import "./App.css";

import { Main, Portfolio } from "./components";

function App() {
  return (
          <div>
            <Routes>
              <Route path="/" element={ <Main /> } />
              <Route path="/portfolio" element={ <Portfolio /> } />
            </Routes>
          </div>
  );
}

export default App;
