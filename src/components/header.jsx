import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import HeaderItem from 'header_item';
import SP1 from 'sp1';
import SP2 from 'sp2';

const tabs = {
  sp1: {
    label: 'Sample Route 1',
    to: '/sp1',
    key: 'sp1',
    icon: 'fa-star'
  },
  sp2: {
    label: 'Sample Route 2',
    to: '/sp2',
    key: 'sp2',
    icon: 'fa-code'
  }
};

const NoMatch = ({ location }) => (
  <div style={{ margin: 150 }}>
    No Match for
    <code>{location.pathname}</code>
  </div>
);

class Header extends Component {
  constructor(props) {
    super(props);
    const selectedTab = props.location.pathname.replace(/\//g, '');
    this.state = { selectedTab: tabs[selectedTab] ? tabs[selectedTab].key : tabs.sp1.key };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      const selectedTab = newProps.location.pathname.replace(/\//g, '');
      this.setState({ selectedTab: tabs[selectedTab] ? tabs[selectedTab].key : tabs.sp1.key });
    }
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <div
        style={{
          paddingBottom: 100,
          fontFamily: "'Open Sans', 'sans-serif'",
          fontSize: 16,
          width: '100%'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
            <div
              className="btn-pref btn-block btn-group btn-group-justified btn-group-lg btn-group-sm btn-group-xs row"
              role="group"
              aria-label="..."
            >
              {Object.values(tabs).map(tab => (
                <HeaderItem
                  selectedTab={selectedTab}
                  itemKey={tab.key}
                  key={tab.key}
                  icon={tab.icon}
                  label={tab.label}
                  to={tab.to}
                />
              ))}
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={SP1} />
          <Route path="/sp1" component={SP1} />
          <Route path="/sp2" component={SP2} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Header);
