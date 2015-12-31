'use strict';

var pat = {
    idle: /<u>|<o>|\*\*|\*|<sub>|<sup>|<s>|<tt>/
};

var clos = {
    '<u>' : '</u>',
    '<o>' : '</o>',
    '**' : '\\*\\*',
    '*' : '\\*',
    '<sub>' : '</sub>',
    '<sup>' : '</sup>',
    '<s>' : '</s>',
    '<tt>' : '</tt>'
}

var m1Length = {
    '<u>' : 4,
    '<o>' : 4,
    '**' : 2,
    '*' : 1,
    '<sub>' : 6,
    '<sup>' : 6,
    '<s>' : 4,
    '<tt>' : 5
}

var deco = {
    '<u>' : {'text-decoration': 'underline'},
    '<o>' : {'text-decoration': 'overline'},
    '**' : {'font-weight': 'bold'},
    '*' : {'font-style': 'italic'},
    '<sub>' : {'baseline-shift': 'sub'},
    '<sup>' : {'baseline-shift': 'super'},
    '<s>' : {'text-decoration': 'line-through'},
    '<tt>' : {'font-weight': 'bold'} // TODO right attributes
}

exports.parse = function (str) {
    var res,
        i0,
        m0,
        i1,
        m1,
        str1,
        a,
        b,
        c;

    res = [];

    i0 = str.search(pat.idle);

    if (i0 === -1) {
        return [['tspan', {}, str]];
    }

    a = str.slice(0, i0); // A

    m0 = str.match(pat.idle)[0];

    str1 = str.slice(i0 + m0.length); // B+C

    m1 = clos[m0];

    i1 = str1.search(m1);

    b = str1.slice(0, i1); // B

    c = str1.slice(i1 + m1Length[m0]); // C

    if (i0 > 0) {
        res.push(['tspan', {}, a]);
    }

    if (i1 > 0) {
        res.push(['tspan', deco[m0], b]);
    }

    if (c.length > 0) {
        res.push(['tspan', {}, c]);
    }

    return res;
};
