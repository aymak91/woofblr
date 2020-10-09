import { connect } from 'react-redux';
import ExplorerIndexItem from './explorer_index_item';
import { openModal } from '../../actions/modal_actions';
import { deletePost } from '../../actions/entities/post_actions';
import { likePost, unlikePost } from '../../actions/entities/like_actions';

const mSTP = (state, ownProps) => {
    const post = ownProps.post
    const posts = state.entities.posts
    const currentUser = state.entities.users[state.session.id];
    const authorId = ownProps.post.author.id;

    return ({
        post: post,
        posts,
        authorId: authorId,
        currentUser: currentUser,
        users: state.entities.users

    })
}

const mDTP = (dispatch) => {
    return ({
        openModal: (modal, postId) => dispatch(openModal(modal, postId)),
        deletePost: (id) => dispatch(deletePost(id)),
        likePost: (postId, userId) => dispatch(likePost(postId, userId)),
        unlikePost: (postId) => dispatch(unlikePost(postId)),
    });
}

export default connect(mSTP, mDTP)(ExplorerIndexItem)