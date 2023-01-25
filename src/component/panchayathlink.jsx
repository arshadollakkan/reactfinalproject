import { Routes, Route } from "react-router-dom";
import Admindashbord from "./admindashbord";
import Panchayathlanding from "./panchayathlanding";
import Panchayathuser from "./panchayathuser";
import Panchayathadmin from "./panjayathadmin";
import Sample from "./sample";
import Userdashbord from "./userdashbord";

const Panchayathlogi = () => {
    return ( 
        <div className="panchayath">
            <Routes>
             <Route path='/' element={<Panchayathlanding/>}/> 
             <Route path='/loginadmin' element={<Panchayathadmin/>}/> 
             <Route path='/loginuser'element={<Panchayathuser/>}/>
             <Route path='/admin/*' element={<Admindashbord/>}/> 
             <Route path='/user/*' element={<Userdashbord/>}/>
             <Route path="/*" element={<Sample/>}/>
             
            </Routes>
           
        </div>
     );
}
 
export default Panchayathlogi;