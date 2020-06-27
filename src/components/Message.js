import React from 'react';
import PropTypes from 'prop-types';
import '../css/Message.css'

class Message extends React.Component {
    render () {
        return (
            <div className="Message">
                <div>
                    <img className="ProfilePicture" src={require("../pfps/" + this.props.message.author.pfp + ".png")} alt="" width="32" height="32"></img>
                </div>
                <div className="Information">
                    <div className="MessageInformation">
                        <div>
                            <h3 className="Author">{this.props.message.author.name}</h3>
                        </div>
                        <div>
                            <h4 className="Date">{this.props.message.date.month}/{this.props.message.date.day}/{this.props.message.date.year} {this.props.message.date.hour}:{this.props.message.date.minute} {this.props.message.date.timeOfDay}</h4>
                        </div>
                    </div>
                    <div>
                        <p className="MessageContent">{this.props.message.value}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
}

export default Message