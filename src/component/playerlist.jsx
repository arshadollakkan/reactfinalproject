import { useEffect } from "react";
import { useState } from "react";
import '../styles/playerlist.css'
const TeamA = () => {
    let[teamwe,setteamwe]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
        let responce=await fetch('http://localhost:4000/teamA') 
        let data=await responce.json()  
        setteamwe(data)
        }
        fetchdata()
    },[])
    return ( 
        <div className="teama1">
            <h1>panchayath team</h1>
            <hr />
        {
            teamwe.map((data)=>(
                <div className="teamlist1">
                    <div className="photo">
                        <img src={data.photo} alt="" />
                    </div>
                    <div className="details">
                        <h2>NAME:-{data.namea}</h2>
                        <h2>{data.role}/{data.achivement}</h2>
                         <h3>Clubrating:-{data.rating}</h3>
                         <h3>Number:-{data.preferednumber}</h3>
                        <h5>AGE:-{data.age}</h5>
                        
                        <p>Phonenumber:-{data.phno}</p>
                        <p>Address:-{data.details}</p>
                        
                        
                    </div>
                </div>
            ))
        }


        </div>
     );
}
 
export default TeamA;