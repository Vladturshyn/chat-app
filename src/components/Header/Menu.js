import './styles.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { CHAT_LINK,HISTORY_LINK } from '../../assets/constants';

const Menu = () => (
  <>
    <NavLink to="/chat" className="menuItem" activeClassName="active">
      {CHAT_LINK}
    </NavLink>
    <NavLink to="/history" className="menuItem" activeClassName="active">
      {HISTORY_LINK}
    </NavLink>
  </>
);

export default Menu;