import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Button } from 'evergreen-ui';

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
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                Email:
                <TextInput
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                Username:
                <TextInput
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                Password:
                <TextInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
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