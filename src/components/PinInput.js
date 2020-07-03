import React from 'react';
import "../css/Form.css"

class PinInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    }
    
    registerPinChecks() {
        if (this.state.value === "") {
            document.getElementById("PinErrorLabel").textContent = "Message is empty!";
            document.getElementById("PinErrorLabel").style.display = "block";
            return false;
        }
        document.getElementById("PinErrorLabel").textContent = "";
        document.getElementById("PinErrorLabel").style.display = "none";
        return true;
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleClick(event) {
        if (this.registerPinChecks() === true) {
            document.getElementById("PinFormContainer").className = "FormLabel CloseForm"
            document.getElementById("PinFormContainer").onanimationend = this.handleAnimationEnd;
            this.forceUpdate()
        }
        event.preventDefault();
    }
    
    handleAnimationEnd(event) {
        this.setState({value: ""})
        document.getElementById("PinFormContainer").style.display = "none";
        document.getElementById("PinInputField").value = "";
    }

    updateDimensions () {
        if (window.innerWidth < 200) {
            document.getElementById("Body").style.paddingTop = "260px";
        } else if (window.innerWidth < 250) {
            document.getElementById("Body").style.paddingTop = "190px";
        } else if (window.innerWidth < 300) {
            document.getElementById("Body").style.paddingTop = "170px";
        } else if (window.innerWidth < 500) {
            document.getElementById("Body").style.paddingTop = "150px";
        } else if (window.innerWidth < 600) {
            document.getElementById("Body").style.paddingTop = "120px";
        } else if (window.innerWidth < 700) {
            document.getElementById("Body").style.paddingTop = "90px";
        } else if (window.innerWidth < 900) {
            document.getElementById("Body").style.paddingTop = "90px";
        } else {
            document.getElementById("Body").style.paddingTop = "90px";
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));

        document.getElementById("PinFormContainer").style.display="none";
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    
    render () {
        return (
            <div className="FormLabel" id="PinFormContainer">
                <span className="InputTitle">Pin</span>
                <input className="InputField" type="text" name="pin" id="PinInputField" onChange={this.handleChange} />
                <span className="ErrorText" id="PinErrorLabel"></span>
                <input className="SubmitButton" type="submit" value="Add" onClick={this.handleClick} />
            </div>
        );
    }
}

export default PinInput;