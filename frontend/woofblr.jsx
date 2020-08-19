import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");

  // FOR TESTING ONLY
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // FOR TESTING ONLY


  // ReactDOM.render('ummblr', root);
  ReactDOM.render(<Root store={ store } />, root);
});