import React, {useEffect} from 'react' 
import { useDispatch } from 'react-redux'

import CategoryTable from './CategoryTable/CategoryTable'
import { setNavOpacity } from '../../Store/NavEffect/NavEffect'
import { useLocation } from 'react-router'

const EatCategory=()=>{
    const dispatch=useDispatch()
    const location=useLocation()
    useEffect(()=>{
        if(location.pathname.split('/')[1]==='menu')
        dispatch(setNavOpacity([true,true,true]))
    },[location.pathname])

    return(
        <>
        <CategoryTable/>
        </>
    )
}

export default EatCategory