import React, { useState } from "react";
 
function Button1(){
    const [counter,setCounter] = useState(10);


    return(
        <div>
            <p>Count: {counter}</p>
            <button style={{
                background:'red',
                color:'#fff',
                padding:'10px'
            }} onClick={() => setCounter(counter + 1)}>Increment</button>
            <button style={{
                background:'blue',
                color:'#fff',
                padding:'10px'
            }}  onClick={() => setCounter(counter - 1)}>Decrement</button>            
        </div>
    )
}


export default Button1