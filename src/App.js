import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import store from './store/index';
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
      </Provider>
    );
  }
}
