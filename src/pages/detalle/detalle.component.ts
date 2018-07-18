import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular'
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseo.service';
import { AlertController } from 'ionic-angular';



@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

    idx:number;
    lista:any;

    constructor(public navCtrl:NavController,
                public navParams: NavParams,
                public _listaDeseos:ListaDeseosService,
                public alertCtrl: AlertController) {

         this.idx = navParams.get("idx");
         this.lista = navParams.get("lista");

    }

    ngOnInit() { }

    actualizar(item:ListaItem){
        
        item.completado = !item.completado;

        let todosMarcados = true;
        for(let item of this.lista.items){
            if(!item.completado){
               todosMarcados =false;
               break;
            }
        }
        this.lista.terminada = todosMarcados;

        this._listaDeseos.actualizarData()

    }

    borrarItem(){

        const confirm = this.alertCtrl.create({
            title:  this.lista.nobre,
            message: '¿Esta seguro que desea eliminar la lista ?',
            buttons: [
              {
                text: 'Cancelar',
                handler: () => {
                  console.log('Disagree clicked');                  
                  return;
                }
              },
              {
                text: 'Eliminar',
                handler: () => {
                    this._listaDeseos.borrarLista(this.idx);
                    this.navCtrl.pop();
                }
              }
            ]
          });

          confirm.present();
        
    }
}