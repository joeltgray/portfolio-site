import React from 'react';
import './App.css';
import { Footer, Blog, Possibility, Features, Header } from './containers';
import { CTA, Brand, Navbar, Main} from './components';

function App() {
  return (
    <div className="App">
      <div>
        {/* <Navbar />
        <Header /> */}
        <Footer /> 
        <Main />
        
      </div> 
      
      {/*<Brand />
      <Features />
      <Possibility />
      <CTA />
      <Blog />*/}
      
    </div>
  );
}

export default App;
