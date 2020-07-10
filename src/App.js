import React from 'react';
import MessageBody from './components/containers/MessageBody';
import AddButton from './components/AddButton';
import "./css/App.css";
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div id="AppDiv" style={{filter: "blur(5px)", transition: "all 0.2s"}}>
                <div className="TitleContainer" id="Title">
                    <img src={require("./logo.svg")} alt="Logo" height="60" width="60" style={{marginLeft:"10px", marginRight:"10px"}} />
                    <span className="Title">A Database of Random Out of Context Messages</span>
                </div>
                <div id="Body">
                    <MessageBody id="MessageContainer" messages={this.props.messages} />
                </div>
                <div>
                    <AddButton />
                </div>
            </div>
        )
    }
}

App.propTypes = {
    messages: PropTypes.array.isRequired
}

export default App;