import React, { Component } from 'react';
export default class PostingItem extends Component {
  constructor(props) {
    super();
    this.state = {

      post: { name: '', 
            address: '', 
            category: [], 
            price: '', 
            image:'', 
            contact: '',
            description: '' }

    };

    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleChange = event => {
    this.setState({
      post: { ...this.state.post, [event.target.name]: event.target.value }
    });
  };
  addPost = () => {
    const { post } = this.state;
    fetch(`/Pending?Name=${post.name}
    &Category=${post.category}
    &Price=${post.price}
    &Address=${post.address}
    &Image=${post.image}
    &Contact=${post.contact}
    &Description=${post.description}`)
    // .then(res =>  res.json())
    .then(message => {

              window.alert("Waiting for the approval. It would take up to 24 hours")
              this.props.history.push('/');
          }
    )
    .catch(err => console.error(err))
  }


  validation = (e) => {
    // this prevent the default link 
    e.preventDefault()
    const { post } = this.state;

    if(post.name === ''){
      window.alert("Enter contact name")
    }
    else if(post.address === ''){
      window.alert("Enter valid address")
    }
    else if(post.category == ''){
      window.alert("Enter select an category")
    }
    else if(post.price === ''){
      window.alert("Enter enter the price")
    }
    else if(post.image === ''){
      window.alert("Please add image(s) of the house")
    }
    else if(post.description === ''){
      window.alert("Please tell us about this " + post.category)
    }
    else{
      this.addPost()
    }

  }


  goBack(){
		this.props.history.goBack();
	}

  render() {

    const {isLoggedIn, userEmail} = this.props.location.state
    return (
   
   <div>
   
      {(() => {
        if (isLoggedIn) {
          return (

                    <div className='modals'>

                    <form className='card modal-content'>
                      <div onClick={this.goBack}>
                        <span className='closes' title='Close Login'>
                          &times;
                        </span>
                      </div>
                          <div className="container2">

                            <div className="title">List your property</div>
                              
                              <label htmlFor="name"><b>Name:</b></label>
                              <input id="name" type="text" placeholder="Enter your name" name="name" 
                              value={this.state.post.name} onChange={this.handleChange}/>
                              <br/>
                              <label htmlFor="address"><b>Address:</b></label>
                              <input id="address" type="text" placeholder="Your Address" name="address" 
                              value={this.state.post.address} onChange={this.handleChange}/>
                              <br/>
                              <label htmlFor="category"><b>Housing Type:  </b></label>
                              <select name="category" id="category"
                              value={this.state.post.category} onChange={this.handleChange}> 
                                    <option value="">Select one </option>
                                    <option value="House"> House </option>
                                    <option value="Apartment"> Apartment </option>
                                    <option value="Studio"> Studio </option>
                              </select>
                              <br/>
                              <label htmlFor="price"><b>Rent Price (monthly):</b></label><br/>
                              <input id="price" type="number" placeholder="Enter amount" name="price"
                              value={this.state.post.price} onChange={this.handleChange}/>
                              <br/>
                              <label htmlFor="image"><b>Photo: </b></label>
                              <input id="image" type="text" placeholder="Enter URL" name="image"
                              value={this.state.post.image} onChange={this.handleChange}/>
                              <br/>
                              <label htmlFor="description"><b>Description:</b></label>
                              <textarea id="description" type="text" placeholder="Enter Description" name="description"
                              value={this.state.post.description} onChange={this.handleChange}/>
                              <br/>

                              <hr />
                                <button className="btn btn-success submit-btn" type="submit" onClick={this.validation}
                                >
                                  Submit
                                </button>
                                    <br/>
                              
                          </div>

                          <div className="cancel_box">
                                  <button className="cancelbtn" type="button" onClick={this.goBack}>Cancel</button>

                          </div>
                    </form>
                    </div>


              )
            } 
          }
          )()}
   
   
   </div>

    );
  }

}
