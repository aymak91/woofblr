import { connect } from 'react-redux';
import { createPost } from '../../actions/entities/post_actions';
import PostForm from './post_form';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => {
    const currentUser = state.entities.users[state.session.id];
    return ({
        post: {title: "", content: "", post_type: "text", author_id: currentUser.id},
        formType: "POST",
        currentUser: currentUser
    });
}

const mdp = (dispatch) => {
    return ({
        action: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    });
}

export default connect(msp, mdp)(PostForm)