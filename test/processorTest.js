"use strict";

var assert = require('chai').assert;

var processor = require('../processor');
var data = require('../data.json');

describe('search query validation', function () {
  it('service name is not matching', () => {
    processor.search('test', 0, 0).then(res => {
      assert.equal(res.totalHits, 0)
    })    
  });

  it('service name is matching and check all the keys are available', () => {
    processor.search("massage", 0, 0).then(res => {
      assert.equal(res.totalHits, 7)
      assert.hasAllKeys(res, ['totalHits', 'totalDocuments', 'results'])
      assert.isArray(res.results)
      assert.hasAllKeys(res.results[0], ['id', 'name', 'position', 'distance', 'score'])
    })
  });
})
