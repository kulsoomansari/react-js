import React from "react";
class Button extends React.Component{
    constructor(props){
        super(props)
        this.state={
            backgroundColor: 'white'
        }
    }
    handleOn = ()=>{
        this.setState({backgroundColor: 'black'})
    }
    handleOff = ()=>{
        this.setState({backgroundColor: 'blue'})
    }
    render(){
       console.log(this.state)
        return(
            <div style={{backgroundColor: this.state.backgroundColor}}>
            <button onClick={this.handleOn}>on</button>
            <button onClick={this.handleOff}>off</button>
            </div> 
        )
    }
}
export default Button