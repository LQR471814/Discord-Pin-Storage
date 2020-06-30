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