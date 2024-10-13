
import React, { useState, useEffect } from 'react';
import socket from './socket';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default MessageList;
