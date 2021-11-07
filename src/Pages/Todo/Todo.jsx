import React, { Component } from 'react'
import TodoItem from './TodoItem'
import './todo.css'

export default class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inputText: '',
            NewData: {
                id : null,
                title : '',
                completed : false
            },
            AllTaskData : [
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
        }
    }

    submitHandle(e){
        e.preventDefault()
    }

    inputData(e){
        //Get input text
        this.setState({
            inputText: e.target.value
        })

        console.log(this.state.inputText)
        
    }

    createNewData(){
        console.log(this.state.inputText)

        //Create new data from input
        // this.setState({
        //     NewData: {
        //         id : 1 + Math.random(),
        //         title: this.state.inputText,
        //         completed: false
        //     }
        // })

        //Append newData to ListData
        if (this.state.inputText === ''){
            alert (`input can't be empty`)
            return false
        } else{
            this.setState({
                AllTaskData: [...this.state.AllTaskData,
                    {
                        id : 1 + Math.random(),
                        title: this.state.inputText,
                        completed: false
                    }
                ]
            })
        }
        
        //Reset input box after add new data
        this.setState({
            inputText: ''
        })
    }

    deleteData = (id) =>{
        const data = this.state.AllTaskData.filter(c => c.id !== id)
        this.setState({
            AllTaskData : data
        })
    }
    

    render() {
        return (
            <div className='form-container'>
                <form onSubmit={this.submitHandle}>
                    <input type="text" value={this.state.inputText} onChange={(e)=>this.inputData(e)} />
                    <button className='btn-submit' type='submit' onClick={()=>this.createNewData()}>Submit</button>
                </form>
                <ul>
                    {this.state.AllTaskData.map((val)=>
                    <TodoItem key={val.id} data={val} delete={this.deleteData} />
                    )}
                </ul>
            </div>
        )
    }
}
