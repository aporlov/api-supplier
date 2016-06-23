'use strict';

/*
 * Module dependencies.
 */

const test = require('tape');
const request = require('supertest');
const app = require('../dist/main.js').app;

test('Home page', t => {
  request(app)
    .get('/')
    .expect(200)
    .end(function (err, res) {
       t.error(err, 'No error');
      t.end();
    });
});

test('GET /api/price with right auth', t =>{
  request(app)
     .get('/api/price')
     .auth('test','123456')
     .expect(200)
     .end(function (err, res) {
     t.error(err, 'No error');
      t.end();
    });
});

test('GET /api/price with wrong auth', t =>{
  request(app)
     .get('/api/price')
     .auth('test','1234567')
     .expect(401)
     .end(function (err, res) {
     t.error(err, 'No error');
      t.end();
    });
});

test('POST /api/price send json', t =>{
  var price = {
"code":"999",
"name":"5-нок 50мг Таб. П/о Х50 Б",
"supplier_inn":"5261096000",
"supplier_name":"СИА Интернейшнл-Нижний Новгород",
"price_name":"основной",
"price_date":"2016-05-16T17:51:01",
"manufacturer":"Лек д.д.",
"pakage":"200",
"quantity":406,
"multiplicity":1,
"minpart":1,
"datareal":"01.05.2020",
"note":"Cроки годности с 01.05.2020 по 01.11.2020.",
"bad":"0",
"gnvls":"0",
"costs" : [
{"cl_id":"10790228",
"value":"156.42"}
,
{"cl_id":"10790279",
"value":"156.43"}
]}
  request(app)
     .post('/api/price')
     .auth('test','123456')
     .send(price)
     .expect(200)
     .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});
test.onFinish(() => process.exit(0));
