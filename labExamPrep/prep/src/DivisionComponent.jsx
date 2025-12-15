import React from "react";  
function DivisionComponent({a, b}){  
    // let a = 5, b = 0;
    if(b===0){  
        throw new Error("Div By zero Not Allowed");  
    }  
  
    const result = a/b;
    return(  
        <div>  
            <h3>division result :{result}</h3>  
        </div>  
    )  
}   
export default DivisionComponent;