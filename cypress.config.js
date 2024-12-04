const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "av6cdf",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false, //definimos a gravação em vídeo do teste para posterior playback.
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results', // diretório padrão onde serão gerados os relatórios.
      overwrite: false, // definimos se o relatório será sobrescrito ou não.
      html: false, // passamos o parâmetro true ou false para indicar se o relatório será gerado em formato HTML.
      json: true, // passamos o parâmetro true ou false para indicar se o relatório será gerado em formato JSON.
      charts: false, // dá a possibilidade de gerar gráficos quando unificamos os resultados.
      code: false, // mostra exatamente qual o código foi executado tanto na falha quanto no sucesso.
      reportTitle: "Relatório de Testes E2E - Projeto XYZ", // o título a ser apresentado no relatório.
      timestamp: "mmddyyyy_HHMMss" // formato de apresentação do relatório com relação à data e hora.
    }
  },
});