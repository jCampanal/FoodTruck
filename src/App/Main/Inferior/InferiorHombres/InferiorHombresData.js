import BermudaBlancaCorteClasico from '../../../../Assets/shorts man/Bermuda blanca corte clasico.jpg'
import BermudaGrisConZipper from '../../../../Assets/shorts man/Bermuda gris con zipper de colores.jpg'
import BermudaGris from '../../../../Assets/shorts man/Bermuda gris Puma.jpg'
import BermudaImpressos from '../../../../Assets/shorts man/Bermudas impressos para hombres.jpg'
import ShortMezclilla from '../../../../Assets/shorts man/short mezclilla por debajo de la rodilla.jpg'

import ShortAzulNegro from '../../../../Assets/shorts man/Short azul y negro.jpg'
import ShortBolsillos from '../../../../Assets/shorts man/short beitch con bolsillos a los lados.jpg'
import ShortNaylonAzul from '../../../../Assets/shorts man/short de naylon azul.jpg'
import ShortEstampadoazul from '../../../../Assets/shorts man/Short estampado azul.jpg'
import ShortMoteadoNegro from '../../../../Assets/shorts man/short negro con bolsillos a los lados.jpg'
import ShortsCamuflaje from '../../../../Assets/shorts man/Shorts de camuflaje.jpg'

import PantalonesCamuflaje from '../../../../Assets/Pantalones largos hombres/Pantalon momo diseño camuflaje y puño.jpg'
import PantalonGris from '../../../../Assets/Pantalones largos hombres/Pantalon momo gris de bolsillos.jpg'
import Pantalonmomogris from '../../../../Assets/Pantalones largos hombres/Pantalon momo gris.jpg'
import PantalonMomoNegro from '../../../../Assets/Pantalones largos hombres/Pantalon momo negro.jpg'
import PantalonNegroBolsillos from '../../../../Assets/Pantalones largos hombres/Pantalon negro de bolsillos.jpg'
import PantalonVaqueros from '../../../../Assets/Pantalones largos hombres/Pantalon vaqueros corte clasico.jpg'
import Pantalonemomoscasuales from '../../../../Assets/Pantalones largos hombres/Pantalones momos casuales.jpg'


import AdidasMarca from '../../../../Assets/tennis/Screenshot from 2022-06-24 10-08-09.png'
import Thrasher from '../../../../Assets/Pantalones de mujeres/Screenshot from 2022-06-24 11-45-14.png'
import Glister from '../../../../Assets/Pantalones de mujeres/Screenshot from 2022-06-24 11-45-53.png'


