import React, { Component } from 'react'
import './todoitem.css'

export default class TodoItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title : {textDecoration: 'none'},
            checkDone : false,
            completed : this.props.data.completed
        }
    }

    componentDidMount(){
        if (this.state.completed === true){
            this.setState({
                title : {textDecoration: 'line-through', color: '#cecece'},
                checkDone : true
            })
        } else if (this.state.completed === false) {
            this.setState({
                title : {textDecoration: 'none'},
                checkDone : false
            })
        }
    }
    
    taskDone(e){
        if (e.target.checked === true){
            this.setState({
                completed : false,
                title : {textDecoration: 'line-through', color: '#cecece'},
                checkDone : true
            })
        } else if (e.target.checked === false){
            this.setState({
                completed : true,
                title : {textDecoration: 'none'},
                checkDone : false
            })
        }
    }

    render() {
        return (
        <div>
            <li>
                <div style={this.state.title}>
                    <input type="checkbox" checked={this.state.checkDone} onChange={(e)=>this.taskDone(e)}/>
                    {this.props.data.title}
                </div>
                <button onClick={()=>{this.props.delete(this.props.data.id)}}>Delete</button>
            </li>
            <hr></hr>
        </div>
        )
    }
}
