/*

Copyright (C) 2015 by Marijn Haverbeke <marijnh@gmail.com> and others

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function(c){"object"==typeof exports&&"object"==typeof module?c(require("../../lib/codemirror"),require("../markdown/markdown"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../markdown/markdown","../../addon/mode/overlay"],c):c(CodeMirror)})(function(c){var h=/^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/i;
c.defineMode("gfm",function(k,d){var g=0,e={underscoresBreakWords:!1,taskLists:!0,fencedCodeBlocks:"```",strikethrough:!0},f;for(f in d)e[f]=d[f];e.name="markdown";return c.overlayMode(c.getMode(k,e),{startState:function(){return{code:!1,codeBlock:!1,ateSpace:!1}},copyState:function(a){return{code:a.code,codeBlock:a.codeBlock,ateSpace:a.ateSpace}},token:function(a,b){b.combineTokens=null;if(b.codeBlock){if(a.match(/^```+/))return b.codeBlock=!1,null;a.skipToEnd();return null}a.sol()&&(b.code=!1);
if(a.sol()&&a.match(/^```+/))return a.skipToEnd(),b.codeBlock=!0,null;if("`"===a.peek()){a.next();var c=a.pos;a.eatWhile("`");c=1+a.pos-c;b.code?c===g&&(b.code=!1):(g=c,b.code=!0);return null}if(b.code)return a.next(),null;if(a.eatSpace())return b.ateSpace=!0,null;if(a.sol()||b.ateSpace)if(b.ateSpace=!1,!1!==d.gitHubSpice&&(a.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/)||a.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)))return b.combineTokens=!0,"link";
if(a.match(h)&&"]("!=a.string.slice(a.start-2,a.start)&&(0==a.start||/\W/.test(a.string.charAt(a.start-1))))return b.combineTokens=!0,"link";a.next();return null},blankLine:function(a){a.code=!1;return null}})},"markdown");c.defineMIME("text/x-gfm","gfm")});
