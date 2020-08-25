import { connect } from 'react-redux';
import Navbar from './navbar';
import { deleteSession } from '../../actions/session_actions';

const mSTP = (state) => ({
     currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
     deleteSession: () => dispatch(deleteSession()),
     // openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Navbar);