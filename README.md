# curso-javascript-projeto-full-stack

Este projeto a junção do node e users em Js.

CLONE o PROJETO.

# dependencias Genericas

# Instalação do Package do bower para gerenciamento de css e js html https://bower.io/

# Instalação do Express-Generator com npm install -g express-generator.

# BACKEND diretorio start-Projects_Servers/back-restapi

1º server back-restapi já dezipado.
2º fz npm install dos package node.js
3º fz a mudança da porta no arquivo index.js no metodo abaixo.
app.listen(4000, '127.0.0.1', ()=>{
console.log('servidor rodando!');
});

4º startando o projeto no backend: nodemon index.js

# FRONTEND diretorio start-Projects_Servers/front-files

1º server front-files já dezipado.
2º fz a instalação do bower globalmente usando -g npm install -g bower
3º dentro do diretorio front-files dar comando bower install.

# Startando um projeto com EXPRESS-GENERATOR express -h mostra as opções do generator

1º no diretorio raiz do seu projeto, onde clonou o projeto, dar o comando: express --ejs ESPAÇO + o nomeDoProjeto , será criado pelo Express Generator o projeto . Em nosso caso é : CLIENT-SERVER
2º dentro do projeto criado client-server, iremos ate o diretorio PLUBLIC exluiremos TUDO e copiaremos para lá TUDO que tem DENTRO do clone front-files.
3º recorte o arquivo INDEX.HTML e cole no diretorio views.
4º exclua o arquivo INDEX.EJS que foi criado pela express.
5º renomeie o arquivo INDEX.HTML para INDEX.EJS .
6º startando o projeto no backend: npm start

Obs: Apartir da linha 505 no INDEX.EJS do Formularios de EDIÇÃO, tem q ADCIONARo nome UPDATE nos IDs para sumir o Warning., Mudar nas Label o FOR= "exampleInputName" e nos Input NAME="exampleInputName" para  FOR= "exampleInputName-update"  NAME="exampleInputName-update"


# Fz o instalação do  RESTIFY-CLIENTS  dentro do client-server
1º npm install restify-clients --save


# Startando o Frontend
1º Dentro do diretorio cliente-server usar o comando npm start


# na Ultima aula foi adcionado dentro de client-server\public\classes\Fetch.js 

1º uma class chamada FETCH para substituir o AJAX por o FETCH
