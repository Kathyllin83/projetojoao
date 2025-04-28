import { Component } from '@angular/core';

import { SenhasService } from '../services/senhas.services';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public senhasService: SenhasService) {
   
  }
  abrirRelatorio() {
    // Lógica para abrir o relatório
    console.log('Relatório solicitado');
    // Pode ser um redirecionamento para outra página ou abrir um modal
  }
  
}