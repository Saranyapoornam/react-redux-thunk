export const loading = () =>{
    return{
        type:"LOADING"
    }
}
export const ageUpSync =(val)=>{
    return(
        {type:"AGE_UP",val:val}
    )
}
// asynchronous loading after 5 sec
export const ageUp =(val)=>{
    return dispatch =>{
        dispatch(loading())
        setTimeout(()=>{
            dispatch(ageUpSync(val))
        },5000)
    }
}
export const ageDown = (val) =>{
    return(
        {type:"AGE_DOWN",val:val}
    )
}
