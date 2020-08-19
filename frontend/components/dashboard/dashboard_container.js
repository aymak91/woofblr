import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { deleteSession } from '../../actions/session_actions';

const mSTP = (state) => ({
});

const mDTP = (dispatch) => ({
     deleteSession: () => dispatch(deleteSession()),
});

export default connect(null, mDTP)(Dashboard);