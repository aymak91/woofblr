import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root'
import { deleteSession } from "./actions/session_actions";

window.deleteSession = deleteSession;
// window.currentUser = currentUser;

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  const root = document.getElementById("root");

  if (window.currentUser) {
    const preloadedState = {
        entities: {
            users: { [window.currentUser.id]: window.currentUser },
        },
        session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
} else {
    store = configureStore();
}

  // FOR TESTING ONLY
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // FOR TESTING ONLY

  ReactDOM.render(<Root store={ store } />, root);
});