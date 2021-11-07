import React, { useState } from "react";
import TodoItem from './TodoItem'
import './todo.css'

const mainData = [
    {
        id : 1,
        title : 'Mengerjakan Exercise',
        completed : false
    },
    {
        id : 2,
        title : 'Mengerjakan Assignment',
        completed : true
    },
]

function Todo (){
    const [inputText, setinputText] = useState('')
    const [AllTaskData, setAllTaskData] = useState(mainData)

    const inputData = (e) => {
        setinputText(e.target.value)
    }

    const createNewData = (e) => {
        e.preventDefault()
        
        if (inputText === ''){
            alert (`input can't be empty`)
            return false
        } else{
            setAllTaskData([...AllTaskData,{
                id : 1 + Math.random(),
                title: inputText,
                completed: false
            }])
        }
        
        setinputText('')
    }

    const deleteData = (id) =>{
        const data = AllTaskData.filter(c => c.id !== id)
        setAllTaskData(data)
    }
    
    return (
        <div className='form-container'>
            <form>
                <input type="text" value={inputText} onChange={(e)=>inputData(e)} />
                <button className='btn-submit' type='submit' onClick={(e)=>createNewData(e)}>Submit</button>
            </form>
            <ul>
                {AllTaskData.map((val)=>
                <TodoItem key={val.id} data={val} delete={deleteData} />
                )}
            </ul>
        </div>
    )
}

export default Todo