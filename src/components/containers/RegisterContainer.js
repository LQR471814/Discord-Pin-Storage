import { connect } from 'react-redux'
import RegisterForm from '../Register'


const mapStateToProps = state => ({
    messages: state.displayMessages.messages
})

const mapDispatchToProps = dispatch => ({
    onUpdateMessages: (messages) => dispatch({ type: "SET_DISPLAY_MESSAGES", messages: messages })
})


export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)