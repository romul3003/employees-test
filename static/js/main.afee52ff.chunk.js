(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),a=n(15),i=n.n(a),l=n(10),o=n(9),u=n(11),j=n(3),d="FETCH_USERS_START",h="FETCH_USERS_SUCCESS",b="FETCH_USERS_FAILURE",m="CHECK_USER",O=n(28),p=function(e,t){return e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{checked:t.checked}):e}))},f=function(e,t){return e.find((function(e){return e.id===t.id}))?e:[].concat(Object(O.a)(e),[t])},y=function(e){var t=new Date(e);return new Intl.DateTimeFormat("en-Gb",{day:"numeric",month:"long",year:"numeric"}).format(t)},_={users:null,loading:!1,error:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case h:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,users:t.payload.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{checked:e.id===localStorage.getItem(e.id)})})),error:null});case b:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.payload});case m:return Object(j.a)(Object(j.a)({},e),{},{users:p(e.users,t.payload)});default:return e}},g="ADD_BIRTHDAY_USER",N="REMOVE_BIRTHDAY_USER",v={users:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(j.a)(Object(j.a)({},e),{},{users:f(e.users,t.payload)});case N:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.filter((function(e){return e.id!==t.payload.id}))});default:return e}},S=Object(u.c)({users:x,birthday:E}),k=n(26),U="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):u.d,T=[k.a],w=U(u.a.apply(void 0,T)),C=Object(u.e)(S,w),D=n(4),R=n.p+"static/media/logo.aaff8d0f.svg",I=(n(39),function(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)(l.c,{to:"/",exact:!0,children:Object(c.jsx)("img",{src:R,alt:"logo",className:"header__logo"})}),Object(c.jsx)("nav",{className:"header__nav",children:Object(c.jsxs)("ul",{className:"header__nav-list",children:[Object(c.jsx)("li",{className:"header__nav-item",children:Object(c.jsx)(l.c,{to:"/",exact:!0,className:"header__nav-link",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.c,{to:"/employees",className:"header__nav-link",children:"Employees"})})]})})]})}),F=(n(41),function(){return Object(c.jsx)("div",{className:"homepage",children:Object(c.jsxs)("div",{className:"homepage__info",children:[Object(c.jsx)("h1",{className:"homepage__title",children:"Hello there! This is just an empty Homepage. Nothing is here"}),Object(c.jsxs)("span",{children:["Click\xa0",Object(c.jsx)(l.b,{to:"/employees",style:{textDecoration:"underline"},children:"here"}),"\xa0to see employees page"]})]})})}),H=n(23),B=n.n(H),A=n(27),M=function(e){return{type:h,payload:e}},J=function(){return function(){var e=Object(A.a)(B.a.mark((function e(t){var n,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:d}),e.next=4,fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,t(M(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t((r=e.t0.message,{type:b,payload:r}));case 14:case"end":return e.stop()}var r}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},L=(n(43),n(29)),P=(n(44),function(e){var t=e.employee,n=e.checkUser,s=e.addBirthdayUser,a=e.removeBirthdayUser,i=t.lastName,l=t.firstName,o=t.id,u=t.checked,d=Object(r.useState)(u),h=Object(L.a)(d,2),b=h[0],m=h[1];Object(r.useEffect)((function(){o===localStorage.getItem(o)&&s(Object(j.a)(Object(j.a)({},t),{},{checked:u}))}));return Object(c.jsx)("li",{className:"employee",children:Object(c.jsxs)("label",{className:"employee__label",children:[Object(c.jsx)("span",{className:"employee__lastname",children:i}),"\xa0",Object(c.jsx)("span",{className:"employee__firstname",children:l}),Object(c.jsx)("input",{type:"checkbox",checked:b,onChange:function(e){var c=e.target.checked;n(o,c),c?(s(Object(j.a)(Object(j.a)({},t),{},{checked:c})),localStorage.setItem(o,o)):(a(Object(j.a)(Object(j.a)({},t),{},{checked:c})),localStorage.removeItem(o)),m(e.target.checked)},className:"employee__checkbox"})]})})}),X=Object(o.b)(null,(function(e){return{checkUser:function(t,n){return e(function(e,t){return{type:m,payload:{id:e,checked:t}}}(t,n))},addBirthdayUser:function(t){return e(function(e){return{type:g,payload:e}}(t))},removeBirthdayUser:function(t){return e(function(e){return{type:N,payload:e}}(t))}}}))((function(e){return Object(c.jsx)(P,Object(j.a)({},e))})),V=["January","February","March","April","May","June","July","August","September","October","November","December"],Y=(n(45),Object(o.b)((function(e){return{employees:e.users.users,loading:e.users.loading}}),(function(e){return{fetchEmployees:function(){return e(J())}}}))((function(e){var t=e.employees,n=t?"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((function(e){return{letter:e,employees:t.filter((function(t){return 0===t.lastName.indexOf(e)}))}})).map((function(e){return Object(c.jsxs)("li",{className:"employees-list__item",children:[Object(c.jsx)("h4",{className:"employees-list__title",children:e.letter}),e.employees.length?Object(c.jsx)("ul",{children:e.employees.map((function(e){return Object(c.jsx)(X,{employee:e},e.id)}))}):Object(c.jsx)("div",{className:"employees-list__no-data",children:"-----"})]},e.letter)})):null;return Object(c.jsxs)("section",{className:"employees-section",children:[Object(c.jsx)("h2",{className:"employees-section__title",children:"Employees"}),Object(c.jsx)("ul",{className:"employees-list",children:n})]})}))),G=(n(46),n(47),function(e){var t=e.user;return Object(c.jsxs)("li",{className:"birthday-user",children:[t.lastName," ",t.firstName," - ",y(t.dob)]})}),K=function(e){var t=e.birthdayUsers,n=t.length?V.map((function(e,n){return{month:e,users:t.filter((function(e){return new Date(e.dob).getMonth()===n}))}})).map((function(e,t){return e.users.length?Object(c.jsxs)("li",{className:"birthday-list__month",children:[Object(c.jsxs)("h4",{className:"birthday-list__name",children:[e.month,":"]}),Object(c.jsx)("ul",{children:e.users.map((function(e){return Object(c.jsx)(G,{user:e},e.id)}))})]},t):null})):Object(c.jsx)("li",{children:Object(c.jsx)("h3",{children:"No selected employees"})});return Object(c.jsx)("ul",{className:"birthday-list",children:n})},Q=(n(48),Object(o.b)((function(e){return{birthdayUsers:e.birthday.users}}))((function(e){var t=e.birthdayUsers;return Object(c.jsxs)("section",{className:"birthday-section",children:[Object(c.jsx)("h2",{className:"birthday-section__title",children:"Employees birthday"}),Object(c.jsx)(K,{birthdayUsers:t})]})}))),W=Object(o.b)(null,(function(e){return{fetchEmployees:function(){return e(J())}}}))((function(e){var t=e.fetchEmployees;return Object(r.useEffect)((function(){t()}),[t]),Object(c.jsxs)("div",{className:"employees",children:[Object(c.jsx)(Y,{}),Object(c.jsx)(Q,{})]})}));n(49);var Z=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(I,{}),Object(c.jsx)("main",{className:"app__main",children:Object(c.jsxs)(D.c,{children:[Object(c.jsx)(D.a,{exact:!0,path:"/",component:F}),Object(c.jsx)(D.a,{exact:!0,path:"/employees",component:W})]})})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(50);i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(o.a,{store:C,children:Object(c.jsx)(l.a,{children:Object(c.jsx)(Z,{})})})}),document.getElementById("root")),q()}},[[51,1,2]]]);
//# sourceMappingURL=main.afee52ff.chunk.js.map