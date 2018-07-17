import {Component} from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseo.service'

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {
    
    constructor(private _listaDeseos: ListaDeseosService){

    }
}