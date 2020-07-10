import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RegisterContainer from './components/containers/RegisterContainer';
import PinInputContainer from './components/containers/PinInputContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import discordPinStorage from './appReducer';

const store = createStore(discordPinStorage);

ReactDOM.render(
    <Provider store={store}>
        <App messages={ store.getState().displayMessages.messages } />
        <PinInputContainer />
        <RegisterContainer />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
