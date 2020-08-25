import { 
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nulSession = {id: null};

const sessionReducer = (oldState = _nulSession, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState['id'] = action.user.id;
            return nextState;
        case LOGOUT_CURRENT_USER:
            delete nextState['id'];
            return nextState;
        default:
            return oldState;
    }
};

export default sessionReducer;