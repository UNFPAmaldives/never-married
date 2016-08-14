(function(e,t){function f(e){o[o.length]=e}function l(e){var t=new RegExp(" ?\\b"+e+"\\b");s.className=s.className.replace(t,"")}function c(e,t){for(var n=0,r=e.length;n<r;n++)t.call(e,e[n],n)}function x(){s.className=s.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g,"");var t=e.innerWidth||s.clientWidth,n=e.outerWidth||e.screen.width;h.screen.innerWidth=t;h.screen.outerWidth=n;f("w-"+t);c(u.screens,function(e){if(t>e){if(u.screensCss.gt)f("gt-"+e);
if(u.screensCss.gte)f("gte-"+e)}else if(t<e){if(u.screensCss.lt)f("lt-"+e);if(u.screensCss.lte)f("lte-"+e)}else if(t===e){if(u.screensCss.lte)f("lte-"+e);if(u.screensCss.eq)f("e-q"+e);if(u.screensCss.gte)f("gte-"+e)}});var r=e.innerHeight||s.clientHeight,i=e.outerHeight||e.screen.height;h.screen.innerHeight=r;h.screen.outerHeight=i;h.feature("portrait",r>t);h.feature("landscape",r<t)}function N(){e.clearTimeout(T);T=e.setTimeout(x,50)}var n=e.document,r=e.navigator,i=e.location,s=n.documentElement,
o=[],u={screens:[240,320,480,640,768,800,1024,1280,1440,1680,1920],screensCss:{gt:true,gte:false,lt:true,lte:false,eq:false},browsers:[{ie:{min:6,max:11}}],browserCss:{gt:true,gte:false,lt:true,lte:false,eq:true},html5:true,page:"-page",section:"-section",head:"head"};if(e.head_conf)for(var a in e.head_conf)if(e.head_conf[a]!==t)u[a]=e.head_conf[a];var h=e[u.head]=function(){h.ready.apply(null,arguments)};h.feature=function(e,t,n){if(!e){s.className+=" "+o.join(" ");o=[];return h}if(Object.prototype.toString.call(t)===
"[object Function]")t=t.call();f((t?"":"no-")+e);h[e]=!!t;if(!n){l("no-"+e);l(e);h.feature()}return h};h.feature("js",true);var p=r.userAgent.toLowerCase(),d=/mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(p);h.feature("mobile",d,true);h.feature("desktop",!d,true);p=/(chrome|firefox)[ \/]([\w.]+)/.exec(p)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(p)||/(msie) ([\w.]+)/.exec(p)||
/(trident).+rv:(\w.)+/.exec(p)||[];var v=p[1],m=parseFloat(p[2]);switch(v){case "msie":case "trident":v="ie";m=n.documentMode||m;break;case "firefox":v="ff";break;case "ipod":case "ipad":case "iphone":v="ios";break;case "webkit":v="safari";break}h.browser={name:v,version:m};h.browser[v]=true;for(var g=0,y=u.browsers.length;g<y;g++)for(var b in u.browsers[g])if(v===b){f(b);var w=u.browsers[g][b].min;var E=u.browsers[g][b].max;for(var S=w;S<=E;S++)if(m>S){if(u.browserCss.gt)f("gt-"+b+S);if(u.browserCss.gte)f("gte-"+
b+S)}else if(m<S){if(u.browserCss.lt)f("lt-"+b+S);if(u.browserCss.lte)f("lte-"+b+S)}else if(m===S){if(u.browserCss.lte)f("lte-"+b+S);if(u.browserCss.eq)f("eq-"+b+S);if(u.browserCss.gte)f("gte-"+b+S)}}else f("no-"+b);f(v);f(v+parseInt(m,10));if(u.html5&&v==="ie"&&m<9)c("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(e){n.createElement(e)});c(i.pathname.split("/"),function(e,n){if(this.length>
2&&this[n+1]!==t){if(n)f(this.slice(n,n+1).join("-").toLowerCase()+u.section)}else{var r=e||"index",i=r.indexOf(".");if(i>0)r=r.substring(0,i);s.id=r.toLowerCase()+u.page;if(!n)f("root"+u.section)}});h.screen={height:e.screen.height,width:e.screen.width};x();var T=0;if(e.addEventListener)e.addEventListener("resize",N,false);else e.attachEvent("onresize",N)})(window);
(function(e,t){function f(e){for(var n in e)if(i[e[n]]!==t)return true;return false}function l(e){var t=e.charAt(0).toUpperCase()+e.substr(1),n=(e+" "+o.join(t+" ")+t).split(" ");return!!f(n)}var n=e.document,r=n.createElement("i"),i=r.style,s=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),o="Webkit Moz O ms Khtml".split(" "),u=e.head_conf&&e.head_conf.head||"head",a=e[u];var c={gradient:function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(#fff));",n="linear-gradient(left top,#eee,#fff);";
i.cssText=(e+s.join(t+e)+s.join(n+e)).slice(0,-e.length);return!!i.backgroundImage},rgba:function(){i.cssText="background-color:rgba(0,0,0,0.5)";return!!i.backgroundColor},opacity:function(){return r.style.opacity===""},textshadow:function(){return i.textShadow===""},multiplebgs:function(){i.cssText="background:url(https://),url(https://),red url(https://)";var e=(i.background||"").match(/url/g);return Object.prototype.toString.call(e)==="[object Array]"&&e.length===3},boxshadow:function(){return l("boxShadow")},
borderimage:function(){return l("borderImage")},borderradius:function(){return l("borderRadius")},cssreflections:function(){return l("boxReflect")},csstransforms:function(){return l("transform")},csstransitions:function(){return l("transition")},touch:function(){return"ontouchstart"in e},retina:function(){return e.devicePixelRatio>1},fontface:function(){var e=a.browser.name,t=a.browser.version;switch(e){case "ie":return t>=9;case "chrome":return t>=13;case "ff":return t>=6;case "ios":return t>=5;
case "android":return false;case "webkit":return t>=5.1;case "opera":return t>=10;default:return false}}};for(var h in c)if(c[h])a.feature(h,c[h].call(),true);a.feature()})(window);
(function(e,t){function d(){}function v(e,t){if(!e)return;if(typeof e==="object")e=[].slice.call(e);for(var n=0,r=e.length;n<r;n++)t.call(e,e[n],n)}function m(e,n){var r=Object.prototype.toString.call(n).slice(8,-1);return n!==t&&n!==null&&r===e}function g(e){return m("Function",e)}function y(e){return m("Array",e)}function b(e){var t=e.split("/"),n=t[t.length-1],r=n.indexOf("?");return r!==-1?n.substring(0,r):n}function w(e){e=e||d;if(e._done)return;e();e._done=1}function E(e,t,n,r){var i=typeof e===
"object"?e:{test:e,success:!!t?y(t)?t:[t]:false,failure:!!n?y(n)?n:[n]:false,callback:r||d};var s=!!i.test;if(s&&!!i.success){i.success.push(i.callback);f.load.apply(null,i.success)}else if(!s&&!!i.failure){i.failure.push(i.callback);f.load.apply(null,i.failure)}else r();return f}function S(e){var t={};if(typeof e==="object")for(var n in e){if(!!e[n])t={name:n,url:e[n]}}else t={name:b(e),url:e};var r=s[t.name];if(r&&r.url===t.url)return r;s[t.name]=t;return t}function x(e){e=e||s;for(var t in e)if(e.hasOwnProperty(t)&&
e[t].state!==p)return false;return true}function T(e){e.state=c;v(e.onpreload,function(e){e.call()})}function N(e,n){if(e.state===t){e.state=l;e.onpreload=[];O({url:e.url,type:"cache"},function(){T(e)})}}function C(){var e=arguments,t=e[e.length-1],n=[].slice.call(e,1),r=n[0];if(!g(t))t=null;if(y(e[0])){e[0].push(t);f.load.apply(null,e[0]);return f}if(!!r){v(n,function(e){if(!g(e)&&!!e)N(S(e))});L(S(e[0]),g(r)?r:function(){f.load.apply(null,n)})}else L(S(e[0]));return f}function k(){var e=arguments,
t=e[e.length-1],n={};if(!g(t))t=null;if(y(e[0])){e[0].push(t);f.load.apply(null,e[0]);return f}v(e,function(e,r){if(e!==t){e=S(e);n[e.name]=e}});v(e,function(e,r){if(e!==t){e=S(e);L(e,function(){if(x(n))w(t)})}});return f}function L(e,t){t=t||d;if(e.state===p){t();return}if(e.state===h){f.ready(e.name,t);return}if(e.state===l){e.onpreload.push(function(){L(e,t)});return}e.state=h;O(e,function(){e.state=p;t();v(i[e.name],function(e){w(e)});if(u&&x())v(i.ALL,function(e){w(e)})})}function A(e){e=e||
"";if(e.indexOf(".css")>0)return"css";else return"js"}function O(t,r){function i(t){t=t||e.event;u.onload=u.onreadystatechange=u.onerror=null;r()}function s(i){i=i||e.event;if(i.type==="load"||/loaded|complete/.test(u.readyState)&&(!n.documentMode||n.documentMode<9)){e.clearTimeout(t.errorTimeout);e.clearTimeout(t.cssTimeout);u.onload=u.onreadystatechange=u.onerror=null;r()}}function o(){if(t.state!==p&&t.cssRetries<=20){for(var r=0,i=n.styleSheets.length;r<i;r++)if(n.styleSheets[r].href===u.href){s({type:"load"});
return}t.cssRetries++;t.cssTimeout=e.setTimeout(o,250)}}r=r||d;var u;var a=A(t.url);if(a==="css"){u=n.createElement("link");u.type="text/"+(t.type||"css");u.rel="stylesheet";u.href=t.url;t.cssRetries=0;t.cssTimeout=e.setTimeout(o,500)}else{u=n.createElement("script");u.type="text/"+(t.type||"javascript");u.src=t.url}u.onload=u.onreadystatechange=s;u.onerror=i;u.async=false;u.defer=false;t.errorTimeout=e.setTimeout(function(){i({type:"timeout"})},7E3);var f=n.head||n.getElementsByTagName("head")[0];
f.insertBefore(u,f.lastChild)}function M(){var e=n.getElementsByTagName("script");for(var t=0,r=e.length;t<r;t++){var i=e[t].getAttribute("data-headjs-load");if(!!i){f.load(i);return}}}function _(e,t){if(e===n){if(u)w(t);else r.push(t);return f}if(g(e)){t=e;e="ALL"}if(y(e)){var o={};v(e,function(e){o[e]=s[e];f.ready(e,function(){if(x(o))w(t)})});return f}if(typeof e!=="string"||!g(t))return f;var a=s[e];if(a&&a.state===p||e==="ALL"&&x()&&u){w(t);return f}var l=i[e];if(!l)l=i[e]=[t];else l.push(t);
return f}function D(){if(!n.body){e.clearTimeout(f.readyTimeout);f.readyTimeout=e.setTimeout(D,50);return}if(!u){u=true;M();v(r,function(e){w(e)})}}function P(){if(n.addEventListener){n.removeEventListener("DOMContentLoaded",P,false);D()}else if(n.readyState==="complete"){n.detachEvent("onreadystatechange",P);D()}}var n=e.document,r=[],i={},s={},o="async"in n.createElement("script")||"MozAppearance"in n.documentElement.style||e.opera,u,a=e.head_conf&&e.head_conf.head||"head",f=e[a]=e[a]||function(){f.ready.apply(null,
arguments)},l=1,c=2,h=3,p=4;if(n.readyState==="complete")D();else if(n.addEventListener){n.addEventListener("DOMContentLoaded",P,false);e.addEventListener("load",D,false)}else{n.attachEvent("onreadystatechange",P);e.attachEvent("onload",D);var H=false;try{H=!e.frameElement&&n.documentElement}catch(B){}if(H&&H.doScroll)(function j(){if(!u){try{H.doScroll("left")}catch(t){e.clearTimeout(f.readyTimeout);f.readyTimeout=e.setTimeout(j,50);return}D()}})()}f.load=f.js=o?k:C;f.test=E;f.ready=_;f.ready(n,
function(){if(x())v(i.ALL,function(e){w(e)});if(f.feature)f.feature("domloaded",true)})})(window);