import React from "react"; 
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SavedTours from "./pages/SavedTours";



function App() {
  return (
   <Router>
     <div>
       <Navbar />
       <Route exact path = "/" component= {Home} />
       <Route exact path = "/home" component = {Home} />
       <Route exact path = "/signup" component = {Signup} />
       <Route exact path = "/login" component = {Login} />
       <Route exact path = "/savedtours" component = {SavedTours}/>
    

       <Footer />
     </div>
   </Router>
 
  );
}

export default App;
