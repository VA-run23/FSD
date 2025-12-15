import React,{useState,useEffect} from "react";  
function Counter(){  
    const[count,setcount] = useState(0);  
    const[message,setmessage]=useState("");  
    useEffect(()=>{  
        if(count===10){  
            setmessage("Count reached 10");  
        }  
    },[count]);  
    const incrementHandler =()=>{  
        if(count<10){  
            setcount(count+1);  
        }  
    };  
    return(  
        <div>  
            <h2>Count:{count}</h2>  
            <button onClick={incrementHandler}>Increment</button>  
            <h2>{message}</h2>  
            </div>  
    );  
}  
export default Counter;   