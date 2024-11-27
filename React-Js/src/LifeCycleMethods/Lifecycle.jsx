import { Component } from "react";
import Unmount from "./Unmount";
class Lifecycle extends Component{
    constructor(){
        super()
        console.log("IM CONSTRUCTOR METHOD")
        this.state={
            name:"LIFECYCLE"
        }
    }
    componentDidMount(){
        console.log("IM CPMPONENTDIDMOUNT METHOD")
    }
    componentDidUpdate(){
        console.log("IM COMPONENTDIDUPDATE METHOD")
    }
    render(){
        console.log("IM RENDER METHOD")
        return <>
        <h3>{this.state.name}</h3>
        {
            this.state.name == "LIFECYCLE" ? <Unmount /> :<></>
        }
        <br /><br />
        <button onClick={()=>this.setState({name:"ELCYCEFIL"})}>CLICK TO CHANGE STATE</button>
        </>
    }
}
export default Lifecycle
