import React from 'react';
import "../css/Form.css";
import "../css/Dot3_Loader.css";
import NewWindow from 'react-new-window';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {closeAnimation: "FormLabel", showWindow: false, error: ""};

        this.apiEndpoint = "https://discord.com/api";

        this.client = this.props.websocket;
        window.addEventListener("beforeunload", (ev) => {
            this.client.close();
        })

        this.checkingCode = false;
        this.userData = {};
 
        this.handleClick = this.handleClick.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    updateStatus(message) {
        document.getElementById("WaitingOnAuthLabel").textContent = message;
        this.forceUpdate();
    }

    async handleClick(event) {
        event.persist();
        this.setState({showWindow: true});
        
        document.getElementById("AuthorizeButton").style.display = "none";
        document.getElementById("WaitingOnAuthAnimation").style.display = "block";
        document.getElementById("WaitingOnAuthLabel").style.display = "block";
        
        this.code = {code: ""};
        
        this.checkingCode = true;
        while (this.code.code === "") {
            this.code = await fetch('http://localhost:9000/?fetch', {
                method: 'GET',
                contentType: "application/json"
            })
            .then(response => response.json())
            .then(code => {return code;})
            .catch((error) => {console.log(error)});
            await new Promise(r => setTimeout(r, 500));
        }
        this.checkingCode = false;
        
        this.setState({showWindow: false});

        this.updateStatus("Fetching API token...");
        
        var data = new URLSearchParams();
        data.append('client_id', '725568553989832724');
        data.append('client_secret', '-8yd2RwRURx9GMROrTswXAkPCji-f8nW');
        data.append('grant_type', 'authorization_code');
        data.append('code', this.code.code);
        data.append('redirect_uri', 'http://localhost:9000');
        data.append('scope', 'identify');
        
        await fetch(this.apiEndpoint + "/oauth2/token", {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: data
        })
        .then(response => response.json())
        .then(data => this.tokenData = data);

        this.updateStatus("Getting user data...")

        await fetch("https://discord.com/api/users/@me", {
            method: 'GET',
            headers: { Authorization: "Bearer " + this.tokenData.access_token }
        })
        .then(response => response.json())
        .then(data => this.userData = data);

        this.props.updateUserData(this.userData.username, "https://cdn.discordapp.com/avatars/" + this.userData.id + "/" + this.userData.avatar + ".png?size=128", this.tokenData.access_token)

        this.updateStatus("Connecting to Server...");

        this.client.onmessage = (message) => {
            var messageObj = JSON.parse(message.data);
            switch (messageObj.type) {
                case "auth":
                    if (messageObj.content === "false") {
                        console.log("Unauthorized")
                        document.getElementById("WaitingOnAuthAnimation").style.display = "none";
                        document.getElementById("WaitingOnAuthLabel").style.display = "none";
                        this.setState({error: "ERROR: Unauthorized."});
                    } else {
                        this.updateStatus("Login authorized! Waiting for messages...");
                    }
                    break;
                case "messageData":
                    this.updateStatus("Rendering messages...");
                    
                    this.props.updateMessages(JSON.parse(messageObj.content).messages);

                    document.getElementById("WaitingOnAuthAnimation").style.display = "none";
                    this.updateStatus("");
                    document.getElementById("RegisterTitle").textContent = "Logging in!";

                    this.setState({closeAnimation: "FormLabel CloseForm"});

                    break;
                case "refreshMessages":
                    this.props.updateMessages(messageObj.messages.messages)
                    break;
                default:
                    break;
            }
        };
        
        this.updateStatus("Relaying API token to Server...");

        this.client.send(JSON.stringify({type: "apiToken", content: this.tokenData.access_token}));

        event.preventDefault();
    }
    
    handleAnimationEnd(event) {
        document.getElementById("RegisterLabel").style.display = "none";

        document.getElementById("AppDiv").style.filter = "none";
    }

    handleWindowBlocked() {
        alert("Unable to show auth window, please disable popup blocker!");
    }

    onCancel () {
        if (this.checkingCode === true) {
            window.location.reload(false);
        } else {}
    }

    render () {
        return (
            <div className={this.state.closeAnimation} style={{width: "25%"}} id="RegisterLabel" onAnimationEnd={this.handleAnimationEnd}>
                <p className="MediumTitle" id="RegisterTitle">Login with Discord</p>
                <p className="ErrorText" id="RegisterErrorLabel">{this.state.error}</p>
                <p className="SmallTitle" id="WaitingOnAuthLabel" style={{display: "none"}}>Waiting for authorization with discord API...</p>
                <div className="loader" id="WaitingOnAuthAnimation">Loading...</div>
                <input className="SubmitButton" id="AuthorizeButton" value="Login" type="submit" onClick={this.handleClick} />
                {this.state.showWindow && (<NewWindow url="https://discord.com/api/oauth2/authorize?client_id=725568553989832724&redirect_uri=http%3A%2F%2Flocalhost%3A9000&response_type=code&scope=identify" onBlock={this.handleWindowBlocked} onUnload={this.onCancel} />)}
            </div>
        );
    }
}

RegisterForm.propTypes = {
    updateMessages: PropTypes.func.isRequired,
    updateUserData: PropTypes.func.isRequired,
    websocket: PropTypes.object.isRequired
}

export default RegisterForm;