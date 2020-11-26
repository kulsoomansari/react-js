import React from "react";
class Maths extends React.Component{
    constructor(props){
        super(props)
        this.state={num: 0, tog: 'log in'}
    }
    handleToglle = () =>{
        let newTog = this.state.tog
        this.setState({
          tog: !newTog
        })
    }
    // handleAdd = () =>{
    //     let newNum = this.state.num
    // this.setState({
    //     num: ++newNum
    
    // })
    // }
    // handleSub = () =>{
    //     let newNum = this.state.num
    // this.setState({
    //     num: --newNum
    
    // })
    // }
//     handleTog = ()=>{
//         let newTog = this.state.tog
//         this.setState({
//             tog: !newTog
//     })
// }
    render(){
        console.log(this.state.tog)
        return(
            <>
            {/* <button onClick={this.handleAdd}>+</button>
            <button onClick={this.handleSub}>-</button> */}
            <button onClick= {this.handleToglle}>toggle</button>
            {(this.state.tog) ? (<button>log in</button>): (<button>log out</button>)}          
            </>
        )
    }
}
export default Maths