import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from 'error_boundary';
import Header from 'header';
import Footer from 'footer';

const App = ({ store }) => (
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <div style={{ fontFamily: 'Open Sans, sans-serif' }}>
          <Header />
          <Footer />
        </div>
      </Router>
    </Provider>
  </ErrorBoundary>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired
};

export default App;
