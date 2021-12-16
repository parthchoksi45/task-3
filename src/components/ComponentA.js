import React from 'react';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
const ComponentA=()=>{
    return(
        <div style={{textAlign:"center",paddingTop:"10rem"}}>
        <ComponentB />
        <ComponentC />
        </div>
    )
}


export default ComponentA;