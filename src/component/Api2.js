import Axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function Api2() {
    const [corona, setCorona] = useState()
    useEffect(()=>{
        console.log('use function')
        Axios.get(' https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log(res.data)
            // setCorona(res.data[0].)
        })
        
    },[])
    return (
        <div>
            
        </div>
    )
}
