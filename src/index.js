import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';

export default class GymRoutineApp extends Component {

  render() {
    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      // <Provider store={store}>
        <Router />
      // </Provider>
    );
  }


}
