(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{58:function(e,t,c){},67:function(e,t){},68:function(e,t,c){"use strict";c.r(t);var a=c(24),n=c(37),l=c.n(n),r=c(14),s=c(23),i=c(18),u=function(e){var t=e.handleClick;return Object(i.jsx)("div",{className:"btn-grid",children:["AC","\u2190","%"," \xf7 ","7","8","9"," \xd7 ","4","5","6"," - ","1","2","3"," + ",".","0","Calculate!"].map((function(e){return Object(i.jsx)("button",{onClick:t,value:e,children:e},e)}))})},o=c(2),j=c(70),b=(c(58),function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),c=t[0],n=t[1],l=Object(a.useState)(""),b=Object(s.a)(l,2),d=b[0],h=b[1],p=Object(a.useState)(" "),O=Object(s.a)(p,2),v=O[0],f=O[1],g=c.length>0;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:"Simple Calculator \ud83e\uddee"}),Object(i.jsxs)("div",{className:"calculator",children:[Object(i.jsxs)("h2",{className:"display",children:[Object(i.jsx)("span",{className:"display-previous ".concat(g?"alert-msg":""),children:g?c:d}),Object(i.jsx)("span",{className:"display-current",children:v})]}),Object(i.jsx)(u,{handleClick:function(e){switch(e.target.value){case"AC":h(""),f(" "),n("");break;case"\u2190":!function(){n("");var e=Object(r.a)(v);" "===e[e.length-1]?f(v.slice(0,-3)):f(v.slice(0,-1))}();break;case"%":!function(){var e=Object(r.a)(v);if(Number(e[e.length-1])||"0"===e[e.length-1]){for(var t=e.length-1;t>=0;t--)if(" "===e[t]){var c=e.splice(t+1).join("")/100;f(e.join("")+c.toString());break}}else n("Invalid Input!")}();break;case"Calculate!":!function(){try{var e=Object(o.pe)(Object(j.a)(v.replace("\xd7","*").replace("\xf7","/")),2);h(v),f(" "+e.toString())}catch(t){n("Invalid Input!")}}();break;default:if(v.length>31)return void n("Input is too long!");n(""),f(v+e.target.value)}}})]})]})});l.a.render(Object(i.jsx)(b,{}),document.querySelector("#root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.9037737b.chunk.js.map