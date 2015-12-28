'use strict';

var lib = require('../lib'),
    expect = require('chai').expect;

describe('basic', function () {
    it('t0', function (done) {
        expect(lib.parse('abc<o>def</o>gh')).to.eq(['abc', 'def', 'gh']);
        done();
    });
});
