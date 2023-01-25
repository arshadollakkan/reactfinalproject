import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/mainuser.css'

const Panchayathuser = () => {
    let [email,setemail]=useState("")
    let[password,setpassword]=useState("")
    let navigation=useNavigate()
    let root=(e)=>{
        e.preventDefault()
        if(email===""&&password===""){
            alert('Please Enter your details')
        }
        else{
           alert('youe data is recorded') 
           navigation('/panchayath/user')
        }
    }
    return ( 
      <div className="bar">
          <div className="panchayathuser bg-secondary py-3">
            <h1>WELCOME USER</h1>
            <div className="userform">
            <form action="" onSubmit={root}>
                    <div className="emailuser">
                        <input className="form-control w-25 text-center mb-4 px-4 py-2 rounded-2 fs-5" type="email"value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Your Email"  />
                    </div>
                    <div className="phoneuser">
                        <input className="form-conrol w-25 text-center mb-4 px-4 py-2 rounded-2 fs-5" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="create your password" />
                    </div>
                   
                    <button className="btn btn-primary btn-outline-success btn-md px-5 py-1 text-white">SUBMIT</button>
                </form>
            </div>
        </div>
      </div>
     );
}
 
export default Panchayathuser;