(this["webpackJsonpreact-sm"]=this["webpackJsonpreact-sm"]||[]).push([[0],{82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(24),r=c.n(s),a=c(3),l=c.n(a),o=c(5),i=c(4),u=c(45),d=c.n(u),j=c(28),b={set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},get:function(e){return JSON.parse(localStorage.getItem(e))},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}},x=d.a.create({baseURL:"/api",timeout:4e4});x.interceptors.request.use((function(e){return e.headers.Authorization="Bearer "+b.get("token")||!1,e})),x.interceptors.response.use((function(e){return e}),(function(e){var t,c;return console.log(e.response),Object(j.b)(null===(t=e.response)||void 0===t||null===(c=t.data)||void 0===c?void 0:c.message),Promise.reject(e)}));var f=x,m=c(98),p=c(99),h=c(100),O=c(6),v=c(1),g={user:null},w=Object(n.createContext)(g),y=function(e){var t=e.children,c=Object(n.useState)(b.get("user")||null),s=Object(i.a)(c,2),r=s[0],a=s[1];return Object(v.jsx)(w.Provider,{value:{user:r,setUser:a},children:t})},N=c(96);function k(e){var t=e.username,c=Object(n.useRef)(""),s=Object(n.useState)(null),r=Object(i.a)(s,2),a=r[0],u=r[1],d=Object(n.useContext)(w).user,j=Object(n.useState)(!0),b=Object(i.a)(j,2),x=(b[0],b[1]),m=function(e){return(e=e||"").replace(/(\n\r|\r\n|\r|\n)/g,"<br/>")},p=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,s,r,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={userId:d._id,desc:m(c.current.value)},!a){e.next=17;break}return s=new FormData,r=Date.now()+a.name,s.append("fileName",r),s.append("file",a),e.prev=7,e.next=10,f.post("/upload",s);case 10:o=e.sent,i=o.data,n.img=i,e.next=17;break;case 15:e.prev=15,e.t0=e.catch(7);case 17:return e.prev=17,e.next=20,f.post("/posts",n);case 20:window.location.reload(),e.next=25;break;case 23:e.prev=23,e.t1=e.catch(17);case 25:case"end":return e.stop()}}),e,null,[[7,15],[17,23]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e=function(){x(!0)};document.addEventListener("click",e);var t=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={userId:d._id,desc:m(c.current.value)},!a){e.next=14;break}return n=new FormData,s=Date.now()+a.name,n.append("fileName",s),n.append("file",a),t.img=s,e.prev=7,e.next=10,f.post("/upload",n);case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(7);case 14:return e.prev=14,e.next=17,f.post("/posts",t);case 17:window.location.reload(),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(14),console.log(e.t1);case 23:case"end":return e.stop()}}),e,null,[[7,12],[14,20]])})));return function(){return e.apply(this,arguments)}}(),n=function(e){13===e.keyCode&&e.ctrlKey&&t()};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n),document.removeEventListener("click",e)}}),[a,d]);var h=function(){return Object(v.jsxs)("div",{className:"w-full p-4 bg-white shadow-lg rounded-md  dark:bg-gray-800 dark:text-gray-200",children:[Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("img",{src:"",alt:""}),Object(v.jsx)("textarea",{type:"text",placeholder:"\u6709\u4ec0\u4e48\u6709\u8da3\u7684\u4e8b\u60c5\u5206\u4eab\u7ed9\u5927\u5bb6?",className:"w-full resize-none outline-none dark:bg-gray-800 dark:text-gray-200",ref:c})]}),Object(v.jsx)("hr",{className:"my-4"}),a&&Object(v.jsx)("div",{className:"flex justify-center items-center",children:Object(v.jsx)("img",{alt:"",className:"rounded-sm max-h-96 shadow-lg",src:URL.createObjectURL(a)})}),Object(v.jsxs)("form",{className:"flex justify-between",onSubmit:p,children:[Object(v.jsx)("div",{className:"",children:Object(v.jsxs)("label",{htmlFor:"file",className:"",children:[Object(v.jsx)(N.a,{htmlColor:"tomato",className:""}),Object(v.jsx)("input",{type:"file",id:"file",style:{display:"none"},accept:".png,.jpeg,.jpg",onChange:function(e){return u(e.target.files[0])}})]})}),Object(v.jsx)("button",{className:"",type:"submit",children:"\u53d1\u9001"})]})]})};return void 0===t||t===(null===d||void 0===d?void 0:d.username)?Object(v.jsx)(h,{}):null}var C=c(97),S=c(50);function _(e){var t=e.post,c=Object(n.useState)(t.likes.length),s=Object(i.a)(c,2),r=(s[0],s[1],Object(n.useState)(!1)),a=Object(i.a)(r,2),u=(a[0],a[1],Object(n.useState)(!1)),d=Object(i.a)(u,2),j=d[0],b=d[1],x=Object(n.useState)({}),m=Object(i.a)(x,2),p=m[0],h=m[1],g=Object(n.useContext)(w).user;Object(n.useEffect)((function(){var e=function(){b(!1)};return document.addEventListener("click",e),function(){var e=Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/users/?userId=".concat(t.userId));case 2:c=e.sent,h(c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){document.removeEventListener("click",e)}}),[t.userId,b,j]);var y=function(){(function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.userId!==g._id){e.next=5;break}return e.next=3,f.delete("posts/"+t._id,{data:{userId:g._id}});case 3:e.next=6;break;case 5:alert("\u4f60\u4e0d\u80fd\u5220\u9664\u522b\u4eba\u7684\u535a\u5ba2");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),window.location.reload()};return Object(v.jsxs)("div",{className:"flex flex-col relative",children:[Object(v.jsxs)("div",{className:"".concat(j?"inline-flex":"hidden"," flex-col  bg-white text-gray-600  w-40 text-center rounded-md space-y-2 cursor-pointer absolute top-20 right-0 z-20 shadow-2xl overflow-hidden dark:bg-gray-800 dark:text-gray-200"),children:[Object(v.jsx)("span",{className:"hover:bg-pink-400 hover:text-white p-2",onClick:function(){(function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===g||void 0===g?void 0:g._id)===t.userId){e.next=6;break}return e.next=3,f.put("users/".concat(t.userId,"/follow"),{userId:null===g||void 0===g?void 0:g._id});case 3:alert("\u5173\u6ce8\u6210\u529f"),e.next=7;break;case 6:alert("\u4f60\u4e0d\u80fd\u5173\u6ce8\u81ea\u5df1");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},children:"\u5173\u6ce8"}),Object(v.jsx)("span",{className:"hover:bg-pink-400 hover:text-white p-2",onClick:function(){(function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g._id===t.userId){e.next=7;break}return e.next=3,f.put("users/".concat(t.userId,"/unfollow"),{userId:g._id});case 3:alert("\u53d6\u6d88\u5173\u6ce8\u6210\u529f"),window.location.reload(),e.next=8;break;case 7:alert("\u4f60\u4e0d\u80fd\u53d6\u6d88\u5173\u6ce8\u81ea\u5df1");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},children:"\u53d6\u6d88\u5173\u6ce8"}),Object(v.jsx)("span",{className:"hover:bg-pink-400 hover:text-white p-2",onClick:y,children:"\u5220\u9664"}),Object(v.jsx)("span",{className:"hover:bg-pink-400 hover:text-white p-2",onClick:y,children:"\u52a0\u5165\u7279\u522b\u5173\u6ce8"})]}),Object(v.jsxs)("div",{className:"flex flex-col bg-white rounded-md shadow-lg text-gray-600 p-4 space-y-4 dark:bg-gray-800 dark:text-gray-200",children:[Object(v.jsxs)("div",{className:"flex justify-between items-center",children:[Object(v.jsxs)("div",{className:"flex items-center space-x-4",children:[Object(v.jsx)(O.b,{to:"/profile/".concat(p.username),children:Object(v.jsx)("img",{className:"w-102 h-10 object-cover rounded-full",src:p.profilePicture||"https://fujix.oss-cn-shenzhen.aliyuncs.com/noAvatar.png",alt:""})}),Object(v.jsx)("span",{className:"",children:p.username}),Object(v.jsx)("span",{className:"",children:Object(S.a)(t.createdAt,"zh_CN")})]}),Object(v.jsx)("div",{className:"",children:Object(v.jsx)(C.a,{onClick:function(e){e.nativeEvent.stopImmediatePropagation(),b(!j)},className:"cursor-pointer"})})]}),Object(v.jsxs)("div",{className:"flex flex-col space-y-4",children:[Object(v.jsx)("span",{className:"",dangerouslySetInnerHTML:{__html:t.desc}}),Object(v.jsx)("img",{src:t.img,alt:"",className:"rounded-sm"})]})]})]})}var E=c(7);function A(e){var t=e.username,c=Object(n.useState)([]),s=Object(i.a)(c,2),r=s[0],a=s[1],u=Object(n.useContext)(w).user,d=Object(E.h)().search.split("=").pop();return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var c,n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=7;break}return e.next=3,f.get("posts/friends/".concat(d));case 3:n=e.sent,a(null===(c=n.data)||void 0===c?void 0:c.flat().sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)}))),e.next=18;break;case 7:if(!t){e.next=13;break}return e.next=10,f.get("posts/profile/"+t);case 10:e.t0=e.sent,e.next=16;break;case 13:return e.next=15,f.get("posts/timeline/now");case 15:e.t0=e.sent;case 16:r=e.t0,a(null===(s=r.data)||void 0===s?void 0:s.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,d]),Object(v.jsxs)("div",{className:"w-full",children:[!t&&Object(v.jsxs)("div",{className:"w-56 bg-white text-gray-600 rounded-md p-4 space-y-4 shadow-lg fixed dark:bg-gray-800 dark:text-gray-200 ",children:[Object(v.jsx)("h3",{className:"",children:"\u9996\u9875"}),Object(v.jsxs)("div",{className:"flex flex-col space-y-4",children:[Object(v.jsxs)(O.b,{to:"/home/share",children:[Object(v.jsx)(m.a,{}),Object(v.jsx)("span",{className:"pl-4",children:"\u5168\u90e8\u5173\u6ce8"})]}),Object(v.jsxs)(O.b,{to:"/",children:[Object(v.jsx)(p.a,{}),Object(v.jsx)("span",{className:"pl-4",children:"\u7279\u522b\u5173\u6ce8"})]}),Object(v.jsxs)(O.b,{to:"?userId=".concat(null===u||void 0===u?void 0:u._id),children:[Object(v.jsx)(h.a,{}),Object(v.jsx)("span",{className:"pl-4",children:"\u597d\u53cb\u5708"})]})]})]}),Object(v.jsxs)("div",{className:"ml-auto w-9/12 space-y-8",children:[Object(v.jsx)(k,{username:t}),r.map((function(e){return Object(v.jsx)(_,{post:e},e._id)}))]})]})}function I(e){var t=e.user;return Object(v.jsx)(O.b,{to:"/profile/".concat(t.username),children:Object(v.jsxs)("li",{className:"text-gray-600 flex items-center justify-between dark:text-gray-200",children:[Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("img",{src:t.profilePicture?t.profilePicture:"https://fujix.oss-cn-shenzhen.aliyuncs.com/noAvatar.png",alt:"",className:"w-12 h-12 object-cover rounded-full"}),Object(v.jsx)("span",{className:""})]}),Object(v.jsx)("span",{className:"",children:t.username})]})})}var D=c(101),L=c(102),F=function(e){var t=Object(n.useState)({}),c=Object(i.a)(t,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){(function(){var t=Object(o.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get(e);case 2:c=t.sent,r(c.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),[s]};function P(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useContext)(w).user,a="users/".concat(null===r||void 0===r?void 0:r._id),l=F(a),o=Object(i.a)(l,1)[0];return Object(n.useMemo)((function(){var e=function(){s(!c),document.documentElement.classList.toggle("dark")};return Object(v.jsxs)("div",{className:"bg-white p-4 text-gray-600 flex flex-col space-y-6 shadow-lg rounded-md dark:bg-gray-800 dark:text-gray-200",children:[Object(v.jsxs)("div",{className:"flex justify-between items-center",children:[Object(v.jsx)(O.b,{to:o?"/profile/".concat(o.username):"/",children:Object(v.jsx)("img",{src:(null===o||void 0===o?void 0:o.profilePicture)||"https://fujix.oss-cn-shenzhen.aliyuncs.com/noCover.png",className:"w-16 h-16 object-cover rounded-md",alt:"avatart"})}),Object(v.jsx)("div",{children:null===o||void 0===o?void 0:o.username}),c?Object(v.jsx)("span",{className:"cursor-pointer",onClick:e,children:Object(v.jsx)(D.a,{})}):Object(v.jsx)("span",{className:"cursor-pointer",onClick:e,children:Object(v.jsx)(L.a,{})})]}),Object(v.jsx)(O.b,{to:"/home",className:"text-center hover:text-pink-400",children:"\u5206\u4eab\u4e00\u523b"}),Object(v.jsx)(O.b,{to:"/home/photos",className:"text-center  hover:text-pink-400",children:"\u7167\u7247\u6d41"}),Object(v.jsx)(O.b,{to:"/home/timeline",className:"text-center hover:text-pink-400",children:"\u65f6\u523b\u5c9b"})]})}),[o,c])}function R(e){var t=e.user,c=Object(n.useState)([]),s=Object(i.a)(c,2),r=s[0],a=s[1],u=Object(n.useContext)(w).user,d=Object(n.useState)([]),j=Object(i.a)(d,2),b=j[0],x=j[1];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("users/friends/".concat(null===u||void 0===u?void 0:u._id));case 2:t=e.sent,a(null===t||void 0===t?void 0:t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),Object(n.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("users/circle/".concat(null===u||void 0===u?void 0:u._id));case 2:t=e.sent,x(null===t||void 0===t?void 0:t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]);var m=function(){return Object(v.jsxs)("div",{className:"flex flex-col space-y-6 ml-4",children:[Object(v.jsx)(P,{}),Object(v.jsxs)("div",{className:"bg-white p-4 text-gray-600 flex flex-col space-y-4 shadow-lg rounded-md dark:bg-gray-800 dark:text-gray-100",children:[Object(v.jsx)("h4",{className:"",children:"\u6211\u7684\u5173\u6ce8"}),Object(v.jsx)("ul",{className:"flex flex-col space-y-4",children:r&&r.map((function(e){return Object(v.jsx)(I,{user:e},null===e||void 0===e?void 0:e._id)}))})]})]})},p=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"rounded-md shadow-xl p-4 space-y-4 dark:bg-gray-800 dark:text-gray-200",children:[Object(v.jsx)("div",{children:"\u7b80\u4ecb"}),Object(v.jsxs)("div",{className:"",children:[Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("span",{className:"",children:"\u5c45\u4f4f\u5730:"}),Object(v.jsx)("span",{className:"",children:t.city})]}),Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("span",{className:"",children:"\u5bb6\u4e61:"}),Object(v.jsx)("span",{className:"",children:t.from})]}),Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("span",{className:"",children:"\u804c\u4e1a:"}),Object(v.jsx)("span",{className:"",children:t.relationship})]})]})]}),Object(v.jsxs)("div",{className:"rounded-md shadow-xl p-4 space-y-4 dark:bg-gray-800 dark:text-gray-200",children:[Object(v.jsx)("h4",{className:"",children:"\u597d\u53cb\u5708"}),b&&b.map((function(e){return Object(v.jsx)(O.b,{to:"/profile/".concat(e.username),className:"block",children:Object(v.jsxs)("div",{className:"flex items-center justify-between",children:[Object(v.jsx)("img",{src:e.profilePicture?e.profilePicture:"https://fujix.oss-cn-shenzhen.aliyuncs.com/noCover.png",alt:"",className:"w-16 h-16 object-cover rounded-full"}),Object(v.jsx)("span",{className:"",children:null===e||void 0===e?void 0:e.username})]})},null===e||void 0===e?void 0:e._id)}))]})]})};return Object(v.jsx)(v.Fragment,{children:t?Object(v.jsx)(p,{}):Object(v.jsx)(m,{})})}var z=c(103),U=c(104),q=c(105);function T(){var e=Object(n.useContext)(w).user,t=Object(E.g)(),c=e?"users/".concat(e._id):"",s=F(c),r=Object(i.a)(s,1)[0];return Object(v.jsxs)("div",{className:"h-12 mx-auto max-w-7xl w-full bg-white flex items-center text-gray-700 dark:bg-gray-800 dark:text-white ",children:[Object(v.jsx)("div",{className:"w-3/12",children:Object(v.jsx)(O.b,{to:"/home",children:Object(v.jsx)("span",{className:"text-2xl  ml-6 cursor-pointer font-bold",children:"Fujix"})})}),Object(v.jsx)("div",{className:"w-5/12",children:Object(v.jsxs)("div",{className:"w-full  flex items-center rounded-full h-8 bg-gray-100",children:[Object(v.jsx)(z.a,{className:"ml-2"}),Object(v.jsx)("input",{type:"text",placeholder:"",className:"outline-none pl-2 w-3/5 bg-gray-100"})]})}),Object(v.jsxs)("div",{className:"w-4/12 flex items-center justify-evenly ",children:[Object(v.jsx)(O.b,{to:r?"/profile/".concat(r.username):"/",children:Object(v.jsx)("img",{src:r.profilePicture||"https://fujix.oss-cn-shenzhen.aliyuncs.com/noAvatar.png",className:"rounded-full text-lg object-cover h-8 w-8",alt:"avatart"})}),Object(v.jsx)(O.b,{to:"/home",children:Object(v.jsx)("span",{children:Object(v.jsx)(U.a,{})})}),Object(v.jsx)(O.b,{to:"/setting",children:Object(v.jsx)("span",{children:Object(v.jsx)(q.a,{})})}),Object(v.jsx)("span",{onClick:function(){t.push("/login"),b.clear()},className:"cursor-pointer",children:"\u767b\u51fa"})]})]})}function M(e){var t=e.children;return Object(v.jsxs)("div",{className:"scoll-min dark:bg-gray-600",children:[Object(v.jsx)("div",{className:"sticky top-0 z-50 bg-white shadow-md dark:bg-gray-800",children:Object(v.jsx)(T,{})}),Object(v.jsx)("div",{className:"mx-auto max-w-7xl my-10 dark:bg-gray-600",children:Object(v.jsx)("div",{className:"flex",children:t})})]})}function J(){var e=Object(n.useContext)(w).user,t=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){!function(){var t=Object(o.a)(l.a.mark((function t(){var c,n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.get(e);case 3:n=t.sent,s=null===(c=n.data)||void 0===c?void 0:c.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),r(s.filter((function(e){return void 0!==e.img}))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()}),[e]),s}("posts/portfolio/".concat(null===e||void 0===e?void 0:e._id));return Object(v.jsx)("div",{className:"flex flex-wrap  bg-white p-4 rounded-md mb-10 dark:bg-gray-800",children:t.map((function(e){return Object(v.jsx)("img",{src:e.img,alt:"",className:"w-1/3 max-h-80 object-cover opacity-95 p-2 scale-100 cursor-pointer transform  transition duration-500 ease-in-out  hover:opacity-100  hover:scale-105"},e._id)}))})}var Y=c(46),B=c.n(Y),H=c(47);function V(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useContext)(w).user;return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,c,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("posts/profile/".concat(r.username));case 2:c=e.sent,n=null===(t=c.data)||void 0===t?void 0:t.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),a=[],n.forEach((function(e){if(""!==e.desc){var t={};t.title=B()(e.createdAt).format("DD/MM/YYYY"),t.cardDetailedText=e.desc,a.push(t)}})),s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(v.jsx)("div",{className:"dark:bg-gray-800 dark:text-gray-200  p-4 pb-24 mb-20 overflow-hidden rounded-md shadow-lg bg-white",children:Object(v.jsxs)("div",{className:"text-center my-4",children:[Object(v.jsx)("div",{}),c&&Object(v.jsx)(H.a,{slideShow:!0,items:c,mode:"VERTICAL_ALTERNATING",hideControls:!0,useReadMore:!1,allowDynamicUpdate:!0,scrollable:!0})]})})}function G(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"Filter"})})}function K(e){return Object(v.jsxs)(M,{children:[Object(v.jsx)("div",{className:"w-9/12",children:Object(v.jsxs)(E.d,{children:[Object(v.jsx)(E.b,{path:"/home/photos",component:J}),Object(v.jsx)(E.b,{path:"/home/timeline",component:V}),Object(v.jsx)(E.b,{path:"/home/filter",component:G}),Object(v.jsx)(E.b,{path:"/home",component:A})]})}),Object(v.jsx)("div",{className:"w-3/12",children:Object(v.jsx)(R,{home:!0})})]})}function Q(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(E.i)().username;return Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/users?username=".concat(r));case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),function(){e=null}}),[r]),Object(v.jsx)(M,{children:Object(v.jsxs)("div",{className:"bg-white rounded-sm shadow-lg w-full dark:bg-gray-600 overflow-hidden",children:[Object(v.jsxs)("div",{className:"",children:[Object(v.jsxs)("div",{className:"relative",children:[Object(v.jsx)("img",{src:c.coverPicture||"https://fujix.oss-cn-shenzhen.aliyuncs.com/noCover.png",alt:"",className:"w-full h-52 object-cover"}),Object(v.jsx)("img",{src:c.profilePicture||"https://fujix.oss-cn-shenzhen.aliyuncs.com/noAvatar.png",alt:"",className:"w-32 h-32 object-cover rounded-full absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"})]}),Object(v.jsxs)("div",{className:"mt-20 text-center dark:text-gray-200",children:[Object(v.jsx)("div",{className:"",children:c.username}),Object(v.jsx)("div",{className:"",children:c.desc}),Object(v.jsx)("button",{className:"bg-white rounded-md shadow-lg p-4 text-center my-4 dark:bg-gray-800 dark:text-gray-200 ",children:"\u5df2\u5173\u6ce8"})]})]}),Object(v.jsxs)("div",{className:"flex text-gray-600 p-4",children:[Object(v.jsx)("div",{className:"w-9/12",children:Object(v.jsx)(A,{username:r})}),Object(v.jsx)("div",{className:"w-3/12 ml-4 space-y-8",children:Object(v.jsx)(R,{user:c})})]})]})})}c(81);function W(){var e=Object(n.useContext)(w).setUser,t=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(E.g)(),r=function(n){null===n||void 0===n||n.preventDefault(),function(){var n=Object(o.a)(l.a.mark((function n(){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.post("auth/login",{email:t.current.value,password:c.current.value});case 2:r=n.sent,a=r.data,b.set("token",a.token),b.set("user",a.user),e(a.user),console.log(a.user),s.push("/home/share");case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()};Object(n.useEffect)((function(){var e=function(e){13===e.keyCode&&r()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}));return Object(v.jsxs)("div",{className:"mx-auto bg-gradient-to-r from-purple-400 via-pink-500  dark:text-blue-500  text-white   flex flex-col justify-center space-y-6 h-screen",children:[Object(v.jsx)(j.a,{position:"top-center",autoClose:2500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(v.jsxs)("div",{className:"flex flex-col h-screen justify-center items-center space-y-10",children:[Object(v.jsxs)("div",{className:"w-full  md:w-1/2 flex justify-center items-center flex-col space-y-4 ",children:[Object(v.jsx)("h2",{className:"text-6xl font-bold",children:"Fujix"}),Object(v.jsx)("span",{children:"\u7528\u7167\u7247\u5206\u4eab\u4f60\u7684\u751f\u6d3b"})]}),Object(v.jsx)("div",{className:"w-full md:w-2/3  lg:w-1/2  flex justify-center items-center ",children:Object(v.jsxs)("form",{onSubmit:r,className:"w-full m-4  md:w-1/2 flex bg-white p-4 flex-col justify-center items-center space-y-4  rounded-md shadow-xl ",children:[Object(v.jsx)("input",{placeholder:"\u90ae\u7bb1",type:"email",required:!0,ref:t,className:"w-full shadow-lg p-2 rounded-md outline-none  border-1 text-gray-600 focus:ring-2 focus:ring-blue-400"}),Object(v.jsx)("input",{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",type:"password",required:!0,minLength:"6",className:"w-full shadow-lg  p-2 rounded-md outline-none border-1 text-gray-600 focus:ring-2 focus:ring-blue-400",ref:c}),Object(v.jsx)("button",{className:"w-full shadow-lg bg-blue-400 p-2   rounded-md text-white my-8",children:"\u767b\u9646"}),Object(v.jsx)("span",{className:"text-gray-400 text-sm",children:"\u5fd8\u8bb0\u5bc6\u7801\uff1f"}),Object(v.jsx)("button",{onClick:function(){s.push("/register")},className:"w-full  shadow-lg bg-pink-400  p-2 text-white rounded-md",children:"\u521b\u5efa\u65b0\u8d26\u53f7"})]})})]})]})}function X(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useRef)(),r=Object(E.g)();return Object(v.jsx)("div",{className:"mx-auto bg-gradient-to-r from-purple-400 via-pink-500 text-white flex flex-col justify-center space-y-6 h-screen",children:Object(v.jsxs)("div",{className:"flex flex-col h-screen justify-center items-center space-y-10",children:[Object(v.jsxs)("div",{className:"w-full  md:w-1/2 flex justify-center items-center flex-col space-y-4 ",children:[Object(v.jsx)("h2",{className:"text-6xl font-bold",children:"Fujix"}),Object(v.jsx)("span",{children:"\u7528\u7167\u7247\u5206\u4eab\u4f60\u7684\u751f\u6d3b"})]}),Object(v.jsx)("div",{className:"w-full md:w-2/3  lg:w-1/2  flex justify-center items-center ",children:Object(v.jsxs)("form",{onSubmit:function(n){(n.preventDefault(),e.current.value===c.current.value)?(function(){var c=Object(o.a)(l.a.mark((function c(){return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,f.post("auth/register",{username:t.current.value,password:e.current.value,email:s.current.value});case 3:c.next=8;break;case 5:c.prev=5,c.t0=c.catch(0),console.log(c.t0);case 8:case"end":return c.stop()}}),c,null,[[0,5]])})));return function(){return c.apply(this,arguments)}}()(),r.push("/login")):alert("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u540c")},className:"w-full m-4  md:w-1/2 flex bg-white p-4 flex-col justify-center items-center space-y-4  rounded-md shadow-xl ",children:[Object(v.jsx)("input",{placeholder:"\u7528\u6237\u540d",ref:t,required:!0,className:"w-full shadow-lg focus:ring-2 focus:ring-blue-400  p-2 rounded-md outline-none  focus:border-blue-400 border-1 text-gray-600"}),Object(v.jsx)("input",{placeholder:"\u90ae\u7bb1",ref:s,required:!0,className:"w-full shadow-lg focus:ring-2 focus:ring-blue-400  p-2 rounded-md outline-none  focus:border-blue-400 border-1 text-gray-600",type:"email"}),Object(v.jsx)("input",{placeholder:"\u5bc6\u7801",ref:e,type:"password",minLength:"6",required:!0,className:"w-full shadow-lg focus:ring-2 focus:ring-blue-400  p-2 rounded-md outline-none  focus:border-blue-400 border-1 text-gray-600"}),Object(v.jsx)("input",{placeholder:"\u518d\u6b21\u786e\u8ba4\u5bc6\u7801",ref:c,type:"password",required:!0,className:"w-full shadow-lg focus:ring-2 focus:ring-blue-400  p-2 rounded-md outline-none  focus:border-blue-400 border-1 text-gray-600"}),Object(v.jsx)("button",{type:"submit",className:"w-full shadow-lg focus:ring-2 focus:ring-blue-400  bg-blue-400 p-2   rounded-md text-white my-8",children:"\u6ce8\u518c"}),Object(v.jsx)("button",{onClick:function(){r.push("/login")},className:"w-full shadow-lg focus:ring-2 focus:ring-blue-400 bg-pink-400  p-2 text-white rounded-md",children:"\u767b\u9646"})]})})]})})}var Z=c(25),$=c(23);function ee(){var e=Object(n.useContext)(w).user,t=Object(n.useState)(null),c=Object(i.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)({}),u=Object(i.a)(a,2),d=u[0],j=u[1],b=d.username,x=d.city,m=d.from,p=d.desc;Object(n.useEffect)((function(){(function(){var t=Object(o.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("users/".concat(e._id));case 2:c=t.sent,j(c.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e,j]);var h=function(t){var c=Object(Z.a)({userId:null===e||void 0===e?void 0:e._id},t);(function(){var t=Object(o.a)(l.a.mark((function t(){var n,r,a,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!s){t.next=11;break}return n=new FormData,r=Date.now()+s.name,n.append("fileName",r),n.append("file",s),t.next=8,f.post("/upload",n);case 8:a=t.sent,o=a.data,c.profilePicture=o;case 11:return t.next=13,f.put("users/".concat(e._id),c);case 13:alert("\u4fdd\u5b58\u6210\u529f"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(){return t.apply(this,arguments)}})()()},O=function(){return Object(v.jsx)("div",{className:"mx-auto w-full bg-white text-gray-400  shadow-lg flex flex-col justify-center space-y-6 px-80 mb-10 py-20 dark:bg-gray-800 dark:text-gray-200 rounded-md",children:Object(v.jsxs)("div",{className:"space-y-4",children:[Object(v.jsxs)("h2",{className:"mb-4 flex items-center",children:[Object(v.jsx)(q.a,{fontSize:"large"}),Object(v.jsx)("span",{className:"font-bold pl-4 text-2xl",children:"\u8bbe\u7f6e"})]}),Object(v.jsxs)("label",{htmlFor:"file",children:[s?Object(v.jsx)("img",{alt:"",className:"",src:URL.createObjectURL(s)}):Object(v.jsx)("img",{src:d.profilePicture||"https://fujix.oss-cn-shenzhen.aliyuncs.com/noCover.png",alt:"",className:"w-32 h-32 rounded-lg object-cover shadow-lg"}),Object(v.jsx)("input",{type:"file",id:"file",style:{display:"none"},accept:".png,.jpeg,.jpg",onChange:function(e){return r(e.target.files[0])}})]}),Object(v.jsx)($.c,{initialValues:{username:b,city:x,from:m,desc:p},onSubmit:h,children:Object(v.jsxs)($.b,{className:"flex flex-col space-y-4",children:[Object(v.jsx)("label",{htmlFor:"username",children:"\u7528\u6237\u540d\u5b57"}),Object(v.jsx)($.a,{id:"username",name:"username",autoComplete:"off",className:"w-full shadow-lg p-2 rounded-md outline-none  border-1 text-gray-600 focus:ring-2 focus:ring-blue-400"}),Object(v.jsx)("label",{htmlFor:"desc",children:"\u7b80\u4ecb"}),Object(v.jsx)($.a,{id:"desc",name:"desc",autoComplete:"off",className:"w-full shadow-lg p-2 rounded-md outline-none  border-1 text-gray-600 focus:ring-2 focus:ring-blue-400"}),Object(v.jsx)("label",{htmlFor:"city",children:"\u57ce\u5e02"}),Object(v.jsx)($.a,{id:"city",name:"city",autoComplete:"off",className:"w-full shadow-lg p-2 rounded-md outline-none  border-1 text-gray-600 focus:ring-2 focus:ring-blue-400"}),Object(v.jsx)("label",{htmlFor:"from",children:"\u5bb6\u4e61"}),Object(v.jsx)($.a,{id:"from",name:"from",autoComplete:"off",className:"w-full shadow-lg p-2 rounded-md outline-none  border-1 text-gray-600 focus:ring-2 focus:ring-blue-400"}),Object(v.jsx)("p",{}),Object(v.jsx)("button",{variant:"contained",color:"primary",type:"submit",className:"w-full shadow-lg bg-pink-400  mt-8 p-2 text-white rounded-md dark:bg-blue-400",children:"\u4fdd\u5b58\u8bbe\u7f6e"})]})})]})})};return Object(v.jsx)(M,{children:Object(v.jsx)(O,{})})}function te(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"404"})})}var ce=c(51),ne=["isAuth","component"];function se(e){var t=e.isAuth,c=e.component,n=Object(ce.a)(e,ne);return Object(v.jsx)(E.b,Object(Z.a)(Object(Z.a)({},n),{},{render:function(e){return t?Object(v.jsx)(c,Object(Z.a)({},e)):Object(v.jsx)(E.a,{to:"/login"})}}))}var re=function(){var e=Object(n.useContext)(w).user;return Object(v.jsx)(O.a,{children:Object(v.jsxs)(E.d,{children:[Object(v.jsx)(se,{path:"/home/",component:K,isAuth:e}),Object(v.jsx)(E.b,{path:"/login",component:W}),Object(v.jsx)(se,{path:"/register",component:X,isAuth:e}),Object(v.jsx)(E.b,{path:"/profile/:username",component:Q}),Object(v.jsx)(se,{path:"/setting",component:ee,isAuth:e}),Object(v.jsx)(E.a,{path:"/",to:"/home/"}),Object(v.jsx)(E.b,{path:"*",component:te})]})})};c(82),c(83);r.a.render(Object(v.jsx)(y,{children:Object(v.jsx)(re,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.f1ffa1bf.chunk.js.map