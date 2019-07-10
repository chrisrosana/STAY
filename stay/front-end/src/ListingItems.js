import React, { Component } from 'react';
import Item from './Item';
// import { ProductProvider, ProductConsumer } from "./ProductContext"
import { ProductConsumer } from './ProductContext';

export default class ListingItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // take inf from database
      product: []
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <ProductConsumer>
            {// value => data.results.map( item => return ..)
            value => {

              if (value.products.length === 0) {
                return (
                  <React.Fragment>
                    <div className='container'>
                      <h4>
                        No item to show
                      </h4>
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
                      <h3>{value.heading}</h3>
                    </div>
                    <div class='container text-muted lead'>
                      About {value.products.length} results
                    </div>
                    {/* <div className="row"> */}
                    {value.products.map(item => (
                      <Item key={item.postId} item={item} />
                    ))}
                    {/* </div> */}
                  </React.Fragment>
                );
            }

            // }
            }
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
