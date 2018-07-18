import {Component} from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseo.service'

import {NavController} from 'ionic-angular'
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {
    
    constructor(private _listaDeseos: ListaDeseosService,
                private navCotroller: NavController){

    }

    irAgregar(){
        this.navCotroller.push(AgregarComponent);
    }

    verDetalle( lista, idx){
        this.navCotroller.push(DetalleComponent, {
            lista: lista,
            idx: idx
        } );
    }
}