(function(e){function t(t){for(var n,l,i=t[0],o=t[1],u=t[2],f=0,b=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&b.push(a[l][0]),a[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);s&&s(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,i=1;i<c.length;i++){var o=c[i];0!==a[o]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=c[0]))}return e}var n={},a={app:0},r=[];function l(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=n,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(c,n,function(t){return e[t]}.bind(null,n));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=o;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"2c73":function(e,t,c){e.exports=c.p+"img/icon-cross.fe68d57f.svg"},"2e14":function(e,t,c){e.exports=c.p+"img/icon-check.5742160c.svg"},4945:function(e,t,c){"use strict";c("b17a")},b17a:function(e,t,c){},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function a(e,t,c,a,r,l){var i=Object(n["m"])("Input");return Object(n["j"])(),Object(n["e"])("main",{id:"wrapper",class:Object(n["i"])(e.active?"active":"")},[Object(n["g"])(i,{change:e.change,active:e.active},null,8,["change","active"])],2)}c("4de4"),c("d3b7");var r=c("2e14"),l=c.n(r),i={class:"mainInput"},o=Object(n["f"])("h1",null,"Todo",-1),u={class:"icon_active"},s=["src"],f={class:"bodyInput"},b={key:0,src:l.a,alt:"icon-check"};function p(e,t,a,r,l,p){var v=Object(n["m"])("manager-task");return Object(n["j"])(),Object(n["e"])("div",i,[Object(n["f"])("header",null,[o,Object(n["f"])("div",u,[Object(n["f"])("img",{src:e.active?c("faee"):c("e022"),alt:"icon-change dark",onClick:t[0]||(t[0]=function(){return e.change&&e.change.apply(e,arguments)})},null,8,s)])]),Object(n["f"])("div",f,[Object(n["f"])("form",{class:"addTodo",onSubmit:t[3]||(t[3]=Object(n["q"])((function(){return e.getDatos&&e.getDatos.apply(e,arguments)}),["prevent"]))},[Object(n["f"])("div",null,[Object(n["f"])("span",null,[Object(n["f"])("span",{class:Object(n["i"])(e.check?"circle":"circleNotActive"),onClick:t[1]||(t[1]=function(t){return e.changeCheck(t)}),id:"circle"},[e.check?(Object(n["j"])(),Object(n["e"])("img",b)):Object(n["d"])("",!0)],2)]),Object(n["p"])(Object(n["f"])("input",{type:"text",placeholder:"Create a new todo...","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.work=t})},null,512),[[n["o"],e.work]])])],32),Object(n["g"])(v,{tasks:e.tasks,filter:e.filter,clear:e.clear,valueFilterBy:e.valueFilterBy,deleteTask:e.deleteTask,changeTask:e.changeTask,filterBy:e.filterBy},null,8,["tasks","filter","clear","valueFilterBy","deleteTask","changeTask","filterBy"])])])}var v=c("2c73"),d=c.n(v),j={class:"bodyInput managerTask"},O=["id"],k=["onClick"],h={key:0,src:l.a,alt:"icon-check"},g=["value"],y={class:"inputCross"},m=["onClick"],T={key:0,class:"options"},C={class:"btnOptions"},w=["id"],B=["id"],x=["id"],_={class:"clear"};function A(e,t,c,a,r,l){return Object(n["j"])(),Object(n["e"])("section",null,[(Object(n["j"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(e.filter,(function(c,a){return Object(n["j"])(),Object(n["e"])("div",{key:a},[Object(n["f"])("div",j,[Object(n["f"])("form",{class:"addTodo",onSubmit:t[0]||(t[0]=Object(n["q"])((function(){return e.getDatos&&e.getDatos.apply(e,arguments)}),["prevent"])),id:0==a?"firstIndex":""},[Object(n["f"])("div",null,[Object(n["f"])("span",null,[Object(n["f"])("span",{class:Object(n["i"])(c.check?"circle":"circleNotActive"),onClick:function(t){return e.changeTask(a)},id:"circle"},[c.check?(Object(n["j"])(),Object(n["e"])("img",h)):Object(n["d"])("",!0)],10,k)]),Object(n["f"])("input",{type:"text",placeholder:"Create a new todo...",value:c.task,disabled:"",class:Object(n["i"])(!0===c.check?"line":"")},null,10,g),Object(n["f"])("span",y,[Object(n["f"])("img",{src:d.a,alt:"icon-scrooss",onClick:function(t){return e.deleteTask(c.task)}},null,8,m)])])],40,O)])])})),128)),e.tasks.length>0?(Object(n["j"])(),Object(n["e"])("div",T,[Object(n["f"])("p",null,Object(n["n"])(e.tasks.length)+" items left",1),Object(n["f"])("div",C,[Object(n["f"])("button",{onClick:t[1]||(t[1]=function(t){return e.valueFilterBy("")}),id:""===e.filterBy?"btnActive":""},"All",8,w),Object(n["f"])("button",{onClick:t[2]||(t[2]=function(t){return e.valueFilterBy(!1)}),id:!1===e.filterBy?"btnActive ":""},"Actived",8,B),Object(n["f"])("button",{onClick:t[3]||(t[3]=function(t){return e.valueFilterBy(!0)}),id:!0===e.filterBy?"btnActive":""},"Completed",8,x)]),Object(n["f"])("div",_,[Object(n["f"])("button",{onClick:t[4]||(t[4]=function(){return e.clear&&e.clear.apply(e,arguments)})},"Clear Completed")])])):Object(n["d"])("",!0)])}var F=Object(n["h"])({name:"ManagerTask",props:["tasks","clear","valueFilterBy","deleteTask","changeTask","filter","filterBy"],setup:function(e){var t=Object(n["k"])(e.tasks);return{taskss:t}}}),I=c("6b0d"),P=c.n(I);const S=P()(F,[["render",A]]);var D=S,M=Object(n["h"])({components:{ManagerTask:D},name:"Input",props:["change","active"],setup:function(){var e=Object(n["k"])(!1),t=Object(n["k"])(""),c=Object(n["k"])([]),a=Object(n["k"])(""),r=function(t){t.preventDefault(),e.value=!e.value,console.log(e)},l=function(){var a=Object(n["k"])({check:e.value,task:t.value});c.value.push(a.value),t.value="",e.value=!1},i=function(e){c.value[e].check=!c.value[e].check},o=function(e){c.value=c.value.filter((function(t){return t.task!==e}))},u=function(){c.value=c.value.filter((function(e){return!1===e.check}))},s=function(e){a.value=e},f=Object(n["b"])((function(){return c.value.filter((function(e){return!0===a.value||!1===a.value?e.check==a.value:e}))}));return{tasks:c,getDatos:l,check:e,changeCheck:r,work:t,clear:u,filter:f,valueFilterBy:s,deleteTask:o,changeTask:i,filterBy:a}}});const q=P()(M,[["render",p]]);var J=q,N=Object(n["h"])({name:"App",components:{Input:J},setup:function(){var e=Object(n["k"])(!1),t=function(){e.value=!e.value};return{active:e,change:t}}});c("4945");const U=P()(N,[["render",a],["__scopeId","data-v-fc5d68f8"]]);var V=U;Object(n["c"])(V).mount("#app")},e022:function(e,t,c){e.exports=c.p+"img/icon-moon.e66b8c62.svg"},faee:function(e,t,c){e.exports=c.p+"img/icon-sun.b3182f3b.svg"}});
//# sourceMappingURL=app.ffa57af9.js.map