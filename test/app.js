'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-weppy-mvc:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withArguments(['name-x'])
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'run.py'
    ]);
  });
});
