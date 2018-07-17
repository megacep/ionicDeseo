import { Component, OnInit } from '@angular/core';
import {Lista,ListaItem} from '../../app/clases/index'
import { AlertController, NavController } from 'ionic-angular'

import { ListaDeseosService } from '../../app/services/lista-deseo.service';





@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'                  
})
export class AgregarComponent implements OnInit {
    
    nombreLista:string = "";    
    nombreItem:string = ""; 

    items:ListaItem[] = [];

    constructor( public alertCtrl: AlertController,
                 public navCtrl:NavController,
                 private _deseoService: ListaDeseosService) {         
    }

    ngOnInit() {         
    }

    agregar(){
        
        if( this.nombreItem.length == 0 ){
            return;
        }
        else{

            let item = new ListaItem();
            item.nombre = this.nombreItem;
            item.completado = false;

            this.items.push(item);
            this.nombreItem="";

        }            
    }

    borrarDeLista(index){
        this.items.splice(index,1);  
    }

    guardarLista(){
        if( this.nombreLista.length ==0){
            let alert = this.alertCtrl.create({
                title: "Nombre de la lista",
                subTitle: "El nombre de la lista es necesario",
                buttons: ['ok']
            });
            alert.present();
            return;
        }

        let lista = new Lista(this.nombreLista)

        lista.items = this.items;

        this._deseoService.listas.push(lista);        

        this.navCtrl.pop();


    }
}