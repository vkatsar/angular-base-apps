!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var n={},t={},r={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,a=function(e,n){for(var t,r=[],i=(o.test(n)?e+"/"+n:n).split("/"),a=0,u=i.length;a<u;a++)t=i[a],".."===t?r.pop():"."!==t&&""!==t&&r.push(t);return r.join("/")},u=function(e){return e.split("/").slice(0,-1).join("/")},s=function(n){return function(t){var r=a(u(n),t);return e.require(r,n)}},c=function(e,n){var r=null;r=m&&m.createHot(e);var i={id:e,exports:{},hot:r};return t[e]=i,n(i.exports,s(e),i),i.exports},l=function(e){return r[e]?l(r[e]):e},f=function(e,n){return l(a(u(e),n))},d=function(e,r){null==r&&(r="/");var o=l(e);if(i.call(t,o))return t[o].exports;if(i.call(n,o))return c(o,n[o]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};d.alias=function(e,n){r[n]=e};var h=/\.[^.\/]+$/,g=/\/index(\.[^\/]+)?$/,p=function(e){if(h.test(e)){var n=e.replace(h,"");i.call(r,n)&&r[n].replace(h,"")!==n+"/index"||(r[n]=e)}if(g.test(e)){var t=e.replace(g,"");i.call(r,t)||(r[t]=e)}};d.register=d.define=function(e,r){if("object"==typeof e)for(var o in e)i.call(e,o)&&d.register(o,e[o]);else n[e]=r,delete t[e],p(e)},d.list=function(){var e=[];for(var t in n)i.call(n,t)&&e.push(t);return e};var m=e._hmr&&new e._hmr(f,d,n,t);d._cache=t,d.hmr=m&&m.wrap,d.brunch=!0,e.require=d}}(),function(){var e;window;require.register("app.js",function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n("fastclick"),o=r(i),a=n("angular"),u=r(a);n("angular-base-apps"),n("firebase"),n("angularfire");var s=n("./config/config-firebase"),c=r(s);n("angular-icons/dist/open-iconic"),n("angular-icons/dist/ionicons"),n("angular-icons/dist/material-icons"),n("angular-dynamic-routing/dynamicRouting"),n("angular-dynamic-routing/dynamicRouting.animations");var l=n("./config/config-routes"),f=r(l),d=n("./modules"),h=r(d);firebase.initializeApp(c["default"]);var g=function(e,n,t,r){e.otherwise("/"),n.html5Mode({enabled:!1,requireBase:!1}),t.registerUrl(c["default"].databaseURL),r.registerDynamicRoutes(f["default"])};g.$inject=["$urlRouterProvider","$locationProvider","$firebaseRefProvider","$BaseAppsStateProvider"];var p=function(){o["default"].FastClick.attach(document.body)};u["default"].module("application",["ui.router","ngAnimate","firebase","base","angularIcons.openIconic","angularIcons.ionicons","angularIcons.materialIcons","dynamicRouting","dynamicRouting.animations"].concat(h["default"])).config(g).run(p)}),require.register("config/config-firebase.js",function(e,n,t){"use strict";t.exports={apiKey:"AIzaSyBkB1IvviOcPq4z8Rs7nijEdIa9n1IvRlU",authDomain:"angular-firebase-template.firebaseapp.com",databaseURL:"https://angular-firebase-template.firebaseio.com",storageBucket:""}}),require.register("config/config-routes.js",function(e,n,t){"use strict";t.exports=[{name:"account",url:"/account",controller:"AccountController as account",animationIn:"slideInLeft",animationOut:"slideOutRight",path:"modules/account/account.html"},{name:"home",url:"/",controller:"HomeController as home",animationIn:"slideInRight",animationOut:"slideOutLeft",path:"modules/home/home.html"}]}),require.register("modules/account/account-controller.js",function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=function(){function e(n,t,i){return r(this,e),this.providers=["twitter","facebook","google","github"],this.authService=n,this.authLoading=!1,this.$log=t,this.BaseAppsApi=i,this}return i(e,[{key:"signin",value:function(e){var n=this,t=this.$log,r=this.BaseAppsApi;switch(e){case"anonymous":return this.authLoading=!0,this.authService.$signInAnonymously()["catch"](function(e){t.log("Login Failed!",e),r.publish("account-notifications",{title:"Anonymous Login Failed",content:e.message,color:"alert"})})["finally"](function(){return n.authLoading=!1});case"google":case"twitter":case"facebook":case"github":return this.authLoading=!0,this.authService.$signInWithPopup(e)["catch"](function(n){t.log("Login Failed!",n),r.publish("account-notifications",{title:e.substr(0,1).toUpperCase()+e.substr(1)+" Login Failed",content:n.message+" (email: "+n.email+")",color:"alert"})})["finally"](function(){return n.authLoading=!1});default:return t.log("Provider not supported: "+e),null}}},{key:"printUserInfo",value:function(){return JSON.stringify(this.authService.$getAuth(),null,2)}},{key:"signout",value:function(){var e=this;return this.authLoading=!0,this.authService.$signOut()["finally"](function(){return e.authLoading=!1})}}]),e}();e["default"]=o,o.$inject=["$firebaseAuthService","$log","BaseAppsApi"]}),require.register("modules/account/index.js",function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),n("firebase");var i=n("./account-controller"),o=r(i);e["default"]=angular.module("application.account",["firebase.auth"]).controller("AccountController",o["default"]).name}),require.register("modules/home/home-controller.js",function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=function(){function e(n,t,i,o){r(this,e);var a,u=this;return a=n["default"].child("person"),this.person=t(a),a=n["default"].child("messages"),this.messages=i(a),this.messages.$resolved=!1,this.messages.$loaded().then(function(){u.messages.$resolved=!0}),this.showMessages=!1,o(function(){u.showMessages=!0},750),u}return i(e,[{key:"submitMessage",value:function(e){this.messages.$add(e)}},{key:"updateName",value:function(e){this.person.name=e,this.person.$save()}}]),e}();e["default"]=o,o.$inject=["$firebaseRef","$firebaseObject","$firebaseArray","$timeout"]}),require.register("modules/home/index.js",function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),n("firebase");var i=n("./home-controller"),o=r(i);e["default"]=angular.module("application.home",["firebase.database"]).controller("HomeController",o["default"]).name}),require.register("modules/index.js",function(e,n,t){"use strict";n("./account"),n("./home"),t.exports=["application.account","application.home"]}),require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/path-browserify/index.js","path"),require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,n,t){})}(),require("___globals___");