(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0868":function(t,e,n){t.exports=n.p+"img/nc.13a1be7b.jpg"},"220d":function(t,e,n){"use strict";var a=n("ee64"),r=n.n(a);r.a},"2c4b":function(t,e,n){},"33b3":function(t,e,n){"use strict";var a=n("44bc"),r=n.n(a);r.a},3620:function(t,e,n){},"44bc":function(t,e,n){},5742:function(t,e,n){},5846:function(t,e,n){},6020:function(t,e,n){"use strict";var a=n("5742"),r=n.n(a);r.a},"64b4":function(t,e,n){"use strict";var a=n("2c4b"),r=n.n(a);r.a},ad6e:function(t,e,n){"use strict";var a=n("3620"),r=n.n(a);r.a},aeaf:function(t,e,n){"use strict";var a=n("5846"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("d3b7"),n("bc3a")),s=n.n(r),i={},o=s.a.create(i);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},a["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view")],1)},l=[],u=a["a"].extend({data:function(){return{loginUrl:"http://api.hi-mr.com:81/changtongma/api/v1/user/authtoken",cookie:"",usercode:""}}}),d=u,f=n("2877"),p=n("6544"),v=n.n(p),g=n("7496"),h=Object(f["a"])(d,c,l,!1,null,null,null),m=h.exports;v()(h,{VApp:g["a"]});var x=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-box"},[n("div",{staticClass:"logo-box"},[n("logo",[n("div",{staticClass:"d-flex justify-center align-center"},[n("div",{staticClass:"grey--text text--darken-2",staticStyle:{fontSize:"22px"}},[t._v(t._s(t.menu)+"：")]),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"grey--text text--darken-1",staticStyle:{fontSize:"20px"},attrs:{color:"grey darken-4",dark:"",depressed:""}},a),[t._v(t._s(t.all.userName))])]}}])},[n("v-list",{attrs:{dark:"",width:"190px"}},t._l(t.userlist,(function(e,a){return n("v-list-item",{key:a,on:{click:function(n){return t.getUrl(e)}}},[n("v-list-item-title",{staticStyle:{marginLeft:"10px"}},[t._v(t._s(e.userName))])],1)})),1)],1)],1)])],1),n("div",{staticClass:"d-flex justify-center"},[n("v-card",{staticClass:"list-box",attrs:{"max-width":"1760px","max-height":"880px",dark:"",outlined:""}},[n("div",{staticClass:"d-flex justify-center align-center title"},[n("div",{staticClass:"title-box"},[n("div",{staticClass:"d-flex justify-center"},[n("totalcard",{attrs:{totalnumber:t.total.totalnumber}})],1),n("div",{staticClass:"d-flex justify-center"},[n("passcard",{attrs:{passnumber:t.total.passnumber}})],1),n("div",{staticClass:"d-flex justify-center"},[n("errcard",{attrs:{errnumber:t.total.errnumber}})],1)])]),n("v-card",{staticClass:"grid-box",attrs:{color:"grey darken-4"}},[n("div",[n("strong",[t._v("学号")])]),n("div",[n("strong",[t._v("姓名")])]),n("div",[n("strong",[t._v("温度")])]),n("div",[n("strong",[t._v("检测时间")])]),n("div",[n("strong",[t._v("地点")])]),n("div",[n("strong",[t._v("通行次数")])]),n("div",[n("strong",[t._v("可否通行")])])]),n("div",{staticClass:"test"},t._l(t.person,(function(t,e){return n("div",{key:e,staticClass:"margin-box"},[n("infocard",{attrs:{id:t.userId,name:t.name,temperature:t.temperature,location:t.location,time:t.checkTime,pass:t.pass,controlnumber:t.number}})],1)})),0)],1)],1),t._m(0)])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-center align-center"},[n("div",{staticClass:"grey--text text--darken-2 font-weight-bold",staticStyle:{"margin-left":"10px"}},[t._v("技术支持:")]),n("div",{staticClass:"grey--text text--darken-2 font-weight-bold",staticStyle:{"margin-left":"10px"}},[t._v("南昌大学人工智能工业研究院 | iData")]),n("div",{staticClass:"grey--text text--darken-2 font-weight-bold",staticStyle:{"margin-left":"10px"}},[t._v("Powered")]),n("div",{staticClass:"grey--text text--darken-2 font-weight-bold",staticStyle:{"margin-left":"5px"}},[t._v("By")]),n("div",{staticClass:"grey--text text--darken-2 font-weight-bold",staticStyle:{"margin-left":"5px"}},[t._v("HI-MR")])])}],y=(n("4160"),n("a15b"),n("b0c0"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("841c"),n("1276"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-box"},[t._m(0),t._m(1),n("div",{staticClass:"btn-box"},[t._t("default")],2)])}),C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img-box d-flex align-center "},[a("img",{attrs:{src:n("f2b7"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("strong",[t._v("海默AI智能测温通行系统")])])}],k=a["a"].extend({}),w=k,$=(n("220d"),Object(f["a"])(w,y,C,!1,null,"342335cb",null)),j=$.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"grid-box",class:t.style,attrs:{"max-width":"1760px",height:"60px","min-height":"45px",dark:""}},[n("div",{staticClass:"d-flex justify-center align-center"},[t._v(t._s(t.id))]),n("div",{staticClass:"d-flex justify-center align-center"},[t._v(t._s(t.name))]),n("div",{staticClass:"d-flex justify-center align-center"},[t._v(t._s(t.temperature))]),n("div",{staticClass:"d-flex justify-center align-center"},[t._v(t._s(t.time))]),n("div",{staticClass:"d-flex justify-center align-center"},[t._v(t._s(t.location))]),n("div",{staticClass:"d-flex justify-center align-center"},[t._v(t._s(t.pass))]),n("div",{staticClass:"d-flex justify-center align-center"},[t.canPass?n("div",[n("div",{staticClass:"green-box"})]):n("div",[n("strong",[n("v-icon",{attrs:{size:"30",color:"yellow darken-4"}},[t._v("iconfont icon-RectangleCopy")])],1)])])])],1)},S=[],P=a["a"].extend({props:["id","name","time","temperature","location","pass","controlnumber"],data:function(){return{canPass:!0,style:{redstyle:!1}}},methods:{hightTemperature:function(){this.temperature>37.3&&(this.canPass=!1,this.style.redstyle=!0)}},watch:{temperature:function(t,e){t>37.3?(this.canPass=!1,this.style.redstyle=!0):(this.canPass=!0,this.style.redstyle=!1)}},created:function(){this.hightTemperature()}}),O=P,U=(n("64b4"),n("b0af")),N=n("132d"),z=Object(f["a"])(O,I,S,!1,null,"41e39590",null),E=z.exports;v()(z,{VCard:U["a"],VIcon:N["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("v-card",{staticClass:"grid-box",attrs:{"max-width":"480px","max-height":"80px",color:"blue darken-3",flat:""}},[n("div",{staticClass:"justify-box"},[n("div",{staticStyle:{marginLeft:"10px"}},[t._v("累计检测人数")]),n("div",{staticClass:"font-weight-bold",staticStyle:{marginLeft:"10px",fontSize:"25px"}},[t._v(t._s(t.totalnumber))])]),n("div",[n("v-icon",{attrs:{size:"60"}},[t._v("iconfont icon-RectangleCopy2")])],1)])],1)},V=[],L=a["a"].extend({props:["totalnumber"]}),A=L,R=(n("ad6e"),Object(f["a"])(A,T,V,!1,null,"6dee82b2",null)),M=R.exports;v()(R,{VCard:U["a"],VIcon:N["a"]});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("v-card",{staticClass:"grid-box",attrs:{"max-width":"480px","max-height":"80px",color:"green darken-3",flat:""}},[n("div",{staticClass:"justify-box"},[n("div",{staticStyle:{marginLeft:"10px"}},[t._v("今日检测人数")]),n("div",{staticClass:"font-weight-bold",staticStyle:{marginLeft:"10px",fontSize:"25px"}},[t._v(t._s(t.passnumber))])]),n("div",[n("v-icon",{attrs:{size:"60"}},[t._v("iconfont icon-RectangleCopy2")])],1)])],1)},B=[],D=a["a"].extend({props:["passnumber"]}),H=D,J=(n("aeaf"),Object(f["a"])(H,W,B,!1,null,"af62e94c",null)),q=J.exports;v()(J,{VCard:U["a"],VIcon:N["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("v-card",{staticClass:"grid-box",attrs:{"max-width":"480px","max-height":"80px",color:"deep-orange darken-4",flat:""}},[n("div",{staticClass:"justify-box"},[n("div",{staticStyle:{marginLeft:"10px"}},[t._v("异常人数")]),n("div",{staticClass:"font-weight-bold",staticStyle:{marginLeft:"10px",fontSize:"25px"}},[t._v(t._s(t.errnumber))])]),n("div",[n("v-icon",{attrs:{size:"60"}},[t._v("iconfont icon-RectangleCopy2")])],1)])],1)},Q=[],G=a["a"].extend({props:["errnumber"]}),K=G,X=(n("6020"),Object(f["a"])(K,F,Q,!1,null,"7ef4d403",null)),Y=X.exports;function Z(t,e){var n={headers:{Authorization:e}};return s.a.get(t,n).then((function(t){return t.data})).catch((function(t){return t.data}))}v()(X,{VCard:U["a"],VIcon:N["a"]});var tt=Z;function et(t,e){var n={headers:{Authorization:e}};return s.a.get(t,n).then((function(t){return t.data})).catch((function(t){return t.data}))}var nt=et;function at(t,e){var n={headers:{Authorization:e}};return s.a.get(t,n).then((function(t){return t.data}))}var rt=at;n("99af");function st(t,e){var n=e.split("|")[0],a=e.split("|")[1],r={headers:{Authorization:a}},i=t+"?ucode=".concat(n,"&token=").concat(a);return s.a.get(i,r).then((function(t){return t.data})).catch((function(t){return t.data}))}var it=st,ot=a["a"].extend({data:function(){return{total:{totalnumber:0,passnumber:0,errnumber:0},person:[],menu:"",all:{},userlist:[],url:"http://api.hi-mr.com:81/changtongma/api/v1/user/getcompany?ucode="+this.$parent.$parent.usercode,getinfoUrl:"",getpersonUrl:"",userCode:"",tokenURL:"http://api.hi-mr.com:81/changtongma/api/v1/user/authrenewal"}},methods:{setUrl:function(t,e){function n(t,e){var n=location.search.substr(1),a={};n&&n.split("&").forEach((function(t){var e=t.split("=");a[e[0]]=e[1]})),a[t]=e;var r=[];for(var s in a)r.push(s+"="+a[s]);history.replaceState(null,null,"?"+r.join("&"))}n(t,e)},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?decodeURIComponent(n[2]):null},getUrl:function(t){this.userCode=t.userCode,this.setUrl("usercode",this.userCode),this.all=t,this.getpersonUrl="http://api.hi-mr.com:81/changtongma/api/v1/changtongcode/getpersonhistory?usercode="+this.userCode,this.getinfoUrl="http://api.hi-mr.com:81/changtongma/api/v1/changtongcode/getcount?usercode="+this.userCode,console.log(this.userCode),console.log(this.$parent.$parent.usercode),console.log(t)},getUserName:function(){var t=this;rt(this.url,this.$parent.$parent.cookie).then((function(e){console.log(t.$parent.$parent.usercode),console.log(t.$parent.$parent.cookie),console.log(t.url),console.log(e),t.getpersonUrl="http://api.hi-mr.com:81/changtongma/api/v1/changtongcode/getpersonhistory?usercode="+t.$parent.$parent.usercode,t.getinfoUrl="http://api.hi-mr.com:81/changtongma/api/v1/changtongcode/getcount?usercode="+t.$parent.$parent.usercode,t.setUrl("usercode",t.$parent.$parent.usercode);var n=[];t.userCode=e.data.userCode,t.menu=e.data.userName,t.all=e.data.subCompanies[0];for(var a=0;a<e.data.subCompanies.length;a++){var r=e.data.subCompanies[a];n.push(r)}console.log(n),t.userlist=n}))},getTotal:function(){var t=this;setInterval((function(){tt(t.getinfoUrl,t.$parent.$parent.cookie).then((function(e){t.total.totalnumber=e.data[0],t.total.passnumber=e.data[1],t.total.errnumber=e.data[2]}))}),2e3)},getPersonInfo:function(){var t=this;setInterval((function(){nt(t.getpersonUrl,t.$parent.$parent.cookie).then((function(e){for(var n=[],a=0;a<10;a++){var r=e.data[a];switch(r.name=r.name.replace(/\(.*\)/," "),r.checkTime=r.checkTime.replace("T"," "),r.checkTime=r.checkTime.replace("+08:00"," "),r.location){case"001":r.location="前湖北";break;case"008":r.location="前湖南";break;case"005":r.location="青山湖校区";break;case"007":r.location="东湖校区";break}r.pass=t.countNumber(e.data,r.userId),n.push(r)}t.person=n}))}),5e3)},countNumber:function(t,e){var n=0;return t.forEach((function(t){t.userId===e?n+=1:n+=0})),n},settoken:function(){var t=this;setInterval((function(){it(t.renewaltoken,document.cookie)}),18e5)}},mounted:function(){console.log(this.url),this.getUserName(),this.getTotal(),this.getPersonInfo()},components:{logo:j,infocard:E,totalcard:M,passcard:q,errcard:Y}}),ct=ot,lt=(n("33b3"),n("8336")),ut=n("8860"),dt=n("da13"),ft=n("5d23"),pt=n("e449"),vt=Object(f["a"])(ct,b,_,!1,null,"0eda9d1c",null),gt=vt.exports;v()(vt,{VBtn:lt["a"],VCard:U["a"],VList:ut["a"],VListItem:dt["a"],VListItemTitle:ft["a"],VMenu:pt["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{src:n("0868"),alt:""}}),a("strong",{staticClass:"title-box"},[t._v("海默AI智能通行系统")]),a("div",{staticClass:"login-box"},[t._m(0),a("div",{staticClass:"login-box-main"},[a("div",{staticClass:"grid-box"},[a("div",{staticStyle:{width:"80%"}},[a("div",{staticClass:"input-box",staticStyle:{"margin-top":"35px"}},[a("v-icon",{attrs:{color:"grey lighten-1",size:"30"}},[t._v("iconfont icon-user")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.userName,expression:"userInfo.userName"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.userInfo.userName},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"userName",e.target.value)}}})],1),a("hr")]),a("div",{staticStyle:{width:"80%"}},[a("div",{staticClass:"input-box"},[a("v-icon",{attrs:{color:"grey lighten-1",size:"30"}},[t._v("iconfont icon-lock")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.passWord,expression:"userInfo.passWord"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.userInfo.passWord},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"passWord",e.target.value)}}})],1),a("hr")]),a("div",{staticClass:"red--text text--darken-3 subtitle-2"},[a("p",[t._v(t._s(t.returnInfo))])])])]),a("div",{staticClass:"login-box-footer d-flex justify-center align-center",on:{click:t.login}},[a("strong",{staticClass:"white--text headline"},[t._v("登 录")])])]),t._m(1)])},mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-box-top"},[n("div",{staticClass:"border-box yellow lighten-2"}),n("div",{staticClass:"border-box pink lighten-2"}),n("div",{staticClass:"border-box purple darken-3"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-box d-flex justify-center"},[n("div",[t._v("©")]),n("div",[t._v("Powered")]),n("div",[t._v("By")]),n("div",[t._v("HI-MR")])])}];function xt(t,e){var n=new FormData;n.append("uname",""),n.append("password","");var a={headers:{Authorization:e.Authorization}},r=t+"?uname=".concat(e.userName,"&password=").concat(e.passWord);return s.a.post(r,n,a).then((function(t){return t.data})).catch((function(t){return t.data}))}var bt=xt,_t=a["a"].extend({data:function(){return{userInfo:{userName:"",passWord:"",header:""},returnInfo:""}},methods:{setToken:function(){var t=this;bt(this.$parent.$parent.loginUrl,this.userInfo).then((function(e){if(0===e.code)return document.cookie=e.data,t.$parent.$parent.usercode=document.cookie.split("|")[0],t.$parent.$parent.cookie=document.cookie.split("|")[1],t.$router.push("index"),console.log(document.cookie),!0;t.returnInfo=e.msg})).catch((function(e){t.returnInfo=e.msg}))},login:function(){""!==this.userInfo.userName?this.setToken():""===this.userInfo.userName&&""===this.userInfo.userName&&(this.returnInfo="请输入用户名")}}}),yt=_t,Ct=(n("d54b"),Object(f["a"])(yt,ht,mt,!1,null,"e89ab82a",null)),kt=Ct.exports;v()(Ct,{VIcon:N["a"]}),a["a"].use(x["a"]);var wt=[{path:"/",redirect:"login"},{path:"/login",name:"login",component:kt},{path:"/index",name:"index",component:gt}],$t=new x["a"]({routes:wt}),jt=$t,It=n("f309");a["a"].use(It["a"]);var St=new It["a"]({});n("bf40");a["a"].config.productionTip=!1,new a["a"]({router:jt,vuetify:St,render:function(t){return t(m)}}).$mount("#app")},d54b:function(t,e,n){"use strict";var a=n("fb3f"),r=n.n(a);r.a},ee64:function(t,e,n){},f2b7:function(t,e,n){t.exports=n.p+"img/ndlogo.434afc69.svg"},fb3f:function(t,e,n){}});
//# sourceMappingURL=app.6b84d209.js.map