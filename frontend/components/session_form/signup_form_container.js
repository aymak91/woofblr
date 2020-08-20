import { connect } from 'react-redux';
import { createNewUser, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => ({
      errors: state.errors.session,
      formType: "Sign Up",
});
const mDTP = (dispatch) => ({
     action: (userForm) => dispatch(createNewUser(userForm)),
     clearSessionErrors: (errors) => dispatch(clearSessionErrors(errors)),
});

export default connect(mSTP, mDTP)(SessionForm);