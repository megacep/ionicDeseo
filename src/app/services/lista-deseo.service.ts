import {Injectable} from '@angular/core'
import {Lista} from '../clases/listas'
import { JsonPipe } from '../../../node_modules/@angular/common';

@Injectable()
export class ListaDeseosService{

    listas: Lista[] = [];

    constructor(){

        // let lista = new Lista('Compra de supermercado');
        // let lista2 = new Lista('Juegos que deseo');
        // let lista3 = new Lista('cosas de la universidad');

        // this.listas.push(lista);
        // this.listas.push(lista2);
        // this.listas.push(lista3);
        this.cargarData();

        console.log("servicios inicializado");        
    }

    actualizarData(){                
        
        localStorage.setItem("data", JSON.stringify( this.listas))
    }

    cargarData(){
        if(localStorage.getItem("data"))
            this.listas = JSON.parse( localStorage.getItem("data") );
    }

    agregarLista(lista: Lista){
        this.listas.push(lista)
        this.actualizarData();
    }

    borrarLista(idx){
        this.listas.splice(idx,1);
        this.actualizarData()
    }
    

}