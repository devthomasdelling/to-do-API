# o que é a API?
Esta API é sobre uma lista de coisas para se fazer, como liçõe, tarefas e objetivos, sua simplicidade esta em: no nome da tarefa e se ela esta feita apenas.

# Como rodar?   
 clone a url do repositório: https://github.com/devthomasdelling/to-do-API.git
 entre na pasta do projeto
 instale as dependêcias: npm install 

# Endpoints
http://localhost:3000/tasks - POST
http://localhost:3000/tasks - GET
http://localhost:3000/tasks/:id - PUT
http://localhost:3000/tasks/:id - DELETE

# Exemplos de requisições

http://localhost:3000/tasks - POST 

{
    "title": "fazer dever de casa"
}

http://localhost:3000/tasks/1 - PUT

{
    "title": "fazer dever de casa"
    "done": true
}