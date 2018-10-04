import React from 'react';
import PropTypes from 'prop-types';
import '../styles/LoginView.css';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('process login as required');
  }

  render() {
    return (
      <div className="LoginView">
        <h1>
          Login
        </h1>
        <form className="LoginView_Form" onSubmit={this.handleSubmit}>
          <div className="LoginView_Form_InputContainer">
          <label htmlFor="username">
            Please enter your username
          </label>
          <input
            id="username"
            value={this.state.username}
            placeholder="Username"
            onChange={e => this.setState({ username: e.target.value })}
            type="text"
            required
          />
          </div>
          <div className="LoginView_Form_InputContainer">
          <label htmlFor="password">
            Enter your password here
          </label>
          <input
            id="password"
            placeholder="Password"
            type="password"
            required
          />
          </div>
          <button>
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginView;