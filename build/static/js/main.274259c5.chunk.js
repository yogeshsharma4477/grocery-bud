(this["webpackJsonpgrocery-list"]=this["webpackJsonpgrocery-list"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(8),i=c.n(s),a=(c(14),c(9)),l=c(4),o=c(2),u=c(7),j=c(0),b=function(e){var t=e.items,c=e.removeItem,n=e.editItem;return Object(j.jsx)("div",{className:"grocery-list",children:t.map((function(e){var t=e.id,r=e.title;return Object(j.jsxs)("article",{className:"grocery-item",children:[Object(j.jsx)("p",{className:"title",children:r}),Object(j.jsxs)("div",{className:"btn-container",children:[Object(j.jsx)("button",{type:"button",className:"edit-btn",onClick:function(){return n(t)},children:Object(j.jsx)(u.a,{})}),Object(j.jsx)("button",{type:"button",className:"delete-btn",onClick:function(){return c(t)},children:Object(j.jsx)(u.b,{})})]})]},t)}))})},m=function(e){var t=e.type,c=e.msg,r=e.removeAlert,s=e.list;return Object(n.useEffect)((function(){var e=setTimeout((function(){r()}),3e3);return function(){return clearTimeout(e)}}),[s,r]),Object(j.jsx)("p",{className:"alert alert-".concat(t),children:c})};var d=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),i=Object(o.a)(s,2),u=i[0],d=i[1],O=Object(n.useState)(!1),f=Object(o.a)(O,2),g=f[0],h=f[1],v=Object(n.useState)(null),p=Object(o.a)(v,2),x=p[0],y=p[1],N=Object(n.useState)({show:!1,msg:"",type:""}),S=Object(o.a)(N,2),I=S[0],w=S[1],k=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";w({show:e,type:t,msg:c})};return Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(u))}),[u]),Object(j.jsxs)("section",{className:"section-center",children:[Object(j.jsxs)("form",{className:"grocery-form",onSubmit:function(e){if(e.preventDefault(),c)if(c&&g)d(u.map((function(e){return e.id===x?Object(l.a)(Object(l.a)({},e),{},{title:c}):e}))),r(""),y(null),h(!1),k(!0,"success","value changed");else{k(!0,"success","item added to the list");var t={id:(new Date).getTime().toString(),title:c};d([].concat(Object(a.a)(u),[t])),r("")}else k(!0,"danger","please enter value")},children:[I.show&&Object(j.jsx)(m,Object(l.a)(Object(l.a)({},I),{},{removeAlert:k,list:u})),Object(j.jsx)("h3",{children:"grocery bud"}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("input",{type:"text",className:"grocery",placeholder:"Aditi's grocery",value:c,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("button",{type:"submit",className:"submit-btn",children:g?"edit":"submit"})]})]}),u.length>0&&Object(j.jsxs)("div",{className:"grocery-container",children:[Object(j.jsx)(b,{items:u,removeItem:function(e){k(!0,"danger","item removed"),d(u.filter((function(t){return t.id!==e})))},editItem:function(e){var t=u.find((function(t){return t.id===e}));h(!0),y(e),r(t.title)}}),Object(j.jsx)("button",{className:"clear-btn",onClick:function(){k(!0,"danger","empty list"),d([])},children:"clear items"})]})]})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.274259c5.chunk.js.map