"use strict"if (typeof exports === 'undefined') { var exports = {}; };function q(){}function K(e){return e()}function J(){return Object.create(null)}function P(e){e.forEach(K)}function V(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ee(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function te(e,t,n){e.insertBefore(t,n||null)}function X(e){e.parentNode&&e.parentNode.removeChild(e)}function w(e){return document.createElement(e)}function ne(e){return document.createTextNode(e)}function x(){return ne(" ")}function I(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function oe(e){return Array.from(e.childNodes)}function D(e,t){e.value=t==null?"":t}function F(e,t,n,o){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let $;function M(e){$=e}function ie(){if(!$)throw new Error("Function called outside component initialization");return $}function re(e){ie().$$.on_mount.push(e)}const C=[],j=[];let k=[];const U=[],se=Promise.resolve();let T=!1;function ce(){T||(T=!0,se.then(Q))}function H(e){k.push(e)}const L=new Set;let A=0;function Q(){if(A!==0)return;const e=$;do{try{for(;A<C.length;){const t=C[A];A++,M(t),ae(t.$$)}}catch(t){throw C.length=0,A=0,t}for(M(null),C.length=0,A=0;j.length;)j.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];L.has(n)||(L.add(n),n())}k.length=0}while(C.length);for(;U.length;)U.pop()();T=!1,L.clear(),M(e)}function ae(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}function de(e){const t=[],n=[];k.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),k=t}const le=new Set;function fe(e,t){e&&e.i&&(le.delete(e),e.i(t))}function ue(e,t,n,o){const{fragment:s,after_update:r}=e.$$;s&&s.m(t,n),o||H(()=>{const d=e.$$.on_mount.map(K).filter(V);e.$$.on_destroy?e.$$.on_destroy.push(...d):P(d),e.$$.on_mount=[]}),r.forEach(H)}function pe(e,t){const n=e.$$;n.fragment!==null&&(de(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){e.$$.dirty[0]===-1&&(C.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(e,t,n,o,s,r,d,l=[-1]){const u=$;M(e);const a=e.$$={fragment:null,ctx:[],props:r,update:q,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:t.target||u.$$.root};d&&d(a.root);let m=!1;if(a.ctx=n?n(e,t.props||{},(p,g,...v)=>{const y=v.length?v[0]:g;return a.ctx&&s(a.ctx[p],a.ctx[p]=y)&&(!a.skip_bound&&a.bound[p]&&a.bound[p](y),m&&_e(e,p)),g}):[],a.update(),m=!0,P(a.before_update),a.fragment=o?o(a.ctx):!1,t.target){if(t.hydrate){const p=oe(t.target);a.fragment&&a.fragment.l(p),p.forEach(X)}else a.fragment&&a.fragment.c();t.intro&&fe(e.$$.fragment),ue(e,t.target,t.anchor,t.customElement),Q()}M(u)}class ge{$destroy(){pe(this,1),this.$destroy=q}$on(t,n){if(!V(n))return q;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ye(e,t,n){this.menuItemLabel=e,this.enabled=t,this.checked=n}function me(e,t,n){this.menuItemID=e,this.enabled=t,this.checked=n}function i(){}i.THEME_COLOR_CHANGED_EVENT="com.adobe.csxs.events.ThemeColorChanged";i.prototype.hostEnvironment=window.__adobe_cep__?JSON.parse(window.__adobe_cep__.getHostEnvironment()):null;i.prototype.getHostEnvironment=function(){return this.hostEnvironment=JSON.parse(window.__adobe_cep__.getHostEnvironment()),this.hostEnvironment};i.prototype.loadBinAsync=function(e,t){try{var n=new XMLHttpRequest;n.responseType="arraybuffer",n.open("GET",e,!0),n.onerror=function(){return console.log("Unable to load snapshot from given URL"),!1},n.send(),n.onload=()=>{window.__adobe_cep__.loadSnapshot(n.response),typeof t=="function"?t():typeof t<"u"&&console.log("Provided callback is not a function")}}catch(o){return console.log(o),!1}return!0};i.prototype.loadBinSync=function(e){try{var t=this.getOSInformation();if(e.startsWith("file://"))return t.indexOf("Windows")>=0?e=e.replace("file:///",""):t.indexOf("Mac")>=0&&(e=e.replace("file://","")),window.__adobe_cep__.loadSnapshot(e),!0}catch(n){return console.log(n),!1}return!1};i.prototype.closeExtension=function(){window.__adobe_cep__.closeExtension()};i.prototype.getSystemPath=function(e){var t=decodeURI(window.__adobe_cep__.getSystemPath(e)),n=this.getOSInformation();return n.indexOf("Windows")>=0?t=t.replace("file:///",""):n.indexOf("Mac")>=0&&(t=t.replace("file://","")),t};i.prototype.evalScript=function(e,t){t==null&&(t=function(n){}),window.__adobe_cep__.evalScript(e,t)};i.prototype.getApplicationID=function(){var e=this.hostEnvironment.appId;return e};i.prototype.getHostCapabilities=function(){var e=JSON.parse(window.__adobe_cep__.getHostCapabilities());return e};i.prototype.dispatchEvent=function(e){typeof e.data=="object"&&(e.data=JSON.stringify(e.data)),window.__adobe_cep__.dispatchEvent(e)};i.prototype.addEventListener=function(e,t,n){window.__adobe_cep__.addEventListener(e,t,n)};i.prototype.removeEventListener=function(e,t,n){window.__adobe_cep__.removeEventListener(e,t,n)};i.prototype.requestOpenExtension=function(e,t){window.__adobe_cep__.requestOpenExtension(e,t)};i.prototype.getExtensions=function(e){var t=JSON.stringify(e),n=window.__adobe_cep__.getExtensions(t),o=JSON.parse(n);return o};i.prototype.getNetworkPreferences=function(){var e=window.__adobe_cep__.getNetworkPreferences(),t=JSON.parse(e);return t};i.prototype.initResourceBundle=function(){for(var e=JSON.parse(window.__adobe_cep__.initResourceBundle()),t=document.querySelectorAll("[data-locale]"),n=0;n<t.length;n++){var o=t[n],s=o.getAttribute("data-locale");if(s){for(var r in e)if(r.indexOf(s)===0){var d=e[r];if(r.length==s.length)o.innerHTML=d;else if(r.charAt(s.length)=="."){var l=r.substring(s.length+1);o[l]=d}}}}return e};i.prototype.dumpInstallationInfo=function(){return window.__adobe_cep__.dumpInstallationInfo()};i.prototype.getOSInformation=function(){var e=navigator.userAgent;if(navigator.platform=="Win32"||navigator.platform=="Windows"){var t="Windows",n="";return e.indexOf("Windows")>-1&&(e.indexOf("Windows NT 5.0")>-1?t="Windows 2000":e.indexOf("Windows NT 5.1")>-1?t="Windows XP":e.indexOf("Windows NT 5.2")>-1?t="Windows Server 2003":e.indexOf("Windows NT 6.0")>-1?t="Windows Vista":e.indexOf("Windows NT 6.1")>-1?t="Windows 7":e.indexOf("Windows NT 6.2")>-1?t="Windows 8":e.indexOf("Windows NT 6.3")>-1?t="Windows 8.1":e.indexOf("Windows NT 10")>-1&&(t="Windows 10"),e.indexOf("WOW64")>-1||e.indexOf("Win64")>-1?n=" 64-bit":n=" 32-bit"),t+n}else if(navigator.platform=="MacIntel"||navigator.platform=="Macintosh"){var o="Mac OS X";return e.indexOf("Mac OS X")>-1&&(o=e.substring(e.indexOf("Mac OS X"),e.indexOf(")")),o=o.replace(/_/g,".")),o}return"Unknown Operation System"};i.prototype.openURLInDefaultBrowser=function(e){return cep.util.openURLInDefaultBrowser(e)};i.prototype.getExtensionID=function(){return window.__adobe_cep__.getExtensionId()};i.prototype.getScaleFactor=function(){return window.__adobe_cep__.getScaleFactor()};navigator.appVersion.toLowerCase().indexOf("windows")>=0&&(i.prototype.getMonitorScaleFactor=function(){return window.__adobe_cep__.getMonitorScaleFactor()});i.prototype.setScaleFactorChangedHandler=function(e){window.__adobe_cep__.setScaleFactorChangedHandler(e)};i.prototype.getCurrentApiVersion=function(){var e=JSON.parse(window.__adobe_cep__.getCurrentApiVersion());return e};i.prototype.setPanelFlyoutMenu=function(e){typeof e=="string"&&window.__adobe_cep__.invokeSync("setPanelFlyoutMenu",e)};i.prototype.updatePanelMenuItem=function(e,t,n){var o=!1;if(this.getHostCapabilities().EXTENDED_PANEL_MENU){var s=new ye(e,t,n);o=window.__adobe_cep__.invokeSync("updatePanelMenuItem",JSON.stringify(s))}return o};i.prototype.setContextMenu=function(e,t){typeof e=="string"&&window.__adobe_cep__.invokeAsync("setContextMenu",e,t)};i.prototype.setContextMenuByJSON=function(e,t){typeof e=="string"&&window.__adobe_cep__.invokeAsync("setContextMenuByJSON",e,t)};i.prototype.updateContextMenuItem=function(e,t,n){var o=new me(e,t,n);ret=window.__adobe_cep__.invokeSync("updateContextMenuItem",JSON.stringify(o))};i.prototype.isWindowVisible=function(){return window.__adobe_cep__.invokeSync("isWindowVisible","")};i.prototype.resizeContent=function(e,t){window.__adobe_cep__.resizeContent(e,t)};i.prototype.registerInvalidCertificateCallback=function(e){return window.__adobe_cep__.registerInvalidCertificateCallback(e)};i.prototype.registerKeyEventsInterest=function(e){return window.__adobe_cep__.registerKeyEventsInterest(e)};i.prototype.setWindowTitle=function(e){window.__adobe_cep__.invokeSync("setWindowTitle",e)};i.prototype.getWindowTitle=function(){return window.__adobe_cep__.invokeSync("getWindowTitle","")};String.format=function(e){if(arguments.length===0)return null;var t=Array.prototype.slice.call(arguments,1);return e.replace(/\{(\d+)\}/g,function(n,o){return t[o]})};const he="0.0.1",be={version:he,id:"com.dry-bones.cep",displayName:"Dry Bones",symlink:"local",port:3e3,servePort:5e3,startingDebugPort:8860,extensionManifestVersion:6,requiredRuntimeVersion:9,hosts:[{name:"PPRO",version:"[0.0,99.9]"}],type:"Panel",iconDarkNormal:"./src/assets/light-icon.png",iconNormal:"./src/assets/dark-icon.png",iconDarkNormalRollOver:"./src/assets/light-icon.png",iconNormalRollOver:"./src/assets/dark-icon.png",parameters:["--v=0","--enable-nodejs","--mixed-context"],width:500,height:550,panels:[{mainPath:"./main/index.html",name:"main",panelDisplayName:"Dry Bones",autoVisible:!0,width:600,height:650}],build:{jsxBin:"off",sourceMap:!0},zxp:{country:"US",province:"CA",org:"MyCompany",password:"mypassword",tsa:"http://timestamp.digicert.com/",sourceMap:!1,jsxBin:"off"},installModules:[],copyAssets:[],copyZipAssets:[]},G=be.id;typeof window.cep<"u"&&require("crypto");typeof window.cep<"u"&&require("assert");typeof window.cep<"u"&&require("buffer");typeof window.cep<"u"&&require("child_process");typeof window.cep<"u"&&require("cluster");typeof window.cep<"u"&&require("dgram");typeof window.cep<"u"&&require("dns");typeof window.cep<"u"&&require("domain");typeof window.cep<"u"&&require("events");const z=typeof window.cep<"u"?require("fs"):{};typeof window.cep<"u"&&require("http");typeof window.cep<"u"&&require("https");typeof window.cep<"u"&&require("net");typeof window.cep<"u"&&require("os");typeof window.cep<"u"&&require("path");typeof window.cep<"u"&&require("punycode");typeof window.cep<"u"&&require("querystring");typeof window.cep<"u"&&require("readline");typeof window.cep<"u"&&require("stream");typeof window.cep<"u"&&require("string_decoder");typeof window.cep<"u"&&require("timers");typeof window.cep<"u"&&require("tls");typeof window.cep<"u"&&require("tty");typeof window.cep<"u"&&require("url");typeof window.cep<"u"&&require("util");typeof window.cep<"u"&&require("v8");typeof window.cep<"u"&&require("vm");typeof window.cep<"u"&&require("zlib");const W=new i,ve=(e,t=!1)=>new Promise(function(n,o){const r=(t?"":`var host = typeof $ !== 'undefined' ? $ : window; host["${G}"].`)+e;W.evalScript("try{"+r+"}catch(e){alert(e);}",d=>{n(d)})}),N=(e,...t)=>new Promise(function(n,o){const s=t.map(r=>(console.log(JSON.stringify(r)),`${JSON.stringify(r)}`)).join(",");W.evalScript(`try{
          var host = typeof $ !== 'undefined' ? $ : window;
          var res = host["${G}"].${e}(${s});
          JSON.stringify(res);
        }catch(e){
          e.fileName = new File(e.fileName).fsName;
          JSON.stringify(e);
        }`,r=>{try{if(r==="undefined")return n();const d=JSON.parse(r);d.name==="ReferenceError"?(console.error("REFERENCE ERROR"),o(d)):n(d)}catch{o(r)}})}),Y=e=>ve(`typeof $ !== 'undefined' ? $.evalFile("`+e+'") : fl.runScript(FLfile.platformPathToURI("'+e+'"));',!0),Se=(e=!0)=>{if(window.cep){const t=W.getSystemPath("extension"),n=`${t}/jsx/index.js`,o=`${t}/jsx/index.jsxbin`;z.existsSync(n)?(e&&console.log(n),Y(n)):z.existsSync(o)&&(e&&console.log(o),Y(o))}},xe=()=>{const{green:e,blue:t,red:n}=JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo.panelBackgroundColor.color;return{rgb:{r:n,g:e,b:t},hex:`#${n.toString(16)}${e.toString(16)}${t.toString(16)}`}},Oe=e=>{const t=()=>{const n=xe();console.log("BG Color Updated: ",{rgb:n.rgb});const{r:o,g:s,b:r}=n.rgb;return`rgb(${o}, ${s}, ${r})`};e(t()),W.addEventListener("com.adobe.csxs.events.ThemeColorChanged",()=>e(t()),{})};function Ee(e){let t,n,o,s,r,d,l,u,a,m,p,g,v,y,R,c,h,b,O,S;return{c(){t=w("div"),n=w("div"),o=w("div"),o.innerHTML=`<img class="logo svelte-16bz8o9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADE0lEQVR4nO2du2sVQRSHP1ZRb1BMbBRfpY29UUuxCoJaiJ2VIIJ2YqMWSkBBRTHKTSs2IoKVguB/4KMKWNj6AvNQY4zGx8rgDF4ku7m7d7M7mfl9cKp7d2b2Y5jdObucBSGEEEII8Y8twDDwHPgCTAPPgAvA5o7/iZKsAa4Bc0CaEd+Bq8Dqsp3EzjbgZY7g/+MVsL3pQS81hoCPBSS7+AwcaHrwS4VjwK8Skl2YY482fRK+c6RHyS5+S3Y2h4GfFUh2Ydo6lNNflOwCvlUo2cUssLPpk/OFjcCbRZDs4p3utWEV8GIRJbt4CqwkYm7VINnFdSJln707qEu06Ws/kbEBmKhRsosPwHoi4n4Dkl3cJaIlI204DhI4a4HXHoh+CwwQMDc8kOzCjCVYJj0Q7GKcgJnwQHDnHUiwXPFAsAszlmBZYU9wvOEl47Idi5iHLHGiYlKJrodUoiU6KFLNaIn2jj6b7C/zzkZVMQXcBFoEzKgHGxUXZixBkgBfPRDsYsaOKTgSiY5z6WgTMC1gxF6QmhI8aXPRQV8MeyFLnKiYVKLrIZVoiQ6KVDNaor2mr8a8RxT5DZ82L8HmN3zbjs+Emt/IIpHosJeONhHSqjHvofxGAbIkiopJJboeUomW6KBINaMlOrocyFTMOY0mNjLR5TSa2prPxJbTKEoi0Utr6WjXON4ocyCTemejd3QfXROpNiwSHQwDOTO6v+nBhcTuHNGmwpioiJEc0dHWSqqarbbmaJboTyq31jvLgcdd3D8/ApZV0F+02/E7BTYrt5XfKI6p5PWwxM7wCbCpRH/RsQ44u0ABlR82sn43x56xbQn+JvjNhW4QOAk8sPX7F5q1pr708S7+N23bPAHssH2ZPqOgr8c3SM93tDVcso0onsKMlpRjinefmqe90z0U9g72KUxSMqlvatTtyWl3L/C+RLvBPoVJCoqes58G6SaX0W93iHmfEYlGdLdLhymsfdF+5KYo5phLXc7wdixPT2atkDHgnr2tG6xoliW25Pw52/aY7cv0qacwQgghhBBCCEEHfwAEI1+0Z6xilQAAAABJRU5ErkJggg=="/> 
            <h1 class="svelte-16bz8o9">Dry Bones</h1>`,s=x(),r=w("textarea"),d=x(),l=w("div"),u=w("button"),u.textContent="Run",a=x(),m=w("button"),m.textContent="Save",p=x(),g=w("button"),g.textContent="1",v=x(),y=w("button"),y.textContent="2",R=x(),c=w("button"),c.textContent="3",h=x(),b=w("div"),b.innerHTML='<a href="https://icons8.com/icon/DIMe9ZTnqdy3/fish-bone" class="svelte-16bz8o9">Fish Bone</a> icon by <a href="https://icons8.com" class="svelte-16bz8o9">Icons8</a>',_(o,"class","header svelte-16bz8o9"),_(r,"rows","10"),_(r,"class","text-editor svelte-16bz8o9"),_(u,"class","button-solid svelte-16bz8o9"),_(m,"class","button-outline svelte-16bz8o9"),_(g,"class","button-preset-1 svelte-16bz8o9"),_(y,"class","button-preset-2 svelte-16bz8o9"),_(c,"class","button-preset-3 svelte-16bz8o9"),_(l,"class","button-container svelte-16bz8o9"),_(b,"class","credit"),_(n,"class","container svelte-16bz8o9"),_(t,"class","app svelte-16bz8o9"),F(t,"--background-color",e[2])},m(E,B){te(E,t,B),f(t,n),f(n,o),f(n,s),f(n,r),D(r,e[0]),f(n,d),f(n,l),f(l,u),f(l,a),f(l,m),f(l,p),f(l,g),f(l,v),f(l,y),f(l,R),f(l,c),f(n,h),f(n,b),O||(S=[I(r,"input",e[7]),I(u,"click",e[6]),I(g,"click",e[4]),I(y,"click",e[5]),I(c,"click",e[8])],O=!0)},p(E,[B]){B&1&&D(r,E[0]),B&4&&F(t,"--background-color",E[2])},i:q,o:q,d(E){E&&X(t),O=!1,P(S)}}}function Ae(e,t,n){let o=`Test
/01 Cuts
//00 Nests`,s=o.split(`
`),r,d,l="#282c34";const u=(c,h)=>{N("createFolder",c,h)},a=async()=>{const c=await N("getRootItem");console.log(c),n(1,r=c)},m=async()=>{d=await N("getAllItemInfo"),alert(d)},p=(c,h)=>{let b=0;if(c[0]===h)b++;else return b;let O=c[0];for(let S=1;S<c.length&&c[S]===O;S++){b++;O=c[S]}return b},g=c=>{c=c.trim(),c[0]==="#"&&N("alertUser","Comment"),console.log(p(c,"/"))},v=()=>{if(new Array,o.length===0)N("alertUser","Empty text editor");else{s=o.split(`
`);for(let c=0;c<s.length;c++){const h=s[c];h[0]!="/"&&g(h)}}};re(()=>{window.cep&&Oe(c=>n(2,l=c)),a()});function y(){o=this.value,n(0,o)}return[o,r,l,u,a,m,v,y,()=>u(r,"hi")]}class Ce extends ge{constructor(t){super(),we(this,t,Ae,Ee,Z,{})}}Se();new Ce({target:document.getElementById("root")});
//# sourceMappingURL=main-0cca80b7.js.map
