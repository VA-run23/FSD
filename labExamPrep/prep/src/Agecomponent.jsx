
import React ,{useState,useEffect} from "react";  
  
function Agecomponent({age}){  
    const[Age,setAge]=useState(age);  
    const[Newage,setnewAge] = useState("");  
  
    useEffect(()=>{  
        setAge(age);  
  
    },[age]);  
  
    return (  
        <div>  
            <h3>Age:{Age}</h3>  
            <input type="number"  
            value={Newage}  
            onChange ={ (e)=> setnewAge(e.target.value )}/>  
            <button onClick={()=>setAge(Number(Newage))}>Update age</button>  
               
        </div>  
    )  
}  
export default Agecomponent; 