import React, { Component } from 'react';

export default class User extends Component {

constructor(props){
      super(props);
  
      this.state = {
        isAuth: false,
        userName: '',
        userEmail: ''
      }
    }
  
  // componentDidUpdate

  // componentDidMount = () =>{
  //   if(!this.state.isAuth){
  //     const {username, isLogged} = this.props.location.state
  //     var name = username.substring(0, username.lastIndexOf("@"))
  //     this.setState({userName: name})
  //     this.setState({isAuth: isLogged})
  //     this.setState({userEmail: username})
  //   }
  // }
    render() {
    
    // var name = username.substring(0, username.lastIndexOf("@"));
    return (
      <div className='container'>
        <h1>Welcome: {this.state.userName}</h1>
        {/* <h1> Your Info: </h1> */}
        <h3> Your Postings: </h3>
        <h3> Your Saved Postings: </h3>
      </div>
    );
  }
}