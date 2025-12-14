# Automation Exercise - Cypress

Projeto de automação de testes E2E para o site [Automation Exercise](https://automationexercise.com/) utilizando Cypress com TypeScript.

## 🛠️ Tecnologias

- [Cypress](https://www.cypress.io/) v15.7.1
- [TypeScript](https://www.typescriptlang.org/) v5.9.3
- [Faker.js](https://fakerjs.dev/) v10.1.0

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/                    # Arquivos de teste
│   ├── login.spec.cy.ts
│   └── subscribe.spec.cy.ts
├── fixtures/               # Dados estáticos para testes
│   └── user.json
└── support/
    ├── commands.ts         # Comandos customizados
    ├── e2e.ts              # Configuração de suporte
    ├── pages/              # Page Objects
    │   ├── accountCreatedPage.ts
    │   ├── homePage.ts
    │   ├── loginPage.ts
    │   └── signupPage.ts
    ├── types/              # Tipagens TypeScript
    │   └── user.ts
    └── utils/              # Utilitários
        └── userGenerator.ts
```

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/automation-exercise-cypress.git
```

2. Acesse a pasta do projeto:

```bash
cd automation-exercise-cypress
```

3. Instale as dependências:

```bash
npm install
```

## ▶️ Executando os Testes

### Modo Interativo (Cypress UI)

```bash
npx cypress open
```

### Modo Headless (Terminal)

```bash
npx cypress run
```

### Executar um teste específico

```bash
npx cypress run --spec "cypress/e2e/login.spec.cy.ts"
```

## 📋 Testes Disponíveis

| Arquivo | Descrição |
|---------|-----------|
| `login.spec.cy.ts` | Testes de login e autenticação |
| `subscribe.spec.cy.ts` | Testes de inscrição/newsletter |

## 🏗️ Padrões Utilizados

- **Page Object Model (POM)**: Organização dos elementos e ações das páginas em classes separadas
- **Fixtures**: Dados de teste centralizados
- **Faker.js**: Geração de dados dinâmicos para testes

## 📝 Licença

Este projeto está sob a licença ISC.
