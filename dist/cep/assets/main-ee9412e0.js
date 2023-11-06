"use strict"
          var host = typeof $ !== 'undefined' ? $ : window;
          var res = host["${H}"].${e}(${i});
          JSON.stringify(res);
        }catch(e){
          e.fileName = new File(e.fileName).fsName;
          JSON.stringify(e);
        }`,c=>{try{if(c==="undefined")return n();const a=JSON.parse(c);a.name==="ReferenceError"?(console.error("REFERENCE ERROR"),o(a)):n(a)}catch{o(c)}})}),Q=e=>Me(`typeof $ !== 'undefined' ? $.evalFile("`+e+'") : fl.runScript(FLfile.platformPathToURI("'+e+'"));',!0),qe=(e=!0)=>{if(window.cep){const t=M.getSystemPath("extension"),n=`${t}/jsx/index.js`,o=`${t}/jsx/index.jsxbin`;v.existsSync(n)?(e&&console.log(n),Q(n)):v.existsSync(o)&&(e&&console.log(o),Q(o))}},Te=()=>{const{green:e,blue:t,red:n}=JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo.panelBackgroundColor.color;return{rgb:{r:n,g:e,b:t},hex:`#${n.toString(16)}${e.toString(16)}${t.toString(16)}`}},Re=e=>{const t=()=>{const n=Te();console.log("BG Color Updated: ",{rgb:n.rgb});const{r:o,g:i,b:c}=n.rgb;return`rgb(${o}, ${i}, ${c})`};e(t()),M.addEventListener("com.adobe.csxs.events.ThemeColorChanged",()=>e(t()),{})},O=[];function re(e,t=h){let n;const o=new Set;function i(f){if(te(e,f)&&(e=f,n)){const u=!O.length;for(const s of o)s[1](),O.push(s,e);if(u){for(let s=0;s<O.length;s+=2)O[s][0](O[s+1]);O.length=0}}}function c(f){i(f(e))}function a(f,u=h){const s=[f,u];return o.add(s),o.size===1&&(n=t(i)||h),f(e),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:i,update:c,subscribe:a}}const G=re({name:"After Effects",id:"aeft",version:"23.5"}),se={init:!1,index:0,bones:[`# Sample 1
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
`]},R=re(se),$e=Pe.platform(),ce=$e==="darwin"?`${{}.HOME||window.cep_node.process.env.HOME}/Library/Preferences`:{}.APPDATA||window.cep_node.process.env.APPDATA,I=window.cep?ie.join(ce,H):"",B=window.cep?ie.join(I,"prefs.json"):"",ae=()=>{window.cep&&(console.log("main dir is: ",ce),console.log("prefs is: ",I),v.mkdirSync(I,{recursive:!0}))},z=e=>{window.cep&&(v.existsSync(I)||v.mkdirSync(I,{recursive:!0}),v.writeFileSync(B,JSON.stringify(e),{encoding:"utf-8"}))},Le=()=>{if(window.cep&&v.existsSync(B)){const e=v.readFileSync(B,{encoding:"utf-8"});try{const t=JSON.parse(e);return{...se,...t}}catch{return!1}}return!1};function We(e){let t,n,o,i,c,a,f,u,s,p,d,_,w,b,g,J;return{c(){t=y("div"),n=y("p"),n.textContent="Window too small.",o=C(),i=y("div"),c=y("div"),c.innerHTML=`<img class="logo svelte-1i1es47" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADE0lEQVR4nO2du2sVQRSHP1ZRb1BMbBRfpY29UUuxCoJaiJ2VIIJ2YqMWSkBBRTHKTSs2IoKVguB/4KMKWNj6AvNQY4zGx8rgDF4ku7m7d7M7mfl9cKp7d2b2Y5jdObucBSGEEEII8Y8twDDwHPgCTAPPgAvA5o7/iZKsAa4Bc0CaEd+Bq8Dqsp3EzjbgZY7g/+MVsL3pQS81hoCPBSS7+AwcaHrwS4VjwK8Skl2YY482fRK+c6RHyS5+S3Y2h4GfFUh2Ydo6lNNflOwCvlUo2cUssLPpk/OFjcCbRZDs4p3utWEV8GIRJbt4CqwkYm7VINnFdSJln707qEu06Ws/kbEBmKhRsosPwHoi4n4Dkl3cJaIlI204DhI4a4HXHoh+CwwQMDc8kOzCjCVYJj0Q7GKcgJnwQHDnHUiwXPFAsAszlmBZYU9wvOEl47Idi5iHLHGiYlKJrodUoiU6KFLNaIn2jj6b7C/zzkZVMQXcBFoEzKgHGxUXZixBkgBfPRDsYsaOKTgSiY5z6WgTMC1gxF6QmhI8aXPRQV8MeyFLnKiYVKLrIZVoiQ6KVDNaor2mr8a8RxT5DZ82L8HmN3zbjs+Emt/IIpHosJeONhHSqjHvofxGAbIkiopJJboeUomW6KBINaMlOrocyFTMOY0mNjLR5TSa2prPxJbTKEoi0Utr6WjXON4ocyCTemejd3QfXROpNiwSHQwDOTO6v+nBhcTuHNGmwpioiJEc0dHWSqqarbbmaJboTyq31jvLgcdd3D8/ApZV0F+02/E7BTYrt5XfKI6p5PWwxM7wCbCpRH/RsQ44u0ABlR82sn43x56xbQn+JvjNhW4QOAk8sPX7F5q1pr708S7+N23bPAHssH2ZPqOgr8c3SM93tDVcso0onsKMlpRjinefmqe90z0U9g72KUxSMqlvatTtyWl3L/C+RLvBPoVJCoqes58G6SaX0W93iHmfEYlGdLdLhymsfdF+5KYo5phLXc7wdixPT2atkDHgnr2tG6xoliW25Pw52/aY7cv0qacwQgghhBBCCEEHfwAEI1+0Z6xilQAAAABJRU5ErkJggg=="/> 
            <h1 class="svelte-1i1es47">Dry Bones</h1>`,a=C(),f=y("textarea"),u=C(),s=y("div"),p=y("button"),p.textContent="Load",d=C(),_=y("button"),_.textContent="Run",w=C(),b=y("div"),b.innerHTML='<a href="https://icons8.com/icon/DIMe9ZTnqdy3/fish-bone" class="svelte-1i1es47">Fish Bone</a> icon by <a href="https://icons8.com" class="svelte-1i1es47">Icons8</a>',m(n,"class","alert svelte-1i1es47"),m(c,"class","header svelte-1i1es47"),m(f,"class","text-editor svelte-1i1es47"),m(p,"class","button-outline svelte-1i1es47"),m(_,"class","button-solid svelte-1i1es47"),m(s,"class","button-container svelte-1i1es47"),m(b,"class","credit"),m(i,"class","container svelte-1i1es47"),m(t,"class","app svelte-1i1es47"),Y(t,"--background-color",e[1])},m(S,q){ue(S,t,q),l(t,n),l(t,o),l(t,i),l(i,c),l(i,a),l(i,f),U(f,e[0]),l(i,u),l(i,s),l(s,p),l(s,d),l(s,_),l(i,w),l(i,b),g||(J=[T(f,"input",e[4]),T(f,"change",e[3]),T(p,"click",ae),T(_,"click",e[2])],g=!0)},p(S,[q]){q&1&&U(f,S[0]),q&2&&Y(t,"--background-color",S[1])},i:h,o:h,d(S){S&&ne(t),g=!1,P(J)}}}function Be(e,t,n){let o,i;F(e,R,d=>n(5,o=d)),F(e,G,d=>n(6,i=d));let c="",a="#282c34";const f=()=>{c.length===0?u("Empty Text Editor"):X("parseText",c)},u=d=>{X("alertUser",d)};we(()=>{if(window.cep){Re(g=>n(1,a=g)),ae();const d=Le();let{appVersion:_,appId:w}=M.getHostEnvironment();w=w.toLowerCase(),j(G,i={name:"ppro",id:w,version:_},i),d&&j(R,o=d,o),R.subscribe(g=>{console.log("state changed",g),n(0,c=g.bones[0]),z(g)})}});const s=()=>{R.subscribe(d=>{console.log("state changed",d),z(d)})};function p(){c=this.value,n(0,c)}return[c,a,f,s,p]}class He extends Ae{constructor(t){super(),Ee(this,t,Be,We,te,{})}}qe();new He({target:document.getElementById("root")});
//# sourceMappingURL=main-ee9412e0.js.map