import React, { Component } from 'react'

class SignInForm extends Component {
  render() {
    return (
      <form className="SignInForm">
        <input
          required
          type="text"
          placeholder="Enter your username..." />
        <button type="submit">
          Login
        </button>
      </form>
    )
  }
}

export default SignInForm