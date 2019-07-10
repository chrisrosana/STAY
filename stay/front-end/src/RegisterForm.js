import React, { Component } from 'react';
export default class RegisterForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {email: '', password:'', repeat_pwd:''},
      ListUsers: [],
      isValid: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this)

  }

  goBack() {
    this.props.history.goBack();
  }

  handleChange(event) {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value }
    });
  }

  submitRegister = () => {
    fetch(
      `/register?email=${this.state.data.email}&password=${this.state.data.password}`
    )
    .then( this.setState({isValid: true}),  
      window.alert("Created new account Successfully, Please login now")
    )
    .then( this.props.history.push('/login') )
    .catch(err => console.error(err));
  }

getUsbDB = () => {
  fetch('/userDB/')
  .then(res =>  res.json())
  .then(results => {
    for(let i = 0; i < results.length; i++){
      var user = results[i]
      if(user.Email === this.state.data.email){
        this.setState({isValid: false})
        window.alert("This email is existing, please choose a different email")
        return
        
      }
    }
  if(this.state.isValid)
    this.submitRegister()
  })
  .catch(error => (console.log('Failed to fetch: ', error.message)));
}

  validation = (e) => {
    e.preventDefault()
    if(this.state.data.password.length < 5){
      window.alert("Your password is too weak, Minimum length must be greater than 5 characters")
      return
    }
    else if(this.state.data.password !== this.state.data.repeat_pwd){
      window.alert("The passwords entered are not matched")
      return
    }

    else{
      this.getUsbDB()

    }
  }

  render() {
          return (

            <div className='modals'>
              <form className='modal-content'>
                <div onClick={this.goBack}>
                  <span className='closes' title='Close Register'>
                    &times;
                  </span>
                </div>

                <div className='container2'>
                  <div className='title' name='register'>
                    Register
                  </div>
                  <label htmlFor='email'>
                    <b>Username</b>
                  </label>
                  <input
                    id='email'
                    type='email'
                    placeholder='Your Email *'
                    name='email'
                    value={this.state.data.email}
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label htmlFor='password'>
                    <b>Password</b>
                  </label>
                  <input
                    id='password'
                    type='password'
                    placeholder='Your Password *'
                    name='password'
                    value={this.state.data.password}
                    onChange={this.handleChange}
                    required
                  />
                  <br />

                  <label htmlFor='password'>
                    <b>Repeat Password</b>
                  </label>
                  <input
                    id='repeat_pwd'
                    type='password'
                    placeholder='Repeat Password *'
                    name='repeat_pwd'
                    value={this.state.data.repeat_pwd}
                    onChange={this.handleChange}
                    required
                  />
                  <br />

                  <hr />
                  <p>
                    By creating an account you agree to our{' '}
                    <a href='#'>Terms & Privacy</a>.
                  </p>
                  <button
                    className='btn btn-success submit-btn'
                    type='submit'
                    style={{ color: 'red' }}
                    onClick={this.validation}
                  >
                    Submit
                  </button>
                  <p>
                    Already have an account? <a href='/login'>Sign in</a>.
                  </p>
                  <br />
                </div>
              </form>
            </div>
    );
  }
}
