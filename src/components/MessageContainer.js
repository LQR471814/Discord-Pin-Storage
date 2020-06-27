import React from 'react';
import Message from './Message'
import PropTypes from 'prop-types';

class MessageContainer extends React.Component {
    render () {
        return this.props.messages.map((message) => (
            <Message key={message.id} message={message} />
        ));
    }
}

MessageContainer.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessageContainer;