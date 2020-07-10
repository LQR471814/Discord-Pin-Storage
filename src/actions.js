export const SET_DISPLAY_MESSAGES = "SET_DISPLAY_MESSAGES"

export function setDisplayMessages (messages) {
    return { type: SET_DISPLAY_MESSAGES, messages: messages }
}