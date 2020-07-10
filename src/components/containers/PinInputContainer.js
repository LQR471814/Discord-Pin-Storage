import { connect } from 'react-redux'
import PinInput from '../PinInput'


const mapStateToProps = state => ({
    websocket: state.setCommWebsocket,
    userData: state.setUserData
})

const mapDispatchToProps = dispatch => ({
    updateMessages: (messages) => dispatch({ type: "SET_DISPLAY_MESSAGES", messages: messages })
})

export default connect(mapStateToProps, mapDispatchToProps)(PinInput)