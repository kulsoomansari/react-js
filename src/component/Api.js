import Axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function Api() {
    const [recepies, setRecepies] = useState([])
    useEffect(()=>{
console.log('i am in use effect')
Axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res=>{
    console.log(res)
    setRecepies(res.data.meals[0])
})
    },[])
    console.log(recepies)
    return (
        <div style={{textAlign: "center"}}>
    <h1>{recepies.strMeal}</h1>
    <p style={{width: "50%", margin: "0 auto"}}>{recepies.strInstructions}</p>
           <img style={{width: "200px", height: "200px", marginTop: "20px"}} src={recepies.strMealThumb}></img>
        </div>
    )
}

