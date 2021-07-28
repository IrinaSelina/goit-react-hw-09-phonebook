(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[1],{104:function(e,t,r){},105:function(e,t,r){"use strict";r.r(t);var c,n,a,o,s,u=r(0),i=r.n(u),b=r(28),j=r.n(b),l=r(13),O=r(63),d=r(7),f=r(40),h="/",p="/register",g="/login",x="/contacts",m=r(30),v=r(47),C=function(e){return e.auth.user.email},k=function(e){return e.auth.isLogin},E=r(2),S=["component","redirectTo"],R=function(e){var t=e.component,r=e.redirectTo,c=Object(v.a)(e,S),n=Object(l.c)(k);return Object(E.jsx)(d.b,Object(m.a)(Object(m.a)({},c),{},{render:function(e){return n?Object(E.jsx)(t,Object(m.a)({},e)):Object(E.jsx)(d.a,{to:r})}}))},q=["component","redirectTo"],y=function(e){var t=e.component,r=e.redirectTo,c=Object(v.a)(e,q),n=Object(l.c)(k);return Object(E.jsx)(d.b,Object(m.a)(Object(m.a)({},c),{},{render:function(e){return n&&c.restricted?Object(E.jsx)(d.a,{to:r}):Object(E.jsx)(t,Object(m.a)({},e))}}))},w=r(21),U=function(){var e=Object(l.c)(k);return Object(E.jsxs)("nav",{children:[Object(E.jsx)(w.b,{to:"/",exact:!0,className:"link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(E.jsx)(w.b,{to:"/contacts",exact:!0,className:"link",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})]})},I=function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)(w.b,{to:"/register",exact:!0,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(E.jsx)(w.b,{to:"/login",exact:!0,children:"\u041b\u043e\u0433\u0438\u043d"})]})},T=r(131),z=r(64),F=r.n(z),N=function(){var e=Object(l.c)(C),t=Object(l.b)();return Object(E.jsxs)("div",{children:[Object(E.jsxs)("span",{children:["Welcome, ",e]}),Object(E.jsx)(T.a,{onClick:function(){t(f.a.logOut())},type:"button",children:Object(E.jsx)(F.a,{})})]})},A=r(129),L=r(130),P=r(128),B=Object(P.a)((function(e){return{root:{flexGrow:1},menu:{justifyContent:"space-between"}}})),J=function(){var e=B(),t=Object(l.c)(k);return Object(E.jsx)("div",{className:e.root,children:Object(E.jsx)(A.a,{position:"static",children:Object(E.jsxs)(L.a,{className:e.menu,color:"white",children:[Object(E.jsx)(U,{color:"inherit"}),t?Object(E.jsx)(N,{color:"inherit"}):Object(E.jsx)(I,{color:"inherit"})]})})})},G=Object(u.lazy)((function(){return r.e(7).then(r.bind(null,153))})),M=Object(u.lazy)((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,154))})),W=Object(u.lazy)((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,157))})),D=Object(u.lazy)((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,156))})),H=function(){var e=Object(l.b)();return Object(u.useEffect)((function(){e(f.a.getCurrentUser())}),[e]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(J,{}),Object(E.jsx)(u.Suspense,{fallback:Object(E.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:Object(E.jsxs)(d.d,{children:[Object(E.jsx)(y,{exact:!0,path:h,component:G}),Object(E.jsx)(y,{path:p,component:D,redirectTo:x,restricted:!0}),Object(E.jsx)(y,{path:g,component:M,redirectTo:x,restricted:!0}),Object(E.jsx)(R,{path:x,component:W,redirectTo:g}),Object(E.jsx)(d.b,{component:G})]})})]})},K=r(46),Q=r(3),V=r(11),X=r(65),Y=r.n(X),Z=r(27),$=r(5),_=r(22),ee=(_.a.fetchContactsRequest,_.a.fetchContactsSuccess),te=(_.a.fetchContactsError,_.a.addContactRequest,_.a.addContactSuccess),re=(_.a.addContactError,_.a.deleteContactRequest,_.a.deleteContactSuccess),ce=(_.a.deleteContactError,_.a.addFilter),ne=Object(Q.c)([],(c={},Object($.a)(c,ee,(function(e,t){return t.payload})),Object($.a)(c,te,(function(e,t){var r=t.payload;return[].concat(Object(K.a)(e),[r])})),Object($.a)(c,re,(function(e,t){var r=t.payload;return e.filter((function(e){return e.id!==r}))})),c)),ae=Object(Q.c)("",Object($.a)({},ce,(function(e,t){return t.payload}))),oe=Object(V.b)({items:ne,filter:ae}),se=r(6),ue=(se.a.registerRequest,se.a.registerSuccess),ie=se.a.registerError,be=(se.a.loginRequest,se.a.loginSuccess),je=se.a.loginError,le=(se.a.logoutRequest,se.a.logoutSuccess),Oe=se.a.logoutError,de=(se.a.getCurrentUserRequest,se.a.getCurrentUserSuccess),fe=se.a.getCurrentUserError,he={name:null,email:null},pe=Object(Q.c)(he,(n={},Object($.a)(n,ue,(function(e,t){return t.payload.user})),Object($.a)(n,be,(function(e,t){return t.payload.user})),Object($.a)(n,le,(function(){return he})),Object($.a)(n,de,(function(e,t){return t.payload})),n)),ge=Object(Q.c)(null,(a={},Object($.a)(a,ue,(function(e,t){return t.payload.token})),Object($.a)(a,be,(function(e,t){return t.payload.token})),Object($.a)(a,le,(function(){return null})),a)),xe=Object(Q.c)(null,(o={},Object($.a)(o,ie,(function(e,t){return t.payload})),Object($.a)(o,je,(function(e,t){return t.payload})),Object($.a)(o,Oe,(function(e,t){return t.payload})),Object($.a)(o,fe,(function(e,t){return t.payload})),o)),me=Object(Q.c)(!1,(s={},Object($.a)(s,ue,(function(){return!0})),Object($.a)(s,be,(function(){return!0})),Object($.a)(s,de,(function(){return!0})),Object($.a)(s,le,(function(){return!1})),Object($.a)(s,ie,(function(){return!1})),Object($.a)(s,je,(function(){return!1})),Object($.a)(s,fe,(function(){return!1})),s)),ve=Object(V.b)({user:pe,token:ge,error:xe,isLogin:me}),Ce=r(66),ke=r.n(Ce),Ee=[].concat(Object(K.a)(Object(Q.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),[Y.a]),Se={key:"auth",storage:ke.a,whitelist:["token"]},Re=Object(V.b)({auth:Object(Z.g)(Se,ve),contacts:oe}),qe=Object(Q.a)({reducer:Re,middleware:Ee,devTools:!1}),ye={store:qe,persistor:Object(Z.h)(qe)};r(104);j.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(l.a,{store:ye.store,children:Object(E.jsx)(w.a,{children:Object(E.jsx)(O.a,{loading:null,persistor:ye.persistor,children:Object(E.jsx)(H,{})})})})}),document.getElementById("root"))},22:function(e,t,r){"use strict";var c=r(3),n=Object(c.b)("contact/fetchItemsRequest"),a=Object(c.b)("contact/fetchItemsSuccess"),o=Object(c.b)("contact/fetchItemsError"),s=Object(c.b)("contact/addItemRequest"),u=Object(c.b)("contact/addItemSuccess"),i=Object(c.b)("contact/addItemError"),b=Object(c.b)("contact/deleteItemRequest"),j=Object(c.b)("contact/deleteItemSuccess"),l=Object(c.b)("contact/deleteItemError"),O=Object(c.b)("contacts/Filter");t.a={addContactRequest:s,addContactSuccess:u,addContactError:i,deleteContactRequest:b,deleteContactSuccess:j,deleteContactError:l,fetchContactsRequest:n,fetchContactsSuccess:a,fetchContactsError:o,addFilter:O}},40:function(e,t,r){"use strict";var c=r(26),n=r.n(c),a=r(36),o=r(29),s=r.n(o),u=r(6),i=u.a.registerRequest,b=u.a.registerSuccess,j=u.a.registerError,l=u.a.loginRequest,O=u.a.loginSuccess,d=u.a.loginError,f=u.a.logoutRequest,h=u.a.logoutSuccess,p=u.a.logoutError,g=u.a.getCurrentUserRequest,x=u.a.getCurrentUserSuccess,m=u.a.getCurrentUserError;s.a.defaults.baseURL="https://connections-api.herokuapp.com";var v=function(e){s.a.defaults.headers.common.Authorization="Bearer ".concat(e)},C=function(){s.a.defaults.headers.common.Authorization=""};t.a={register:function(e){return function(){var t=Object(a.a)(n.a.mark((function t(r){var c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(i()),t.prev=1,t.next=4,s.a.post("/users/signup",e);case 4:c=t.sent,v(c.data.token),r(b(c.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(j(t.t0.massage));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(a.a)(n.a.mark((function t(r){var c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(l()),t.prev=1,t.next=4,s.a.post("/users/login",e);case 4:c=t.sent,v(c.data.token),r(O(c.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(d(t.t0.massage));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(a.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(f()),e.prev=1,e.next=4,s.a.post("/users/logout");case 4:C(),t(h()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(p(e.t0.massage));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(a.a)(n.a.mark((function e(t,r){var c,a,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=r(),a=c.auth.token){e.next=3;break}return e.abrupt("return");case 3:return v(a),t(g()),e.prev=5,e.next=8,s.a.get("/users/current");case 8:o=e.sent,t(x(o.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(m(e.t0.massage));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,r){return e.apply(this,arguments)}}()}}},6:function(e,t,r){"use strict";var c=r(3),n=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),o=Object(c.b)("auth/registerError"),s=Object(c.b)("auth/loginRequest"),u=Object(c.b)("auth/loginSuccess"),i=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),l=Object(c.b)("auth/logoutError"),O=Object(c.b)("auth/getCurrentUserRequest"),d=Object(c.b)("auth/getCurrentUserSuccess"),f=Object(c.b)("auth/getCurrentUserError");t.a={registerRequest:n,registerSuccess:a,registerError:o,loginRequest:s,loginSuccess:u,loginError:i,logoutRequest:b,logoutSuccess:j,logoutError:l,getCurrentUserRequest:O,getCurrentUserSuccess:d,getCurrentUserError:f}}},[[105,2,3]]]);
//# sourceMappingURL=main.ad4300db.chunk.js.map