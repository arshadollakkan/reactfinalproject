
import '../styles/appliedplayers.css'
const Bapplies = (probs) => {
  let member=probs.data1
  let remove=probs.data2
  let gokul=probs.data3
    return (  
        <div className="bapplies">
              <h1 id='po'>{probs.data}</h1>
             <u><h2>{gokul}</h2></u>
            <h3 id='yt'>Members Count:{member.length}</h3>
            {
                member.map((data)=>(
                  <div className="formlist">
                    <div className="memberimage">
                        <img src={data.figure} alt="" />
                    </div>
                      <div className="appliedlist">
                      <h1>NAME:{data.perr}</h1>
                      <h2>AGE:{data.age}</h2>
                      <h3>Role:{data.role}</h3>
                      <h3>Rating:{data.rating}</h3>
                      <p>phonenumber:{data.phno}</p>
                    

                      </div>
                      <div className="romove">
                        <button onClick={()=>remove(data.id,data.perr)}>Remove</button>
                      </div>
                  </div>
                ))
            }
        </div>
    );
}
 
export default Bapplies;