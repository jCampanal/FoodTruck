import React from 'react' 
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import {
  BigDivSearchContaind,
  IconDivSearchContaind
} from './SearchBArStyled'
const SearchBar=(props)=>{
    return(
      <>
        <BigDivSearchContaind>
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, height:30, marginRight:'36px'}}
          >        
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar"          
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{color:'#1976d2'}}/>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <AnalyticsIcon  />
            </IconButton>
          </Paper>
      </BigDivSearchContaind>

    </>
    )
}

export default SearchBar