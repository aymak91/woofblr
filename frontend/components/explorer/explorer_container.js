import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/entities/post_actions';
import Explorer from './explorer';
import { follow, unfollow, fetchFollows } from '../../actions/entities/follow_actions';
// import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id],
        // likes: currentUser.likes
    };
}

const mDTP = (dispatch) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: (postId) => dispatch(deletePost(postId)),
        follow: (user) => dispatch(follow(user)),
        unfollow: (user) => dispatch(unfollow(user)),
    });
}

export default connect(mSTP, mDTP)(Explorer)