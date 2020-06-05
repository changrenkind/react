import React from 'react';
import ReactDom from 'react-dom';

import AppRouter from './router';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));