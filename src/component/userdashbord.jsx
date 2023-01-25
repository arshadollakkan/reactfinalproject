import { Route, Routes } from "react-router-dom";
import Clublist from "./clublist";
import Matches from "./matches";
import Readmore from "./readmore";
import Sample from "./sample";
import Userfirstpage from "./userfirstpage";
import Usernavbar from "./usernavbar";

const Userdashbord = () => {
    return ( 
        <div className="userdashbord">
            <Usernavbar/>
          <Routes>
            <Route path="/" element={<Userfirstpage/>}/>
            <Route path="/clublist" element={<Clublist/>}/>
            <Route path="/matchlist" element={<Matches/>}/>
            <Route path="/matchlist/:id" element={<Readmore/>}/>
            <Route path="/*" element={<Sample/>}/>
            

            </Routes>  
            
        </div>
     );
}
 
export default Userdashbord;