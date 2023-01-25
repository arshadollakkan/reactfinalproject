import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/application.css'
const Applicationform = () => {
  let[perr,setperr]=useState("")
  let[age,setage]=useState("")
  let[figure,setfigure]=useState("")
  let[rating,setrating]=useState("")
  let[role,setrole]=useState("")
  let[phno,setphno]=useState("")
let navi=useNavigate()
    let updat=(e)=>{
     e.preventDefault()
     if(
        rating==""||age==""||figure==""||perr==""||role==""||phno==""
     ){
  alert('please fill the form full')
     }
     else if(role=="defender"||role=="midfilder"||role=="striker"||role=="goalkeeper"){
        let data={perr,age,figure,rating,role,phno}
        alert('your responce is recorded by cliking okk you can view your data')
        fetch('http://localhost:4000/teamb',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        navi('/footballclub/appliedmembers')
     }
     else{
        alert(`invalid data please give correct data`)
     }

    }
    return (<div className="applicationform">
        <h1>APPLICATION FORM</h1>
         <div className="applicationformser">
            <form action="" onSubmit={updat}>
                <div className="perr">
                    <input className="form-control w-50 my-4 text-center" type="text" placeholder="ENTER YOUR NAME" value={perr} onChange={(e)=>setperr(e.target.value)} />
                </div>
                <div className="formage">
                    <input className="form-control w-50 my4 text-center" type="text" placeholder="ENTER YOUR AGE" value={age} onChange={(e)=>setage(e.target.value)}/>
                </div>
                <div className="phonenumber">
                    <input className="form-control w-50 my-4 text-center" type="text" placeholder="ENTER PHONENUMBER" value={phno} onChange={(e)=>setphno(e.target.value)} />
                </div>
                <div className="appliedimage">
                  <input className="form-control w-50 my-4 text-center" type="text" placeholder="INSERT PHOTO LINK" value={figure} onChange={(e)=>setfigure(e.target.value)} />
                </div>
                <div className="goo">
                    
                   <input className="form-control w-50 my-4 text-center" type="text" placeholder="ENTER ROLE" value={role} onChange={(e)=>setrole(e.target.value)}/>     
                
                </div>
               
                <div className="formrating">
                   <input className="form-control w-50 my-4 text-center" type="text" placeholder="ENTER YOUR RATING" value={rating} onChange={(e)=>setrating(e.target.value)}/>
                </div>
                <button className="btn btn-success btn-outline-primary px-5 py-1">Submit</button>
            </form>
         </div>

         


    </div>);
}

export default Applicationform;