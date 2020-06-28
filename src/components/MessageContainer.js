import React from 'react';
import Message from './Message'
import PropTypes from 'prop-types';
import uniqid from 'uniqid'

class MessageContainer extends React.Component {
    render () {
        return this.props.messages.map((message) => (
            <Message key={uniqid()} message={message} />
        ));
    }
}

MessageContainer.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessageContainer;