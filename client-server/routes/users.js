var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

// fz a declaração do serviço para restify 
 var client = restify.createJsonClient({
   url: 'http://localhost:4000'
 });

 // fz a autenticação q em nosso caso n faremos

/* GET users listing. e fazer a chamada do CLIENT */
router.get('/', (req, res, next) =>  {
  client.get('/users', (err,request, response, obj) => {
      assert.ifError(err);
      res.end(JSON.stringify(obj,null,2));

  });


});

module.exports = router;
