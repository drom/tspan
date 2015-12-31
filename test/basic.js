'use strict';

var lib = require('../lib'),
    expect = require('chai').expect;

var dat = {
    plain: {
        src: 'just plain text',
        dst: [['tspan', {}, 'just plain text']]
    },
    bold: {
        src: '**bold1**',
        dst: [['tspan', {'font-weight': 'bold'}, 'bold1']]
    },
    bold_pre: {
        src: 'aaa**bold2**',
        dst: [
            ['tspan', {}, 'aaa'],
            ['tspan', {'font-weight': 'bold'}, 'bold2']
        ]
    },
    bold_post: {
        src: '**bold3**aaa',
        dst: [
            ['tspan', {'font-weight': 'bold'}, 'bold3'],
            ['tspan', {}, 'aaa']
        ]
    },
    bold_pre_post: {
        src: 'aaa**bold4**aaa',
        dst: [
            ['tspan', {}, 'aaa'],
            ['tspan', {'font-weight': 'bold'}, 'bold4'],
            ['tspan', {}, 'aaa']
        ]
    },
    italic: {
        src: 'aa*italic1*aaa',
        dst: [
            ['tspan', {}, 'aa'],
            ['tspan', {'font-style': 'italic'}, 'italic1'],
            ['tspan', {}, 'aaa']
        ]
    },
    subscript: {
        src: 'aaa<sub>subscript</sub>aaa',
        dst: [
            ['tspan', {}, 'aaa'],
            ['tspan', {'baseline-shift': 'sub'}, 'subscript'],
            ['tspan', {}, 'aaa']
        ]
    },
    superscript: {
        src: 'aaaa<sup>superscript</sup>aaa',
        dst: [
            ['tspan', {}, 'aaaa'],
            ['tspan', {'baseline-shift': 'super'}, 'superscript'],
            ['tspan', {}, 'aaa']
        ]
    },
    strikethrough: {
        src: 'aaaaa<s>strikethrough</s>aaa',
        dst: [
            ['tspan', {}, 'aaaaa'],
            ['tspan', {'text-decoration': 'line-through'}, 'strikethrough'],
            ['tspan', {}, 'aaa']
        ]
    },
    overline: {
        src: 'aaaaaa<o>overline</o>aaa',
        dst: [
            ['tspan', {}, 'aaaaaa'],
            ['tspan', {'text-decoration': 'overline'}, 'overline'],
            ['tspan', {}, 'aaa']
        ]
    },
    underline: {
        src: 'aaaaaaa<u>underline</u>aaa',
        dst: [
            ['tspan', {}, 'aaaaaaa'],
            ['tspan', {'text-decoration': 'underline'}, 'underline'],
            ['tspan', {}, 'aaa']
        ]
    },
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
