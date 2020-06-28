import React from 'react';
import "../css/PinInput.css"
import PropTypes from 'prop-types';

class PinInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {}

    updateDimensions () {
        if (window.innerWidth < 200) {
            document.getElementById("PinFormContainer").style.left = "0%";
            document.getElementById("PinFormContainer").style.width = "60px";
            document.getElementById("PinInputField").style.width = "40px";
            document.getElementById("Body").style.paddingTop = "260px";
        } else if (window.innerWidth < 250) {
            document.getElementById("PinFormContainer").style.left = "2%";
            document.getElementById("PinInputField").style.width = "60px";
            document.getElementById("PinFormContainer").style.width = "80px";
            document.getElementById("Body").style.paddingTop = "190px";
        } else if (window.innerWidth < 300) {
            document.getElementById("PinFormContainer").style.left = "3%";
            document.getElementById("PinInputField").style.width = "100px";
            document.getElementById("PinFormContainer").style.width = "120px";
            document.getElementById("Body").style.paddingTop = "170px";
        } else if (window.innerWidth < 500) {
            document.getElementById("PinFormContainer").style.left = "5%";
            document.getElementById("PinInputField").style.width = "200px";
            document.getElementById("PinFormContainer").style.width = "220px";
            document.getElementById("Body").style.paddingTop = "150px";
        } else if (window.innerWidth < 600) {
            document.getElementById("PinFormContainer").style.left = "10%";
            document.getElementById("PinInputField").style.width = "300px";
            document.getElementById("PinFormContainer").style.width = "320px";
            document.getElementById("Body").style.paddingTop = "120px";
        } else if (window.innerWidth < 700) {
            document.getElementById("PinFormContainer").style.left = "15%";
            document.getElementById("PinInputField").style.width = "350px";
            document.getElementById("PinFormContainer").style.width = "370px";
            document.getElementById("Body").style.paddingTop = "90px";
        } else if (window.innerWidth < 900) {
            document.getElementById("PinFormContainer").style.left = "20%";
            document.getElementById("PinInputField").style.width = "450px";
            document.getElementById("PinFormContainer").style.width = "470px";
            document.getElementById("Body").style.paddingTop = "90px";
        } else {
            document.getElementById("PinFormContainer").style.left = "20%";
            document.getElementById("PinInputField").style.width = "600px";
            document.getElementById("PinFormContainer").style.width = "620px";
            document.getElementById("Body").style.paddingTop = "90px";
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    
    render () {
        return (
            <form className="PinInput" id="PinFormContainer" onSubmit={this.handleSubmit}>
                <label>
                    <span className="InputTitle">Pin</span>
                    <br />
                    <input className="InputField" type="text" name="pin" id="PinInputField" onChange={this.handleChange} />
                </label>
                    <input className="SubmitButton" type="submit" value="Add" />
            </form>
        );
    }
}

export default PinInput;