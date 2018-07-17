import { Component } from '@angular/core';

import { PendientesComponent } from '../Pendientes/pendientes.component';
import { TerminadosComponent} from '../Terminados/terminados.component'
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadosComponent;
  

  constructor() {

  }
}
