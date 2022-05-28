import React from 'react' 
import{
    FirstDivSearch,
    IconsContained,
    IconsSx,
    ResponsiveIconsContained
} from './SearchBarAndBuyCarStyled'
import SearchBar from './SearchBar/SearchBar'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const SearchBarAndBuyCar=()=>{

    return(
        <FirstDivSearch>
            <IconsContained>
                <IconButton>
                    <AccountBalanceIcon sx={IconsSx}/>                    
                </IconButton>
                <IconButton>
                    <AddShoppingCartIcon sx={IconsSx}/>                    
                </IconButton>
                <ResponsiveIconsContained>
                    <IconButton>
                        <SearchIcon sx={IconsSx}/>                    
                    </IconButton>
                </ResponsiveIconsContained>
            </IconsContained>

            <SearchBar/>
        </FirstDivSearch>
    )
}

export default SearchBarAndBuyCar