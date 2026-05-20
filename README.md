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

- Validação de Dados com Zod

  - Para que serve a biblioteca do zod?
    - biblioteca para validação de schemas muito usada para definir regras de negócios na camada de modelo
  - Para que serve a função 'Partial'?
    - uma forma de flexibilizar o que é obrigatório pontualmente algo que é obrigatório na validação
  - Qual a diferença do 'Parse' para o 'safeParse'?
    - quando tiver um erro de validação, o Parse lança uma excessão; o safeParse, quando gerado um erro de validação devolve o erro dentro de um objeto.

- Tratamentos de Erros
  - Qual o papel do ErrorHandler?
    quando é lançada uma exceção, ele é lançado no servidor com uma resposta amigável genérica para evitar que o servidor pare.
  - Quais erros devem ser tratados pelo ErrorHandler e quais devem ser tratados no try catch do controller?
    ErrorHandler: erros genéricos; Try catch: erros mais específicos que podem ser tratados dentro do controller;
  - Quais os parâmetros de entrada de um middleware de ErrorHandler?
    (error, req, res, next). - precisa do next, pq ele olha por quantidade de parâmetros.

- Query Params (/name/?=name=renan)
  - Como capturar um parâmetro query da url no controller?
    Através do req.query.
  - Para que são utilizados em geral os query params?
    Para filtros, em gets.

- Autenticação com JWT
  - Quais as diferenças dos métodos de Autenticação? E como funciona?
    Cada método se difere no quesito segurança e consumo de processanto, e eles são:
    - Basic Access ou Auth - Base64 (email:pass)
      a cada requisição html, o cliente envia as credenciais (user:pass) codificadas em base64 para o header assim: Authorization: Basic dXN1YXJpbzpzZW5oYQ==;
      não é seguro pq não é criptografia e podemos decodificá-lo facilmente.
    - Bearer Token (Opaque)
      O usuário envia o user e pass uma vez e o servidor valida, gera uma string aleatória (ex: xyz1234) e salva no banco de dados/sessão. A cada requisição, o cliente envia o token e o servidor consulta o banco de dados para validar se o token é válido.
    - Bearer Token JWT
      Diferente do Bearer Token opaque, o jwt é um token *autocontido*, ou seja, não é um código aleatório; ele carrega dados dentro dele.
      O usuario faz o login. O server cria um JSON com os dados não críticos do usuário (Payload), adiciona as instruções de segurança (header) e assina tudo com a chave secreta. O servidor entrega esse token ao cliente e não guarda nada no banco.
      Quando o cliente envia o JWT na requisição, o servidor não consulta o banco. Ele apenas faz um cálculo matemático usando a chave secreta dele para verificar se a chave é válida. Se for, ele confia nas informações que estão escritas dentro do proprio token. Isso economiza muito processamento e consultas no banco.
    - Bearer Token JWT + Refresh Token
      O JWT resolve o problema do banco de dados, mas traz um novo risco: se alguém roubar o seu JWT, essa pessoa terá acesso ao sistema até o token expirar, e o servidor não tem como "cancelar" o token facilmente (já que ele não consulta o banco). Para resolver isso, usamos a dupla dinâmica:

      Access Token (JWT): Tem um tempo de vida muito curto (ex: 15 minutos). É usado para acessar as APIs rapidamente.

      Refresh Token: É uma string aleatória (geralmente opaca), salva no banco de dados, com um tempo de vida longo (ex: 30 dias). Ele fica guardado em um lugar muito seguro no cliente.

      A dança dos tokens: Quando o JWT de 15 minutos expira, o cliente não pede para o usuário fazer login de novo. Em segundo plano, o cliente envia o Refresh Token para o servidor. O servidor valida no banco e, se estiver tudo certo, gera um novo JWT válido por mais 15 minutos.
  - Quais as características do JWT?
    O payload e o header são sempre visíveis e só quem conhece a assitatura (secret) consegue gerar o token

*Expressões regulares*