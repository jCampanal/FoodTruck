import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import Home from '../Main/Home/Home';
;


const AppRoutes =()=>{
    return(
    <Routes>
        <Route path="/" element={<Home/>} />

    </Routes>
    )
}

export default AppRoutes