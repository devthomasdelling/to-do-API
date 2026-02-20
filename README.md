📝 To-Do API

API REST para gerenciamento de tarefas (To-Do List), permitindo criar, listar, atualizar e remover tarefas.

Projeto desenvolvido para praticar:

Node.js

Express

MongoDB Atlas

Mongoose

Organização em camadas (Model, Controller, Router)

Variáveis de ambiente

Estrutura profissional de backend

⚙️ Tecnologias utilizadas

Node.js

Express

MongoDB (Atlas)

Mongoose

Dotenv

CORS

📂 Estrutura do projeto
backend/
 ├── config/
 ├── controllers/
 ├── models/
 ├── routers/
 ├── middleware/
 ├── index.js
 └── .env

Arquitetura organizada separando responsabilidades:

Model → estrutura do dado

Controller → lógica da aplicação

Router → definição de rotas

Config → conexão com banco

Middleware → tratamento de erros

▶️ Como rodar o projeto

Clone o repositório:

git clone https://github.com/devthomasdelling/to-do-API.git

Entre na pasta backend:

cd backend

Instale as dependências:

npm install

Crie um arquivo .env dentro de backend:

DATABASE_URL=sua_string_do_mongodb

Inicie o servidor:

node index.js

Servidor rodando em:

http://localhost:3000
📌 Endpoints
Criar tarefa

POST

/tasks

Body:

{
  "title": "Estudar MongoDB"
}
Listar tarefas

GET

/tasks
Atualizar tarefa

PUT

/tasks/:id

Body:

{
  "title": "Estudar Node",
  "completed": true
}
Deletar tarefa

DELETE

/tasks/:id
💾 Banco de Dados

Banco hospedado no MongoDB Atlas.

A API utiliza Mongoose para:

Definir schema

Validar dados

Controlar persistência

As tarefas possuem:

title (String, obrigatório)

completed (Boolean, padrão false)