import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { setConfig } from 'react-hot-loader';

import '@/less/public.less';
import store from './store/index';
import routes from './routes/index.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
      </Provider>
    );
  }
}
setConfig({
  trackTailUpdates: false, // 添加这个配置才能热更新 lazy 组件
  logLevel: 'debug'
});
export default hot(module)(App);
