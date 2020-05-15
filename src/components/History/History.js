import React from 'react';
import Messages from '../Shared/Messages';
import useLocalStorage from '../../hooks/useLocalStorage';
import { MESSAGES } from '../../assets/constants';

const History = () => {
  const [localMessages] = useLocalStorage(MESSAGES, []);
  return (
    <div className="outerContainer">
      <div className="container">
        <Messages messages={localMessages} />
      </div>
    </div>
  );
  
}

export default History;