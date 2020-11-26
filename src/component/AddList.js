import React from "react"
class AddList extends React.Component{
    constructor(props){
    super(props);
    this.state = {title: '' , id: ''}
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('i am in submit')
       let newobj = this.state
       console.log(this.state)
       this.props.addtodos(newobj)
    }
    handleChange = (e) =>{
        console.log(e.target.value)
        this.setState({
            title:e.target.value,
            id: Math.round(Math.random()*100+0.2)
        })
    }
   render(){
       return(
           <div>
               <form onSubmit= {this.handleSubmit}>
                   <input onChange={this.handleChange} type ="text" id='title'></input>
                   <button type='submit'>Add to do</button>
               </form>
           </div>
       )
   }
}
export default AddList