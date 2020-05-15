import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <Link
      to='/chat'
    >
      Chat
    </Link>
    <Link
      to='/history'
    >
      History
    </Link>
  </div>
);

export default Menu;