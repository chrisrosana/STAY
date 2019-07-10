import React from "react";
import { Link } from 'react-router-dom'


export default class Dashboard extends React.Component{
constructor(props){
        super(props);

        this.state = {
            products: [],
            messages: 0,
            isLoggedIn: false,
            userEmail: ''
          };


 this.goBack = this.goBack.bind(this)

}

goBack() {
    this.props.history.goBack();
}


componentDidMount = () => {
    fetch(`/messageReceiver/`)
    .then(res =>  res.json())
    .then(totalMessages => 
      {
            this.setState({messages: totalMessages})
          }
          )   
    .catch(err => console.error(err))


    fetch(`/userPosting/`)
    .then(res =>  res.json())
    .then(product => 
      {
            this.setState({products: product})
          }

          )
    .catch(err => console.error(err))
}




    render () {
        const {isLoggedIn ,userEmail} = this.props.location.state
        var messages = this.state.messages
        var products = this.state.products
        var name = userEmail.substring(0, userEmail.lastIndexOf("@"));
        return(

                    <div>
                    <img src="https://image.flaticon.com/icons/svg/17/17004.svg" className="center"/>
                    <h3 style={{textAlign: 'center'}}> Welcome: {name} </h3>
                    <div>
                        {/* <nav id="navbar" > */}
                            <h4> User status</h4>
                            <ul>
                                {/* <li><Link to={{
                                    pathname: '/userPostings',
                                    products: products
                                    }}> You have posted total: {products.length} products</Link>
                                </li>  */}
                                <li>
                                    <Link to="/userPostings">
                                        You have posted total: {products.length} products
                                    </Link>

                                </li>
                                <li><Link to={{
                                    pathname: '/userMessages',
                                    messages: messages
                                    }}>  You have total: {messages.length} messages</Link></li> 
                                <li><a>Account setting</a></li> 
    
                            </ul>
                        {/* </nav> */}
                    </div>
                    <div className="cancel_box">
                          <button className="cancelbtn" type="button" onClick={this.goBack}>Go back</button>
                   
                    </div>
            </div>

        
        )
    }
    

}