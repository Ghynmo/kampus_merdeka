import React from 'react'
import styles from './Items.module.css'

export default function Items({task}) {
    return (
        <button className={styles.capsule}>
            {task.completed ? (
                <p className={styles.textDone}>{task.title}</p>
            ) : (
                <p className={styles.textUndone}>{task.title}</p>
            )}
        </button>
    )
}
