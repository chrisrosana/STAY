import React, { Component } from 'react';
import './App.css';
import './Monali';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1> Software Engineering Class SFSU</h1>
          <h3>Spring 2019 - Section 01</h3>
          <h3>Team 02</h3>
          
          <ul>
            <li><a href="">Jaren Lynch</a></li>
            <li><a href="Monali.js">Monali Mirel Chuatico</a></li>
            <li><a href="">Thanh Le</a></li>
            <li><a href="">Chris Rosana</a></li>
            <li><a href="">Shan Kwan Cho</a></li>
            <li><a href="">Ruselle Pineda</a></li>
            <li><a href="">Kyle Lee</a></li>
          </ul>
          
          <div className="container">        
            <Carousel />
          </div>

      </header>


      <footer id="footer">
          <p>Copyright {'\u00A9'} 2019 SFSU-Team-02</p>
      </footer>
    </div>
      
    );
    render(<App />, document.getElementById("root"));
  }
}

export default App;
