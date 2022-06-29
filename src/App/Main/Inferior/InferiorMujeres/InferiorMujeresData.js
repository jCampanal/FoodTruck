import OberolAzul from '../../../../Assets/Shorts womans/Oberol Azul.jpg'

import ShortTela from '../../../../Assets/Shorts womans/Pantalom de tela.jpg'
import ShortZipperAtras from '../../../../Assets/Shorts womans/pantalon con ziper atras.jpg'
import PantalonesCortosHolgados from '../../../../Assets/Shorts womans/Pantalones Cortos Holgados.jpg'
import PantalonesCortosLatexNegros from '../../../../Assets/Shorts womans/Pantalones cortos latex negros.jpg'
import PantalonesCortosMezclillaRotos from '../../../../Assets/Shorts womans/Pantalones cortos mezclilla rotos.jpg'
import PantalonesCortosMezclilla from '../../../../Assets/Shorts womans/Pantalones cortos mezclilla.jpg'
import PantalonesCortosNegrosConTirantes from '../../../../Assets/Shorts womans/Pantalones cortos latex negros.jpg'
import PantalonesCortosNegros from '../../../../Assets/Shorts womans/Pantalones cortos negros.jpg'

import BermudaDeportivaConPuño from '../../../../Assets/Pantalones de mujeres/Bermuda deportiva con puño.jpg'
import MomoAzul from '../../../../Assets/Pantalones de mujeres/Momo azul.jpg'

import BermudaMezclillaConpuño from '../../../../Assets/Pantalones de mujeres/Bermuda de mezclilla con puño.jpg'

import jeansRotos from '../../../../Assets/Pantalones de mujeres/jeans rotos.jpg'
import PantalonAnchoEstampado from '../../../../Assets/Pantalones de mujeres/pantalon ancho estampado.jpg'
import PantalonCuadrosCorteClasico from '../../../../Assets/Pantalones de mujeres/pantalon de cuadros corte clasico.jpg'
import PantalonEstampadoMariposas from '../../../../Assets/Pantalones de mujeres/Pantalon de piernas anchas con estampado de mariposas.jpg'
import PantalonCarmelita from '../../../../Assets/Pantalones de mujeres/Pantalon Marron  con corte de cintura.jpg'
import PantalonDeBotonesClaro from '../../../../Assets/Pantalones de mujeres/PAntalon Piernas anchas beitch de botones.jpg'
import PantalonBlanco from '../../../../Assets/Pantalones de mujeres/PAntalon Piernas anchas beitch.jpg'

import AdidasMarca from '../../../../Assets/tennis/Screenshot from 2022-06-24 10-08-09.png'
import Glister from '../../../../Assets/Pantalones de mujeres/Screenshot from 2022-06-24 11-45-14.png'
import Thrasher from '../../../../Assets/Pantalones de mujeres/Screenshot from 2022-06-24 11-45-53.png'


