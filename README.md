# DevShowcase API

API para gerenciamento de perfis de desenvolvedores, projetos, tecnologias e feedbacks, desenvolvida como parte da primeira etapa da disciplina de Programação Backend.

## Objetivo

A aplicação tem como objetivo oferecer uma base para a plataforma DevShowcase, permitindo:

- cadastro de perfis de desenvolvedores
- cadastro e listagem de tecnologias
- cadastro e listagem de projetos
- relacionamento entre perfil, projeto e tecnologia
- persistência em banco de dados relacional com Prisma

## Tecnologias utilizadas

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Zod
- dotenv

## Estrutura do projeto

```text
devshowcase-api/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── app.js
│   ├── config/
│   │   └── prisma.js
│   ├── controllers/
│   │   ├── profile.controller.js
│   │   ├── project.controller.js
│   │   └── technology.controller.js
│   ├── dtos/
│   │   ├── profile.dto.js
│   │   ├── project.dto.js
│   │   └── technology.dto.js
│   ├── routes/
│   │   ├── index.js
│   │   ├── profile.routes.js
│   │   ├── project.routes.js
│   │   └── technology.routes.js
├── repositories/
│   ├── profile.repository.js
│   ├── project.repository.js
│   └── technology.repository.js
├── services/
│   ├── profile.service.js
│   ├── project.service.js
│   └── technology.service.js
├── server.js
├── package.json
├── .env
├── .gitignore
├── prisma7.config.ts
└── README.md
```

## Entidades do domínio

### Profile
Representa o perfil do desenvolvedor.

### Project
Representa um projeto do desenvolvedor.

### Technology
Representa uma tecnologia utilizada no projeto.

### Feedback
Representa comentários ou avaliações sobre um projeto.

## Relacionamentos

- Profile 1:N Project
- Project N:N Technology
- Project 1:N Feedback

## Endpoints da API

### Perfis

- POST /api/profiles
- GET /api/profiles
- GET /api/profiles/:id

### Tecnologias

- POST /api/technologies
- GET /api/technologies

### Projetos

- POST /api/projects
- GET /api/projects

## Como executar o projeto

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com a seguinte estrutura:

```env
DATABASE_URL="postgresql://usuario:senha@host:5432/nome_do_banco?sslmode=require"
```

### 3. Gere o cliente Prisma

```bash
npx prisma generate
```

### 4. Inicie o servidor

```bash
npm start
```

Ou, se preferir:

```bash
node server.js
```

## Verificação da API

A aplicação fica disponível em:

```text
http://localhost:3000
```

## Exemplo de criação de perfil

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "bio": "Desenvolvedor backend",
  "githubUrl": "https://github.com/joaosilva",
  "linkedinUrl": "https://linkedin.com/in/joaosilva",
  "avatarUrl": "https://example.com/avatar.jpg"
}
```

## Exemplo de criação de tecnologia

```json
{
  "name": "Node.js",
  "category": "Backend"
}
```

## Exemplo de criação de projeto

```json
{
  "title": "API DevShowcase",
  "description": "Sistema para exibir perfis e projetos de devs.",
  "repositoryUrl": "https://github.com/usuario/devshowcase",
  "demoUrl": "https://example.com/demo",
  "imageUrl": "https://example.com/image.png",
  "profileId": 1,
  "technologies": [1, 2]
}
```

## Observações

- O arquivo `.env` não deve ser enviado ao GitHub.
- O banco deve estar configurado corretamente antes de iniciar a API.
- A estrutura do projeto foi pensada para manter separação de responsabilidades em camadas.

## Autor

Elizabeth Teixeira

## Status do projeto

Primeira etapa da entrega concluída: modelagem de domínio, persistência relacional e endpoints básicos.
