import React from 'react';
import "../css/Form.css";
import "../css/Dot3_Loader.css";
import NewWindow from 'react-new-window';
import AuthWebServer from '../Utils/AuthWebServer';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {pass: "", user: "", closeAnimation: "FormLabel", showWindow: false};

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handlePassChange(event) {
        this.setState({pass: event.target.value});
    }

    handleUserChange(event) {
        this.setState({user: event.target.value});
    }
    
    handleClick(event) {
        this.authServer = new AuthWebServer("localhost", 4000);

        this.setState({showWindow: true})
        
        document.getElementById("AuthorizeButton").style.display = "none";
        document.getElementById("WaitingOnAuthAnimation").style.display = "block";
        document.getElementById("WaitingOnAuthLabel").style.display = "block";

        // this.setState({closeAnimation: "FormLabel CloseForm"})
        // document.getElementById("RegisterLabel").onanimationend = this.handleAnimationEnd;
        this.forceUpdate()

        event.preventDefault();
    }
    
    handleAnimationEnd(event) {
        document.getElementById("RegisterLabel").style.display = "none";

        document.getElementById("AppDiv").style.filter = "none";
    }

    handleWindowBlocked() {
        alert("Unable to show auth window, please disable popup blocker!");
    }

    render () {
        return (
            <div className={this.state.closeAnimation} id="RegisterLabel">
                <p className="MediumTitle">Login with Discord</p>
                <p className="ErrorText" id="RegisterErrorLabel"></p>
                <p className="SmallTitle" id="WaitingOnAuthLabel" style={{display: "none"}}>Waiting for authorization with discord API...</p>
                <div className="loader" id="WaitingOnAuthAnimation">Loading...</div>
                <input className="SubmitButton" id="AuthorizeButton" value="Login" type="submit" onClick={this.handleClick} />
                {this.state.showWindow && (<NewWindow url="https://discord.com/api/oauth2/authorize?client_id=725568553989832724&redirect_uri=http%3A%2F%2Flocalhost%3A4000&response_type=code&scope=identify" onBlock={this.handleWindowBlocked} />)}
            </div>
        );
    }
}

export default RegisterForm;