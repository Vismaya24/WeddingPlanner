import React from 'react'

const Func=()=>{
    const x=23;
    const display=<h1><center>{x%3==0 ? "Before ": "No"}</center></h1>
    return(
        display
    )
}
export default Func 