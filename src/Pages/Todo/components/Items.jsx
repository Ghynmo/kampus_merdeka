import React from 'react'
import styles from './Items.module.css'

export default function Items({task}) {

    const taskDone = (isCompleted) =>{
        if (isCompleted){
            console.log("Undone")
        } else{
            console.log("Done")
        }
    }

    return (
        <button className={styles.capsule} onClick={() => {
            taskDone(task.completed)
        }}>
            {task.title}
        </button>
    )
}
