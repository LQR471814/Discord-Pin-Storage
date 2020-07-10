import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PinInput from './components/PinInput';
// import RegisterForm from './components/Register';
import RegisterContainer from './components/containers/RegisterContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import discordPinStorage from './appReducer';

const store = createStore(discordPinStorage);

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        {console.log(store.getState())}
        <App messages={ store.getState().displayMessages.messages } />
        <PinInput />
        {/* <RegisterForm onUpdateMessages={(messages) => store.dispatch({ type: "SET_DISPLAY_MESSAGES", messages: messages })} /> */}
        <RegisterContainer />
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
