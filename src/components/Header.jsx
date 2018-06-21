import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ logo }) => (
  <div className="hackernews-app-header">
    <img src={logo} className="hackernews-app-logo" alt="logo" />
    <h2>Welcome to Eleven&apos;s hacker News</h2>
  </div>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
}

export default Header;
