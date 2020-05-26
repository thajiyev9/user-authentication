import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';

import { useHistory } from "react-router-dom";

import Input from "../Input/Input";
import Button from "../Button/Button";

import {isEmpty, checkLogin} from '../../validator'


import {login} from '../../redux/action'
export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };

  const handleClick = (e) => {
    setError({});
    setError(checkLogin(email, password));
    const user = {
      email,
      password
    }
    if(isEmpty(error)) {
      axios.post('/api/user/login', user)
      .then(data => {
        localStorage.setItem('data', JSON.stringify(data.data))
        login(dispatch, data.data)
        history.push("/private");
      })
      
      .catch(err => console.log(err.response.data))
    }
    };

  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <span className={styles.title}>Login</span>
      </div>
      <Input
        placeholder="Email address"
        name="email"
        onChange={handleChange}
        error={error.email}
      />
      <Input
        placeholder="Password"
        name="password"
        onChange={handleChange}
        error={error.password}
      />
      <Button onClick={handleClick} />
    </div>
  );
}
