import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// serivicios
import { ListaDeseosService } from './services/lista-deseo.service';

import { TabsPage } from '../pages/tabs/tabs';
import { PendientesComponent } from '../pages/Pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/Terminados/terminados.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlaceholderPipe } from './pipes/placeholder.pipe';
import { DetalleComponent } from '../pages/detalle/detalle.component';
import { PendientesPipe } from './pipes/pendientes.pipe';




@NgModule({
  declarations: [
    MyApp,    
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    PlaceholderPipe,
    PendientesPipe,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetalleComponent
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeseosService
  ]
})
export class AppModule {}
