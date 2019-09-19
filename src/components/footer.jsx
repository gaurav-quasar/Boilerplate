import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          background: 'darkgrey',
          height: 150,
          zIndex: 0,
          width: '98%',
          margin: '0 auto 0 auto',
          borderRadius: '4px',
        }}
      >
        <div style={{ textAlign: 'center', marginTop: 30, paddingTop: 30 }}>
          <span style={{ paddingLeft: 10 }}>
            <SocialIcon url="https://www.linkedin.com/in/gaurav-quasar/" />
          </span>
          <span style={{ paddingLeft: 10 }}>
            <SocialIcon url="https://github.com/gaurav-quasar" />
          </span>
          <span style={{ paddingLeft: 10 }}>
            <SocialIcon url="https://www.facebook.com/garry.quasar" />
          </span>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 30, marginTop: 30 }}>
          <p>© 2019 Gaurav Gupta</p>
        </div>
      </div>
    );
  }
}

export default Footer;
