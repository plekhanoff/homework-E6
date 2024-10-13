import React, { useState } from 'react';
import axios from 'axios';

const RegisterApp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.length < 3 || password.length < 8) {
      setError('Имя пользователя должно быть не менее 3 символов, а пароль - не менее 8 символов');
      return;
    }

    try {
      const response = await axios.post('/register', {
        username,
        password,
      });

      console.log('Registering user:', response.data);
    } catch (error) {
      setError('Ошибка регистрации');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Введите ваше имя пользователя" />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Введите паролле" />
      <br />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterApp;

const socket = new WebSocket('ws://localhost:3000/ws');

socket.onerror = (event) => {
  console.error('Ошибка подключения WebSocket:', event);
  alert('Не удалось подключиться к серверу WebSocket. Пожалуйста, проверьте настройки сервера.');
};

socket.onopen = () => {
  console.log('Подключение WebSocket установлено');
};

socket.onclose = (event) => {
  console.log('Подключение WebSocket закрыто:', event);
};

socket.onmessage = (event) => {
  console.log('Сообщение от сервера:', event.data);
};

