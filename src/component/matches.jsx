import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '../styles/matches.css'

const Matches = () => {
    let[match,setmatch]=useState([])
    useEffect(()=>{
    let fetchdata=async()=>{
        let responce=await fetch('http://localhost:4000/matches')
        let data= await responce.json()
        setmatch(data)
    }
    fetchdata()
    },[match])
    let loc=useLocation()
    let remove=(id,matchyear)=>{
       fetch(`http://localhost:4000/matches/${id}`,{
        method:"DELETE"
       })
       alert(`${matchyear}th match is removed permenantley.found the action against panchayath rule`)
    }
    let nas=useNavigate()
    let read=(id)=>{
        if(loc.pathname=='/panchayath/admin/matchlist'){
        nas(`/panchayath/admin/matchlist/${id}`)}
        else{
            nas(`/panchayath/user/matchlist/${id}`)
        }
    }
    return ( 
        <div className="match">
            <h1>AVAILABLE MATCHES</h1>
            {
                match.map((data)=>(
                    <div className="matchlist">
                        <div className="matchimage">
                            <img src={data.finalimage} alt="" />
                        </div>
                        <div className="matchreport">
                            <h2>YEAR:{data.matchyear}</h2>
                            <h2>WINNING TEAM:-{data.winningteam}</h2>
                            <h2>RUNNER TEAM:-{data.Runnerteam}</h2>
                            <h4>LOCATION:-{data.location}</h4>
                        </div>
                       <div className="buttons">
                       {loc.pathname=="/panchayath/admin/matchlist"&& <button onClick={()=>remove(data.id,data.matchyear)}>REMOVE</button>}
                        <button onClick={()=>read(data.id)}>READ MORE →</button>  <br /> <br />
                       
                       </div>
                    </div>

                ))
            }
        </div>
     );
}
 
export default Matches;