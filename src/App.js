import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import ScrollToTop from "react-scroll-to-top";

const App = () => {
    return (
      <div>
        <ScrollToTop smooth color="white" style={{backgroundColor:"black", zIndex:"9999"}}/>
        <Navbar />
        <Header />
        <AboutUs />  
        <SpecialMenu /> 
        <Chef />
        <Intro /> 
        <Laurels /> 
        <Gallery/> 
        <FindUs />
        <Footer/> 
      </div>
    )



    
    }
  






export default App;
