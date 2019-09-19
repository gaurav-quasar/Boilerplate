import React from 'react';
import ReactDOM from 'react-dom';

import 'app_style';
// import 'bootstrap.min';

import configureStore from 'configure_store';
import App from './app';

console.warn(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  window.console.log = () => {};
  window.console.debug = () => {};
  window.console.info = () => {};
} else if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
