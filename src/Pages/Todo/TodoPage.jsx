import React from 'react'
import Header from './components/Header'
import Items from './components/Items'


export default function TodoPage({tasks}) {
    return (
        <>
            <Header/>
            {tasks.map(task => <Items task={task}/>)}
        </>
    )
}
