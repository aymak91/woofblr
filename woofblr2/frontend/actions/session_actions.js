import * as SessionApiUtils from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const signup = (userForm) => (dispatch) => {
    return SessionApiUtils.signup(userForm)
        .then( user => dispatch(receiveCurrentUser(user)))
}


export const login = (userForm) => (dispatch) => {
    return SessionApiUtils.signup(userForm)
        .then( user => dispatch(receiveCurrentUser(user)))
}

export const logout = () => (dispatch) => {
    return SessionApiUtils.signup()
        .then( () => dispatch(logoutCurrentUser()))
}




