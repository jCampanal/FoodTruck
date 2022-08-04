import  AccountCilce  from "@mui/icons-material/AccountCircleSharp"
import  ShoppingCartIcon  from "@mui/icons-material/ShoppingCart"
import  LocalShippingIcon from "@mui/icons-material/LocalShipping"
import  AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import  ListIcon from "@mui/icons-material/List"



export const MenuOtipons=[

    {
        href:'/menu/starters',
        key:'Starter',
        config:{HeaderAndFooder:true},
        info:'Enjoy a god starter to whet your appetite',
        caption:'Starters Dishes'},
    {
        href:'/menu/mainDishes',
        key:'MainDishes',
        config:{HeaderAndFooder:true},
        info: 'Our main dishes are full of good food and the main meats of the country',
        caption:'Main Dishes'},
    {
        href:'/menu/pizza',
        key:'Pizaza1',
        config:{HeaderAndFooder:true},
        info: 'We recommend trying our pizzas with any of the toppings',
        caption:'Pizza'},
    {
        href:'/menu/dessert',
        key:'Dessert',
        info: 'Nothing is better than a good post after a good meal',
        config:{HeaderAndFooder:true},
        caption:'Dessert'},
    {
        href:'/menu/bar',
        key:'Bar',
        info: 'A good drink is always welcome to liven up dinner',
        config:{HeaderAndFooder:true},
        caption:'Bar'},
    {
        href:'/menu/garrison',
        key:'Garrison',
        info: 'Not everything can be meat',
        config:{HeaderAndFooder:true},
        caption:'Garrison'},
]


export const IconOptions=[
    {
        href:'/',
        key:'home',
        caption:'home',
        config:{HeaderAndFooder:true},
        icon:<AccountBalanceIcon fontSize='small'/>},
    {
        href:'/orders',
        key:'orders',
        caption:'orders',
        config:{HeaderAndFooder:true},
        icon:<LocalShippingIcon fontSize='small'/>},
    {
        href:'/shoppinglist',
        key:'shoppinglist',
        caption:'shoppinglist',
        config:{HeaderAndFooder:true},
        icon:<ShoppingCartIcon fontSize='small'/>},
    {
        href:'/logguin',
        key:'profile',
        caption:'profile',
        config:{HeaderAndFooder:true},
        icon:<AccountCilce fontSize='small'/>},
    {
        href:'XXX',
        key:'list',
        config:{HeaderAndFooder:true},
        icon:<ListIcon fontSize='small'/>},

]