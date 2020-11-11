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
    <form onSubmit={(e) => this.props.handleSignUp(e, this.state)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Sign Up" />
    </form>
    )
  }
}

export default SignUpPage;