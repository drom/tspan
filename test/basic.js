'use strict';

var lib = require('../lib'),
    onml = require('onml'),
    expect = require('chai').expect;

var dat = {
    plain: {
        src: 'just plain text',
        dst: [['tspan', {}, 'just plain text']]
    },
    bold: {
        src: '<b>bold1</b>',
        dst: [['tspan', {'font-weight': 'bold'}, 'bold1']]
    },
    bold_pre: {
        src: 'aaa<b>bold2</b>',
        dst: [
            ['tspan', {}, 'aaa'],
            ['tspan', {'font-weight': 'bold'}, 'bold2']
        ]
    },
    bold_post: {
        src: '<b>bold3</b>aaa',
        dst: [
            ['tspan', {'font-weight': 'bold'}, 'bold3'],
            ['tspan', {}, 'aaa']
        ]
    },
    bold_pre_post: {
        src: 'aaa<b>bold4</b>aaa',
        dst: [
            ['tspan', {}, 'aaa'],
            ['tspan', {'font-weight': 'bold'}, 'bold4'],
            ['tspan', {}, 'aaa']
        ]
    },
    italic: {
        src: 'aa<i>italic1</i>aaa',
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
            ['tspan', {'baseline-shift': 'sub', 'font-size': '.7em'}, 'subscript'],
            ['tspan', {}, 'aaa']
        ]
    },
    superscript: {
        src: 'aaaa<sup>superscript</sup>aaa',
        dst: [
            ['tspan', {}, 'aaaa'],
            ['tspan', {'baseline-shift': 'super', 'font-size': '.7em'}, 'superscript'],
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
        src: 'aaaaaaa<ins>underline</ins>aaa',
        dst: [
            ['tspan', {}, 'aaaaaaa'],
            ['tspan', {'text-decoration': 'underline'}, 'underline'],
            ['tspan', {}, 'aaa']
        ]
    },
    'a <o>long</o> <i>and <b>winding</i> <ins>road</ins>': {
        src: 'a <o>long</o> <i>and <b>winding</i> <sub>road</sub>',
        dst: [
            ['tspan', {}, 'a '],
            ['tspan', {'text-decoration': 'overline'}, 'long'],
            ['tspan', {}, ' '],
            ['tspan', {'font-style': 'italic'}, 'and '],
            ['tspan', {'font-style': 'italic', 'font-weight': 'bold'}, 'winding'],
            ['tspan', {'font-weight': 'bold'}, ' '],
            ['tspan', {'baseline-shift': 'sub', 'font-size': '.7em', 'font-weight': 'bold'}, 'road']
        ]
    }
};

describe('basic', function () {
    Object.keys(dat).forEach(function (key) {
        it(key, function (done) {
            var src = dat[key].src;
            var dst = dat[key].dst;
            expect(lib.parse(src)).to.deep.eq(dst);
            dst.unshift('text', {x: 20, y: 20, 'font-size': 16});
            var svg = ['svg', { viewBox: '0 0 400 100', width: 400, height: 100, xmlns: 'http://www.w3.org/2000/svg'}, dst];
            console.log(onml.stringify(svg));
            done();
        });
    });
});
