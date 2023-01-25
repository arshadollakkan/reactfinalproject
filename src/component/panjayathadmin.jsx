import '../styles/panchayathadmin.css'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Panchayathadmin = () => {
    let[email,setemail]=useState("")
    let[phonenumber,setphonenumber]=useState("")
    let[password,setpassword]=useState("")
    let navigation=useNavigate()
    let poda=(e)=>{
        e.preventDefault()
        if(email=="arshad@gmail.com"&&phonenumber==9947993814&&password=="1234"){
            alert('succefull')
            navigation('/panchayath/admin')
        }
        else{
         alert('invalid details')
        }
      
        
    }
    return ( 
       <div className="pl">
         <div className="panchayathadmin bg-secondary py-3">
            <h1>WELCOME ADMIN</h1>
            <div className="panchayathform">
                <form action="" onSubmit={poda}>
                    <div className="emailpancah">
                        <input className=" form-conrol w-25 text-center mb-4 p-3 rounded-2 fs-5 " type="email" required placeholder="Enter Your Email" value={email} onChange={(e)=>setemail(e.target.value)}  />
                    </div>
                    <div className="pa">
                        <input type="tel" className='form-conrol w-25 text-center mb-4 p-3 rounded-2 fs-5' required placeholder="Enter your phonenumber" value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} />
                    </div>
                    <div className="passwordpanchayath">
                        <input className='form-conrol w-25 text-center mb-4 p-3 rounded-2 fs-5' type="password" required placeholder="Enter your password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                    <button className='btn btn-primary btn-outline-success btn-md px-5 py-1 text-white'>SUBMIT</button>
                </form>
            </div>
        </div>
       </div>
     );
}
 
export default Panchayathadmin;