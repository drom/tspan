# \<tspan\>

[![Build Status](https://travis-ci.org/drom/tspan.svg)](https://travis-ci.org/drom/tspan)
[![Build status](https://ci.appveyor.com/api/projects/status/c0fpqnqvkuwa92a8?svg=true)](https://ci.appveyor.com/project/drom/tspan)


Markup for SVG

Wiki markup comparison: http://www.wikimatrix.org/syntax.php

## Proposed markup

| format        | MediaWiki                | GFM      | GFM result | LaTeX | SVG style |
|---------------|--------------------------|----------|------------|-------|-----------|
| bold          | `'''bold'''`             | `**bold1** __bold2__` | **bold1** __bold2__ |  | {font-weight: bold}
| italic        | `''italic''`             | `*italic1* _italic2_` | *italic1* _italic2_ |  | {font-style: italic}
| code          | `<tt>code</tt>`          | ``` `code1` <tt>code2</tt> ``` | `code1` <tt>code2</tt> |
| subscript     | `<sub>subscript</sub>`   | `<sub>subscript</sub>` | X<sub>subscript</sub> |  | {baseline-shift: sub}
| superscript   | `<sup>superscript</sup>` | `<sup>superscript</sup>` | X<sup>superscript</sup> | | {baseline-shift: super}
| strikethrough | `<s>strikethrough</s>`   | `<s>strikethrough</s> ~~strikethrough~~` | <s>strikethrough</s> ~~strikethrough~~ | | {text-decoration: line-through}
| underline     | `<u>underline</u>`       | NEW:`<u>underline</u>` | underline | | {text-decoration: underline}
| overline      |  `{{overline|overline}}` | NEW:`<o>overline</o>` | <o>overline</o> | | {text-decoration: overline}
