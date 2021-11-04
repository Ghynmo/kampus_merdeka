import React from 'react'
import styles from './Header.module.css'

export default function Header() {

    function eventClick() {
        const theTitle = document.querySelector('div h1');
        theTitle.style.color = 'red';
    }


    return (
        <div className={styles.navigation} onClick={() => eventClick()}>
            <h1>To Do App</h1>
        </div>
    )
}
