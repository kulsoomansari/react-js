import React from "react"
class AddList extends React.Component{
    constructor(props){
    super(props);
    this.state = {title: '' , id: ''}
    }
    handleSubmit = (e) 
    
    handleChange = (e) =>{
        this.setState({
            title: e.target.value,
            id: Math.round(Math.random()*100+2)
        })
         }
   render(){
       return(
           <div>
               <form onsubmit= {this.handleSubmit}>
                   <input onChange={this.handleChange} type ="text" id='title'></input>
                   <button type='submit'>Add to do</button>
               </form>
           </div>
       )
   }
}
export default AddList