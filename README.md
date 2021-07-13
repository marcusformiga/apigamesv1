# apigamesv1
## Está api foi desenvolvida para por em práticas conceitos aprendidos do express, typescript, typeorm, docker (para ambiente de desenvolvimento) etc ...
### Está api é um crd (create, read, delete) utilizando alguns conceitos do solid, principal conceito utilizado foi o single responbility (principio de responsabilidade unica, que diz resumidamente que classe deve ter apenas uma atribuição)
#### Para rodar este pequeno projeto e testar as rotas é necessário ter o postgres na sua maquina e clonar este projeto, na pasta raiz basta instalar as dependencias e rodar o projeto com o comando yarn dev
##### Está api está numa versão 1.0, falta implementar algumas funcionalidades como testes automatizados, autenticação nas rotas e outras coisas para ser melhorada

##Endpoints:
GET http://localhost:3001/game (faz uma busca de todos os jogos cadastrados no banco de dados)
GET http://localhost:3001/game/id (faz uma busca por id do jogo, cada jogo tem id unico, caso seja encontrado o jogo vai retornar os dados no formato json)
POST http://localhost:3001/game (cria um jogo, para criar um jogo devemos informar o seu nome, seu preço e o seu ano de lançamento, ao criar o jogo retorna o jogo)
DELETE http://localhost:3001/game/id (deleta um jogo informando um id existente, caso nao exista id vai retornar uma mensagem de erro)




