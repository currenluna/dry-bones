"use strict"
          var host = typeof $ !== 'undefined' ? $ : window;
          var res = host["${re}"].${e}(${i});
          JSON.stringify(res);
        }catch(e){
          e.fileName = new File(e.fileName).fsName;
          JSON.stringify(e);
        }`,r=>{try{if(r==="undefined")return n();const c=JSON.parse(r);c.name==="ReferenceError"?(console.error("REFERENCE ERROR"),o(c)):n(c)}catch{o(r)}})}),ye=e=>st(`typeof $ !== 'undefined' ? $.evalFile("`+e+'") : fl.runScript(FLfile.platformPathToURI("'+e+'"));',!0),ct=(e=!0)=>{if(window.cep){const t=Q.getSystemPath("extension"),n=`${t}/jsx/index.js`,o=`${t}/jsx/index.jsxbin`;A.existsSync(n)?(e&&console.log(n),ye(n)):A.existsSync(o)&&(e&&console.log(o),ye(o))}},lt=()=>{const{green:e,blue:t,red:n}=JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo.panelBackgroundColor.color;return{rgb:{r:n,g:e,b:t},hex:`#${n.toString(16)}${e.toString(16)}${t.toString(16)}`}},ut=e=>{const t=()=>{const n=lt();console.log("BG Color Updated: ",{rgb:n.rgb});const{r:o,g:i,b:r}=n.rgb;return`rgb(${o}, ${i}, ${r})`};e(t()),Q.addEventListener("com.adobe.csxs.events.ThemeColorChanged",()=>e(t()),{})},I=[];function ft(e,t=E){let n;const o=new Set;function i(f){if(ie(e,f)&&(e=f,n)){const d=!I.length;for(const s of o)s[1](),I.push(s,e);if(d){for(let s=0;s<I.length;s+=2)I[s][0](I[s+1]);I.length=0}}}function r(f){i(f(e))}function c(f,d=E){const s=[f,d];return o.add(s),o.size===1&&(n=t(i)||E),f(e),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:c}}const Me={init:!1,index:0,bones:[`# Sample 1
# Comments start with "#"
# Subfolders start with "|"

00 Creative
|01 Client
|02 Internal

01 Cuts
|00 Archive

02 Footage
|01 Raw
|02 Proxies
|03 Transcodes
|04 Reference
|05 Exports

03 Audio
|01 Location
|02 VO
||01 Temp
||02 Final
|03 Music
||01 Temp
||02 Final
|04 SFX
|05 Mixes
||01 Temp
||02 Final

04 Graphics
|01 Vector
|02 Raster
|03 Exports

05 2D
|01 Projects
|02 Assets
|03 Exports

05 3D
|01 Projects
|02 Assets
|03 Renders

07 Color
|01 Projects
|02 Looks
|03 Conforms
|04 Exports

