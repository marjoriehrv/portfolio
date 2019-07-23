import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Footer from './components/Footer.js';


function App() {
  return (
      <body id="page-top">
      <Navigation />
      <Header />
      <About />
      <Portfolio />
      <Footer />
      </body>
  );
}

export default App;
