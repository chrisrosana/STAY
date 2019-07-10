import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';




export default class About extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }



  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.history.push('/');
    }
  }


    render() {
    return (

      <div className="modals">
        <form className="modal-content">
        <Link to="/"> 
                <span className="closes" title="Close Login" onClick={this.goback}>&times;</span>
        </Link>
 
        <header className="App-header" ref={this.setWrapperRef}>

          <h1> Software Engineering Class SFSU</h1>
          <h3>Spring 2019 - Section 01</h3>
          <h3>Team 02</h3> 
              <Carousel autoPlay height={200} width={700}>
                  <div>
                    <img src="team-images/jaren.jpeg" />
                    <h2> Jaren Lynch</h2>
                    <p>Senior Computer Science student at SFSU.</p>
                  </div>
                  <div >
                    <img src="team-images/monali.jpg" />
                    <h2>Monali Mirel Chuatico</h2>
                    <p>"Hello, world! I am a CS student currently studying at San Francisco State University. Check out my <a href="https://www.monalimirel.com/">website.</a>"</p>
                  </div>
                  <div>
                    <img src="team-images/thanhle.jpg"/>
                    <h2>Thanh Le</h2>
                    <p>"Hello Everyone"</p>
                    <p className="legend"></p>
                  </div>
                  <div>
                    <img src="team-images/chris.jpg" />
                    <h2>Chris Rosana</h2>
                    <p> "I am Chris from from San Francisco State University. Nice to meet you all."</p>
                  </div>
                  <div>
                    <img src="team-images/shan.png" />
                    <h2>Shan Kwan Cho</h2>
                    <p>"Hello, This is Shan. I’m a senior CS student in SFSU. i’m interested in testing out with new technologies."</p>
                  </div>
                  <div>
                    <img src="team-images/russelle.jpg" />
                    <h2>Russelle Pineda</h2>
                    <p>I am Russele</p>
                  </div>
                  <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
                    <h2>Kyle Lee</h2>
                    <p>I am Kyle</p>
                  </div>
                </Carousel>


           </header>
              <div className="cancel_box" style={{background: 'orange'}}> 
                    <Link to="/">
                      <button className="cancelbtn" type="button">Go Back</button>
                    </Link>
               
               </div>

                
        </form>
      </div>
      

    );
  }
}