import React from 'react';
import Header from './Header';
import Footer from './Footerpage/Footer';
import Body from  './Logginpage/Body'; 
import Flipbox from './flipbox/Flipbox';
import './App.css';


function App() {
  

  return (
        
    <div>
      
       <Header />
      <Body />
        <Flipbox />
      <Footer /> 
    
    </div>
  );
}

export default App ;
