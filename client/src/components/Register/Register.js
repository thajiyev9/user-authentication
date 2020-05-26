import React, { useState } from "react";
import styles from "./Register.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Components
import Input from "../Input/Input";
import Button from "../Button/Button";

// Validator
import { isEmpty, checkRegistration } from "../../validator";

export default function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleChange = (e) => {
    switch (e.target.name) {
      case "full_name":
        setName(e.target.value);
        break;
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
    const errors = checkRegistration(name, email, password);
    if (!isEmpty(errors)) {
      setError(errors);
      return;
    }
    const newUser = {
      name,
      email,
      password,
    };
    axios
      .post("/api/user/register", newUser)
      .then((user) => {
        history.push("/login");
      })
      .catch((error) => setError(error.response.data));
  };

  return (
    <div className={styles.Register}>
      <div className={styles.container}>
        <span className={styles.title}>Sign up</span>
      </div>
      <Input
        placeholder="Full name"
        name="full_name"
        onChange={handleChange}
        error={error.name}
      />
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
