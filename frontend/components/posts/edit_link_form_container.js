import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost, deletePost } from '../../actions/entities/post_actions';
import LinkForm from './link_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const postId = ownProps.postId;
    const posts = state.entities.posts
    const post = posts[postId];
    return ({
        post: post,
        currentUser: currentUser,
        formType: "Save"
    })
}

const mDTP = (dispatch) => {
    return ({
        action: (post) => dispatch(updatePost(post)),
        deletePost: (id) => dispatch(deletePost(id)),
        closeModal: () => dispatch(closeModal())
    })
}

export default withRouter(connect(mSTP, mDTP)(LinkForm));