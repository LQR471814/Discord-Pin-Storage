import React from 'react';
import '../css/AddButton.css'
import PinInput from './PinInput'
import PropTypes from 'prop-types';

class AddButton extends React.Component {
    handleButton(e) {
        document.getElementById("PinFormContainer").style.display="block";
    }
    
    render () {
        return (
            <div>
                <PinInput updateState={this.props.updateState} />
                <button><img src={require("../icons/PlusIcon.png")} onClick={this.handleButton} alt="" height="60" width="60"/></button>
            </div>
        );
    }
}

AddButton.propTypes = {
    updateState: PropTypes.func.isRequired
}

export default AddButton;