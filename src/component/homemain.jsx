
import '../styles/homemain.css'
import { Link } from "react-router-dom";
const Homemain = () => {
    return (  
        <div className="homemain">
            <h1>WELCOME TO EVERY ONE</h1>


            <video autoPlay loop height='400px' width="420px" poster="images/ron.jpg" src="/images/aa1.mp4" controls></video>

           
            <ul><li id='re'><Link to="/panchayath">Panchayath</Link></li>
            <li id='to'><Link to="/footballclub">Loginto footballclub</Link></li>
           </ul>
            
        
        </div>  
    );
}
 
export default Homemain;