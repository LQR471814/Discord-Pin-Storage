import React from 'react';
import "../css/Form.css"

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {pass: "", user: "", closeAnimation: "FormLabel"};

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handlePassChange(event) {
        this.setState({pass: event.target.value});
    }

    handleUserChange(event) {
        this.setState({user: event.target.value});
    }
    
    handleSubmit(event) {
        this.setState({closeAnimation: "FormLabel-close"})
        document.getElementById("RegisterLabel").onanimationend = this.handleAnimationEnd;
        event.preventDefault();
    }
    
    handleAnimationEnd(event) {
        document.getElementById("RegisterLabel").style.display = "none";

        document.getElementById("AppDiv").style.filter = "none";
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label id="RegisterLabel" className={(this.state.closeAnimation)}>
                    <span className="MediumTitle">Register</span>
                    <div style={{display: "flex"}}>
                        <span className="InputFieldLabel">Username</span>
                        <input className="InputField" type="text" name="username" id="RegisterUsernameField" onChange={this.handleChange} />
                    </div>
                    <div style={{display: "flex"}}>
                        <span className="InputFieldLabel">Password</span>
                        <input className="InputField" type="password" name="password" id="RegisterPasswordField" onChange={this.handleChange} />
                    </div>
                    <input className="SubmitButton" type="submit" value="Register" />
                </label>
            </form>
        );
    }
}

export default RegisterForm;