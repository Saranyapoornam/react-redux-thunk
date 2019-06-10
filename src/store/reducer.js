const initialState ={
    age: 24
}

const reducer = (state = initialState,action) =>{
    if(action.type==="AGE_UP"){
        return{
            ...state,
            age: state.age+action.val,
            loading : false
        }
    }
    if(action.type==="AGE_DOWN"){
        return{
            ...state,
            age: state.age-action.val
        }
    }
    if(action.type==="LOADING"){
        return{
            ...state,
            loading: true      
          }
    }
    return state
}

export default reducer