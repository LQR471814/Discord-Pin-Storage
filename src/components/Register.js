import React from 'react';
import "../css/Form.css";
import "../css/Dot3_Loader.css";
import NewWindow from 'react-new-window';
import { w3cwebsocket as WebSocketClient } from 'websocket';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {closeAnimation: "FormLabel", showWindow: false, error: ""};

        this.apiEndpoint = "https://discord.com/api";

        this.client = new WebSocketClient("ws://192.168.1.2:4000");
        window.addEventListener("beforeunload", (ev) => {
            this.client.close();
        })

        this.checkingCode = false;
        this.messageData = {};
 
        this.handleClick = this.handleClick.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    updateAuthStatus(message) {
        document.getElementById("WaitingOnAuthLabel").textContent = message;
        this.forceUpdate();
    }

    async handleClick(event) {
        event.persist();
        this.setState({showWindow: true});
        
        document.getElementById("AuthorizeButton").style.display = "none";
        document.getElementById("WaitingOnAuthAnimation").style.display = "block";
        document.getElementById("WaitingOnAuthLabel").style.display = "block";
        
        this.code = {code: null};
        
        this.checkingCode = true;
        while(this.code.code == null) {
            this.code = await fetch('http://localhost:9000/getCode?fetch=')
            .then(response => response.json())
            .then(code => {return code;})
            .catch((error) => {console.log(error)});
            await new Promise(r => setTimeout(r, 500));
        }
        this.checkingCode = false;
        
        this.setState({showWindow: false});

        this.updateAuthStatus("Fetching API token...");
        
        var data = new URLSearchParams();
        data.append('client_id', '725568553989832724');
        data.append('client_secret', '-8yd2RwRURx9GMROrTswXAkPCji-f8nW');
        data.append('grant_type', 'authorization_code');
        data.append('code', this.code.code);
        data.append('redirect_uri', 'http://localhost:9000/getCode');
        data.append('scope', 'identify');
        
        this.apiToken = await fetch(this.apiEndpoint + "/oauth2/token", {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: data
        })
        .then(response => response.json())
        .then(data => this.tokenData = data);

        this.updateAuthStatus("Connecting to Server...");

        this.client.onopen = () => {
            console.log("Connected!")
        };

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
                        this.updateAuthStatus("Login authorized! Waiting for messages...");
                    }
                    break;
                case "messageData":
                    this.messageData = JSON.parse(messageObj.content).messages
                    
                    this.updateAuthStatus("Rendering messages...");
                    
                    this.props.onUpdateMessages(this.messageData);

                    document.getElementById("WaitingOnAuthAnimation").style.display = "none";
                    this.updateAuthStatus("");
                    document.getElementById("RegisterTitle").textContent = "Logging in!";

                    this.setState({closeAnimation: "FormLabel CloseForm"});

                    break;
                default:
                    this.setState({error: "ERROR: Something unexpected occurred. CODE: 000"})
                    break;
            }
        };
        
        this.updateAuthStatus("Relaying API token to Server...");

        this.client.send(JSON.stringify({type: "api_token", content: this.tokenData.access_token}));

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
            <div className={this.state.closeAnimation} id="RegisterLabel" onAnimationEnd={this.handleAnimationEnd}>
                <p className="MediumTitle" id="RegisterTitle">Login with Discord</p>
                <p className="ErrorText" id="RegisterErrorLabel">{this.state.error}</p>
                <p className="SmallTitle" id="WaitingOnAuthLabel" style={{display: "none"}}>Waiting for authorization with discord API...</p>
                <div className="loader" id="WaitingOnAuthAnimation">Loading...</div>
                <input className="SubmitButton" id="AuthorizeButton" value="Login" type="submit" onClick={this.handleClick} />
                {this.state.showWindow && (<NewWindow url="https://discord.com/api/oauth2/authorize?client_id=725568553989832724&redirect_uri=http%3A%2F%2Flocalhost%3A9000%2FgetCode&response_type=code&scope=identify" onBlock={this.handleWindowBlocked} onUnload={this.onCancel} />)}
            </div>
        );
    }
}

RegisterForm.propTypes = {
    onUpdateMessages: PropTypes.func.isRequired
}

export default RegisterForm;