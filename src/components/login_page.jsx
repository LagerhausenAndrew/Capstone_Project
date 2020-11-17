import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Button } from 'evergreen-ui';

//  This is the login page.
//  This is connected to the database

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    // aka const name = e.target.name; const value = e.target.value;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
        <div >
            <h1>
                Log In!
            </h1>
            <form className="signUpForm" onSubmit={(e) => this.props.handleLogin(e, this.state)}>
                <TextInput
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required 
                />
                <TextInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                />
                <Button className='button' appearance="primary">Log In</Button>
            </form>
            <br></br>
            <Link to='/user'>Need an account? Sign Up!</Link>
        </div>
    )
  }
}

export default LoginPage;