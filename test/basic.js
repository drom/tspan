'use strict';

var lib = require('../lib'),
    expect = require('chai').expect;

var dat = {
    bold: {
        src: 'a**bold1**aaa',
        dst: []
    },
    italic: {
        src: 'aa*italic1*aaa',
        dst: []
    },
    subscript: {
        src: 'aaa<sub>subscript</sub>aaa',
        dst: []
    },
    superscript: {
        src: 'aaaa<sup>superscript</sup>aaa',
        dst: []
    },
    strikethrough: {
        src: 'aaaaa<s>strikethrough</s>aaa',
        dst: []
    },
    overline: {
        src: 'aaaaaa<o>overline</o>aaa',
        dst: []
    },
    underline: {
        src: 'aaaaaaa<u>underline</u>aaa',
        dst: []
    }
}

describe('basic', function () {
    Object.keys(dat).forEach(function (key) {
        it(key, function (done) {
            var src = dat[key].src;
            var dst = dat[key].dst;
            expect(lib.parse(src)).to.deep.eq(dst);
            done();
        });
    });
});
