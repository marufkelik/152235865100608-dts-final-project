// import logo from './logo.svg';
// import './App.css';
import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/HomePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App" style={{display:"flex", flexDirection: 'column', }}>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}


export default App;




