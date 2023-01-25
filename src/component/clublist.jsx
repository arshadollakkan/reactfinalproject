import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/clublist.css'

const Clublist = () => {
    let[club,setclub]=useState([])
    useEffect(()=>{
  let fetcdata=async()=>{
    let responce=await fetch('http://localhost:4000/clubes')
      let data=await responce.json()
      setclub(data)
    
  }
  fetcdata()
    },[club])
    let loc=useLocation()
    let per=(id,title)=>{
        fetch(`http://localhost:4000/clubes/${id}`,{
            method:"DELETE"
        })
        alert(`${title} is removed permenantly`)
    }
    return ( 
        <div className="clublist">
            <h1>CLUB LIST</h1>
            {
                club.map((data)=>(
                    <div className="clublist1">
                        <h2> <u>{data.title}</u></h2>
                   <div className="lock">
                   <div className="oneshift">
                       <img src={data.clubimage} alt="" />
                       </div>
                       <div className="shift">
                       <h2>→count:{data.teamcount}</h2>
                        <h3>→rating:{data.ratingoftheclub}</h3>
                        <h3>→Ratingpalyer:{data.mostvaluableplayer}</h3>
                        <p>→MANAGER:-{data.manager}</p>
                       </div>
                   </div> <br /> <br />
                        <u><h2><i>TEAM MEMBERS</i></h2></u>

                        <div className="jr">
                            <div className="one">
                                <img src={data.keeper1img} alt="" />
                                <h2>Name:-{data.goalkeeper1}</h2>
                            </div>
                            <div className="two">
                            <img src={data.keeper2img} alt="" />
                                <h2>Name:-{data.goalkeeper2}</h2> 
                            </div>
                            <div className="three">
                            <img src={data.rightback1img} alt="" />
                                <h2>Name:-{data.rightback1}</h2> 
                            </div>
                            <div className="four">
                            <img src={data.rightback2img} alt="" />
                                <h2>Name:-{data.rightback2}</h2> 
                            </div>
                            </div>
                            <div className="ty">
                            <div className="five">
                            <img src={data.leftback1img} alt="" />
                                <h2>Name:-{data.leftback1}</h2> 
                            </div>
                            <div className="six">
                            <img src={data.leftback2img} alt="" />
                                <h2>Name:-{data.leftback2}</h2> 
                            </div>
                            <div className="seven">
                            <img src={data.centerback1img} alt="" />
                                <h2>Name:-{data.centerback1}</h2> 
                            </div>
                            <div className="eight">
                            <img src={data.centerback2img} alt="" />
                                <h2>Name:-{data.centerback2}</h2> 
                            </div>
                            </div>
                            <div className="qw">
                            <div className="nine">
                            <img src={data.forwards1img} alt="" />
                                <h2>Name:-{data.forwards1}</h2> 
                            </div>
                            <div className="ten">
                                <img src={data.forwards2img} alt="" />
                                <h2>Name:-{data.forwards2}</h2>
                            </div>
                            <div className="eleven">
                                <img src={data.forward3img} alt="" />
                                <h2>Name:-{data.forward3}</h2>
                            </div>
                            <div className="twovelv">
                                <img src={data.forward4img} alt="" />
                                <h2>Name:-{data.forward4}</h2>
                            </div>
                            </div>
                          
                        
                        <div className="very">
                          {loc.pathname=="/panchayath/admin/clublist"&& <button onClick={()=>per(data.id,data.title)}>Remove</button>}
                        </div>

                       
                        

                    </div>
                ))
            }

        </div>
     );
}
 
export default Clublist;