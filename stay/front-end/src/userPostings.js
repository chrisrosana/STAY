import React, { Component } from 'react';
import AdjustPostingItems from './AdjustPostingItems';
import { ProductConsumer } from './ProductContext';
export default class userPostings extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [],
        isLoggedIn: false
    }
    this.goBack = this.goBack.bind(this)

  }

goBack() {
  this.props.history.goBack();
}


componentDidMount = () => {
  fetch(`/userPosting/`)
  .then(res =>  res.json())
  .then(product => 
    {
          this.setState({products: product})
        }

        )
  .catch(err => console.error(err))
}

  render() {
    var products = this.state.products

    return (
        <div className='container'>
        <div className='row'>
          <ProductConsumer>
            {
            () => {
                // var products = this.state.products
              if (products.length === 0) {
                return (
                  <React.Fragment>
                    <div className='container'>
                        you have 0 posting items
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
                      <h3>Your posting items</h3>
                    </div>
                    <div class='container text-muted lead'>
                      You have about {products.length} posted
                    </div>
                    {/* <div className="row"> */}
                    {products.map(item => (
                      <AdjustPostingItems key={item.postId} item={item} />
                    ))}
                    {/* </div> */}
                  </React.Fragment>
                );
            }

            // }
            }
          </ProductConsumer>

            
        </div>
        <div className="cancel_box">
            <button className="cancelbtn" type="button" onClick={this.goBack}>Go back</button>     
         </div>
      </div>
    );
  }
}
