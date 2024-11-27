import React, { Component } from 'react'

 class Fallback extends Component {
    constructor(){
        super()
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(){
        return {
            hasError:true
        }
    }
  render() {
    return (
      <div>
        {this.state.hasError?<h1>SOMETHING WENT WRONG</h1>:this.props.children}
      </div>
    )
  }
}
export default Fallback