import React from 'react'
import styles from './Items.module.css'

export default function Items({task}) {
    return (
        <button className={styles.capsule} onClick={()=>this}>
            <p className={styles.text}>{task.title}</p>
        </button>
    )
}
