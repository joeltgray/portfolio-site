import React from "react";
import {Routes, Route, Navigate } from 'react-router-dom';

import "./App.css";

import { Main, Portfolio, PageNotFound } from "./components";

function App() {
  return (
          <div>
            <Routes>
              <Route path="/" element={ <Main /> } />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route path="/portfolio" element={ <Portfolio /> } />
              <Route path="/404" element={<PageNotFound />} />
          	  <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </div>
  );
}

export default App;
