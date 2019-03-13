# Express Mysql CRUD

Exemplo de CRUD usando o node+express e o Mysql.

Você precisará ter instalado:

- MySQL ;
- Node ;

## MySQl

Rode o script /sql/usuario.sql para a criação da tabela .

## Express

Dentro da pasta /server , siga as instruções em http://expressjs.com/en/starter/installing.html .

Para a conexão com o banco, instale o módulo do MySQL : `npm install mysql --save`

## Rodando

Instale as dependências usando o `npm install`dentro da pasta `server` , no `server/app.js` altere as configurações para o seu banco. Instâncie o banco e rode o comando `node app.js`dentro da pasta `server` .

Para nõ precisar ficar parando e startantando o servidor toda vez que fazer alguma alteração, instale o nodemon com `npm install -g nodemon` e ao invés de rodar `node app.js` rode `nodemon app.js` .
