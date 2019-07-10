import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ProductConsumer } from './ProductContext';
import PendingViews from './PendingViews'
import AdjustPostingItems from './AdjustPostingItems';

// import { render } from "react-dom";

//@@@admin page
export default class pendingLists extends Component {  

constructor(props){
    super(props);

    this.state = {
        pendingProducts: [],
        postingProducts: [],
        userLists: [],
        swap: true,
        userEmail: '',
        isLoggedIn: false
        
    }
  }

logout = () => {
  fetch(`/logout`)
  .then(this.props.history.push('/'))
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


Swap = (e) => {
  e.preventDefault();
 this.setState({swap: !this.state.swap})
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

fetch('/PendingLists/')
  .then(res =>  res.json())
  .then(data => this.setState({pendingProducts: data}))
      .catch(error => (console.log('Failed to fetch: ', error.message)));
      
  fetch('/UserLists/')
  .then(res =>  res.json())
  .then(users => this.setState({userLists: users}))
  .catch(error => (console.log('Failed to fetch: ', error.message)));


fetch('/Posting/')
		.then(res =>  res.json())
		.then(postedItems => this.setState({postingProducts: postedItems}))
		.catch(error => (console.log('Failed to fetch: ', error.message)));





}

pendingBtn = (e) => {
  e.preventDefault();
  document.getElementById("pendingItems").style.display = "block";
  document.getElementById("postingItems").style.display = "none";
  document.getElementById("userLists").style.display = "none";

  console.log("p")
}
postingBtn = (e) => {
  e.preventDefault();
  document.getElementById("pendingItems").style.display = "none";
  document.getElementById("postingItems").style.display = "block";
  document.getElementById("userLists").style.display = "none";


}

userBtn = (e) => {
  e.preventDefault();
  document.getElementById("pendingItems").style.display = "none";
  document.getElementById("postingItems").style.display = "none";
  document.getElementById("userLists").style.display = "block";

}

  render() {
    // const {isLoggedIn, userEmail} = this.props.location.state
    var userEmail = this.state.userEmail
    var isLoggedIn = this.state.isLoggedIn
    var name = userEmail.substring(0, userEmail.lastIndexOf("@"));

    var PendingProducts = this.state.pendingProducts
    var userLists = this.state.userLists
    var postingProducts = this.state.postingProducts
    return (

<div>
  {/* prevent not admin users accesss this page */}
      {(() => {
        if (userEmail === "thanh@admin.com" && isLoggedIn) {
          return (
            <React.Fragment>
            <div className='body'>
              <header className='container'>
                <div className='row align-items-center'>
                  <div className='col-sm-9'>
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
                <div className='col-sm-3'>
                    <button className="btn btn-lighting btn-lg" style={{color: 'red'}} onClick={this.logout}>
                                Log out
                    </button>
                </div>
          </div>
        </header >
              
    
    
    
                    <div className="container">
                        <img src="team-images/img.jpg"/>
                      </div>
    
    
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-4'>
                  <form className='sidebar'>
    
                        <section>
                        <h4> Welcome Admin </h4>
                        <h1 style={{color: 'red'}}><strong>** {name} ** </strong></h1>
                            <ul>
                                <h3><button className="btn-lighting btn-lg" style={{width: '150px'}} onClick={this.pendingBtn}>PendingLists</button></h3>
                                <h3><button className="btn-lighting btn-lg" style={{width: '150px'}} onClick={this.postingBtn}>PostingLists</button></h3>
                                <h3><button className="btn-lighting btn-lg" style={{width: '150px'}} onClick={this.userBtn}>UserLists</button></h3>
                            </ul>
    
                        </section>
                 </form>

                  </div>
                  <hr />
                  <div className='col-sm-8'>
                    <div className='container'>
                        <div >

                           {/* show this pendinglists */}
                          <section id="pendingItems">
                                  <ProductConsumer>
                                      {
                                      () => {
                                          // var products = this.state.products
                                      if (PendingProducts.length === 0) {
                                          return (
                                          <React.Fragment>
                                              <div className='container'>
                                                  you have 0 waiting items waiting to approve
                                              </div>
              
                                          </React.Fragment>
                                          );
                                      } else
                                          return (
                                          <React.Fragment>
                                              <div
                                              className='container text-center'
                                              style={{ color: 'red' }}
                                              >
                                              <h3>Products are waiting to get approved</h3>
                                              </div>
                                              <div class='container text-muted lead'>
                                                You have about {PendingProducts.length} products waiting to get approved
                                              </div>
                                              {PendingProducts.map(item => (
                                              <PendingViews key={item.Pending_id} item={item} />
                                              ))}
                                          </React.Fragment>
                                          );
                                      }
              
                                      // }
                                      }
                                  </ProductConsumer>
    
                           </section>

                          {/* show this posting lists */}
                            <section id="postingItems" style={{display: 'none'}}> 
                                <ProductConsumer>
                                    {
                                    () => {
                                        // var products = this.state.products
                                      if (postingProducts.length === 0) {
                                        return (
                                          <React.Fragment>
                                            <div className='container'>
                                                We have 0 item, nothing to show
                                                </div>

                                          </React.Fragment>
                                        );
                                      } else
                                        return (
                                          <React.Fragment>
                                            <div
                                              className='container text-center'
                                              style={{ color: 'red' }}
                                            >
                                              <h3>Total posting items</h3>
                                            </div>
                                            <div class='container text-muted lead'>
                                              We have {postingProducts.length} items posting on the homepage
                                            </div>
                                            {/* <div className="row"> */}
                                            {postingProducts.map(item => (
                                              <AdjustPostingItems key={item.postId} item={item} />
                                            ))}
                                            {/* </div> */}
                                          </React.Fragment>
                                        );
                                    }

                                    // }
                                    }
                                  </ProductConsumer>

                            </section>

                            <section id="userLists" style={{display: "none"}}>
                               <div> The idea is: admin shall be able to change user's pw or ban that account</div>
                               <div> No time to make this function </div>
                            </section>
                        </div>
    
                    </div>
    
    
                    <div className="cancel_box">
                        <Link to='/'>
                            <button className="cancelbtn" type="button" onClick={this.goBack}>Go back</button>     
                        </Link>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <footer className='footer'>
                <p>Copyright {'\u00A9'} 2019 SFSU-Team-02</p>
              </footer>
            </div>
          </React.Fragment>
              )
            } 

          }
          )()}
</div>

    );
    // render(<App />, document.getElementById('root'));
  }
}
