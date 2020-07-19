import { SET_DISPLAY_MESSAGES, SET_USER_DATA, WEBSOCKET } from './actions';
import { combineReducers } from 'redux';
import { w3cwebsocket as WebSocketClient } from 'websocket';

const defaultMessages = {
    messages: [
        {
            value: "Discord Pin Message System.",
            author: {
                name: "Johnny",
                pfp: "https://drive.google.com/uc?id=115Vbr-uUCl0fnMo0Z6z8033c_AxXXuJh&export=download"
            },
            date: {
                month: 6,
                day: 26,
                year: 2020,
                hour: 12,
                minute: 22,
                timeOfDay: "PM"
            }
        },
        {
            value: "Is honestly great.",
            author: {
                name: "Jane",
                pfp: "https://drive.google.com/uc?id=1L5-vbLRputVVP1LTBLxPy7TwOVvyjpBA&export=download"
            },
            date: {
                month: 6,
                day: 26,
                year: 2020,
                hour: 12,
                minute: 24,
                timeOfDay: "PM"
            }
        },
        {
            value: "Agreed.",
            author: {
                name: "Johnny",
                pfp: "https://drive.google.com/uc?id=115Vbr-uUCl0fnMo0Z6z8033c_AxXXuJh&export=download"
            },
            date: {
                month: 6,
                day: 26,
                year: 2020,
                hour: 12,
                minute: 30,
                timeOfDay: "PM"
            }
        },
        {
            value: "Boo!!!",
            author: {
                name: "Jack",
                pfp: "https://drive.google.com/uc?id=1gORCwALCZPGnO-Wswu9XEvyWZvNuPXv6&export=download"
            },
            date: {
                month: 6,
                day: 26,
                year: 2020,
                hour: 11,
                minute: 31,
                timeOfDay: "PM"
            }
        },
        {
            value: "No?",
            author: {
                name: "Jack",
                pfp: "https://drive.google.com/uc?id=1gORCwALCZPGnO-Wswu9XEvyWZvNuPXv6&export=download"
            },
            date: {
                month: 6,
                day: 26,
                year: 2020,
                hour: 8,
                minute: 32,
                timeOfDay: "AM"
            }
        },
        {
            value: "Absolutely not.",
            author: {
                name: "Johnny",
                pfp: "https://drive.google.com/uc?id=115Vbr-uUCl0fnMo0Z6z8033c_AxXXuJh&export=download"
            },
            date: {
                month: 6,
                day: 26,
                year: 2020,
                hour: 9,
                minute: 33,
                timeOfDay: "AM"
            }
        },
        {
            value: "Awh...",
            author: {
                name: "Jack",
                pfp: "https://drive.google.com/uc?id=1gORCwALCZPGnO-Wswu9XEvyWZvNuPXv6&export=download"
            },
            date: {
                month: 6,
                day: 26,
                year: 2020,
                hour: 9,
                minute: 35,
                timeOfDay: "AM"
            }
        },
        {
            value: "Fine!!!",
            author: {
                name: "Jack",
                pfp: "https://drive.google.com/uc?id=1gORCwALCZPGnO-Wswu9XEvyWZvNuPXv6&export=download"
            },
            date: {
                month: 6,
                day: 26,
                year: 2020,
                hour: 9,
                minute: 36,
                timeOfDay: "AM"
            }
        },
        {
            value: "Good.",
            author: {
                name: "Jane",
                pfp: "https://drive.google.com/uc?id=1L5-vbLRputVVP1LTBLxPy7TwOVvyjpBA&export=download"
            },
            date: {
                month: 6,
                day: 26,
                year: 2020,
                hour: 9,
                minute: 33,
                timeOfDay: "AM"
            }
        },
        {
            value: "Alright.",
            author: {
                name: "Johnny",
                pfp: "https://drive.google.com/uc?id=1gORCwALCZPGnO-Wswu9XEvyWZvNuPXv6&export=download"
            },
            date: {
                month: 6,
                day: 26,
                year: 2020,
                hour: 9,
                minute: 33,
                timeOfDay: "AM"
            }
        },
    ]
}

function displayMessages (state = defaultMessages, action) {
    switch (action.type) {
        case SET_DISPLAY_MESSAGES:
            return Object.assign({}, state, {messages: action.messages})
        default:
            return state;
    }
}

function setUserData (state = {}, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return Object.assign({}, state, {username: action.username, pfp: action.pfp, apiToken: action.apiToken})
        default:
            return state;
    }
}

function websocketInit (state = {websocket: new WebSocketClient("ws://127.0.0.1")}, action) {
    switch(action.type) {
        case WEBSOCKET:
            return action.websocket;
        default:
            return state;
    }
}

const discordPinStorage = combineReducers({
    displayMessages,
    setUserData,
    websocketInit
})

export default discordPinStorage