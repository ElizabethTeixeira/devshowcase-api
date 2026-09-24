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
```

## Verificação da API

A aplicação fica disponível em:

```text
http://localhost:3000
```

## Autor

Elizabeth Teixeira

## Status do projeto

Primeira etapa da entrega concluída: modelagem de domínio, persistência relacional e endpoints básicos.