export const Categorias={

    Oberoles:[
       
        {
            ID:'Ows2eL',
            Nombre: 'Oberol Azul',
            Precio: 13,
            Descripcion: 'Oberol azul de diseño de verano',
            MarcaSRC:Thrasher,
            Existencias:100,
            rebaja:0,
            OfertaEspecial:null,
            Src:OberolAzul
        },

    ],
    
    
    Shorts:[
        {
            ID:'Scws2e',
            Nombre: 'Shorts de tela ',
            Precio: 5,
            Descripcion: 'Short de algodón ',        
            MarcaSRC:Glister,
            Existencias:10,
            rebaja:20,
            OfertaEspecial:null,
            Src:ShortTela
        },
        {
            ID:'Skws2e',
            Nombre: 'Short de diseño negro',
            Precio: 26,
            Descripcion: 'Short de diseño con zipper traseros',
            Marca: 'Reasmus',
            MarcaSRC:Thrasher,
            Existencias:400,
            rebaja:0,
            OfertaEspecial:null,
            Src:ShortZipperAtras
        },
        {
            ID:'Sews2e',
            Nombre: 'Shorts de tela holgado',
            Precio: 25,
            Descripcion: 'Short de tela holgado de diseño extravagante ',        
            MarcaSRC:Glister,
            Existencias:30,
            rebaja:20,
            OfertaEspecial:null,
            Src:PantalonesCortosHolgados
        },
        {
            ID:'Skwx2e',
            Nombre: 'Short de latex negro',
            Precio: 56,
            Descripcion: 'Short de latex',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:80,
            rebaja:0,
            OfertaEspecial:null,
            Src:PantalonesCortosLatexNegros
        },    
        {
            ID:'SewT2e',
            Nombre: 'Short mezclilla rotos',
            Precio: 34,
            Descripcion: 'Short de mezclilla roto ',        
            MarcaSRC:Glister,
            Existencias:160,
            rebaja:20,
            OfertaEspecial:null,
            Src:PantalonesCortosMezclillaRotos
        },
        {
            ID:'SkMx2e',
            Nombre: 'Pantalón corto',
            Precio: 56,
            Descripcion: '',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:90,
            rebaja:0,
            OfertaEspecial:null,
            Src:PantalonesCortosMezclilla
        },    
        {
            ID:'SwkMx2T',
            Nombre: 'Pantalón corto negro',
            Precio: 7,
            Descripcion: 'Pantalón negro ',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:80,
            rebaja:0,
            OfertaEspecial:null,
            Src:PantalonesCortosNegros
        },      
    ],
    Deportivos:[
        {
            ID:'Mcws2e',
            Nombre: 'Bermuda deportiva con puño',
            Precio: 23,
            Descripcion: 'Bermudad deportiva ',        
            MarcaSRC:AdidasMarca,
            Existencias:110,
            rebaja:5,
            OfertaEspecial:null,
            Src:BermudaDeportivaConPuño
        },
        {
            ID:'Mkws2e',
            Nombre: 'Momo azul',
            Precio: 26,
            Descripcion: 'Momo deportivo de color azul',
            Marca: 'Reasmus',
            MarcaSRC:AdidasMarca,
            Existencias:400,
            rebaja:0,
            OfertaEspecial:null,
            Src:MomoAzul
        },            
    ],
    Bermudas:[
        {
            ID:'Bcws2e',
            Nombre: 'Bermuda de mezclilla con puño',
            Precio: 23,
            Descripcion: 'Bermuda de mezclilla ',        
            MarcaSRC:Thrasher,
            Existencias:110,
            rebaja:5,
            OfertaEspecial:null,
            Src:BermudaMezclillaConpuño
        }          
    ],
    Pantalones:[
        {
            ID:'Pcws2e',
            Nombre: 'Jeans rotos',
            Precio: 23,
            Descripcion: 'Jeans de diseño gastado ',        
            MarcaSRC:Glister,
            Existencias:110,
            rebaja:5,
            OfertaEspecial:null,
            Src:jeansRotos
        },
        {
            ID:'Pwcws2e',
            Nombre: 'Pantalón ancho estampado ',
            Precio: 15,
            Descripcion: 'Pantalón ancho estampado ',        
            MarcaSRC:Glister,
            Existencias:43,
            rebaja:20,
            OfertaEspecial:null,
            Src:PantalonAnchoEstampado
        },
        {
            ID:'Pwws2e',
            Nombre: 'Pantalón cuadros corte clásico',
            Precio: 46,
            Descripcion: 'Pantalón cuadros corte clásico',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:300,
            rebaja:0,
            OfertaEspecial:null,
            Src:PantalonCuadrosCorteClasico
        },
        {
            ID:'Pwews2e',
            Nombre: 'Pantalón estampado de mariposas',
            Precio: 22,
            Descripcion: 'Pantalón ancho con estampado de mariposas ',        
            MarcaSRC:Glister,
            Existencias:39,
            rebaja:20,
            OfertaEspecial:null,
            Src:PantalonEstampadoMariposas
        },
        {
            ID:'Skwx2e',
            Nombre: 'Pantalón carmelita',
            Precio: 96,
            Descripcion: 'Pantalón carmelita con corte recto',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:30,
            rebaja:0,
            OfertaEspecial:null,
            Src:PantalonCarmelita
        },    
        {
            ID:'PwwT2e',
            Nombre: 'Pantalón',
            Precio: 34,
            Descripcion: 'Pantalón de diseño con botones',        
            MarcaSRC:Glister,
            Existencias:160,
            rebaja:20,
            OfertaEspecial:null,
            Src:PantalonDeBotonesClaro
        },
        {
            ID:'PwkMx2e',
            Nombre: 'Pantalon blanco ',
            Precio: 33,
            Descripcion: 'Pantalon blanco de gala',
            Marca: 'Reasmus',
            MarcaSRC:Glister,
            Existencias:910,
            rebaja:0,
            OfertaEspecial:null,
            Src:PantalonBlanco 
        }, 
    ]
    }

