# README - Cypress automatizando testes E2E (Projeto AdoPet)

## Sobre o Projeto

O **AdoPet** é uma aplicação que conecta pessoas interessadas em adotar pets com ONGs que possuem animais para adoção. 

Projeto utilizado para aplicação dos conhecimentos adiquiridos ao longo do curso de **Cypress**, para automatização de testes ent-to-end.

- **Front-End:** [Acessar Front-End](https://adopet-frontend-cypress.vercel.app)
- **Back-End:** [Acessar Back-End](https://adopet-api-i8qu.onrender.com/adotante/)

---

## Requisitos

### Ferramentas Necessárias

Certifique-se de ter as seguintes ferramentas instaladas:

1. **Node.js** (versão `v20.10.0`)  
   Verifique se já está instalado:
   ```bash
   node --version
   ```
   Caso não tenha o Node.js ou precise gerenciar versões, utilize o **Node Version Manager (NVM)**. Consulte [este artigo](#) para mais informações.

2. **Visual Studio Code (VSC)**  
   Baixe e instale o VSC de acordo com o seu sistema operacional na [página oficial](https://code.visualstudio.com/).

---

## Configuração do Ambiente no Windows

Caso esteja no Windows, recomenda-se utilizar o **WSL (Windows Subsystem for Linux)** para trabalhar com versionamento de linguagens como Node.js.

- [Instale o WSL no Windows](#)
- Assista ao tutorial em vídeo sobre o uso do WSL: [Confira o vídeo](#)

---

## Passos para Configuração

1. **Instale o Node.js**  
   Certifique-se de estar usando a versão `v20.10.0`:
   ```bash
   node --version
   ```
   Se necessário, use o NVM para instalar a versão correta.

2. **Configure o Visual Studio Code (VSC)**  
   Baixe e instale o VSC no seu sistema operacional.

---

## Iniciando o Projeto

1. Clone o repositório do projeto (se aplicável).
2. Navegue até o diretório do projeto no terminal.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o ambiente de desenvolvimento.

---

## Principais Comandos do Cypress

Durante os testes, utilize os seguintes comandos do Cypress:

### Executar o Cypress
```bash
npx cypress open
```
Abre a interface gráfica do Cypress para gerenciar e executar testes.

### Executar testes em modo headless
```bash
npx cypress run
```
Executa todos os testes diretamente no terminal, sem abrir a interface gráfica.

### Criar um novo teste
No diretório `cypress/e2e`, crie um arquivo com a extensão `.cy.js`, por exemplo:
```bash
cypress/e2e/novo_teste.cy.js
```

### Comandos úteis durante os testes
- `cy.visit('URL')`: Navega até a URL especificada.
- `cy.get('selector')`: Seleciona um elemento na página.
- `cy.contains('text')`: Seleciona um elemento que contém o texto especificado.
- `cy.click()`: Simula um clique no elemento selecionado.
- `cy.type('text')`: Digita o texto no elemento selecionado (ex.: campos de input).
- `cy.wait(ms)`: Espera um tempo especificado em milissegundos.

Para mais informações, consulte a [documentação oficial do Cypress](https://docs.cypress.io/).
