import React, { Component } from 'react';

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
    <form className="signUpForm" onSubmit={(e) => this.props.handleSignUp(e, this.state)}>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        Email:
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        Username:
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input className="submit" type="submit" value="Sign Up" />
    </form>
    )
  }
}

export default SignUpPage;