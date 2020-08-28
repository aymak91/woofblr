import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { deleteSession } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchAllUsers } from '../../actions/entities/user_actions';
import { follow, unfollow } from '../../actions/entities/follow_actions';


const mSTP = (state) => ({
     currentUser: state.session.currentUser,    
     posts: Object.values(state.entities.posts),
     allPosts: state.entities.posts,
     allUsers: Object.values(state.entities.users),
});

const mDTP = (dispatch) => ({
     deleteSession: () => dispatch(deleteSession()),
     fetchAllUsers: () => dispatch(fetchAllUsers()),
     openModal: (modal, postId) => dispatch(openModal(modal, postId)),
     follow: (user) => dispatch(follow(user)),
     unfollow: (user) => dispatch(unfollow(user)),
});

export default connect(mSTP, mDTP)(Dashboard);