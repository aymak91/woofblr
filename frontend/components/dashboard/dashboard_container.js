import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { deleteSession } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const mSTP = (state) => ({
     currentUser: state.session.currentUser,    
     posts: Object.values(state.entities.posts),
     allPosts: state.entities.posts,
});

const mDTP = (dispatch) => ({
     deleteSession: () => dispatch(deleteSession()),
     fetchAllUsers: () => dispatch(fetchAllUsers()),
     openModal: (modal, postId) => dispatch(openModal(modal, postId))
});

export default connect(mSTP, mDTP)(Dashboard);