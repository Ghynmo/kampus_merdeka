import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            newItem : "",
            list : []
        }
    }

    updateInput(key,value){
        this.setState({
            [key]: value
        })
    }

    AddtoList(){
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        }
        const list = [...this.state.list]
        list.push(newItem)
        this.setState({list, newItem:""})
    }

    DeleteItem(id){
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({ list: updatedList });
    }

    //Render
    render() {
        return (
            <div>
                <input type="text" placeholder="Add to do.." value={this.state.newItem} onChange={e=>this.updateInput("newItem",e.target.value)}/>
                <button onClick={()=>this.AddtoList()}>Submit</button>
                <ul>
                    {this.state.list.map((e) => { return (
                        <li key={e.id}>
                            <input type="checkbox"/>
                            {e.value}
                            <button onClick={this.DeleteItem(e.id)}>Delete</button>
                        </li>
                    )}
                    )}
                </ul>
            </div>
        )
    }
}

export default Todo
