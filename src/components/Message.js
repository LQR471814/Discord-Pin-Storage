import React from 'react';
import PropTypes from 'prop-types';
import '../css/Message.css';
import uniqid from 'uniqid';

class Message extends React.Component {
    constructor(props) {
        super(props);

        this.id = uniqid();

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    onMouseLeave (event) {
        document.getElementById(this.id).style.display = "none";
    }
    
    onMouseEnter (event) {
        document.getElementById(this.id).style.display = "block";
    }

    onDrag (e) {
        e.preventDefault();
    }

    async handleDelete (event) {
        event.persist();
        await this.props.websocket.send(JSON.stringify({type: "deleteMessage", apiToken: this.props.userData.apiToken, message: this.props.message}));
        event.preventDefault();
    }

    render () {
        return (
            <div className="Message" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div>
                    <img className="ProfilePicture" src={this.props.message.author.pfp} onDragStart={this.onDrag} alt="" width="32" height="32" style={{userSelect: "none"}} />
                </div>
                <div className="Information" id="MessageText" style={{width: "100%"}}>
                    <div className="MessageInformation">
                        <div style={{display: "flex"}}>
                            <div>
                                <h3 className="Author">{this.props.message.author.name}</h3>
                            </div>
                            <div>
                                <h4 className="Date">{this.props.message.date.month}/{this.props.message.date.day}/{this.props.message.date.year} {this.props.message.date.hour}:{this.props.message.date.minute} {this.props.message.date.timeOfDay}</h4>
                            </div>
                        </div>
                        <span className="DeleteButton" style={{display: "none"}} id={this.id} onClick={this.handleDelete}>x</span>
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
    message: PropTypes.object.isRequired,
    websocket: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired
}

export default Message