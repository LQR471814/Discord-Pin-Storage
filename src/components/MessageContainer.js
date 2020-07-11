import React from 'react';
import Message from './Message'
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

class MessageContainer extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {messages: this.props.messages};
        this.updateMessages = this.updateMessages.bind(this);
    }
    
    updateMessages (messages) {
        this.setState({messages: messages});
    }
    
    render () {
        const { messages } = this.props
        return messages.map((message) => (
            <Message key={uniqid()} message={message} />
            ));
    }
}

MessageContainer.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessageContainer;