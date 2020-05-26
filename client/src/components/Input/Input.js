import React from "react";
import styles from "./Input.module.css";

export default function Input({ placeholder, name, onChange, error }) {
  return (
    <div className={styles.Input}>
      <span className={styles.error}>{error}</span>
      <input className={styles.input} placeholder={placeholder} name={name} onChange={onChange} />
    </div>
  );
}
