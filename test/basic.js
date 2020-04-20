'use strict';

var lib = require('../lib'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
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
    'bold_pre': {
        src: 'aaa<b>bold2</b>',
        dst: [
            ['tspan', {}, 'aaa'],
            ['tspan', {'font-weight': 'bold'}, 'bold2']
        ]
    },
    'bold_post': {
        src: '<b>bold3</b>aaa',
        dst: [
            ['tspan', {'font-weight': 'bold'}, 'bold3'],
            ['tspan', {}, 'aaa']
        ]
    },
    'bold_pre_post': {
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
    },
    'a < <b>b</b> > c': {
        src: 'a < <b>b</b> > c',
        dst: [
            ['tspan', {}, 'a &lt; '],
            ['tspan', {'font-weight': 'bold'}, 'b'],
            ['tspan', {}, ' &gt; c']
        ]
    }
};

var $ = React.createElement;

describe('basic', function () {
    Object.keys(dat).forEach(function (key) {
        it(key, function (done) {
            var src = dat[key].src;
            var dst = dat[key].dst;
            var res = lib.parse(src);
            expect(res).to.deep.eq(dst);
            // var newDst = ['text', {x: 20, y: 20, 'font-size': 16}].concat(dst);
            // var svg = ['svg', { viewBox: '0 0 400 100', width: 400, height: 100, xmlns: 'http://www.w3.org/2000/svg'}, newDst];
            done();
        });
    });
});

describe('re-basic', function () {
    Object.keys(dat).forEach(function (key) {
        it(key, function (done) {
            var src = dat[key].src;
            var dst = dat[key].dst;
            try {
                var html = ReactDOMServer.renderToStaticMarkup(
                // ReactDOMServer.renderToString(
                    $('text', {}, lib.reparse(React)(src))
                );
                var res = onml.parse(html, {trim: false});
                expect(res).to.deep.eq(['text', {}].concat(dst));
            } catch (err) {
                console.log(html);
                throw err;
            }
            done();
        });
    });
});

/* eslint-env mocha */
/* eslint no-console: 0 */
