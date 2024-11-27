import React, {Component } from 'react'

export default class Regular extends Component {
    constructor(){
        super()
        this.state={
            name:"Vamshi"
        }
    }
  render() {
    console.log("Regular Component Rendering......")
    return (
        <>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"REGULAR"})}>CLICK</button>
        </>
    )
  }
}
