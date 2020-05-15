import './styles.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <>
    <NavLink to="/chat" className="menuItem" activeClassName="active">
      Chat
    </NavLink>
    <NavLink to="/history" className="menuItem" activeClassName="active">
      History
    </NavLink>
  </>
);

export default Menu;