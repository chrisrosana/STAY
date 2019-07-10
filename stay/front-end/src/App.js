import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import ListingItems from './ListingItems';
import SearchAndGo from './SearchAndGo'
import FilterBar from './FilterBar'
import { ProductConsumer } from './ProductContext';
import "bootstrap/dist/css/bootstrap.min.css";
// import { render } from "react-dom";

class App extends Component {  

constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
      userEmail: ''
    }
  }

componentDidMount = () =>{
    fetch(`/checkToken/`)
    .then(res =>  res.json())
    .then(name => 
      {
        if(name !== ''){
            this.setState({userEmail: name})
            this.setState({isLoggedIn: true})
        }
        else{
          this.setState({userEmail: ''})
          this.setState({isLoggedIn: false})
        }
      }
          )
    .catch(err => console.error(err))
}


getBackData = (dispatch, event) => {
    event.preventDefault();
    fetch('/Posting/')
		.then(res =>  res.json())
		.then(data =>   
      dispatch({
        type: '',
        results: data
      }))
		.catch(error => (console.log('Failed to fetch: ', error.message)));
  }

logout = () => {
  fetch(`/logout`)
  // .then(this.props.history.push('/login'))
  .then(window.location.reload())
  .catch(err => console.error(err))
}


  render() {
    var isLoggedIn = this.state.isLoggedIn
    var userEmail = this.state.userEmail
    return (

      <React.Fragment>
        <div className='body'>
          <header className='container'>
            <div className='row align-items-center'>
              <div className='col-sm-2'>
                {/* STAY */}
                <ProductConsumer>
                  {value => {
                    const { dispatch } = value;
                    return (
                      <div
                        className='row align-items-center'
                        onClick={this.getBackData.bind(this, dispatch)}
                      >
                        <Link to='/'>
                          <img style={{ width: '120px' }} src='./stay.png' />
                          {/* <span ><font size="6" style={{color: 'orange'}}> STAY</font></span> */}
                        </Link>


                      </div>
                    );
                  }}
                </ProductConsumer>
              </div>

              {/* Searching feature */}
              <div className='col-sm-7'>
                <SearchAndGo />
              </div>

          
         <div className="col-sm-3">
              {isLoggedIn ? (
                <div>
                    <button className="btn btn-lighting btn-lg" style={{color: 'blue'}} onClick={this.logout}>
                        Log out
                    </button>
                </div>
              ) : (
              <div> 
                  <button className="btn btn-lighting btn-lg" style={{color: 'blue'}}>
                      <Link to="/login"> <span>Login </span> </Link>
                  </button>

                  <button className="btn btn-lighting btn-lg" style={{color: 'blue'}}>
                    <Link to="/register"> <span>Register</span> </Link>
                  </button>
              </div>
              )}     
         </div>

      </div>
    </header >
          

          <div>
            <nav id='navbar'>
              <ul>
                 <li>
                  <Link to='/about'> About </Link>
                </li>

                <li>
                    {(() => {
                          if (isLoggedIn) {
                            return (
                              <li>
                              <Link to={{
                                pathname: '/Dashboard',
                                state: {
                                  userEmail: userEmail,
                                  isLoggedIn: isLoggedIn
                                  }
                                }}> Dashboard </Link>

                            
                              <Link to={{
                                pathname: '/posting',
                                state: {
                                  userEmail: userEmail,
                                  isLoggedIn: isLoggedIn
                                  }
                                }}
                              
                              
                              
                              style={{color: 'red'}}>
                                    Post
                              </Link>




                              {(() => {
                                  if (userEmail === "thanh@admin.com") {
                                    return (
                                      <Link to={{
                                        pathname: '/admindashboard',
                                        state: {
                                          userEmail: userEmail,
                                          isLoggedIn: isLoggedIn
                                          }
                                        }}
                                        
                                        style={{color: 'lightblue'}}
                                        > AdminDashboard </Link>

                                        )
                                      } 
                                    }
                                    )()}


                              </li>

                            )
                          } 
                        })()}
                </li>

              </ul>
            </nav>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col-md-3'>
                <FilterBar />
              </div>
              <hr />
              <div className='col-md-9'>
                <ListingItems />
              </div>
            </div>
          </div>

          <footer className='footer'>
            <p>Copyright {'\u00A9'} 2019 SFSU-Team-02</p>
          </footer>
        </div>
      </React.Fragment>
    );
    // render(<App />, document.getElementById('root'));
  }
}
export default App;