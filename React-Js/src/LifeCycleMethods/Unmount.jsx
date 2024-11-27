import React, { Component } from 'react'

 class Unmount extends Component {
  componentWillUnmount(){
    console.log("IM COMPONENTWILLUNMOUNT METHOD")
  }
  render() {
    return (
      <h1>Unmount</h1>
    )
  }
}
export default Unmount
