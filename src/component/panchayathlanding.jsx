import '../styles/panchayathlanding.css'
import {Link} from "react-router-dom";
const Panchayathlanding = () => {
   
    return ( 
     <div className="lo">
         <div className="op">
          <div className="panchayathlanding4">
             <h1>HOME PAGE</h1>

             
                <ul><li id='w2'> <Link to='/panchayath/loginadmin'>AdminLogin</Link></li>  
                <li id='u'> <Link to='/panchayath/loginuser'>UserLogin</Link></li></ul>
            
        </div>
      </div>
     </div>
     );
}
 
export default Panchayathlanding;