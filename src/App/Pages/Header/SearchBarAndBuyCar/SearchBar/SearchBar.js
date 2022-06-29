import React, {useState,useEffect} from 'react' 
import { FormProvider, useForm } from "react-hook-form";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useLocation} from 'react-router'
import { useNavigate } from 'react-router-dom';
import {
  BigDivSearchContaind,
  IconDivSearchContaind
} from './SearchBArStyled'
import { useDispatch,useSelector } from "react-redux";
import { setOpenModal, setContentModal,setTitleModal} from "../../../../Store/MotionGenerix/ModalGeneric";
import SearchMenu from '../../../../Components/SearchMenu/SearchMenu';
import { setNavOpacity } from '../../../../Store/NavEffect/NavEffect';


const SearchBar=(props)=>{
  const [Value,setValue]=useState('')
  const dispatch = useDispatch()
  const navegate = useNavigate() 
  const HandlerSearchIcons=()=>{
    if(Value!==''){
      dispatch(setNavOpacity(false))
      setTimeout(()=>{
      navegate(
        `/search?data=${Value}`
      )},600)
    }
  }

  const HandlerSearch=()=>{
    dispatch(setTitleModal('Buscar'))
    dispatch(setContentModal(<SearchMenu></SearchMenu>))
    setTimeout(()=>{dispatch(setOpenModal(true))},200)
    
}



    return(
     
      
        <BigDivSearchContaind>
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', height:'100%'}}
          >    
               
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar" 
              value={Value}
              onChange={(e)=>{setValue(e.target.value)}}         
            />
            <IconButton  sx={{ p: '10px' }} aria-label="search" onClick={()=>{HandlerSearchIcons()}}>
              <SearchIcon />
            </IconButton>
            <Divider sx={{color:'#1976d2'}}/>
            <IconButton  sx={{ p: '10px' }} aria-label="search">
              <AnalyticsIcon  onClick={()=>{HandlerSearch()}} />
            </IconButton>
            
          </Paper>
      </BigDivSearchContaind>
    
   
    )
}

export default SearchBar