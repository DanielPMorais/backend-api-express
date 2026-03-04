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

- Modelo MVC
    - Model: define as regras de negócio, acesso aos dados (BD)
    - view: exibe as informações para o usuário
    - controller: 