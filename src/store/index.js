import {createStore} from 'redux';

//reducer function is a function which gets existing state and an action as input and it must return an output state

const textfieldReducer=(state={value:"Text entered in ComponentB will appear here."},action)=>{


    if(action.type==='show'){
        if(action.text==="")
        return {
            value: "Text entered in ComponentB will appear here."
        }
    return{
        value:action.text,
    }
}
    return state;
}


const store= createStore(textfieldReducer);

export default store;