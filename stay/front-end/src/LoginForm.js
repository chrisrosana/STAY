import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export default class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: { email: '', password: '' }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
       data: {...this.state.data, [event.target.name]: event.target.value }
    });
  }

  submitLogin = (event) => {
    event.preventDefault();
    fetch(`/login?email=${this.state.data.email}&password=${this.state.data.password}`)
    .then(res =>  res.json())
    .then(message => 
      {
          if(message !== '') 
            window.alert(message)
          else{
              this.props.history.push('/');
             }
          }

          )
    .catch(err => console.error(err))
}

//  submitLogin = (event) => {
//     event.preventDefault();
//     fetch('/login/', {
//       method: 'post',
//       body: JSON.stringify(this.state.data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(res => 
//             {
//             if (res.status === 200) {
//               this.props.history.push('/');
//             } else {
//               const error = new Error(res.error);
//               throw error;
//             }
//           }
//     )
//     .catch(err => {
//       console.error(err);
//       alert('Error logging in please try again');
//     });
//   }




  render() {
    return(
      <div className="modals">
        <form className="modal-content">
        <Link to="/"> 
                <span className="closes" title="Close Login">&times;</span>
        </Link>

          <div className="container2">
              <div className="title">Login</div>
                <label htmlFor="email"><b>Username</b></label>
                <input id="email" type="email" placeholder="Your Email *" name="email" 
                    value={this.state.data.email} onChange={this.handleChange} required />
                <br/>
                <label htmlFor="password"><b>Password</b></label>
                <input id="password" type="password" placeholder="Your Password *" name="password" 
                  value={this.state.data.password} onChange={this.handleChange} minLength="5" required/>
                <br/>
                <hr />
                <p className="btn btn-success submit-btn" type="submit" style={{color: 'red'}}
                onClick={this.submitLogin}
                >
                    Submit
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
