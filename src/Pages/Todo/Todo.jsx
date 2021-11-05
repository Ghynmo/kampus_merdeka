import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            placeholder: 'Add task here...',
            inputText: '',
            printText: ['jack'],
            isChecked: false
        }
    }

    submitHandle(e){
        e.preventDefault()
    }

    changeText(e){
        this.setState({
            inputText: e.target.value
        })
    }

    printText(){
        this.setState({
            printText: [...this.state.printText,this.state.inputText]
        })
        
        this.setState({
            inputText: ''
        })
    }
    
    checkboxHandle(e){
        if (e.target.checked === true){
            this.setState({
                isChecked: 'true'
            })
        } else{
            this.setState({
                isChecked: 'false'
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandle}>
                    <input type="text" value={this.state.inputText} onChange={(e)=>this.changeText(e)} />
                    <button type='submit' onClick={()=>this.printText()}>Submit</button>
                </form>
                <ul>
                    {console.log(this.state.inputText)}
                    {this.state.printText.map((val,i)=>
                    <li key={i}>
                        <input type="checkbox" onClick={(e)=>this.checkboxHandle(e)}/>
                        {this.state.isChecked}
                        {val}
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}
