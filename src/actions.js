export const MODIFY_PENDING_PIN = "MODIFY_PENDING_PIN"
export const SET_DISPLAY_MESSAGES = "SET_DISPLAY_MESSAGES"
export const SET_REGISTER_CSS = "SET_REGISTER_CSS"
export const SET_AUTH_WINDOW_VISIBILITY = "SET_AUTH_WINDOW_VISIBILITY"
export const SET_REGISTER_ERROR_LABEL = "SET_REGISTER_ERROR_LABEL"

export function modifyPendingPin (value) {
    return { type: MODIFY_PENDING_PIN, value: value }
}

export function setDisplayMessages (messages) {
    return { type: SET_DISPLAY_MESSAGES, messages: messages }
}

export function setRegisterCSS (className) {
    return { type: SET_REGISTER_CSS, className: className }
}

export function setAuthWindowVisibility (bool) {
    return { type: SET_AUTH_WINDOW_VISIBILITY, bool: bool }
}

export function setRegisterErrorLabel (error) {
    return { type: SET_REGISTER_ERROR_LABEL, error: error }
}