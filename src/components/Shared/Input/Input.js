import './styles.scss';

import React from 'react';
import { INPUT_BUTTON_SEND_TEXT } from '../../../assets/constants';

const Input = ({ setMessage, sendMessage, message }) => (
    <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={e => sendMessage(e)}>{INPUT_BUTTON_SEND_TEXT}</button>
    </form>
);
  
export default Input;