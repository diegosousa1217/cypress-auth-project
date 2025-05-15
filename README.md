# Cypress Auth Project 🔐 ![GitHub Actions](https://github.com/diegosousa1217/cypress-auth-project/actions/workflows/main.yml/badge.svg)

Este projeto realiza testes de API automatizados utilizando [Cypress](https://www.cypress.io/) com geração de relatórios através do [Mochawesome](https://github.com/adamgruber/mochawesome).

## 📦 Tecnologias

- Node.js
- Cypress
- Mochawesome
- GitHub Actions

## 🚀 Instalação

1. Clone o repositório:

   git clone https://github.com/diegosousa1217/cypress-auth-project.git
   cd cypress-auth-project

2. Instale as dependências:

   npm install

## ✅ Executando os testes

Para executar os testes de API com Cypress:

   npm cypress run

## 📊 Gerando Relatório de Testes

Após rodar os testes, gere o relatório HTML com:

   npm run report:merge
   npm run report:generate

O arquivo `report.html` estará disponível em:

   cypress/reports/mochawesome/report.html

Abra esse arquivo no navegador para visualizar os resultados.

## 🧪 Scripts disponíveis

"scripts": {
  "report:merge": "npx mochawesome-merge cypress/reports/mochawesome/*.json > cypress/reports/mochawesome/merged-report.json",
  "report:generate": "npx marge cypress/reports/mochawesome/merged-report.json -f report -o cypress/reports/mochawesome"
}

## ⚙️ Integração Contínua (CI)

Este projeto utiliza GitHub Actions para executar os testes automaticamente a cada pull_request na branch master.

A pipeline também gera e publica o relatório como artefato.

## 📁 Estrutura de Pastas

cypress/
├── e2e/                 # Testes de API
├── fixtures/            # Dados mock para requisições
├── reports/             # Relatórios mochawesome
└── support/             # Comandos customizados

## ✍️ Autor

- Diego Sousa — https://github.com/diegosousa1217