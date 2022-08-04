import React, {useState} from 'react' 
import { useLocation } from 'react-router'



const HeaderName=()=>{
    const location =useLocation()
    return(
        <h2 style={{color:'white',margin:'10px 0 10px 0'}}>{location.pathname.split('/')[1]?location.pathname.split('/')[1]:'Home'}</h2>
    )
}


export default HeaderName