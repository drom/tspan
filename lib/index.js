'use strict';

var pat = {
    idle: /<u>|<o>|\*\*|\*|<sub>|<sup>|<s>|<tt>/
};

var clos = {
    '<u>' : '</u>',
    '<o>' : '</o>',
    '**' : '**',
    '*' : '*',
    '<sub>' : '</sub>',
    '<sup>' : '</sup>',
    '<s>' : '</s>',
    '<tt>' : '</tt>'
}

exports.parse = function (str) {
    var res = [],
        i0,
        m0,
        i1;

    i0 = str.search(pat.idle);

    m0 = str.match(pat.idle);

    res.push(str.slice(0, i0)); // A

    str = str.slice(i0); // B+C

    i1 = str.search(clos[m0]);

    res.push(str.slice(0, i1)); // B

    str = str.slice(i1); // C

    res.push(str);
    return res;
};
