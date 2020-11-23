import React from "react";
import AddList from "./AddList";
class ToDoList extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        todos: [
            {title: 'wake up at 7 O clock', id:1},
            {title: 'breakfast', id:2},
            {title: 'take ride', id:3}
        ]
    }
    }
    addtodos = (todo) =>{
        console.log(todo);
    }
    render(){
        return(
            <>
            <AddList addtodos={this.addtodos} />
            <ul>
              {this.state.todos.map((item)=>(
                <li key={item.id}>{item.title} </li>
                 )
                 )}

            </ul>
            </>
        )
    }

}
export default ToDoList