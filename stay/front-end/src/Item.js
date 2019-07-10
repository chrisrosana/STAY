import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ProductConsumer } from './ProductContext'

export default class Item extends Component{
    constructor(props){
      super(props);

      this.state = {
       like: false
      }
    }


	render(){
		const {postId, Category, Price, Image} = this.props.item;
		return (
			
			// <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<div className="mx-auto col-lg-4 my-3">
				<div className="card">
					<ProductConsumer>
				  			{value => (
					
								<div className="img-container p-2"> 
									<Link to='/details'	>
										{/* <img src={"./housingtype/house1.jpg"} alt="Item Image" className="card-img-top"  */}
										<img src={Image} alt="Item Image" className="card-img-top" 

										onClick={() => {value.getDetail(postId)}
										} 
										/>
									</Link>
									<div className="card-body" style={{color: 'blue'}}> 
										<div> Housing Type: {Category} </div>
										{/* <div> Rooms: {room} </div> */}
										<div> Price: ${Price}/month </div>
									</div>

						
									<button className="btn btn-lighting" onClick={() => this.setState({like: !this.state.like})}> 
									{this.state.like ?

									<i className="heart fa fa-heart-o" style={{color: 'red'}} > Add to favorites </i> :
									<i className="heart fa fa-heart-o"> Add to favorites </i>
									}

									</button>


								</div>
				  				)
				  			}

					</ProductConsumer>
				</div>
			</div>

			)
	}
}