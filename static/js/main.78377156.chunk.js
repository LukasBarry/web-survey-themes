(this["webpackJsonpweb-survey-themes"]=this["webpackJsonpweb-survey-themes"]||[]).push([[0],{261:function(e,a,t){},262:function(e,a,t){},263:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(85),c=t.n(o),l=(t(93),t(31)),i=t(14),s=t(19),m=(t(94),t(95),t(1)),d=t.n(m),u=t(86);var p=function(e){var a=e.name,t=e.value,o=e.onChange,c=Object(r.useState)({displayColorPicker:!1,color:t}),l=Object(s.a)(c,2),m=l[0],p=l[1],b=d()({default:{color:{width:"36px",height:"14px",borderRadius:"2px",background:m.color},swatch:{padding:"5px",marginTop:"10px",verticalAlign:"sub",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{backgrouColor:"red",position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:b.swatch,onClick:function(){p(Object(i.a)({},m,{displayColorPicker:!m.displayColorPicker}))}},n.a.createElement("div",{style:b.color})),m.displayColorPicker?n.a.createElement("div",{style:b.popover},n.a.createElement("div",{style:b.cover,onClick:function(){p(Object(i.a)({},m,{displayColorPicker:!1}))}}),n.a.createElement(u.SketchPicker,{color:m.color,onChange:function(e){p(Object(i.a)({},m,{color:e.hex})),o({name:a,color:e.hex})}})):null)},b=(t(261),function(e){var a=e.themes.primary;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"background"},n.a.createElement("div",{className:"line",style:{backgroundColor:a}})))}),y=(t(262),t(87)),v=t.n(y);var h=function(e){var a=window.navigator.userAgent,t=!!a.match(/iPad/i)||!!a.match(/iPhone/i),r=!!a.match(/WebKit/i),o=t&&r&&!a.match(/CriOS/i),c=e.themes,l=c.primary,i=c.secondary,s=c.tertiary;return n.a.createElement("div",{className:"survey",style:{backgroundColor:s}},n.a.createElement("nav",{className:"navbar navbar-light",style:{backgroundColor:i}},n.a.createElement("button",{type:"button",className:"btn btn-secondary",style:{width:"60px",height:"38px"}}),n.a.createElement(b,{themes:e.themes})),n.a.createElement("div",{className:"card",style:{width:"30rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),n.a.createElement("textarea",{style:{borderColor:l},className:v()("form-control my-4",{"d-none d-sm-block":!o,"d-block":o})}),n.a.createElement("button",{type:"button",className:"conditional btn btn-secondary",style:{backgroundColor:l,width:"60px",height:"38px"}}))))},E={primary:"#cc0000",secondary:"#000000",tertiary:"#a2aaaa"};var g=function(){var e=Object(r.useState)(E),a=Object(s.a)(e,2),t=a[0],o=a[1],c=Object(r.useState)(E),m=Object(s.a)(c,2),d=m[0],u=m[1];function b(e){var a=e.name,r=e.color;o(Object(i.a)({},t,Object(l.a)({},a,r)))}return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"popup"},n.a.createElement("label",{className:"label"},"Primary:"),n.a.createElement(p,{name:"primary",value:t.primary,onChange:b})),n.a.createElement("div",{className:"popup"},n.a.createElement("label",{className:"label"},"Secondary:"),n.a.createElement(p,{name:"secondary",value:t.secondary,onChange:b})),n.a.createElement("div",{className:"popup"},n.a.createElement("label",{className:"label"},"Tertiary:"),n.a.createElement(p,{name:"tertiary",value:t.tertiary,onChange:b})),n.a.createElement("div",{className:"popup"},n.a.createElement("input",{type:"button",value:"Submit",className:"submit btn btn-secondary",onClick:function(e){u(t)}}))),n.a.createElement("p",{className:"colors"},"{ 'primary' => '".concat(d.primary,"', 'secondary' => '").concat(d.secondary,"', 'tertiary' => '").concat(d.tertiary,"' }")),n.a.createElement(h,{themes:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,a,t){e.exports=t(263)},93:function(e,a,t){},94:function(e,a,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.78377156.chunk.js.map