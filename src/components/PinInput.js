import React from 'react';
import "../css/PinInput.css"

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
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label id="PinFormContainer" className="PinLabel">
                    <span className="InputTitle">Pin</span>
                    <br />
                    <input className="InputField" type="text" name="pin" id="PinInputField" onChange={this.handleChange} />
                    <input className="SubmitButton" type="submit" value="Add" />
                </label>
            </form>
        );
    }
}

export default PinInput;