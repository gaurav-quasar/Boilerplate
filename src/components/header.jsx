import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import HeaderItem from 'header_item';
import SRContent1 from 'sr_content_1';
import SRContent2 from 'sr_content_2';

const tabs = {
  sr1: {
    label: 'Sample Route 1',
    to: '/sr1',
    key: 'sr1',
    icon: 'fa-star'
  },
  sr2: {
    label: 'Sample Route 2',
    to: '/sr2',
    key: 'sr2',
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
    this.state = { selectedTab: tabs[selectedTab] ? tabs[selectedTab].key : tabs.sr1.key };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      const selectedTab = newProps.location.pathname.replace(/\//g, '');
      this.setState({ selectedTab: tabs[selectedTab] ? tabs[selectedTab].key : tabs.sr1.key });
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
          <Route path="/" exact component={SRContent1} />
          <Route path="/sr1" component={SRContent1} />
          <Route path="/sr2" component={SRContent2} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Header);
