# Tópicos Importantes

- Qual a linguagem de programação utilizada para o nosso Backend?
  - javascript
  - framework: expressJS

- O que é o Node.js?
  - é um ambiente de execução JavaScript que permite rodar código fora do navegador

- O que é o NPM?
  - O npm (Node Package Manager) é o gerenciador de pacotes oficial do Node.js
  - comandos -> npm init: inicializa um projeto com um wizard, npm install [nome do pacote]: cria a pasta node_modules e instala os pacotes listados no package.json (se usado apenas com o npm install) e instala o pacote requerido no [nome do pacote] e os envia para a pasta node_modules

  -package.json: guarda as configurações e scripts do projeto.
  - package-lock.json: arquivo que guarda a arvore de dependências do projeto.

- O que é o Express.js?
  - é um framework web para Node.js
  - framework serve pra resolver um problema.
  - problema que o express resolve: criar API
  - diferença entre framework e biblioteca: framework tem uma estrutura pronta enquanto uma biblioteca é mais "solta"

- O que é uma API?
  - Application programming interface
  - é um conjunto de regras e protocolos que permite que dois softwares se comuniquem e troquem dados entre si.

- Como mudar o formato de importação de "require" - (padrão commonjs) para module?
  - configurando o package.json mudando adicionando o campo "type": "module" e usando import

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
  - só reseta o servidor quando o código é salvo
  - não melhora a performance do código

- Para que serve o Router no Express?
  - para separar em arquivos um conjunto de rotas de um mesmo endpoint
  - facilitar a manutenção e escalabilidade do código

- o que é um padrão de projeto?
  - forma de organizar um projeto que se tornou muito popular no mundo da programação, uma convençao.

- O que é o padrão de projeto MVC?
  - é um padrão de projeto de software que separa a aplicação em três camadas independentes: Model (dados e regras de negócio), View (interface do usuário) e Controller (intermediário que gerencia as interações).
  - objetivo: organização do código e facilidade de manutenção.

- Qual a responsabilidade de cada camada?
  - Model: define as regras de negócio, acesso aos dados (BD)
  - view: exibe as informações para o usuário (cadada do frontend)
  - controller: controle do fluxo de entrada, processamento (lógica) e saida dos dados

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
  - rotas com parametros fixos devem vir antes das rotas que contem parametros variáveis

- O que é um middleware?
  - É um padrao de projeto que cria um fluxo de execução de funções onde cada função é chamada de middleware. cada middleware vai resolver uma parte de um problema e passar para o próximo middleware.

  - Principais middlewares utilizados no express:
    - express.json(): Analisa (parsa) requisições de entrada com payloads JSON.
    - express.urlencoded(): Analisa requisições com dados codificados em URL (como formulários HTML).
    - express.static(): Utilizado para servir arquivos estáticos (imagens, CSS, JavaScript frontend) de forma eficiente.

---

Próximos Tópicos:

- Validação de Dados
- Tratamentos de Erros
- Autenticação com JWT
