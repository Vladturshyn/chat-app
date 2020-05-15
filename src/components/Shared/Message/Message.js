import './styles.scss';

import React from 'react';

const Message = ({ message: { text, id }, removeMessage = null }) => (
  <div className="messageContainer justifyStart">
    <div className="messageBox backgroundLight">
      <p className="messageText colorDark">{text}</p>
      {removeMessage && (
        <button className="messageRemoveBtn" onClick={() => removeMessage(id)}>
          x
        </button>
      )}
    </div>
  </div>
);

export default Message;

