import { connect } from 'react-redux'
import RegisterForm from '../Register'


const mapStateToProps = state => ({
    websocket: state.websocketInit
})

const mapDispatchToProps = dispatch => ({
    updateMessages: (messages) => dispatch({ type: "SET_DISPLAY_MESSAGES", messages: messages }),
    updateUserData: (username, pfp, apiToken) => dispatch({ type: "SET_USER_DATA", username: username, pfp: pfp, apiToken: apiToken }),
    updateWebsocket: (websocket) => dispatch({ type: "WEBSOCKET", websocket: websocket})
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)