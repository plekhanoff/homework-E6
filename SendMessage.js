
import React, { useState } from 'react';
import socket from './socket';

const SendMessage = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение"
      />
      <button onClick={handleSendMessage}>Отправить</button>
    </div>
  );
};

export default SendMessage;
