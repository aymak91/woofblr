import {connect} from 'react-redux';
import Index from './index';
import { openModal } from '../../actions/modal_actions';


const mSTP = (state) => ({
    currentUser: state.session.currentUser,
});

const mDTP = dispatch => ({
    // logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  });

export default connect(mSTP, mDTP)(Index);