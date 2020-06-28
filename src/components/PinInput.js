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
    
    handleSubmit(event) {
        this.props.updateState(this.state.value, {
            name: "test",
            pfp: "pfp"
            }, 
            {
                month: 6,
                day: 26,
                year: 2020,
                hour: 12,
                minute: 22,
                timeOfDay: "PM"
            });
    }

    updateDimensions () {
        if (window.innerWidth < 200) {
            document.getElementById("PinFormContainer").style.left = "0%";
            document.getElementById("PinFormContainer").style.width = "60px";
            document.getElementById("PinInputField").style.width = "40px";
        } else if (window.innerWidth < 250) {
            document.getElementById("PinFormContainer").style.left = "2%";
            document.getElementById("PinInputField").style.width = "60px";
            document.getElementById("PinFormContainer").style.width = "80px";
        } else if (window.innerWidth < 300) {
            document.getElementById("PinFormContainer").style.left = "3%";
            document.getElementById("PinInputField").style.width = "100px";
            document.getElementById("PinFormContainer").style.width = "120px";
        } else if (window.innerWidth < 500) {
            document.getElementById("PinFormContainer").style.left = "5%";
            document.getElementById("PinInputField").style.width = "200px";
            document.getElementById("PinFormContainer").style.width = "220px";
        } else if (window.innerWidth < 600) {
            document.getElementById("PinFormContainer").style.left = "10%";
            document.getElementById("PinInputField").style.width = "300px";
            document.getElementById("PinFormContainer").style.width = "320px";
        } else if (window.innerWidth < 700) {
            document.getElementById("PinFormContainer").style.left = "15%";
            document.getElementById("PinInputField").style.width = "350px";
            document.getElementById("PinFormContainer").style.width = "370px";
        } else if (window.innerWidth < 900) {
            document.getElementById("PinFormContainer").style.left = "20%";
            document.getElementById("PinInputField").style.width = "450px";
            document.getElementById("PinFormContainer").style.width = "470px";
        } else {
            document.getElementById("PinFormContainer").style.left = "20%";
            document.getElementById("PinInputField").style.width = "600px";
            document.getElementById("PinFormContainer").style.width = "620px";
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

PinInput.propTypes = {
    updateState: PropTypes.func.isRequired
}

export default PinInput;