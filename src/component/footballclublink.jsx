import { Routes,Route } from "react-router-dom";
import Addteama from "./addplayer";
import Applicationform from "./applicationform";
import Appliedmembers from "./appliedmembers";
import Clubdashbord from "./clubdashbord";
import Clubnavbar from "./clubnavbar";
import TeamA from "./playerlist";
import Sample from "./sample";

const Footballclub = () => {
    return (  
       <div className="a" style={{display:"flex",justifyContent:"start",backgroundColor:"rgb(25, 54, 67)"}}>
        <div className="b">
        <Clubnavbar/>
        </div>
         <div className="footballclub">
            
           <Routes>
           <Route path="/" element={<Clubdashbord/>}/>
           <Route path="/playerlist" element={<TeamA/>}/>
           <Route path="/addplayer" element={<Addteama/>}/>
           <Route path="/applicationform" element={<Applicationform/>}/>
           <Route path="/appliedmembers" element={<Appliedmembers/>}/>
           <Route path="/*" element={<Sample/>}/>
           
           <Route/>

           </Routes>
        </div>
       </div>
    );
}
 
export default Footballclub;