import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/updatematches.css'
const Updatematches = () => {
    let[finalimage,setfinalimage]=useState("")
    let[winningteam,setwinningteam]=useState("")
    let[Runnerteam,setRunnerteam]=useState("")
    let[location,setlocation]=useState("")
    let[manofthematch,setmanofthematch]=useState("")
    let[mainimage,setmainimage]=useState("")
    let[strory,setstrory]=useState("")
    let[matchyear,setmatchyear]=useState("")
    let as=useNavigate()
    let local=(e)=>{
           e.preventDefault()
           if(finalimage==""||winningteam==""||Runnerteam==""||location==""||manofthematch==""||mainimage==""||strory==""||matchyear==""){
            alert(`PLEASE FILL FULL DATA`)
           }
           else{
            let data={finalimage,winningteam,Runnerteam,location,manofthematch,mainimage,strory,matchyear}
            fetch('http://localhost:4000/matches',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            })
            alert('SUCCESSFULLY ADDED')
            as('/panchayath/admin/matchlist')
           }

    }
    return ( <div className="updatematches">
        <h1>UPDATE MATCHES</h1>
        <div className="updatematchform">
            <form action="" onSubmit={local}>
            <div className="finalimage">
                <input className="form-control w-50 my-3 text-center " type="text" placeholder="INSERT WIINNING TEAM" required value={finalimage} onChange={(e)=>setfinalimage(e.target.value)}/>
            </div>
            <div className="winningteam">
                <input className="form-control w-50 my-3 text-center" type="text" placeholder="ENTER WINNINGTEAM NAME" required value={winningteam} onChange={(e)=>setwinningteam(e.target.value)} />
            </div>
            <div className="runnerteam" >
                <input className="form-control w-50 my-3 text-center" type="text" placeholder="ENTER RUNNERTEAM NAME" required value={Runnerteam} onChange={(e)=>setRunnerteam(e.target.value)}/>
            </div>
            <div className="location" >
                <input className="form-control w-50 my-3 text-center" type="text" placeholder="ENTER LOCATION" required value={location} onChange={(e)=>setlocation(e.target.value)} />
            </div>
            <div className="manofthematch" >
                <input className="form-control w-50 my-3 text-center" type="text"placeholder="MOM" required value={manofthematch} onChange={(e)=>setmanofthematch(e.target.value)}/>
            </div>
            <div className="mainimage" >
                <input className="form-control w-50 my-3 text-center" type="text" placeholder="INSERT MOM LINK" required value={mainimage} onChange={(e)=>setmainimage(e.target.value)}/>
            </div>
            <div className="matchyear">
                <input className="form-control w-50 my-3 text-center" type="text" placeholder="ENTER MATCH YEAR" required value={matchyear} onChange={(e)=>setmatchyear(e.target.value)}/>
            </div>
            <div className="story">
                <textarea className="form-control w-50 my-3 text-center" name="" placeholder="TEXT THE STORY ABOUT THE MATCH" value={strory} required onChange={(e)=>setstrory(e.target.value)}></textarea>
            </div>
            <button>SUBMIT</button>
            </form>
        </div>
    </div> );
}
 
export default Updatematches;