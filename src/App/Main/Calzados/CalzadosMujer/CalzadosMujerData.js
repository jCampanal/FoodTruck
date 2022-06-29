
import SandaliasRosas from '../../../../Assets/Sandalias/sandalias rosas.jpg'
import SandaliasVerdes from '../../../../Assets/Sandalias/Sandalias verdes.jpg'
import SandaliasCruzadas from '../../../../Assets/Sandalias/zandalias 3 tiras cruzadas.jpg'


import TaconesConLazo from '../../../../Assets/Tacones negros/Tacones beitch con lazo.jpg'
import TaconesBlancos from '../../../../Assets/Tacones negros/Tacones blancos.jpg'

import SandaliaMArca from '../../../../Assets/Sandalias/Screenshot from 2022-06-21 11-50-46.png'
import TaconesMArca from '../../../../Assets/Tacones negros/Screenshot from 2022-06-21 11-23-00.png'

export const Categorias={

Sandalias:[
   
    {
        ID:'ews2eL',
        Nombre: 'Sandalias Rosas',
        Precio: 4,
        Descripcion: 'Sandalias de cuero resistente con corte de estroker',
        MarcaSRC:SandaliaMArca,
        Existencias:10,
        rebaja:0,
        OfertaEspecial:null,
        Src:SandaliasRosas
    },
    {
        ID:'cws2e',
        Nombre: 'Sandalias Verdes',
        Precio: 4,
        Descripcion: 'Sandalias de cuero resistente con corte de estroker',        
        MarcaSRC:SandaliaMArca,
        Existencias:10,
        rebaja:0,
        OfertaEspecial:null,
        Src:SandaliasVerdes
    },
    {
        ID:'ekws2e',
        Nombre: 'Sandalias Cruzadas',
        Precio: 4,
        Descripcion: 'Sandalias de cuero resistente con cintas para cruce por el pie',
        Marca: 'Reasmus',
        MarcaSRC:SandaliaMArca,
        Existencias:10,
        rebaja:0,
        OfertaEspecial:null,
        Src:SandaliasCruzadas
    },


],


Tacones:[
    {
        ID:'ews2e',
        Nombre: 'Tacones con Lazos',
        Precio: 10,
        Descripcion: 'Tacon mediano con hermoso lazo',
        Marca: 'Escualse',
        MarcaSRC:TaconesMArca,
        Existencias:5,
        rebaja:0,
        OfertaEspecial:null,
        Src:TaconesConLazo
    },
    {
        ID:'ewt2e',
        Nombre: 'Tacones Blancos',
        Precio: 10,
        Descripcion: 'Tacones de bonito color blanco',
        Marca: 'Esmeralda',
        MarcaSRC:TaconesMArca,
        Existencias:5,
        rebaja:10,
        OfertaEspecial:null,
        Src:TaconesBlancos
    },  

]
}