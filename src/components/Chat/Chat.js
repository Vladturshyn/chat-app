import React, { useState } from 'react';
import Input from '../Shared/Input';
import Messages from '../Shared/Messages';
import useLocalStorage from '../../hooks/useLocalStorage';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [localMessages, setLocalMessages] = useLocalStorage('messages', []);

  const sendMessage = (event) => {
    event.preventDefault();
    const messageId = Date.now().toString();
    setLocalMessages([...localMessages, { text: message, id: messageId }]);
    setMessage('');
  };

  const removeMessage = (id) => {
    const removeMessagesText = localMessages.map((message) => {
      if (message.id === id) {
        return { text: 'Message was removed', id: id };
      }
      return message;
    });

    setLocalMessages(removeMessagesText);
  };

  const normalizedMessages =
    localMessages.length <= 10
      ? localMessages
      : localMessages.slice(localMessages.length - 10, localMessages.length);
  return (
    <div className="outerContainer">
      <div className="container">
        <Messages messages={normalizedMessages} removeMessage={removeMessage} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;