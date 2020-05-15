import './styles.scss';

import React from 'react';
import Message from '../Message';

const Messages = ({ messages, removeMessage }) => (
  <div className="messages">
    {messages.map((message) => (
      <div key={message.id}>
        <Message message={message} removeMessage={removeMessage} />
      </div>
    ))}
  </div>
);

export default Messages;
  