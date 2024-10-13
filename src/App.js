import logo from './logo.svg';
import './App.css';
import React from 'react';
import RegisterApp from './RegisterForm';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const mainApp = () => {
  return (
    <div>
      <h1>Register</h1>
      <RegisterApp />
    </div>
  );
};
export default mainApp;
// const express = require('express');
// const app = express();
// const registerRoute = require('./routes/register');

// app.use('/register', registerRoute);

