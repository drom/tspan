# \<tspan\>

[![Build Status](https://travis-ci.org/drom/tspan.svg)](https://travis-ci.org/drom/tspan)
[![Build status](https://ci.appveyor.com/api/projects/status/c0fpqnqvkuwa92a8?svg=true)](https://ci.appveyor.com/project/drom/tspan)


Markup for SVG

Wiki markup comparison: http://www.wikimatrix.org/syntax.php

## Proposed markup

| format    | MediaWiki     | GFM      | GFM result   | LaTeX | SVG style |
|-----------|---------------|----------|--------------|-------|-----------|
|overline|`{{overline|overline}}`| |<o>overline</o>|\overline{overline}|{text-decoration: overline}
|underline|`<u>underline</u>`| |underline|\underline{underline}|{text-decoration: underline}
|subscript|`<sub>subscript</sub>`|`<sub>subscript</sub>`|X<sub>subscript</sub>|X_{subscript}|{baseline-shift: sub}
|superscript|`<sup>superscript</sup>`|`<sup>superscript</sup>`|X<sup>superscript</sup>|X^{superscript}|{baseline-shift: super}
|bold|`'''bold'''`|`**bold1** __bold2__`|**bold1** __bold2__|\mathbf{bold}|{font-weight: bold}
|italic|`''italic''`|`*italic1* _italic2_`|*italic1* _italic2_|\mathit{italic}|{font-style: italic}
|strikethrough|`<s>strikethrough</s>`|`<s>strikethrough</s> ~~strikethrough~~`|<s>strikethrough</s> ~~strikethrough~~| | {text-decoration: line-through}
|code|`<tt>code</tt>`|``` `code1` <tt>code2</tt> ```| |`code1` <tt>code2</tt>|
