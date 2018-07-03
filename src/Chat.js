import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
	constructor() {
		super()

		this.state = {
			messages: [
				{
					id: 1,
					user: {
						uid: 'sdfsdf',
						displayName: 'Patches',
						email: 'rispir45@gmail.com'
					},
					body: 'Chatting up a storm, yo!',
				},

				{
					id: 2,
					user: {
						uid: 'asdfsdf',
						displayName: 'Dana',
						email: 'dana@fretless.com'
					},
					body: 'This guy is so annoying. I hate my job.'
				},
			]
		}
	}

	render() {
		return (
			<div className="Sidebar">
				<ChatHeader />
				<MessageList messages={this.state.messages} />
				<MessageForm />
			</div>
		)
	}
}

export default Chat