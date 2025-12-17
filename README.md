
## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:

git clone https://github.com/seu-usuario/automation-exercise-cypress.git2. Acesse a pasta do projeto:

cd automation-exercise-cypress3. Instale as dependências:

npm install## ▶️ Executando os Testes

### Modo Interativo (Cypress UI)

npx cypress open### Modo Headless (Terminal)

npx cypress run### Executar testes por módulo

# Testes de autenticação
npx cypress run --spec "cypress/e2e/auth/**/*.cy.ts"

# Testes de outros módulos
npx cypress run --spec "cypress/e2e/others/**/*.cy.ts"### Executar um teste específico

npx cypress run --spec "cypress/e2e/auth/login.spec.cy.ts"## 📋 Testes Disponíveis

### 🔐 Autenticação (`auth/`)

| Arquivo | Cenários |
|---------|----------|
| `login.spec.cy.ts` | Login com email inválido, senha inválida, credenciais válidas e logout |
| `register.spec.cy.ts` | Registro com email existente e criação de conta com dados válidos |

### 📝 Outros (`others/`)

| Arquivo | Cenários |
|---------|----------|
| `contactUs.spec.cy.ts` | Envio de formulário de contato com upload de arquivo |
| `testCases.spec.cy.ts` | Visualização e expansão dos casos de teste do site |

### 🛒 Carrinho (`cart/`)
> Em desenvolvimento

### 📦 Produtos (`products/`)
> Em desenvolvimento

## 🏗️ Padrões Utilizados

- **Page Object Model (POM)**: Organização dos elementos e ações das páginas em classes separadas
- **Fixtures**: Dados de teste centralizados (`user.json`)
- **Faker.js**: Geração de dados dinâmicos para testes
  - `generateFullUser()` - Gera usuário completo com todos os dados
  - `generateInvalidEmail()` - Gera emails inválidos para testes negativos
  - `generateInvalidPassword()` - Gera senhas inválidas para testes negativos

## ⚙️ Configuração

O projeto está configurado com:
- **Base URL**: `https://automationexercise.com/`
- **Viewport**: 2560x1440
- **Watch for file changes**: Desabilitado

## 📝 Licença

Este projeto está sob a licença ISC.
