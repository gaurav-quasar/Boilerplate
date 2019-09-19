import React from 'react';
import { Link } from 'react-router-dom';

const HeaderItem = ({
  selectedTab, itemKey, icon, label, to,
}) => (
  <Link to={to} className="col link">
    <button
      type="button"
      id={`header-item-${itemKey}`}
      className={`btn btn-block ${selectedTab === itemKey ? 'btn-primary' : 'btn-light'}`}
    >
      <span className={`fas ${icon}`} aria-hidden="true" />
      <div className="hidden-xs">{label}</div>
    </button>
  </Link>
);

export default HeaderItem;
