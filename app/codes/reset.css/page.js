import Content from '@/components/content'
import Code from '@/components/code'

export const metadata = {
	title:       'Reset.css',
	description: 'A reset stylesheet (or CSS reset) is a collection of CSS rules used to clear the browser\'s default formatting of HTML elements, removing potential inconsistencies between different browsers. It also prevents developers from unknowingly relying on the browser default styling and force them to be explicit about the styling they want to apply on the page.',
}
export default function Page() {
	return (
		<Content title={ metadata.title }>
			<p>A reset stylesheet (or CSS reset) is a collection of CSS rules used to clear the browser's default
			   formatting of HTML elements, removing potential inconsistencies between different browsers. It also
			   prevents developers from unknowingly relying on the browser default styling and force them to be explicit
			   about the styling they want to apply on the page.</p>
			<p>Here is Some Reset.css files</p>

			<h3>Yahoo CSS Reset</h3>
			<Code language={ 'css' }>{ `/* 
Yahoo! CSS Reset (YUI 2)
http://developer.yahoo.com/yui/reset/
CSSresetr.com
*/
body, div, dl, dt, dd, ul, ol, li,
h1, h2, h3, h4, h5, h6, pre,
form, fieldset, input, textarea, p, blockquote, th, td { 
    margin:0;
    padding:0;
}
table {
    border-collapse:collapse;
    border-spacing:0;
}
fieldset, img { 
    border:0;
}
address, caption, cite, code, dfn, em, strong, th, var {
    font-style:normal;
    font-weight:normal;
}
ol, ul {
    list-style:none;
}
caption, th {
    text-align:left;
}
h1, h2, h3, h4, h5, h6 {
    font-size:100%;
    font-weight:normal;
}
q:before, q:after {
    content:'';
}
abbr, acronym {
    border:0;
}` }</Code>

			<h3>Eric Meyer’s CSS Reset</h3>
			<Code language={ 'css' }>{`/* 
Eric Meyer's CSS Reset
http://meyerweb.com/eric/tools/css/reset/
v1.0 | 20080212
CSSresetr.com
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
 
/* remember to define focus styles! */
:focus {
    outline: 0;
}
 
/* remember to highlight inserts somehow! */
ins {
    text-decoration: none;
}
del {
    text-decoration: line-through;
}
 
/* tables still need 'cellspacing="0"' in the markup */
table {
    border-collapse: collapse;
    border-spacing: 0;
}`}</Code>

			<h3>Tripoli CSS Reset</h3>
			<Code language={ 'css' }>{ `/* 
Tripoli Reset
http://devkick.com/lab/tripoli/
CSSresetr.com
*/
* { margin: 0; padding: 0; text-decoration: none; font-size: 1em; outline: none; }
code, kbd, samp, pre, tt, var, textarea, input, select, isindex, listing, xmp, plaintext { font: inherit; font-size: 1em; white-space: normal; }
dfn, i, cite, var, address, em { font-style: normal; }
th, b, strong, h1, h2, h3, h4, h5, h6 { font-weight: normal; }
a, img, a img, iframe, form, fieldset, abbr, acronym, object, applet, table { border: none; }
table { border-collapse: collapse; border-spacing: 0; }
caption, th, td, center { text-align: left; vertical-align: top; }
body { line-height: 1; background: white; color: black; }
q { quotes: "" ""; }
ul, ol, dir, menu { list-style: none; }
sub, sup { vertical-align: baseline; }
a { color: inherit; }
hr { display: none; } /* we don't need a visual hr in layout */
font { color: inherit !important; font: inherit !important; color: inherit !important; } /* disables some nasty font attributes in standard browsers */
marquee { overflow: inherit !important; -moz-binding: none; }
blink { text-decoration: none; }
nobr { white-space: normal; }` }</Code>

			<h3>HTML5 Doctor CSS Reset</h3>
			<Code language={ 'css' }>{ `/* 
HTML5 Doctor Reset v1.6.1
http://html5doctor.com/html-5-reset-stylesheet/
CSSresetr.com
*/
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
body {
    line-height:1;
}
article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}
nav ul {
    list-style:none;
}
blockquote, q {
    quotes:none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}
a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}
/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}
del {
    text-decoration: line-through;
}
abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}
table {
    border-collapse:collapse;
    border-spacing:0;
}
/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}
input, select {
    vertical-align:middle;
}` }</Code>

		</Content>
	)
}