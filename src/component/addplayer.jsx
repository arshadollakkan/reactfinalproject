import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addplayer.css'

const Addteama = () => {
    let [namea,setname]=useState("")
    let[phno,setphno]=useState("")
    let[rating,setrating]=useState("")
    let[preferednumber,serpreferednumber]=useState("")
    let[age,setage]=useState("")
    let[role,setrole]=useState("")
    let[details,setdetails]=useState("")
    let[achivement,setachivement]=useState("")
    let[photo,setphoto]=useState("")
    let nav=useNavigate()
    let team=(e)=>{
        e.preventDefault()
        if(rating>5&&age>16&&age<30){
         alert('successfully added to panchayath team')
         let data={namea,phno,rating,preferednumber,age,role,details,achivement,photo}
         fetch('http://localhost:4000/teamA',{
            method:"POST",
            headers:{"Content-Type":"application/json"
             },
             body:JSON.stringify(data)

         })
         nav('/footballclub/playerlist')
        }
        else{
            alert('invalid data you should applied first')
        }
    }
    return (  
        <div className="addteama">
            <h1>ADD TO PANCHAYATH TEAM</h1> <hr />
            <div className="addteamaform">
                <form action="" onSubmit={team}>
                    <div className="teamaname">
                        <input className="form-control text-center py-2 my-4 w-50" required type="text" placeholder="ENTER YOUR NAME" value={namea} onChange={(e)=>setname(e.target.value)} />
                    </div>
                 
                    <div className="teamaphonenumber">
                        <input className="form-control text-center py-2 my-4 w-50 " type="tel" minLength='10' maxLength='10'required placeholder="ENTER PHONENUMBER" value={phno} onChange={(e)=>setphno(e.target.value)} />
                    </div>
                    <div className="teamearating">
                        <input className="form-control text-center py-2 my-4 w-50" type="text" required placeholder="ENTER CLUB RATING " value={rating} onChange={(e)=>setrating(e.target.value)} />

                    </div>
                    <div className="teameanumber">
                        <input className="form-control text-center py-2 my-4 w-50" type="number" min='1' max='15' placeholder=" JS-NO" value={preferednumber} onChange={(e)=>serpreferednumber(e.target.value)}/>
                        
                        <input className="form-control text-center py-2 my-4 w-50" min='17' max='30'  type="number" required placeholder="AGE" value={age} onChange={(e)=>setage(e.target.value)} />
                    
                    </div> 
                    <div className="teamerole">
                        <input className="form-control text-center py-2 my-4 w-50" type="text" required placeholder="TYPE YOUR POSITION" value={role} onChange={(e)=>setrole(e.target.value)} />
                    </div>
                    <div className="addressteamea">
                        <textarea className="form-control text-center py-2 my-4 w-50" name=""   placeholder="ENTER ADDRESS" value={details} onChange={(e)=>setdetails(e.target.value)}></textarea>
                    </div>
                    <div className="achivments">
                        <textarea className="form-control text-center py-2 my-4 w-50" name=""   placeholder="ENTER YOUR ACHIVEMENTS" value={achivement} onChange={(e)=>setachivement(e.target.value)}></textarea>
                    </div>
                    <div className="teameaimage">
                        <input className="form-control text-center py-2 my-4 w-50" type="text" placeholder="INSERT YOUR IMAGE LINK" value={photo} onChange={(e)=>setphoto(e.target.value)} />
                    </div>
                    <button className="btn px-5 btn-outline-info text-white py-2 my-4 w-50">SUBMIT</button>
                </form>
            </div>
        </div>
      );
}
 
export default Addteama;