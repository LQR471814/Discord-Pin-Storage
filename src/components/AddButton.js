import React from 'react';
import '../css/AddButton.css'

class AddButton extends React.Component {
    handleButton(e) {
        document.getElementById("PinFormContainer").className = "FormLabel";
        document.getElementById("PinFormContainer").style.display="block";
    }
    
    render () {
        return (
            <div>
                <button><img src={require("../icons/PlusIcon.png")} onClick={this.handleButton} alt="" height="60" width="60"/></button>
            </div>
        );
    }
}

export default AddButton;