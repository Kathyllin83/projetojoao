# 🚀 Sistema de Controle de Atendimento 🏥

## Visão Geral
**Sistema web desenvolvido em Angular** para controle de filas de atendimento em **laboratórios médicos**, baseado em uma lógica de senhas com priorização.

## 🎯 **Objetivo**
Oferecer um sistema **eficiente e prático** para o gerenciamento de senhas de atendimento, com **regras de priorização** e controle de **tempo médio** por tipo de atendimento.

## ⚙️ Funcionalidades
### Emissão de senhas por tipo:
- **🔴 SP** – Senha Prioritária
- **🟢 SG** – Senha Geral
- **🔵 SE** – Senha para Retirada de Exames

Chamadas de senhas alternando prioridades:
- **[SP] → [SE|SG] → [SP] → [SE|SG] → ...

 Controle de Tempo Médio (TM) por tipo de senha:
- 🕒 SP: 15 ± 5 minutos
- 🕔 SG**: 5 ± 3 minutos
- ⏱️ SE: 1 min (95%) ou 5 min (5%)

### Outras funcionalidades:
- Exibição das **5 últimas senhas chamadas.
- **Geração de relatórios**:
  - Diários e mensais
  - Senhas emitidas e atendidas (geral e por tipo)
  - Relatórios de TM

---

## 🧑‍💻 Agentes do Sistema
- AS - Agente Sistema: Emite senhas e responde aos comandos do atendente.
- AA - Agente Atendente: Chama o próximo da fila e realiza o atendimento.
- AC - Agente Cliente: Solicita uma senha no totem e aguarda ser chamado no painel.

## 📅 Regras de Atendimento
- Atendimento das senhas ocorre das 7h às 17h.
- Após as 17h, senhas não atendidas são descartadas.
- 5% das senhas emitidas não são atendidas e devem ser descartadas.

---

## 🔢 Formato da Senha
A senha segue o padrão: `YYMMDD-PPSQ`
- YY: Ano (2 dígitos)
- MM: Mês
- DD: Dia
- PP: Tipo da Senha (SP, SG, SE)
- SQ: Sequência da senha por tipo (reinicia diariamente)


 🖥️ **Requisitos Técnicos
 
### 🔧 **Frontend**
- **Angular** (última versão estável)
- **HTML5 / SCSS**
- **Responsividade** (compatível com totens, tablets e desktops)



## 🚀 **Instalação**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/sistema-controle-atendimento.git
cd sistema-controle-atendimento

# Instale as dependências
npm install

# Execute o ambiente de desenvolvimento
ng serve
