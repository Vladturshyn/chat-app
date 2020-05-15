import React from 'react';
import Messages from '../Shared/Messages';
import useLocalStorage from '../../hooks/useLocalStorage';

const History = () => {
  const [localMessages] = useLocalStorage('messages', []);
  return (
    <div className="outerContainer">
      <div className="container">
        <Messages messages={localMessages} />
      </div>
    </div>
  );
  
}

export default History;