import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/entities/post_actions';
import PostIndex from './post_index';
import { follow, unfollow, fetchFollows } from '../../actions/entities/follow_actions';
// import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    const currentUser = state.entities.users[state.session.id];
    return ({
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id],
        followings: currentUser.followings
    });
}

const mDTP = (dispatch) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: (postId) => dispatch(deletePost(postId)),
        follow: (user) => dispatch(follow(user)),
        unfollow: (user) => dispatch(unfollow(user)),
    });
}

export default connect(mSTP, mDTP)(PostIndex)