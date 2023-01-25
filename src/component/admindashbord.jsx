
import { Routes,Route } from "react-router-dom";
import Addclub from "./addclub";
import Adminnsvbar from "./adminnavbar";
import Clublist from "./clublist";
import Matches from "./matches";


import Logopan from "./panchayathlogo";
import Readmore from "./readmore";
import Sample from "./sample";
import Updatematches from "./updatematches";



const Admindashbord = () => {
    return ( 
        <div className="admindashbord">
              <Adminnsvbar/>
          <Routes>
            <Route path="/" element={<Logopan/>}/>
            <Route path="/clublist" element={<Clublist/>}/>
            <Route path="/addclub" element={<Addclub/>}/>
            <Route path="/matchlist" element={<Matches/>}/>
            <Route path="/addmatch" element={<Updatematches/>}/>
            <Route path="/matchlist/:id" element={<Readmore/>}/>
            <Route path="/*" element={<Sample/>}/>
            
          
           
           
          </Routes>
          

        </div>
     );
}
 
export default Admindashbord;