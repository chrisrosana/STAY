import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from "./ProductContext";

export default class AdminProductDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: false,
			userEmail: ''
		  }
		this.goBack = this.goBack.bind(this)
	  }
	
	  goBack(){
		this.props.history.goBack();
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





	render(){
		return(
	
			<ProductConsumer>
				{
					value => {
							const {Name, Category, Price, Address, Image, Description, Contact} = this.props.location.item
						var contactInfo = Contact
						// var browserHistory = BrowserRouter.browserHistory
						return (
						<div className="modals">
							<form className="modal-content2">
							  <div onClick={this.goBack}>
									<span className="closes" title="Close Login" >&times;</span>
							  </div>

							  <fieldset className="container py-5">
									<legend className="container text-muted lead">
										<h1 className="card-header text-center"> {Category} </h1>
									</legend>
								<div className="row"> 
									<div className="col-10 mx-auto col-md-6 my-3 text-capitalize"> 
										<img src={Image} className="img-fluid" />
									</div>

									<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
											Map goes here
									</div>

									<div className="col-10 mx-auto col-md-12 my-3 text-capitalize">
										{/* <h3> Housing Type: {Category}</h3> */}
										<h3> Name: {Name}</h3>
										<h3> Price: ${Price} / month</h3>
										<h3> Address: {Address}</h3>
										<h3> Description: {Description}</h3>
										<p className="text-muted lead">   </p>
										{/* <h4><span>Contact: <a href="/message" value={Contact}>here</a> </span></h4>
									 */}
										<h4>
											<span>Contact: 

											{(() => {
														if (this.state.isLoggedIn) {
																	return(								
																		<Link to={{ pathname: '/message', 
																		contactInfo: contactInfo
																		}} > here
																		</Link>

																	)
														} 													
														else{
															return(<span> <small><h10>NULL</h10></small> </span>)
														}
													})()}
											</span>
										</h4>
										
									 </div>



									</div>
								</fieldset>


								  <div className="cancel_box">
										<button className="cancelbtn" type="button" style={{width: '100%'}}
										onClick={this.goBack}
										>
											Cancel
										</button>
								   
								   </div>
							</form>
						  </div>

							)
					}
				}

			</ProductConsumer>

			)
	}
}