08 Output
|01 Rough
|02 Final
`]},K=ft(Me),at=rt.platform(),Pe=at==="darwin"?`${{}.HOME||window.cep_node.process.env.HOME}/Library/Preferences`:{}.APPDATA||window.cep_node.process.env.APPDATA,J=window.cep?Ne.join(Pe,re):"",oe=window.cep?Ne.join(J,"prefs.json"):"",Ie=()=>{window.cep&&(console.log("main dir is: ",Pe),console.log("prefs is: ",J),A.mkdirSync(J,{recursive:!0}))},dt=e=>{window.cep&&(A.existsSync(J)||A.mkdirSync(J,{recursive:!0}),A.writeFileSync(oe,JSON.stringify(e),{encoding:"utf-8"}))},pt=()=>{if(window.cep&&A.existsSync(oe)){const e=A.readFileSync(oe,{encoding:"utf-8"});try{const t=JSON.parse(e);return{...Me,...t}}catch{return!1}}return!1};function he(e){let t,n,o,i,r,c,f;const d=e[4].default,s=Be(d,e,e[3],null);return{c(){t=_("div"),n=_("div"),o=_("span"),o.textContent="X",i=b(),s&&s.c(),w(o,"class","close svelte-ym4xnp"),w(n,"class","modal svelte-ym4xnp"),w(t,"class","modal-wrapper svelte-ym4xnp"),Z(t,"--background-color",wt)},m(l,a){h(l,t,a),p(t,n),p(n,o),p(n,i),s&&s.m(n,null),r=!0,c||(f=T(o,"click",e[5]),c=!0)},p(l,a){s&&s.p&&(!r||a&8)&&je(s,d,l,l[3],r?He(d,l[3],a,null):De(l[3]),null)},i(l){r||(R(s,l),r=!0)},o(l){X(s,l),r=!1},d(l){l&&y(t),s&&s.d(l),c=!1,f()}}}function _t(e){let t,n,o=e[1]&&he(e);return{c(){o&&o.c(),t=Je()},m(i,r){o&&o.m(i,r),h(i,t,r),n=!0},p(i,[r]){i[1]?o?(o.p(i,r),r&2&&R(o,1)):(o=he(i),o.c(),R(o,1),o.m(t.parentNode,t)):o&&(ze(),X(o,1,1,()=>{o=null}),Ge())},i(i){n||(R(o),n=!0)},o(i){X(o),n=!1},d(i){o&&o.d(i),i&&y(t)}}}let wt="#282c34";function gt(e,t,n){let{$$slots:o={},$$scope:i}=t,r=!1;const c=()=>{n(1,r=!0)},f=()=>{n(1,r=!1)},d=()=>f();return e.$$set=s=>{"$$scope"in s&&n(3,i=s.$$scope)},[f,r,c,i,o,d]}class mt extends ke{constructor(t){super(),Ce(this,t,gt,_t,ie,{show:2,hide:0})}get show(){return this.$$.ctx[2]}get hide(){return this.$$.ctx[0]}}function yt(e){let t;return{c(){t=_("div"),t.textContent="Saved",w(t,"class","status-saved")},m(n,o){h(n,t,o)},d(n){n&&y(t)}}}function ht(e){let t;return{c(){t=_("div"),t.textContent="Saving changes",w(t,"class","status-changing")},m(n,o){h(n,t,o)},d(n){n&&y(t)}}}function bt(e){let t,n,o,i,r,c,f,d,s;return{c(){t=_("p"),t.innerHTML="<b>Dry Bones</b> is the fastest way to organize your project.",n=b(),o=_("p"),o.innerHTML="To manage the bones on your system, press <b>Set</b>.",i=b(),r=_("p"),r.textContent="When you edit your bones, they will automatically save.",c=b(),f=_("p"),f.innerHTML="To add the opened bones to your project, press <b>Run</b>.",d=b(),s=_("p"),s.textContent="Curren Taber © 2023"},m(l,a){h(l,t,a),h(l,n,a),h(l,o,a),h(l,i,a),h(l,r,a),h(l,c,a),h(l,f,a),h(l,d,a),h(l,s,a)},p:E,d(l){l&&y(t),l&&y(n),l&&y(o),l&&y(i),l&&y(r),l&&y(c),l&&y(f),l&&y(d),l&&y(s)}}}function vt(e){let t,n,o,i,r,c,f,d,s,l,a,C,v,k,g,S,se,W,ce,F,le,B,ue,x,H,z,fe;function ae(m,N){return m[2]?ht:yt}let U=ae(e),O=U(e),Te={$$slots:{default:[bt]},$$scope:{ctx:e}};return x=new mt({props:Te}),e[8](x),{c(){t=_("div"),n=_("p"),n.textContent="Window too small.",o=b(),i=_("div"),r=_("div"),c=_("img"),d=b(),s=_("h1"),s.textContent="Dry Bones",l=b(),a=_("button"),a.textContent="?",C=b(),v=_("textarea"),k=b(),g=_("div"),S=_("button"),S.textContent="Load",se=b(),W=_("button"),W.textContent="Run",ce=b(),F=_("div"),F.innerHTML='<a href="https://icons8.com/icon/DIMe9ZTnqdy3/fish-bone" class="svelte-1i1es47">Fish Bone</a> icon by <a href="https://icons8.com" class="svelte-1i1es47">Icons8</a>',le=b(),B=_("div"),O.c(),ue=b(),Ze(x.$$.fragment),w(n,"class","alert svelte-1i1es47"),w(c,"class","logo svelte-1i1es47"),$e(c.src,f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADE0lEQVR4nO2du2sVQRSHP1ZRb1BMbBRfpY29UUuxCoJaiJ2VIIJ2YqMWSkBBRTHKTSs2IoKVguB/4KMKWNj6AvNQY4zGx8rgDF4ku7m7d7M7mfl9cKp7d2b2Y5jdObucBSGEEEII8Y8twDDwHPgCTAPPgAvA5o7/iZKsAa4Bc0CaEd+Bq8Dqsp3EzjbgZY7g/+MVsL3pQS81hoCPBSS7+AwcaHrwS4VjwK8Skl2YY482fRK+c6RHyS5+S3Y2h4GfFUh2Ydo6lNNflOwCvlUo2cUssLPpk/OFjcCbRZDs4p3utWEV8GIRJbt4CqwkYm7VINnFdSJln707qEu06Ws/kbEBmKhRsosPwHoi4n4Dkl3cJaIlI204DhI4a4HXHoh+CwwQMDc8kOzCjCVYJj0Q7GKcgJnwQHDnHUiwXPFAsAszlmBZYU9wvOEl47Idi5iHLHGiYlKJrodUoiU6KFLNaIn2jj6b7C/zzkZVMQXcBFoEzKgHGxUXZixBkgBfPRDsYsaOKTgSiY5z6WgTMC1gxF6QmhI8aXPRQV8MeyFLnKiYVKLrIZVoiQ6KVDNaor2mr8a8RxT5DZ82L8HmN3zbjs+Emt/IIpHosJeONhHSqjHvofxGAbIkiopJJboeUomW6KBINaMlOrocyFTMOY0mNjLR5TSa2prPxJbTKEoi0Utr6WjXON4ocyCTemejd3QfXROpNiwSHQwDOTO6v+nBhcTuHNGmwpioiJEc0dHWSqqarbbmaJboTyq31jvLgcdd3D8/ApZV0F+02/E7BTYrt5XfKI6p5PWwxM7wCbCpRH/RsQ44u0ABlR82sn43x56xbQn+JvjNhW4QOAk8sPX7F5q1pr708S7+N23bPAHssH2ZPqOgr8c3SM93tDVcso0onsKMlpRjinefmqe90z0U9g72KUxSMqlvatTtyWl3L/C+RLvBPoVJCoqes58G6SaX0W93iHmfEYlGdLdLhymsfdF+5KYo5phLXc7wdixPT2atkDHgnr2tG6xoliW25Pw52/aY7cv0qacwQgghhBBCCEEHfwAEI1+0Z6xilQAAAABJRU5ErkJggg==")||w(c,"src",f),w(s,"class","svelte-1i1es47"),w(a,"class","svelte-1i1es47"),w(r,"class","header svelte-1i1es47"),w(v,"class","text-editor svelte-1i1es47"),w(S,"class","button-outline svelte-1i1es47"),w(W,"class","button-solid svelte-1i1es47"),w(g,"class","button-container svelte-1i1es47"),w(F,"class","credit"),w(B,"class","save-status"),w(i,"class","container svelte-1i1es47"),w(t,"class","app svelte-1i1es47"),Z(t,"--background-color",e[3])},m(m,N){h(m,t,N),p(t,n),p(t,o),p(t,i),p(i,r),p(r,c),p(r,d),p(r,s),p(r,l),p(r,a),p(i,C),p(i,v),we(v,e[0]),p(i,k),p(i,g),p(g,S),p(g,se),p(g,W),p(i,ce),p(i,F),p(i,le),p(i,B),O.m(B,null),p(t,ue),Ee(x,t,null),H=!0,z||(fe=[T(a,"click",e[6]),T(v,"input",e[7]),T(v,"keydown",e[5]),T(S,"click",Ie),T(W,"click",e[4])],z=!0)},p(m,[N]){N&1&&we(v,m[0]),U!==(U=ae(m))&&(O.d(1),O=U(m),O&&(O.c(),O.m(B,null)));const de={};N&8192&&(de.$$scope={dirty:N,ctx:m}),x.$set(de),(!H||N&8)&&Z(t,"--background-color",m[3])},i(m){H||(R(x.$$.fragment,m),H=!0)},o(m){X(x.$$.fragment,m),H=!1},d(m){m&&y(t),O.d(),e[8](null),Ae(x),z=!1,L(fe)}}}function St(e,t,n){let o;We(e,K,g=>n(10,o=g));let i="",r,c=!1,f,d="#282c34";const s=()=>{i.length===0?l("Empty Text Editor"):me("parseText",i)},l=g=>{me("alertUser",g)};Ye(()=>{if(window.cep){ut(S=>n(3,d=S)),Ie();const g=pt();g&&_e(K,o=g,o),K.subscribe(S=>{console.log("state changed",S),n(0,i=S.bones[0])})}});const a=()=>{n(2,c=!0),_e(K,o.bones[0]=i,o),dt(o),f&&(clearTimeout(f),f=null),f=window.setTimeout(()=>{console.log("here"),n(2,c=!1)},2e3)},C=()=>{r.show()};function v(){i=this.value,n(0,i)}function k(g){ee[g?"unshift":"push"](()=>{r=g,n(1,r)})}return[i,r,c,d,s,a,C,v,k]}class xt extends ke{constructor(t){super(),Ce(this,t,St,vt,ie,{})}}ct();new xt({target:document.getElementById("root")});
//# sourceMappingURL=main-f08d5218.js.map