# Tópicos Importantes
- Qual a linguagem de programação utilizada para o  nosso Backend?
    - expressJS

- O que é o Node.js?
    - é um ambiente de execução JavaScript que permite rodar código fora do navegador

- O que é o NPM?
    - O npm (Node Package Manager) é o gerenciador de pacotes oficial do Node.js

- O que é o Express.js?
    - é um framework web para Node.js

- Como mudar o formato de importação de "require" - (padrão commonjs) para module?
    - configurando o packege.json mudando adicionando o campo "type": "module" e usando import

- O que é HTTP?
    - hyper text transfer protocol, um protocolo de transferencia usado em sistemas web

- Quais os métodos de requisição HTTP e para que serve cada um deles?
    - get - consultar dados
    - post - inserir dados
    - put - atualizar um recurso inteiro
    - patch - atualizar parcialmente um recurso
    - delete - remover dados

- Para que serve o --watch ao rodar o servidor?
    - para que o servidor seja reiniciado automaticamente sempre que houver alterações nos arquivos do projeto.

- Para que serve o Router no Express?
    - para separar em arquivos um conjunto de rotas de um mesmo endpoint
    - facilitar a manutenção e escalabilidade do código

- O que é o padrão de projeto MVC?
    - Model: define as regras de negócio, acesso aos dados (BD)
    - view: exibe as informações para o usuário (cadada do frontend)
    - controller: controle do fluxo de entrada, processamento (lógica) e saida dos dados

- Qual a responsabilidade de cada camada?
    - 

- O que é um ORM?
    - Um ORM (Object-Relational Mapping) é uma técnica (e também o nome dado às ferramentas que a implementam) usada para facilitar a interação entre objetos do código e tabelas de banco de dados relacionais.

- Quais as vantagens de usar um ORM?
    - uma das grandes vantagens de usar orm: é mais facil para fazer a migração de banco de dados

### Comandos Prisma

npm i prisma -D
npm i dotenv -D
Mysql e Mariadb
npm install @prisma/client @prisma/adapter-mariadb mariadb

inicia o Prisma
npx prisma init --datasource-provider mysql --output ../generated/prisma


npx prisma db pull -> gera schema no prisma a partir do bd  
npx prisma db push -> gera tabelas no bd a partir do schema do prisma

npx prisma generate -> gera as funções para interagir com os modelos mapeados no schema

- Como utilizar os parâmetros de Url?
- O que é um middleware?
    - Resposta da IA: funções que são executadas em sequência durante o ciclo de vida de uma requisição HTTP, atuando como "interceptadores" entre a chegada do pedido do cliente e o envio da resposta pelo servidor (req, res).

    - É um padrao de projeto que cria um fluxo de execução de funções onde cada função é chamada de middleware. cada middleware vai resolver uma parte de um problema e passar para o próximo middleware.

---------

- Validação de Dados
- Tratamentos de Erros
- Autenticação com JWT