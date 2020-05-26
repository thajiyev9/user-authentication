import React from 'react'
import styles from './Button.module.css'
export default function  Button({onClick}) {
    return (
        <div className={styles.Button}>
            <button onClick={onClick}>Submit</button>
        </div>
    )
}
