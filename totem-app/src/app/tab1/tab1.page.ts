import { Component } from '@angular/core';
import { SenhasService } from 'src/app/services/senhas.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  etapa: 'acesso' | 'grupo' | 'senha' = 'acesso';
  senha: string = '';
  dataHora: string = '';

  constructor(
    private senhaService: SenhasService,
    private router: Router
  ) {}
  irParaTab2() {
    this.router.navigate(['/tabs/tab2']);
  }
  irParaGrupo() {
    this.etapa = 'grupo';
  }

  escolherGrupo(tipo: 'SP' | 'SG' | 'SE') {
    console.log(`[FluxoPage] Grupo escolhido: ${tipo}`);
    this.senhaService.novaSenha(tipo);
    this.senha = this.senhaService.inputNovaSenha;
    this.dataHora = new Date().toLocaleString();
    this.etapa = 'senha';
  }

  voltarParaInicio() {
    this.etapa = 'acesso';
  }
 
}
