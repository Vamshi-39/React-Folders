import React, {PureComponent } from 'react'

export default class Pure extends PureComponent {
    constructor(){
        super()
        this.state={
            name:"Vamshi"
        }   
    }
  render() {
    console.log("Pure Copmonent Rendering......")
    return (
        <>
   <h6 style={{fontFamily:"cursive",fontSize:"50px",fontWeight:800}}>{this.state.name}</h6>
        <button onClick={()=>this.setState({name:"PURE"})}>CLICK</button>
        
        </>
    )
  }
}
