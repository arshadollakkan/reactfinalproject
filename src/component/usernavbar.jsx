import '../styles/usernavbar.css'
import { Link } from "react-router-dom";
const Usernavbar = () => {
    return ( 
        <div className="usernavbar">
            <div className="logomiage">
            <img src="/images/raj.png" alt="" />
            </div>
            <div className="navlinks">
                <ul>
                    <li><Link to="/panchayath/user/">Dasbord</Link></li>  
                    <li><Link to="/panchayath/user/clublist">Football club</Link></li>
                    
                    <li><Link to="/panchayath/user/matchlist">Match list</Link></li>

                
                    <li id='res'><Link to="/home">HOME</Link></li>
                    <li id='ret'><Link  to="/">MAIN</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Usernavbar;