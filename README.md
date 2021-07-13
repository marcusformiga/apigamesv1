# apigamesv1
## Está api foi desenvolvida para por em práticas conceitos aprendidos do express, typescript, typeorm, docker (para ambiente de desenvolvimento) etc ...
### Está api é um crd (create, read, delete) utilizando alguns conceitos do solid, principal conceito utilizado foi o single responbility (principio de responsabilidade unica, que diz resumidamente que classe deve ter apenas uma atribuição)
#### Para rodar este pequeno projeto e testar as rotas é necessário ter o postgres na sua maquina e clonar este projeto, na pasta raiz basta instalar as dependencias e rodar o projeto com o comando yarn dev
##### Está api está numa versão 1.0, falta implementar algumas funcionalidades como testes automatizados, autenticação nas rotas e outras coisas para ser melhorada

## Endpoints:
REQUISIÇÃO - GET http://localhost:3001/game (faz uma busca de todos os jogos cadastrados no banco de dados)
RESPOSTA DE SUCESSO - status 200
EXEMPLO DE RESPOSTA:
```
[
    [
        {
            "id": "2b6259f5-db9d-4f45-8aee-dc2d0888f053",
            "name": "CSGO",
            "price": "60.00",
            "year": 2012,
            "created_at": "2021-07-13T00:36:16.714Z",
            "updated_at": "2021-07-13T00:36:16.714Z"
        },
        {
            "id": "edf3346f-514a-434e-87df-05b203780015",
            "name": "Dota2",
            "price": "40.00",
            "year": 2012,
            "created_at": "2021-07-13T11:58:58.910Z",
            "updated_at": "2021-07-13T11:58:58.910Z"
        },
        {
            "id": "77b78ab3-bba1-44f7-a323-d6e396ea19d1",
            "name": "Clash of clans",
            "price": "10.00",
            "year": 2012,
            "created_at": "2021-07-13T11:59:24.055Z",
            "updated_at": "2021-07-13T11:59:24.055Z"
        },
        {
            "id": "a93e62c3-ed37-4594-99dc-fc3e7c6e2bad",
            "name": "Prince of persia",
            "price": "100.00",
            "year": 2021,
            "created_at": "2021-07-13T11:59:36.069Z",
            "updated_at": "2021-07-13T11:59:36.069Z"
        },
        {
            "id": "df4d5d51-1eef-4699-ac6d-1f0707d27abb",
            "name": "Sekiro",
            "price": "200.00",
            "year": 2021,
            "created_at": "2021-07-13T11:59:46.785Z",
            "updated_at": "2021-07-13T11:59:46.785Z"
        },
        {
            "id": "9c7fecf5-cc0b-4a0d-9349-55ad21673352",
            "name": "Mortal kombat",
            "price": "150.00",
            "year": 2021,
            "created_at": "2021-07-13T12:00:05.745Z",
            "updated_at": "2021-07-13T12:00:05.745Z"
        }
    ]
]
```
RESPOSTA DE FALHA - status 400 (vai retornar um array vazio)
REQUISIÇÃO GET http://localhost:3001/game/id (precisa informar um id como parametro de rota)
RESPOSTA DE SUCESSO - status 200 (se o id for encontrado vai retornar o jogo com id informado)
EXEMPLO DE RESPOTA:
```
{
    "id": "9c7fecf5-cc0b-4a0d-9349-55ad21673352",
    "name": "Mortal kombat",
    "price": "150.00",
    "year": 2021,
    "created_at": "2021-07-13T12:00:05.745Z",
    "updated_at": "2021-07-13T12:00:05.745Z"
}
```
RESPOSTA DE FALHA -  status 404 (se o id não foi encontrado vai retornar uma mensagem dizendo que o id não foi encontrado)
REQUISIÇÃO POST http://localhost:3001/game (informar os parametros via body, name, price, year)
RESPOSTA DE SUCESSO - status 201 (retorna o jogo criado)
EXEMPLO DE RESPOSTA:
```
{
    "name": "fifa21",
    "price": 150,
    "year": 2020,
    "id": "b6066e8f-8888-48fa-bc53-aec01c6962b1",
    "created_at": "2021-07-13T13:26:04.858Z",
    "updated_at": "2021-07-13T13:26:04.858Z"
}
```
REQUISIÇÃO DELETE http://localhost:3001/game/id (precisa informar um id como parametro de rota)
RESPOSTA DE SUCESSO - status 201 (retorna um array vazio)
EXEMPLO DE RESPOSTA:
```
[]
```
RESPOSTA DE FALHA - status 404 (retorna uma mensagem dizendo que o id informado não existe)




