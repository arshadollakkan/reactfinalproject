import { useEffect } from "react";
import { useState } from "react";
import Bapplies from "./bprobsappliedmem";

const Appliedmembers = () => {
    let[member,setmember]=useState([])
    useEffect(()=>{
  let fetchdata=async()=>{
    let responce=await fetch('http://localhost:4000/teamb')
    let data=await responce.json()
    setmember(data)
  }
  fetchdata()
    },[])
    let remove=(id,perr)=>{
        let r=prompt('Enter your name before deleting')
        setmember(member.filter(x=>x.id!==id))
        alert(`${r} removed${perr}application form but it should be note by our panchayath members
        we will insert the data when you reload the webpage`)

    }
    return ( 
        <div className="appliedmembers">
           
            <Bapplies data="APPLIED PLAYERS" data2={remove} data3="DEFENDERS" data1={member.filter(x=>x.role=="difender")}/>
            <Bapplies data2={remove} data3="MIDFIELDERS" data1={member.filter(x=>x.role=="midfilder")}/>
            <Bapplies data2={remove} data3="STRIKERS" data1={member.filter(x=>x.role=="striker")}/>
            <Bapplies data2={remove} data3="GOALKEEPER" data1={member.filter(x=>x.role=="goalkeeper")}/>
          
        </div>
     );
}
 
export default Appliedmembers;