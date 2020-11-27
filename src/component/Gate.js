import React, {useState} from 'react'
export function Gate() {
    // const [isOpen, setIsOpen]=useState(true)
    // let [num, setNum]=useState(0)
       const [open, setOpen]= useState(true)
       let [temp, setTemp]= useState(72)
    return (
        <div>   
         {/* {isOpen? (<h2>room is open</h2>):(<h2>room is closed</h2>)} 
         <button onClick={()=>setIsOpen(!isOpen)}>click</button>  */}
         {/* <h2>{num}</h2>
        <button onClick={()=>setNum(++num)} >increment</button>
        <button onClick={()=>setNum(--num)} >decrement</button> */}
        <div className={open ? 'lighton': 'lightoff'}>
            <button onClick={()=>setOpen(true)}>ON</button>
            <button onClick={()=>setOpen(false)}>OFF</button>
        </div>
        <p>current temperature is:{temp}</p>
        <button onClick={()=>setTemp(++temp)}>increase temp</button><br />
        <button onClick={()=>setTemp(++temp)}>decrease temp</button>
        </div>
    )
}