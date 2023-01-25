import '../styles/adminnavbar.css'
import { Link } from "react-router-dom";
const Adminnsvbar = () => {
    return ( <div className="adminnavbar">
        <div className="adminimages">
        <img src="/images/raj.png" alt="" />
        </div>
        <div className="adminlinks">
        <ul>
                    <li><Link to="/panchayath/admin/">Dasbord</Link></li>  
                    <li><Link to="/panchayath/admin/clublist">Football club</Link></li>
                    <li><Link to="/panchayath/admin/addclub">Add club</Link></li>
                    <li><Link to="/panchayath/admin/matchlist">Match list</Link></li>
                    <li><Link to="/panchayath/admin/addmatch">Add matchlist</Link></li>
                    <li><Link to="/panchayath">Logout from admin</Link></li>
                    <li id="top"><Link to="/home">GotoHomepage</Link></li>
                    <li id="pot"><Link to="/">GotoMainpage</Link></li>
                </ul>
        </div>
    </div> );
}
 
export default Adminnsvbar;