export const Categorias={

    Bermudas:[
       
        {
            ID:'Bms2eL',
            Nombre: 'Bermuda blanca corte clasico',
            Precio: 13,
            Descripcion: '',
            MarcaSRC:Thrasher,
            Existencias:100,
            rebaja:0,
            OfertaEspecial:null,
            Src:BermudaBlancaCorteClasico
        },
        {
            ID:'Bms2e',
            Nombre: 'Bermuda gris con zipper ',
            Precio: 5,
            Descripcion: 'Bermuda gris con zipper ',        
            MarcaSRC:Glister,
            Existencias:10,
            rebaja:20,
            OfertaEspecial:null,
            Src:BermudaGrisConZipper
        },
        {
            ID:'Skws2e',
            Nombre: 'Bermuda gris',
            Precio: 26,
            Descripcion: 'Bermuda gris',
            Marca: 'Reasmus',
            MarcaSRC:Thrasher,
            Existencias:400,
            rebaja:0,
            OfertaEspecial:null,
            Src:BermudaGris
        },
        {
            ID:'Sews2e',
            Nombre: 'Bermuda Impressos',
            Precio: 25,
            Descripcion: 'Bermuda Impressos',        
            MarcaSRC:Glister,
            Existencias:30,
            rebaja:20,
            OfertaEspecial:null,
            Src:BermudaImpressos
        },
        {
            ID:'Skwx2e',
            Nombre: 'Bermuda de Mezclilla',
            Precio: 56,
            Descripcion: 'Bermuda de Mezclilla',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:80,
            rebaja:0,
            OfertaEspecial:null,
            Src:ShortMezclilla
        },   

    ],
    
    
    Shorts:[
         
        {
            ID:'SMwT2e',
            Nombre: 'Short azul y negro',
            Precio: 34,
            Descripcion: 'Short azul y negro',        
            MarcaSRC:Glister,
            Existencias:160,
            rebaja:20,
            OfertaEspecial:null,
            Src:ShortAzulNegro
        },
        {
            ID:'SmMx2e',
            Nombre: 'Short de bolsillos',
            Precio: 56,
            Descripcion: '',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:90,
            rebaja:0,
            OfertaEspecial:null,
            Src:ShortBolsillos
        },    
        {
            ID:'SmkMx2T',
            Nombre: 'Short azul',
            Precio: 7,
            Descripcion: 'Short azul de nylon',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:80,
            rebaja:0,
            OfertaEspecial:null,
            Src:ShortNaylonAzul
        },      

        {
            ID:'Smws2e',
            Nombre: 'Short estampado azul',
            Precio: 23,
            Descripcion: 'Bonito short de estampado azul ',        
            MarcaSRC:AdidasMarca,
            Existencias:110,
            rebaja:5,
            OfertaEspecial:null,
            Src:ShortEstampadoazul
        },
        {
            ID:'Smkws2e',
            Nombre: 'Short moteado negro',
            Precio: 26,
            Descripcion: 'Short de un color moteado negro',
            Marca: 'Reasmus',
            MarcaSRC:AdidasMarca,
            Existencias:400,
            rebaja:0,
            OfertaEspecial:null,
            Src:ShortMoteadoNegro
        },   
        {
            ID:'Smcws2e',
            Nombre: 'Short de camuflaje',
            Precio: 23,
            Descripcion: '',        
            MarcaSRC:Thrasher,
            Existencias:110,
            rebaja:5,
            OfertaEspecial:null,
            Src:ShortsCamuflaje 
        }          
    ],
    Pantalones:[
        {
            ID:'Pmws2e',
            Nombre: 'Pantalón de camuflaje',
            Precio: 23,
            Descripcion: 'Hermoso pantalón de diseño ligero con camuflaje',        
            MarcaSRC:Glister,
            Existencias:110,
            rebaja:5,
            OfertaEspecial:null,
            Src:PantalonesCamuflaje
        },
        {
            ID:'Pwcws2e',
            Nombre: 'Pantalón gris',
            Precio: 15,
            Descripcion: '',        
            MarcaSRC:Glister,
            Existencias:43,
            rebaja:20,
            OfertaEspecial:null,
            Src:PantalonGris
        },
        {
            ID:'Pmws2e',
            Nombre: ' Momo gris',
            Precio: 46,
            Descripcion: 'Momo gris de diseño con texturas',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:300,
            rebaja:0,
            OfertaEspecial:null,
            Src:Pantalonmomogris
        },
        {
            ID:'Pmews2e',
            Nombre: 'Momo negro',
            Precio: 22,
            Descripcion: 'Momo negro de diseño con texturas',        
            MarcaSRC:Glister,
            Existencias:39,
            rebaja:20,
            OfertaEspecial:null,
            Src:PantalonMomoNegro
        },
        {
            ID:'Skwx2e',
            Nombre: 'Pantalón negro',
            Precio: 96,
            Descripcion: '',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:30,
            rebaja:0,
            OfertaEspecial:null,
            Src:PantalonNegroBolsillos
        },    
        {
            ID:'PwwT2e',
            Nombre: 'Vaquero',
            Precio: 34,
            Descripcion: 'Para sentirte realmente hombre',        
            MarcaSRC:Glister,
            Existencias:160,
            rebaja:20,
            OfertaEspecial:null,
            Src:PantalonVaqueros
        },
        {
            ID:'PwkMx2e',
            Nombre: 'Momo sencillo casual',
            Precio: 33,
            Descripcion: 'Momo de dise;o sencillo',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:910,
            rebaja:0,
            OfertaEspecial:null,
            Src:Pantalonemomoscasuales 
        }, 
    ]
    }

