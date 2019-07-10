import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class message extends Component{
    constructor(props) {
        super(props);
        this.state = {
                text: '', 
                isLoggedIn: false,
                userEmail: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
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
    
      handleChange(event){
        this.setState({
            text: event.target.value
        });
      }



      Send = () =>{
        const { contactInfo } = this.props.location
        // console.log(this.state.text, contactInfo)
        fetch(`/sendMessage?Sender=${this.state.userEmail}
            &Receiver=${contactInfo}
            &Text=${this.state.text}`)
            // .then(res =>  res.json())
            .then(res => {
                    window.alert("Message is sent")
                    this.props.history.push('/');
                }
            )
            .catch(err => console.error(err))
            
      }


  render() {
    const { contactInfo } = this.props.location
    return(
      <div className="modals">
        <form className="modal-content">
        <Link to="/"> 
                <span className="closes" title="Close Login">&times;</span>
        </Link>

          <div className="container2">
              <div className="title">Send message to landlord</div>
                <label htmlFor="text"><b>Text Area:</b></label>
                  <textarea id="text" type="text" placeholder="Sending message to renter...." name="text"
                  value={this.state.text} onChange={this.handleChange}/>

                <br/>
                <label htmlFor="toEmail"><b>Send to:</b></label>
                <input id="toEmail" type="email" placeholder="Your Email *" name="toEmail" 
                 value={contactInfo} onChange={this.handleChange} required />
                <br/>
                <hr />
                <p className="btn btn-success submit-btn" type="submit" style={{color: 'red'}}
                onClick={this.Send}
                >
                    Send
                </p>
                <br/>
              </div>

              <div className="cancel_box">
                    <Link to="/">
                      <button className="cancelbtn" type="button">Cancel</button>
                    </Link>
                      <span className="psw">Forgot <a href="/password">password?</a></span>
               
               </div>
        </form>
      </div>
    );
  }
}