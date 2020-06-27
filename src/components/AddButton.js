import React from 'react';
import '../css/AddButton.css'

class AddButton extends React.Component {
    render () {
        return (
            <button><img src={require("../icons/PlusIcon.png")} alt="" height="60" width="60"/></button>
        );
    }
}

export default AddButton;