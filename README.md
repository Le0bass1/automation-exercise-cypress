# 🧪 Automation Exercise - Cypress

Projeto de automação de testes end-to-end utilizando Cypress para o site [Automation Exercise](https://automationexercise.com/).

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

### Executar testes por módulo

```bash
# Testes de autenticação
npx cypress run --spec "cypress/e2e/auth/**/*.cy.ts"

# Testes de carrinho
npx cypress run --spec "cypress/e2e/cart/**/*.cy.ts"

# Testes de produtos
npx cypress run --spec "cypress/e2e/products/**/*.cy.ts"

# Testes de outros módulos
npx cypress run --spec "cypress/e2e/others/**/*.cy.ts"
```

### Executar um teste específico

```bash
npx cypress run --spec "cypress/e2e/auth/login.spec.cy.ts"
```

## 📋 Testes Disponíveis

### 🔐 Autenticação (`auth/`)

| Arquivo | Cenários |
|---------|----------|
| `login.spec.cy.ts` | Login com email inválido, senha inválida, credenciais válidas e logout |
| `register.spec.cy.ts` | Registro com email existente e criação de conta com dados válidos |

### 🛒 Carrinho (`cart/`)

| Arquivo | Cenários |
|---------|----------|
| `cart.spec.cy.ts` | Adicionar produtos ao carrinho (da lista e da página de detalhes), remover produtos, fluxo de checkout com registro e login |

**Cenários de teste:**
- Adicionar dois produtos da lista de produtos
- Adicionar produto com quantidade customizada da página de detalhes
- Remover produtos do carrinho
- Fluxo de checkout com registro durante o checkout
- Fluxo de checkout com registro antes do checkout
- Fluxo de checkout com login antes do checkout

### 📦 Produtos (`products/`)

| Arquivo | Cenários |
|---------|----------|
| `products.spec.cy.ts` | Listagem de produtos, verificação de elementos dos cards, navegação para detalhes e busca de produtos |

**Cenários de teste:**
- Exibir todos os produtos, verificar elementos dos cards e navegar para página de detalhes
- Buscar produto e verificar que todos os resultados contêm o termo pesquisado

### 📝 Outros (`others/`)

| Arquivo | Cenários |
|---------|----------|
| `contactUs.spec.cy.ts` | Envio de formulário de contato com upload de arquivo |
| `subscription.spec.cy.ts` | Inscrição na newsletter na página inicial e na página do carrinho |
| `testCases.spec.cy.ts` | Visualização e expansão dos casos de teste do site |

## 🏗️ Padrões Utilizados

- **Page Object Model (POM)**: Organização dos elementos e ações das páginas em classes separadas
- **Fixtures**: Dados de teste centralizados (`user.json`, `cart.json`)
- **Faker.js**: Geração de dados dinâmicos para testes
  - `generateFullUser()` - Gera usuário completo com todos os dados
  - `generateInvalidEmail()` - Gera emails inválidos para testes negativos
  - `generateInvalidPassword()` - Gera senhas inválidas para testes negativos

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/                    # Testes end-to-end
│   ├── auth/              # Testes de autenticação
│   ├── cart/              # Testes de carrinho
│   ├── products/          # Testes de produtos
│   └── others/            # Outros testes
├── fixtures/              # Dados de teste
├── support/
│   ├── commands.ts        # Comandos customizados do Cypress
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Page Objects
│   ├── types/             # Definições de tipos TypeScript
│   └── utils/             # Utilitários e geradores
└── config.ts              # Configuração do Cypress
```

## ⚙️ Configuração

O projeto está configurado com:
- **Base URL**: `https://automationexercise.com/`
- **Viewport**: 2560x1440
- **Watch for file changes**: Desabilitado

## 📝 Licença

Este projeto está sob a licença ISC.
