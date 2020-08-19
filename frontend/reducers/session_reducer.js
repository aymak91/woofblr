import { 
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nulSession = {currentUser: null};

const sessionReducer = (oldState = _nulSession, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState['currentUser'] = action.user.id;
            return nextState;
        case LOGOUT_CURRENT_USER:
            delete nextState['currentUser'];
            return nextState;
        default:
            return oldState;
    }
};

export default sessionReducer;