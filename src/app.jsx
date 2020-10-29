import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from 'error_boundary';
import Header from 'header';
import Footer from 'footer';

const App = () => (
  <ErrorBoundary>
    <Router>
      <div style={{ fontFamily: 'Open Sans, sans-serif' }}>
        <Header />
        <Footer />
      </div>
    </Router>
  </ErrorBoundary>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired
};

export default App;
