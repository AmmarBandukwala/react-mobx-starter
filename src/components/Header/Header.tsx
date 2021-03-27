import React from 'react';

import Navigation from '../Navigation/Navigation.lazy';

const Header: React.FC = (props) => (
  <header>
    <Navigation {...props} />
  </header>
);

export default Header;
