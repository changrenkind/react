import React from 'react';
import ReactDom from 'react-dom';

import App from './App.js';

ReactDom.render(<App />, document.getElementById('app'));

// 热替换代码
if (module.hot) {
  module.hot.accept();
}
