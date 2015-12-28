'use strict';

var lib = require('../lib'),
    expect = require('chai').expect;

var dat = {
    bold: {
        src: 'aaa**bold1**aaa',
        dst: ''
    },
    italic: {
        src: 'aaa*italic1*aaa',
        dst: ''
    },
    subscript: {
        src: 'aaa<sub>subscript</sub>aaa',
        dst: ''
    },
    superscript: {
        src: 'aaa<sup>superscript</sup>aaa',
        dst: ''
    },
    strikethrough: {
        src: 'aaa<s>strikethrough</s>aaa',
        dst: ''
    },
    overline: {
        src: 'aaa<o>overline</o>aaa',
        dst: ''
    },
    underline: {
        src: 'aaa<u>underline</u>aaa',
        dst: ''
    }
}

describe('basic', function () {
    Object.keys(dat).forEach(function (key) {
        it(key, function (done) {
            var src = dat[key].src;
            var dst = dat[key].dst;
            expect(lib.parse(src)).to.eq(dst);
            done();
        });
    });
});
