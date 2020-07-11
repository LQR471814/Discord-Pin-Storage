export const SET_DISPLAY_MESSAGES = "SET_DISPLAY_MESSAGES"
export const SET_USER_DATA = "SET_USER_DATA"
export const WEBSOCKET = "WEBSOCKET"

export function setDisplayMessages (messages) {
    return { type: SET_DISPLAY_MESSAGES, messages: messages }
}

export function setUserData (username, pfp, apiToken) {
    return { type: SET_USER_DATA, username: username, pfp: pfp, apiToken: apiToken }
}

export function websocket (websocket) {
    return { type: WEBSOCKET, websocket: websocket }
}