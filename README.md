# Projeto Tarefas Fábrica

Este é um projeto desenvolvido com o [Quasar Framework](https://quasar.dev/) utilizando Vue 3, TypeScript e Pinia. A aplicação consiste em um gerenciador de tarefas estilo Kanban, contando com a funcionalidade de arrastar e soltar (drag and drop) através da biblioteca `vuedraggable`.

## Tecnologias e Bibliotecas Principais

- **Vue 3**
- **Quasar Framework** (Vite)
- **TypeScript**
- **Pinia** (Gerenciamento de Estado)
- **Vue Router** (Roteamento)
- **vuedraggable** (Drag & Drop de tarefas)

## Como rodar o projeto localmente

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
É recomendado o uso do gerenciador de pacotes **Yarn**.

### Link do projeto

[Projeto Tarefas Fábrica](https://github.com/eugreg/Projeto-tarefas-fabrica.git)

### 1. Instalação das dependências

```bash
yarn install
```

### 2. Rodar o servidor de desenvolvimento com Hot-Reload

```bash
yarn dev
```

ou de forma nativa com a CLI do Quasar:

```bash
quasar dev
```

### 3. Build para produção

```bash
yarn build
```

ou

```bash
quasar build
```

## Scripts Adicionais

### Formatador de Código (Prettier)

Para formatar o código:

```bash
yarn format
```

### Linter (ESLint)

Para rodar o linter:

```bash
yarn lint
```
