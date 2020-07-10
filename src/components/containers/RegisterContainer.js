import { connect } from 'react-redux'
import RegisterForm from '../Register'


const mapStateToProps = state => ({
    messages: state.displayMessages.messages
})

const mapDispatchToProps = dispatch => ({
    updateMessages: (messages) => dispatch({ type: "SET_DISPLAY_MESSAGES", messages: messages }),
    updateWebsocket: (websocket) => dispatch({ type: "SET_WEBSOCKET", websocket: websocket}),
    updateUserData: (username, pfp, apiToken) => dispatch({ type: "SET_USER_DATA", username: username, pfp: pfp, apiToken: apiToken })
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)