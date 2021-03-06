# Exercício da semana

- [Instruções](#Instruções)

- --> [Respostas dos Exercícios](#Respostas-dos-Exercícios)


## Instruções

> Instrutora que elaborou o exercício: [Paula Allemand](https://github.com/itsalle)

Lembra todos os arquivos .json que você fez na última semana?
Chegou a hora de usá-los \o/

Para a entrega você deve escolher pelo menos 2 desses arquivos e repetir o processo de contrução do projeto de servidor para cada um desses arquivos.
Por exemplo, caso você escolha o de filmes e o de plantas, para cada um deles você deve criar uma branch no seu repositório e criar um projeto do zero para ele, com uma pasta src que possui controller, model e route, usando os mesmo pacotes npm que usamos em aula (nodemon e express).

- Exemplo:
```js
branch servidor-filmes

servidor-filmes
    node_modules
    src
        controller
            filmesController.json
        model
            filmes.json
        route
            filmesRoute.js
        app.js
    .gitignore
    package-lock.json
    package.json
    server.js
```
Essa será a visão da sua pasta LOCAL. Não se esqueça de criar o arquivo .gitignore :)


Não esqueça de inicializar o projeto npm dentro de cada uma dessas branchs!

----> EXTRAS
Se quiser um desafio, além de pegar todo os dados .json para listar na rota /tarefas, você pode:

Fazer um método para listar tarefas a partir do nome do colaborador (por exemplo, getByNomeColaborador); pelo id (por exmplo, getById) e outros dados específicos do seu .json ou do .json de tarefas que usamos em aula :)

## Respostas dos Exercícios

- [Africa Countries server](https://github.com/marianavns/nodejs-arquitetura-mvc/tree/african-countries)
- [Movies Server](https://github.com/marianavns/nodejs-arquitetura-mvc/tree/movies)
