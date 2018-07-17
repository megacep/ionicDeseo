import {Injectable} from '@angular/core'
import {Lista} from '../clases/listas'

@Injectable()
export class ListaDeseosService{

    listas: Lista[] = [];

    constructor(){

        let lista = new Lista('Compra de supermercado');
        let lista2 = new Lista('Juegos que deseo');
        let lista3 = new Lista('cosas de la universidad');

        this.listas.push(lista);
        this.listas.push(lista2);
        this.listas.push(lista3);

        console.log("servicios inicializado")
        
    }
    

}