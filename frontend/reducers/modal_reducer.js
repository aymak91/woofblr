import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default (state = null, action) => {
    Object.freeze(state);
    switch(action.type) {
        case OPEN_MODAL:
            return {modal: action.modal, postId: action.postId};
        case CLOSE_MODAL:
            return  null;
        default:
            return state;
    }
};