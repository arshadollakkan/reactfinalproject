import '../styles/footballmain.css'
import { useNavigate } from 'react-router-dom';
const Footballmain = () => {
   let naviagation=useNavigate()
   
   let asd=()=>{
    
     naviagation('/home') 
   }
    return ( 
        <div className="football">
     <h1>Behind every Kick of the ball there has to be a thought</h1>



   <div className='butt'>
      <img src="/images/asd.jpg" alt="" />
   <button onClick={asd}>
         Get Started➡️
      </button>
   </div>

        </div>
       
     );
}
 
export default Footballmain;