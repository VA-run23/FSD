import React, {useState, useEffect, use} from 'react';

function Click(){
    let [count, setCount] = useState(0);
    let [content, setContent]= useState('');

    // useEffect(()=>{
    //     setCount(0);
    // }, [count]);

    const endCheck= (() => {
        count = count  + 1;
        setCount(count);
        if(count === 10){
            console.log("End of the Count");
            content = setContent("End of the Count");
        }
    });
    
    return (
        <div> 
            <button onClick={endCheck}>Increase the count value</button>
            <h2>Message: {content}</h2>
            <h1>Count Value: {count} </h1>
        </div>
    )

}

export default Click;