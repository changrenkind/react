import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import AppRouter from './router';



class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));