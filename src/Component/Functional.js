function Hello()
{
    return(
        <div><h1>Worldddd</h1></div>
    )
}
function World()
{
    return(
        <div>Hellooo <Hello /></div>
    )
}
export default World



import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    handleclick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {

    if(this.state.count===3){
        throw new Error('crashed code re write again')
    }
    return (
      <div>
      <h2>count is:{this.state.count}</h2>
<button onClick={this.handleclick}>clicke me</button>
      </div>
    )
  }
}
export default Counter;


import React, { Component } from 'react'

 class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             haserror:false,
             
        }
    }
    
    componentDidCatch(error,errorInfo)
    {
        this.setState({
            haserror:true,
            
        })
    }
  render() {
    
           if(this.state.haserror){
            return <h3>something went wrong</h3>
           }
    return this.props.children;
  }
sathya ssp2:47 PM
}
export default ErrorBoundary;
odv-vjoj-pjs


import React from "react";
import { Component } from "react";

class InMount extends Component{
constructor(props) {
    super(props)

    this.state = {
         name:"sathya"
    }
    console.log("constructor called")
}


    componentDidMount(){
        console.log("component did mount only once after render")
    }
    render(){

        console.log("render called")
        return(
            <div>
            <h2>welcome to lifecycle</h2>
            
            </div>
        )
    }
}
export default InMount;