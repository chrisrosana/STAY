import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './ProductContext'

export default class PendingViews extends Component{
    constructor(props){
      super(props);

			this.state = {
				like : false
			}
		}
		
approve = (item) => {
	fetch(`/Posting/add?Name=${item.Name}
	&Category=${item.Category}
	&Price=${item.Price}
	&Address=${item.Address}
	&Image=${item.Image}
	&Contact=${item.Contact}
	&Description=${item.Description}`)
			.then(res =>  res.json())
			.then(mess => 
				{
					this.reject(item)
					window.alert(mess)
			})
			.catch(err => console.error(err))

	}

reject = (Item) => {
	fetch(`/removePendingItem?Pending_id=${Item.Pending_id}`)
	.then(  window.location.reload() )
	.catch(error => (console.log('Failed to fetch: ', error.message)))
}


	render(){
		const {Category, Price, Image} = this.props.item;
		var Item = this.props.item
		return (
		
			// <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<div className="mx-auto col-lg-4 my-3">
				<div className="card">
				<ProductConsumer>	
				  			{() => (
					
								<div className="img-container p-2"> 
									<Link to={{
                             pathname: '/AdminProductDetail',
                             item: Item
									}}
									
									>
										{/* <img src={"./housingtype/house1.jpg"} alt="Item Image" className="card-img-top"  */}
										<img src={Image} alt="Item Image" className="card-img-top" 
										/>
									</Link>
						
									<div className="card-body" style={{color: 'blue'}}> 
										<div> Housing Type: {Category} </div>
										{/* <div> Rooms: {room} </div> */}
										<div> Price: ${Price}/month </div>
									</div>

										<button className="btn btn-lighting btn-lg" style={{color: 'green'}} onClick={() => this.approve(Item)}> 
													Approve
										</button>

										<button className="btn btn-lighting btn-lg" style={{color: 'red'}} onClick={() => this.reject(Item)}> 
													Reject
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