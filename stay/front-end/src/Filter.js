import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from "./Item"
import { ProductConsumer } from "./ProductContext"
class Filter extends Component {

	constructor(props){
		super(props);

		this.state = {

      data: []
		}
		
	}

  render() {
    const { min_price, max_price, distance, zipcode } = this.props.location.state
       
    return (

        <div className="container">
          <div className="row">

            <ProductConsumer >
            { 


              value => {
                const { products } = value

                // filter by distance
                if(zipcode !== '' && distance !== ''){
                  if(zipcode.length !== 5){
                    alert("You must enter a valid US zip code.")
                  }
                  else{

                  }

                }
                if(min_price !== '' && max_price !== '')
                    var finalProducts = products.filter(item => item.Price >= min_price && item.Price <= max_price)

                else if(max_price !== ''){
                  var finalProducts = products.filter(item => item.Price <= max_price)
                }
                else if(min_price !== ''){
                  var finalProducts = products.filter(item => item.Price >= min_price)
                }
                else {

                  finalProducts = value.products
                }
                
            if(products.length === 0){
									return (
										<React.Fragment>
												<div className="container">
															<h3> Sorry, we are unable to find items you are looking..</h3>
														 <h4 style={{color: 'grey'}}> Can you try one more time? </h4>
														
												</div>

                        <div className="cancel_box">
                    <Link to="/">
                      <button className="cancelbtn" type="button">Go back</button>
                    </Link>
               
               </div>

										</React.Fragment>
									)
                }
                else {
                     return (   
                      <React.Fragment>
                          <div className="container text-center" style={{color: 'red'}}>
                                <h3>{value.heading}</h3>
                          </div>
                          <div class="container text-muted lead">About {finalProducts.length} results</div>
                              {finalProducts.map(item => (<Item key={item.postId} item={item}/>))}
                     
                     
                              <div className="cancel_box">
                    <Link to="/">
                      <button className="cancelbtn" type="button">Go back</button>
                    </Link>
               
               </div>                
                      </React.Fragment>

                     ) 
                    }
               
                }
              }
            </ProductConsumer>
          </div>
        </div>

		      )
      }
    }

export default Filter
