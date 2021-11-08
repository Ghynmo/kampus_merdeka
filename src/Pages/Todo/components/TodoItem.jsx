import React, { useState, useEffect } from 'react'
import './todoitem.css'

function TodoItem (props) {

    const [title, settitle] = useState({textDecoration: 'none'})
    const [checkDone, setcheckDone] = useState(false)
    const [completed, setcompleted] = useState(props.data.completed)

    useEffect(() => {
        console.log('useEffect')
        if (completed === true){
            settitle({textDecoration: 'line-through', color: '#cecece'})
            setcheckDone(true)

        } else if (completed === false) {
            settitle({textDecoration: 'none'})
            setcheckDone(false)
        }

    },[])
    
    const taskDone = (e) => {
        console.log('taskDone',title,checkDone,completed)

        if (e.target.checked === true){
            setcompleted(false)
            settitle({textDecoration: 'line-through', color: '#cecece'})
            setcheckDone(true)

        } else if (e.target.checked === false){
            setcompleted(true)
            settitle({textDecoration: 'none'})
            setcheckDone(false)
        }
    }
    return (
    <div>
        <li>
            <div style={title}>
                <input type="checkbox" checked={checkDone} onChange={(e)=>taskDone(e)}/>
                {props.data.title}
            </div>
            <button className="btn-delete" onClick={()=>{props.delete(props.data.id)}}>Delete</button>
        </li>
        <hr></hr>
    </div>
    )
}

export default TodoItem
