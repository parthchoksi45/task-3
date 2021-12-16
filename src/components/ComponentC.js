import React from 'react';
import { useSelector } from 'react-redux';
const ComponentC=()=>{

    const text=useSelector(state=>state.value)
    return <div style={{marginTop:"2rem"}}>
        ComponentC:
        <p style={{border:"1px black solid",textAlign:"center",marginLeft:"30%",marginRight:"30%"}}>
        {text}
        </p>
    </div>
}


export default ComponentC;