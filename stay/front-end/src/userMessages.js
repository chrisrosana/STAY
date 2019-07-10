import React, { Component } from 'react';
import Item from './Item';
// import { ProductProvider, ProductConsumer } from "./ProductContext"
import { ProductConsumer } from './ProductContext';
import { Link } from 'react-router-dom'

export default class userPostings extends Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this)

  }

goBack() {
  this.props.history.goBack();
}

  render() {
    const {messages} = this.props.location
    const message = messages
    return (
      <div className='container'>
        <div className='row'>
          <div>You have: {message.length} message </div>
            <div className="card modal-content">
              {message.map(item => (
                            
              <div className="card">A message from {item.Sender.substring(0, item.Sender.lastIndexOf("@"))}({item.Sender}): <small>{item.Message}</small></div> 
                          ))}
            </div >
                <div className="cancel_box">
                        <button className="cancelbtn" type="button" onClick={this.goBack}>Go back</button>
                </div>
         </div>
      </div>
    );
  }

}

