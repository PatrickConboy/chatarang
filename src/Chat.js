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

	addMessage = (body) => {
		const messages = [...this.state.messages]
		const user = {
			uid: 'sdfsdf',
			displayName: 'Patches',
			email: 'rispir45@gmail.com'
		}

		messages.push({
			id: `${user.uid}-${Date.now()}`,
			user,
			body,
		})

		this.setState({ messages })
	}

	render() {
		return (
			<div className="Sidebar" style={styles}>
				<ChatHeader />
				<MessageList messages={this.state.messages} />
				<MessageForm addMessage={this.addMessage} />
			</div>
		)
	}
}

const styles = { 
	flex: '1',
	display: 'flex',
	flexDirection: 'column',
}

export default Chat