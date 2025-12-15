function ArrayComponent(){  
    const arr=[10,20,30];  
  
    const index=22;  
  
    if (index>=arr.length){  
        throw new Error("Array index out of bound");  
    }  
    return(  
        <h3> Array element:{arr[index]}</h3>  
    )  
}  
export default ArrayComponent;  