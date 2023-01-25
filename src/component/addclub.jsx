import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addclub.css'

const Addclub = () => {
    let[title,settitle]=useState("")
    let[teamcount,setteamcount]=useState("")
    let[clubimage,setclubimage]=useState("")
    let[goalkeeper1,setgoalkeeper1]=useState("")
    let[goalkeeper2,setgoalkeeper2]=useState("")
    let[rightback1,setrightback1]=useState("")
    let[keeper1img,setkeeper1img]=useState("")
    let[keeper2img,setkeeper2img]=useState("")
    let[rightback1img,setrightback1img]=useState("")
    let[rightback2,setrightback2]=useState("")
    let[leftback1,setleftback1]=useState("")
    let[leftback2,setleftback2]=useState("")
    let[centerback1,setcenterback1]=useState("")
    let[rightback2img,setrightback2img]=useState("")
    let[leftback1img,setleftback1img]=useState("")
    let[leftback2img,setleftback2img]=useState("")
    let[centerback1img,setcenterback1img]=useState("")
    let[centerback2,setcenterback2]=useState("")
    let[forwards1,setforwards1]=useState("")
    let[forwards2,setforwards2]=useState("")
    let[forward3,setforward3]=useState("")
    let[forward4,setforward4]=useState("")
    let[centerback2img,setcenterback2img]=useState("")
    let[forwards1img,setforwards1img]=useState("")
    let[forwards2img,setforwards2img]=useState("")
    let[forward3img,setforward3img]=useState("")
    let[forward4img,setforward4img]=useState("")
    let[ratingoftheclub,setratingoftheclub]=useState("")
    let[mostvaluableplayer,setmostvaluableplayer]=useState("")
    let[manager,setmanager]=useState("")
    let nab=useNavigate()
    let re=(e)=>{
        e.preventDefault()
        if(ratingoftheclub==""||mostvaluableplayer==""||manager==""||centerback1==""||centerback2==""||centerback1img==""||centerback2img==""||forwards1==""||forwards2==""||forwards1img==""||forwards2img==""||forward3==""||forward4==""||forward3img==""||forward4img==""||rightback2==""||rightback2img==""||leftback1==""||leftback2==""||leftback1img==""||leftback2img==""||keeper1img==""||keeper2img==""||rightback1img==""||title==""||teamcount==""||clubimage==""||goalkeeper1==""||goalkeeper2==""||rightback1==""){
      alert(`PLEASE FILL FULL DATA`)
        }
        else{
            let data={title,teamcount,clubimage,goalkeeper1,goalkeeper2,rightback1,keeper1img,keeper2img,rightback1img,rightback2,leftback1,leftback2,centerback1,rightback2img,leftback1img,leftback2img,centerback1img,centerback2,forwards1,forwards2,forward3,forward4,centerback2img,forwards1img,forwards2img,forward3img,forward4img,ratingoftheclub,mostvaluableplayer,manager}
            fetch('http://localhost:4000/clubes',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            })
            alert('SUCCESS FULLY ADDED')
            nab('/panchayath/admin/clublist')

        }
    }

    return ( 
        <div className="addclub">
            <h1>ADD CLUB</h1>
            <div className="addclubform">
                <form action="" onSubmit={re}>
               <div className="title">
                <input className="" type="text" placeholder="ENTER CLUB NAME" value={title} onChange={(e)=>settitle(e.target.value)} />
                 <input className="" type="text" placeholder="INSERT CLUB IMAGE LINK" value={clubimage} onChange={(e)=>setclubimage(e.target.value)} />
               </div>
               <div className="count">
                
                <input type="text"placeholder="ENTER KEEPER1 " value={goalkeeper1} onChange={(e)=>setgoalkeeper1(e.target.value)} />
                <input type="text" placeholder="ENTER KEEPER2 " value={goalkeeper2} onChange={(e)=>setgoalkeeper2(e.target.value)} />
                <input type="text" placeholder="ENTER RIGHTBACK1 " value={rightback1} onChange={(e)=>setrightback1(e.target.value)}/>
                <input type="text" placeholder="ENTER RIGHTBACK2 " value={rightback2} onChange={(e)=>setrightback2(e.target.value)}/>
               </div>
               <div className="countimages">
                <input type="text" placeholder="INSERT KEEPER1 LINK" value={keeper1img} onChange={(e)=>setkeeper1img(e.target.value)}/>
                <input type="text" placeholder="INSERT KEEPER2 LINK" value={keeper2img} onChange={(e)=>setkeeper2img(e.target.value)}/>
                <input type="text" placeholder="INSERT RIGHTBACK1 LINK" value={rightback1img} onChange={(e)=>setrightback1img(e.target.value)}/>
                <input type="text" placeholder="INSERT RIGHTBACK2 LINK" value={rightback2img} onChange={(e)=>setrightback2img(e.target.value)}/>
               </div>
               <div className="striker">
                <input type="text" placeholder="ENTER LEFTBACK1 " value={leftback1} onChange={(e)=>setleftback1(e.target.value)} />
                <input type="text" placeholder="ENTER LEFTBACK1" value={leftback2} onChange={(e)=>setleftback2(e.target.value)} />
                <input type="text" placeholder="ENTER CENTERBACK1" value={centerback1} onChange={(e)=>setcenterback1(e.target.value)} />
                <input type="text" placeholder="ENTER CENTERBACK2" value={centerback2} onChange={(e)=>setcenterback2(e.target.value)}/>
                </div>
                <div className="strikerimages">
                    <input type="text" placeholder="INSERT LEFTBACK1 LINK" value={leftback1img} onChange={(e)=>setleftback1img(e.target.value)}/>
                    <input type="text" placeholder="INSERT LEFTBACK2 LINK" value={leftback2img} onChange={(e)=>setleftback2img(e.target.value)}/>
                    <input type="text" placeholder="INSERT CENTERBACK1 LINK" value={centerback1img} onChange={(e)=>setcenterback1img(e.target.value)}/>
                    <input type="text"placeholder="INSERT CENTERBACK2 LINK" value={centerback2img} onChange={(e)=>setcenterback2img(e.target.value)} />
                </div>
                <div className="defence">
                <input type="text" placeholder="ENTER FORWARD1 NAME" value={forwards1} onChange={(e)=>setforwards1(e.target.value)}/>
                    <input type="text" placeholder="ENTER FORWARD2 NAME" value={forwards2} onChange={(e)=>setforwards2(e.target.value)}/>
                    <input type="text" placeholder="ENTER FORWARD3 NAME" value={forward3} onChange={(e)=>setforward3(e.target.value)}/>
                    <input type="text"placeholder="ENTER FORWARD4 NAME" value={forward4} onChange={(e)=>setforward4(e.target.value)} />
            
            
            
                </div>
                <div className="defenceimages">
                <input type="text" placeholder="INSERT FORWARD1 LINK" value={forwards1img} onChange={(e)=>setforwards1img(e.target.value)}/>
                    <input type="text" placeholder="INSERT FORWARD2 LINK" value={forwards2img} onChange={(e)=>setforwards2img(e.target.value)}/>
                    <input type="text" placeholder="INSERT FORWARD3 LINK" value={forward3img} onChange={(e)=>setforward3img(e.target.value)}/>
                    <input type="text"placeholder="INSERT FORWARD4LINK" value={forward4img} onChange={(e)=>setforward4img(e.target.value)} />
                </div>
                <div className="last">
                <input type="text" placeholder="ENTER CLUB RATING" value={ratingoftheclub} onChange={(e)=>setratingoftheclub(e.target.value)}/>
                    <input type="text" placeholder="ENTER FAMOUS PLAYER" value={mostvaluableplayer} onChange={(e)=>setmostvaluableplayer(e.target.value)}/>
                    <input type="text"placeholder="ENTER MANAGER NAME" value={manager} onChange={(e)=>setmanager(e.target.value)} /> 
                </div>
                <input type="number" min="12" max="23" placeholder="CNT" value={teamcount} onChange={(e)=>setteamcount(e.target.value)}/> <br />
                <button>SUBMIT</button>
               
                </form>
            </div>
        </div>
     );
}
 
export default Addclub;