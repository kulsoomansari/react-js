import React from "react";
class Show extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            students: [{name: 'k', age: 20},{name: 'ff', age:15}]
        }
    }
    render(){
        return(
            <>
            {/* <h2>hi </h2> */}
           {/* {this.state.students.filter(item=> item.age>18).map(item =>(
              <h2>{item.name + " " + item.age} </h2>     
           ) ) } */}
           </>
        )
    }
}
export default Show