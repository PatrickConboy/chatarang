import React, { Component } from 'react'

class MessageForm extends Component {
  render() {
    return (
      <form className="MessageForm">
        <input
          autoFocus
          required
          type="text"
          body="body"
          placeholder="Type a message..."
        />
        <button type="submit">
          Send
        </button>
      </form>
    )
  }
}

export default MessageForm