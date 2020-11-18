"use strict";
const { assert } = require('chai');
const request = require('supertest');
const app = require('../app');

const testEndpoint = request('http://localhost:3000');

describe('GET /search', function() {
    it('responds with json', function(done) {
        testEndpoint
        .get('/search?service=Massage&lat=59.34411099999999&lng=18.049118499999963')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('Should throws 503 if send invalid parametes', function(done) {
        testEndpoint
        .get('/search?service=Massage&lat=59.34411099999999')
        .expect(503, done);
      });
      
    it('Should throws 503 if send invalid parametes', function(done) {
        testEndpoint
        .get('/search')
        .expect(503, done);
      });
  });

