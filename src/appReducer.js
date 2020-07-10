import {
    MODIFY_PENDING_PIN,
    SET_DISPLAY_MESSAGES,
    SET_AUTH_WINDOW_VISIBILITY,
    SET_REGISTER_CSS,
    SET_REGISTER_ERROR_LABEL
} from './actions'
import { combineReducers } from 'redux';

const defaultMessages = {messages: [
    {
        value: "Discord Pin Message System.",
        author: {
            name: "Johnny",
            pfp: "pfp"
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
            pfp: "pfp2"
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
            pfp: "pfp"
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
            pfp: "pfp3"
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
            pfp: "pfp3"
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
            pfp: "pfp"
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
            pfp: "pfp3"
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
            pfp: "pfp3"
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
            pfp: "pfp2"
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
            pfp: "pfp3"
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
]}

function displayMessages (state = defaultMessages, action) {
    switch (action.type) {
        case SET_DISPLAY_MESSAGES:
            console.log(action.messages)
            return Object.assign({}, state, {messages: action.messages})
        default:
            return state;
    }
}

function pinValue (state = "", action) {
    switch (action.type) {
        case MODIFY_PENDING_PIN:
            return action.value
        default:
            return state
    }
}

function registerCSS (state = "FormLabel", action) {
    switch (action.type) {
        case SET_REGISTER_CSS:
            return action.value
        default:
            return state
    }
}

function registerAuthWindowVisibility (state = false, action) {
    switch (action.type) {
        case SET_AUTH_WINDOW_VISIBILITY:
            return action.bool
        default:
            return state
    }
}

function registerErrorLabel (state = "", action) {
    switch (action.type) {
        case SET_REGISTER_ERROR_LABEL:
            return action.value
        default:
            return state
    }
}

// function discordPinStorage (state = {}, action) {
//     return {
//         displayMessages: displayMessages(state.messages),
//         pinValue: pinValue(state.pinValue)
//     }
// }

const discordPinStorage = combineReducers({
    displayMessages,
    pinValue,
    registerCSS,
    registerAuthWindowVisibility,
    registerErrorLabel
})

export default discordPinStorage