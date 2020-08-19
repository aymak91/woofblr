import { connect } from 'react-redux';
import { NavBar } from './nav_bar';
import { deleteSession } from '../../actions/session_actions';

const mSTP = (state) => ({
     currentUser: state.session.currentUser,
});

const mDTP = (dispatch) => ({
     deleteSession: () => dispatch(deleteSession()),
});

export default connect(mSTP, mDTP)(NavBar);