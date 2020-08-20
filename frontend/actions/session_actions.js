import * as SessionApiUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = (errors) => ({
        type: RECEIVE_SESSION_ERRORS,
        errors
});

export const clearSessionErrors = () => ({
        type: CLEAR_SESSION_ERRORS
});

export const createNewUser = (userForm) => (dispatch) => {
    return SessionApiUtils.signup(userForm)
        .then( user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveSessionErrors(errors.responseJSON)))
}


export const createSession = (userForm) => (dispatch) => {
    return SessionApiUtils.login(userForm)
        .then( user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveSessionErrors(errors.responseJSON)))
}

export const deleteSession = () => (dispatch) => {
    return SessionApiUtils.logout()
        .then( () => dispatch(logoutCurrentUser()))
}