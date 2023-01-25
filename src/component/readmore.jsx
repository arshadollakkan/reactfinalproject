import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/read.css'
const Readmore = () => {
    let[read,setread]=useState({})
    let para=useParams()


    useEffect(()=>{
        let fetchdata=async()=>{
  let responce=await fetch(`http://localhost:4000/matches/${para.id}`)
  let data=await responce.json()
  setread(data)
        }
        fetchdata()
    })


    return ( 
        <div className="readmore">
        <h1><u>ManOfTheMatch </u> </h1>
        <h2>{read.manofthematch}</h2>
        <img src={read.mainimage} alt="" />  
        <p><strong>STORY:-{read.strory}</strong></p>  
            
        </div>
     );
}
 
export default Readmore;