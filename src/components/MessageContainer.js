import React from 'react';
import Message from './Message'
import PropTypes from 'prop-types';

class MessageContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {messages: this.props.messages};
        this.currentMessageKey = 0
        this.updateMessages = this.updateMessages.bind(this);
    }

    uniqMessageKey() {
        this.currentMessageKey++
        return `Message_${this.currentMessageKey}`
    }

    updateMessages (messages) {
        this.setState({messages: messages});
    }

    render () {
        const { messages } = this.props
        return messages.map((message) => (
            <Message key={this.uniqMessageKey()} websocket={this.props.websocket} message={message} userData={this.props.userData} />
            ));
    }
}

MessageContainer.propTypes = {
    messages: PropTypes.array.isRequired,
    websocket: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired
}

export default MessageContainer;