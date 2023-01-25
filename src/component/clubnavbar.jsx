import {Link} from "react-router-dom";
import '../styles/clubnavbar.css'
const Clubnavbar = () => {
    return ( 
        <div className="clubnavbar">
            <div className="clubnavbarlogo">
                <img src="/images/adminlogo.png" alt="" />
            </div>
            <div className="clubnavbarlinks">
            <ul>
                    <li><Link to='/footballclub/'>Dashbord</Link></li>  
                    <li><Link to="/footballclub/playerlist">plyerslist</Link></li>
                    <li><Link to="/footballclub/addplayer">add newplayer</Link></li>
                    <li><Link to="/footballclub/applicationform">application form</Link></li>
                    <li><Link to="/footballclub/appliedmembers"> applied members</Link></li>
                    <li><Link to="/home">Goto homepage</Link></li> 
                    <li><Link to="/">Goto mainpage</Link></li>
                    </ul>
            </div>
        </div>
     );
}
 
export default Clubnavbar;