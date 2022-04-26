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
      // res.end(JSON.stringify(obj,null,2));
      res.json(obj);

  });


});
/* GET users By ID a chamada do CLIENT */
router.get('/:id', (req, res, next) =>  {
  client.get(`/users/${req.params.id}`, (err,request, response, obj) => {
      assert.ifError(err);
      res.json(obj);

  });


});
/* PUT  chamada do CLIENT,t emos que mandar o REQ.BODY q é o Objeto com os dados */
router.put('/:id', (req, res, next) =>  {
  client.put(`/users/${req.params.id}`, req.body, (err,request, response, obj) => {
      assert.ifError(err);
      res.json(obj);

  });


});
/* DELETE  chamada do CLIENT */
router.delete('/:id', (req, res, next) =>  {
  client.del(`/users/${req.params.id}`, (err,request, response, obj) => {
      assert.ifError(err);
      res.json(obj);

  });


});
/* POST  chamada do CLIENT */
router.post('/', (req, res, next) =>  {
  client.post(`/users`, req.body, (err,request, response, obj) => {
      assert.ifError(err);
      res.json(obj);

  });


});

module.exports = router;
