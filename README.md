# apigamesv1
## Está api foi desenvolvida para por em práticas conceitos aprendidos do express, typescript, typeorm, docker (para ambiente de desenvolvimento) etc ...
### Está api é um crd (create, read, delete) utilizando alguns conceitos do solid, principal conceito utilizado foi o single responbility (principio de responsabilidade unica, que diz resumidamente que classe deve ter apenas uma atribuição)
#### Para rodar este pequeno projeto e testar as rotas é necessário ter o postgres na sua maquina e clonar este projeto, na pasta raiz basta instalar as dependencias e rodar o projeto com o comando yarn dev
##### Está api está numa versão 1.0, falta implementar algumas funcionalidades como testes automatizados, autenticação nas rotas e outras coisas para ser melhorada

## Endpoints:
REQUISIÇÃO - GET http://localhost:3001/game (faz uma busca de todos os jogos cadastrados no banco de dados)
RESPOSTA DE SUCESSO - status 200
RESPOSTA DE FALHA - status 400 (vai retornar um array vazio)
REQUISIÇÃO GET http://localhost:3001/game/id (precisa informar um id como parametro de rota)
RESPOSTA DE SUCESSO - status 200 (se o id for encontrado vai retornar o jogo com id informado)
RESPOSTA DE FALHA -  status 404 (se o id não foi encontrado vai retornar uma mensagem dizendo que o id não foi encontrado)
REQUISIÇÃO POST http://localhost:3001/game (informar os parametros via body, name, price, year)
RESPOSTA DE SUCESSO - status 201 (retorna o jogo criado)
REQUISIÇÃO DELETE http://localhost:3001/game/id (precisa informar um id como parametro de rota)
RESPOSTA DE SUCESSO - status 201 (retorna um array vazio)
RESPOSTA DE FALHA - status 404 (retorna uma mensagem dizendo que o id informado não existe)




