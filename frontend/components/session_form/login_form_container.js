import { connect } from 'react-redux';
import { createSession, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form'

const mSTP = (state) => ({
     errors: state.errors.session,
     formType: 'Login',
});

const mDTP = (dispatch) => ({
     action: (userForm) => dispatch(createSession(userForm)),
     clearSessionErrors: (errors) => dispatch(clearSessionErrors(errors)),
     createSession: (userForm) => dispatch(createSession(userForm)),
});

export default connect(mSTP, mDTP)(SessionForm);