import { connect } from 'react-redux'
import MessageContainer from '../MessageContainer'


const mapStateToProps = state => ({
    messages: state.displayMessages.messages
})

export default connect(mapStateToProps)(MessageContainer)