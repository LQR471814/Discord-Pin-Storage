import { connect } from 'react-redux'
import MessageContainer from '../MessageContainer'


const mapStateToProps = state => ({
    messages: state.displayMessages.messages,
    websocket: state.websocketInit,
    userData: state.setUserData
})

export default connect(mapStateToProps)(MessageContainer)