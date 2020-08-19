import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => ({
      formType: "Sign Up",
});
const mDTP = (dispatch) => ({
     createNewUser: (userForm) => dispatch(createNewUser(userForm)),
});

export default connect(mSTP, mDTP)(SessionForm);