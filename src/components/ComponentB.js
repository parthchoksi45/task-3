import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const ComponentB=()=>{
    const dispatch=useDispatch();
    const onChangeHandler=(e)=>{
        dispatch({type:'show',text:e.target.value});
    }
    return <div>
        <form>
           <label> ComponentB :<div style={{marginTop:"1rem"}}><input placeholder="Enter the text here" type="text" onChange={onChangeHandler}/></div></label>
        </form>
    </div>
}


export default ComponentB;