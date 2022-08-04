import React from 'react'
import Styled from 'styled-components'
import { motion } from 'framer-motion';

import CategoryTableHeader from './CategoryTableHeard/CategoryTableHeard';
import CategoryTableBody from './CategoryTableBody/CategoryTableBody';
import GlobalContentDiv from '../../../Components/GlobalSectionContent/GlobalSectionContent'

const TableDiv=Styled.div`
display:flex;
flex-direction:column;
border-radius:30px 30px 0 0;
width:90%;
max-width:800px;
max-height:80%;
background-color: #beb7ad43;
box-shadow: 3px 2px 5px black, -3px -2px 5px black;
overflow:hidden; `;

const CategoryTable =(props)=>{

    return(
        <GlobalContentDiv>
            <TableDiv as={motion.div}                       
                        animate={{scale:[0.9,1.05,1],opacity:1}}
                        initial={{scale:0.5,opacity:0}} 
                        transition={{ duration: 1, delay:0.7 }}>
                <CategoryTableHeader/> 
                <CategoryTableBody/>           
            </TableDiv>
        </GlobalContentDiv>
    )
}

export default CategoryTable