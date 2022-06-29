import TennisAdidasAzules from '../../../../Assets/tennis/Tennis azul Adidas.jpg'
import TennisBlancos from '../../../../Assets/tennis/Tennis blancos.jpg'
import TennisAdidasNegros from '../../../../Assets/tennis/Tennis negros Adidas.jpg'
import TennisNegrosConZuelanegraYBlanca from '../../../../Assets/tennis/Tennis negros con zuela negra y blanca.jpg'
import TennisNegrosConZuelasrojas from '../../../../Assets/tennis/tennis negros con zuelas rojas.jpg'
import TennisNegrosConZuelaGris from '../../../../Assets/tennis/Tennis negros zuelas gris.jpg'
import AddidasMarca from '../../../../Assets/tennis/Screenshot from 2022-06-24 10-08-09.png'
import SckecherMarca from '../../../../Assets/tennis/Screenshot from 2022-06-24 10-10-06.png'

export const Categorias={

    Tennis:[
       
        {
            ID:'exs2eL',
            Nombre: 'Tennis Azules',
            Precio: 24,
            Descripcion: 'Tennis azules de buena calidad',
            MarcaSRC:AddidasMarca,
            Existencias:50,
            rebaja:0,
            OfertaEspecial:null,
            Src:TennisAdidasAzules
        },
        {
            ID:'cxs2e',
            Nombre: 'Tennis Blancos',
            Precio: 60,
            Descripcion: 'Tennis color blanco',        
            MarcaSRC:AddidasMarca,
            Existencias:29,
            rebaja:0,
            OfertaEspecial:null,
            Src:TennisBlancos
        },
        {
            ID:'exws2e',
            Nombre: 'Tennis Negros',
            Precio: 25,
            Descripcion: 'Tennis color negro',
            Marca: 'Reasmus',
            MarcaSRC:AddidasMarca,
            Existencias:10,
            rebaja:0,
            OfertaEspecial:null,
            Src:TennisAdidasNegros
        },    
        {
            ID:'ewx2e',
            Nombre: 'Tennis Sckecher X678 ',
            Precio: 10,
            Descripcion: 'Tennis con suela de diseño blanca y negra',
            Marca: 'Escualse',
            MarcaSRC:SckecherMarca,
            Existencias:5,
            rebaja:0,
            OfertaEspecial:null,
            Src:TennisNegrosConZuelanegraYBlanca
        }, 
        {
            ID:'ewt2x',
            Nombre: 'Tennis Sckecher XI54',
            Precio: 15,
            Descripcion: 'tennis negros con una suela roja brillante',
            Marca: 'Esmeralda',
            MarcaSRC:SckecherMarca,
            Existencias:10,
            rebaja:10,
            OfertaEspecial:null,
            Src:TennisNegrosConZuelasrojas
        },  
        {
            ID:'xwt2x',
            Nombre: 'Tennis Sckecher XI34',
            Precio: 45,
            Descripcion: 'tennis negros con una suela roja brillante',
            Marca: 'Esmeralda',
            MarcaSRC:SckecherMarca,
            Existencias:30,
            rebaja:10,
            OfertaEspecial:null,
            Src:TennisNegrosConZuelaGris
        }, 


    ]
    }