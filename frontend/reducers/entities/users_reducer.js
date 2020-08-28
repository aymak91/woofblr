import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../../actions/entities/user_actions';
import { merge } from 'lodash';

import { 
    RECEIVE_FOLLOW, 
    REMOVE_FOLLOW 
} from '../../actions/entities/follow_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    let follower;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { [action.user.id]: action.user });
        case RECEIVE_ALL_USERS:
            return merge({}, oldState, action.users);
        case RECEIVE_FOLLOW:

            newState = merge({}, oldState);
            follower = action.follow.follower_id;
            newState[follower].followings.push(action.follow.following_id);
            return newState;
        case REMOVE_FOLLOW:
            newState = merge({}, oldState);
            follower = action.follow.follower_id;
            const index = newState[follower].followings.indexOf(action.follow.following_id);
            newState[follower].followings.splice(index, 1);
            return newState;

        default:
            return oldState;
    }
}

export default usersReducer;