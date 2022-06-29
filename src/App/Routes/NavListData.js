import CalzadoIcon from '../Components/SVG/Shoes'
import ShortIcon from '../Components/SVG/Short'
import PullovertIcon from '../Components/SVG/Pullovert'

export const NavListData=[
    {
        Title:'Calzados',
        HREF: '/calzados',
        Icon:<CalzadoIcon 
                    fill={'white'}
                    width={20}
                    height={20}
                    />
    },
    {
        Title:'Inferior',
        HREF: '/inferior',
        Icon:<ShortIcon 
                    fill={'white'}
                    width={20}
                    height={20}/>
    },
    {
        Title:'Superior',
        HREF: '/superior',
        Icon:<PullovertIcon                     
                    fill={'white'}
                    width={20}
                    height={20}/>
    },
]
