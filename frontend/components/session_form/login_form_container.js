import { connect } from 'react-redux';
import { createSession  } from '../../actions/session_actions';
import SessionForm from './session_form'

const mSTP = (state) => ({
     formType: 'Login',
});

const mDTP = (dispatch) => ({
     createSession: (userForm) => dispatch(createSession(userForm)),
});

export default connect(mSTP, mDTP)(SessionForm);