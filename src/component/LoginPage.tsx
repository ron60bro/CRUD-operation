import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react'
import { ILogin } from './Employee.type';
import { useNavigate } from "react-router-dom";
import "./login.style.css"


export const LoginPage = () => {
    const navigate=useNavigate()
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);

  function handleSubmit(event:any) {
    event.preventDefault();
    console.log(username,password);
    window.localStorage.setItem("login",username);
    window.localStorage.setItem("password",password);
    navigate("/home")
    setUsername('');
    setPassword('');
    setIsDisabled(true);
  }

  function handleChangeUsername(event:any) {
    setUsername(event.target.value.toLowerCase());
  }

  function handleChangePassword(event:any) {
    setPassword(event.target.value.toLowerCase());
  }

  useEffect(() => {
    if (password !== '' && username !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [username, password]);

  return (
    <>
    <article className="article-header">
        <header>
          <h1>Employee Management App</h1>
        </header>
        
      </article>
      <form onSubmit={handleSubmit}>

<div className='login'>
<div >
  <label htmlFor="username-input">Username:</label>
  <input
    id="username-input"
    type="text"
    onChange={handleChangeUsername}
    value={username}
  />
</div>
<div>
  <label htmlFor="password-input">Password:</label>
  <input
    id="password-input"
    type="password"
    onChange={handleChangePassword}
    value={password}
  />
</div>
<button id="login-button" type="submit" disabled={isDisabled}>
  Submit
</button>
</div>
</form></>
   
  );
};

export default LoginPage;

