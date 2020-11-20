import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SavedTours from "./pages/SavedTours";
import LoginSignup from "./pages/LoginSignup";
import Hero from "./components/Hero";




function App() {
  return (

    <Router>
      <div>
          <Navbar />
          <Hero />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/loginsignup" component={LoginSignup} />
          <Route exact path="/savedtours" component={SavedTours} />
          <Footer />    
      </div>
    </Router>

  );
}

export default App;
