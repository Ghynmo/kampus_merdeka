export default function Header({text}) {
    return (
    <div style={{background: "grey", padding:"5px 10px", marginBottom:20}}>
        <h1>{text}</h1>
    </div>
    )
};

// import React, { Component } from 'react'

// export default class Header extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             makanan : 'bakso'
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h2>{this.state.makanan}</h2>
//                 <button onClick={()=>this.setState()}></button>
//             </div>
//         )
//     }
// }
