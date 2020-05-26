import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../redux/action";
import {useDispatch} from 'react-redux'

export default function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.isAuthenticated);

  return (
    <div className={styles.Header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to="/home">Home</Link>
          <Link to="/private">Private</Link>
        </div>
        <div className={styles.right}>
          {state.isAuthenticated ? (
            <>
              <span className={styles.name}>{state.user.user.name}</span>
              <span className={styles.logout} onClick={(e) => logout(dispatch)}>
                Logout
              </span>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
