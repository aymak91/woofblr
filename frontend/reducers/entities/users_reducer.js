import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../../actions/entities/user_actions';
import { merge } from 'lodash';

// import { 
//     RECEIVE_USER_FOLLOWS, 
//     RECEIVE_FOLLOW, 
//     REMOVE_FOLLOW 
// } from '../../actions/entities/follow_actions';

// import { RECEIVE_LIKE ,REMOVE_LIKE } from '../../actions/entities/like_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // let newState;
    // let key;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            
            return merge({}, oldState, { [action.user.id]: action.user });
        case RECEIVE_ALL_USERS:
            
            return merge({}, oldState, action.users);
        // case RECEIVE_FOLLOW:
        //     newState = merge({}, oldState);
        //     key = action.follow.follower_id;
        //     newState[key].followings.push(action.follow.following_id);
        //     return newState;
        // case REMOVE_FOLLOW:
        //     newState = merge({}, oldState);
        //     key = action.follow.follower_id;
        //     const index = newState[key].followings.indexOf(action.follow.following_id);
        //     newState[key].followings.splice(index, 1);
        //     return newState;

        default:
            return oldState;
    }
}

export default usersReducer;