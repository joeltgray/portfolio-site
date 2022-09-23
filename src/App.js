import React from "react";
import "./App.css";
import { Footer, Blog, Possibility, Features, Header } from "./containers";
import { CTA, Brand, Navbar, Main } from "./components";

function App() {
  return (
    <div id="page-wrapper">
      <div id="page-content">
        {/* <Navbar />
        <Header /> */}

        <Main />

        {/*<Brand />
      <Features />
      <Possibility />
      <CTA />
      <Blog />*/}
      </div>
      <Footer />
    </div>
  );
}

export default App;
