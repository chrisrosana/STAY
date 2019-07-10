import React, { Component } from "react";
import { Link } from 'react-router-dom';



class FilterBar extends Component {
    constructor(props){
      super(props);

      this.state = {
        min_price: '',
        max_price: '',
        distance: '',
				zipcode: '',
				data: [],
				isLoggedIn: false,
				userEmail: ''
			}
		}


    onChange = event => {       
        this.setState({[event.target.name]: event.target.value});
		}
		
		onSubmit = event => {
			console.log(this.state.min_price, this.state.max_price)
		}

		sort_by_price = event => {

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

	render() {

		var name = this.state.userEmail.substring(0, this.state.userEmail.lastIndexOf("@"));
		var max_price = this.state.max_price
		var min_price = this.state.min_price
		var distance = this.state.distance
		var zipcode = this.state.zipcode
		return (

   <form className="sidebar">

  {(() => {
        if (this.state.isLoggedIn) {
					return(
							<h3> Welcome: {name}</h3>
					)
        } 
      })()}

  					<h2> Filter</h2>
					<div className="container" required>
						<label className="searchfieldlabel"> 
						<span>Distance: </span> 	

						<input id="zip" name="zipcode" placeholder="From [zip code]"
						type="number" pattern="[0-9]*" maxLength="5"

						value={this.state.zipcode} onChange={this.onChange}/>				
					
						<input type="number" min="0" inputMode="numeric"
						  placeholder="miles" name="distance" 
						  value={this.state.distance} onChange={this.onChange}/>
							
						</label>

					</div>

           <br />

					<div className="container" onSubmit={this.getResult}>
						<span className="searchfieldlabel">Price</span>
						<br />
    					<input type="number" min="0" name="min_price" inputMode="numeric"
    					placeholder="min" title="whole number, no letters or symbols" 
    					value={this.state.min_price} onChange={this.onChange} />
							
							
   					 	<input type="number" name="max_price" inputMode="numeric"
   					 	placeholder="max" min="0" title="whole number, no letters or symbols" 
   					 	value={this.state.max_price} onChange={this.onChange}/>
					</div>
        <br />

        			<Link to={{
									pathname: '/filter',
									state: {
										min_price: min_price,
										max_price: max_price,
										distance: distance,
										zipcode: zipcode

									}
									}} 
								className="btn btn-light"
								>


										Sort
										
										</Link>
</form>

		);
	}
}

//

export default FilterBar;
