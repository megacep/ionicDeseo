import {Component} from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseo.service'

import {NavController} from 'ionic-angular'
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosComponent {
    
    constructor(private _listaDeseos: ListaDeseosService,
                private navCotroller: NavController){

    }    

    verDetalle(lista, idx){
        this.navCotroller.push(DetalleComponent, {
            lista: lista,
            idx: idx
        } );
    }
}