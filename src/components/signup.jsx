import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Button } from 'evergreen-ui';

//  This is the signup page for new users

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        email: "",
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
    return(
        <div>
            <h1>
                Sign Up!
            </h1>
            <form className="signUpForm" onSubmit={(e) => this.props.handleSignUp(e, this.state)}>
                Name:
                <TextInput
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />
                Email:
                <TextInput
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                />
                Username:
                <TextInput
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                />
                Password:
                <TextInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                />
                <Button className='button' appearance="primary">Sign Up</Button>
            </form>
            <br></br>
            <Link to='/login'>Already a user? Log In!</Link>
        </div>
    )
  }
}

export default SignUpPage;