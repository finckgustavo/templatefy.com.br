import{r as V,a as Da,c as Qe,b as Jt,R as Ne}from"./vendor-CyBwq7db.js";import{c as za}from"./supabase-P-1aBBDI.js";import{U as rt,S as dt,L as Pa,t as Aa,c as Fa,D as Ae,B as Ct,a as Ia,X as Be,A as Ye,b as ea,F as Ta,d as Oa,I as St,P as ta,T as aa,C as pt,e as ut,f as mt,g as Ra,G as La,h as Ba,i as ia,j as Ma,k as Ua,l as na,m as ot,n as $a,M as qa,o as Wa,p as Ha,q as ra,r as Va,s as Za,u as Xa,v as Ya,w as Ga,x as Ka}from"./ui-BSx9-m9h.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();var oa={exports:{}},ht={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=V,Ja=Symbol.for("react.element"),ei=Symbol.for("react.fragment"),ti=Object.prototype.hasOwnProperty,ai=Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ii={key:!0,ref:!0,__self:!0,__source:!0};function sa(e,i,a){var r,n={},s=null,c=null;a!==void 0&&(s=""+a),i.key!==void 0&&(s=""+i.key),i.ref!==void 0&&(c=i.ref);for(r in i)ti.call(i,r)&&!ii.hasOwnProperty(r)&&(n[r]=i[r]);if(e&&e.defaultProps)for(r in i=e.defaultProps,i)n[r]===void 0&&(n[r]=i[r]);return{$$typeof:Ja,type:e,key:s,ref:c,props:n,_owner:ai.current}}ht.Fragment=ei;ht.jsx=sa;ht.jsxs=sa;oa.exports=ht;var t=oa.exports,la,Ft=Da;la=Ft.createRoot,Ft.hydrateRoot;const ni="https://dtxzrumwfzycrttituqd.supabase.co",ri="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0eHpydW13Znp5Y3J0dGl0dXFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MDIzNTQsImV4cCI6MjA1MDk3ODM1NH0.bzch5xQJNatX3dxt34dpynzEjytX6gLUVX-LP66iJ1k",ie=za(ni,ri,{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}});async function oi({email:e,password:i,fullName:a}){const{data:r,error:n}=await ie.auth.signUp({email:e,password:i,options:{data:{full_name:a}}});if(n)throw n;return r.user&&await ca(r.user.id),r}async function ca(e,i=5){if(i<=0)throw new Error("Profile creation timeout");const{data:a}=await ie.from("profiles").select("*").eq("id",e).single();if(!a)return await new Promise(r=>setTimeout(r,1e3)),ca(e,i-1)}async function si({email:e,password:i}){const{data:a,error:r}=await ie.auth.signInWithPassword({email:e,password:i});if(r)throw r;return a}async function li(){const{error:e}=await ie.auth.signOut();if(e)throw e}async function ci(e,i){const{error:a}=await ie.from("profiles").update({full_name:i.fullName,avatar_url:i.avatarUrl,updated_at:new Date().toISOString()}).eq("id",e);if(a)throw a}async function It(e){const{data:i,error:a}=await ie.from("profiles").select("*").eq("id",e).single();if(a)throw a;return i}function da(){const[e,i]=V.useState(null),[a,r]=V.useState(null),[n,s]=V.useState(!0),[c,o]=V.useState(null),u=async y=>{if(!(y!=null&&y.user)){r(null);return}try{const{data:m}=await ie.from("profiles").select("*").eq("id",y.user.id).single();r(m)}catch(m){console.error("Error loading profile:",m)}};return V.useEffect(()=>{ie.auth.getSession().then(({data:{session:m}})=>{i((m==null?void 0:m.user)??null),u(m),s(!1)});const{data:{subscription:y}}=ie.auth.onAuthStateChange((m,x)=>{i((x==null?void 0:x.user)??null),u(x),s(!1)});return()=>{y.unsubscribe()}},[]),{user:e,profile:a,loading:n,error:c,signUp:async y=>{try{s(!0),o(null),await oi(y)}catch(m){throw o(m instanceof Error?m:new Error("Erro ao criar conta")),m}finally{s(!1)}},signIn:async y=>{try{s(!0),o(null),await si(y)}catch(m){throw o(m instanceof Error?m:new Error("Erro ao fazer login")),m}finally{s(!1)}},signOut:async()=>{try{s(!0),o(null),await li()}catch(y){throw o(y instanceof Error?y:new Error("Erro ao fazer logout")),y}finally{s(!1)}}}}function Et(){const{user:e}=da(),[i,a]=V.useState(null),[r,n]=V.useState(!0),[s,c]=V.useState(null);return V.useEffect(()=>{if(!e){a(null),n(!1);return}(async()=>{try{const h=await It(e.id);a(h)}catch(h){c(h instanceof Error?h:new Error("Erro ao carregar perfil"))}finally{n(!1)}})()},[e]),{profile:i,loading:r,error:s,updateProfile:async u=>{if(e)try{n(!0),c(null),await ci(e.id,u);const h=await It(e.id);a(h)}catch(h){throw c(h instanceof Error?h:new Error("Erro ao atualizar perfil")),h}finally{n(!1)}}}}function di({onLogout:e,onOpenSettings:i}){const{profile:a}=Et(),[r,n]=V.useState(!1),s=()=>{n(!1),i()};return t.jsxs("div",{className:"relative",children:[t.jsx("button",{onClick:()=>n(!r),className:"p-2 rounded-lg bg-gray-100 transition-colors relative z-10",children:t.jsx(rt,{className:"w-5 h-5 text-gray-600"})}),r&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)}),t.jsx("div",{className:"absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50",children:t.jsxs("div",{className:"p-4",children:[t.jsxs("div",{className:"flex items-center gap-3 pb-4 border-b",children:[t.jsx("div",{className:"p-3 bg-indigo-100 rounded-full",children:t.jsx(rt,{className:"w-6 h-6 text-indigo-600"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-medium text-gray-900",children:(a==null?void 0:a.full_name)||"Usuário"}),t.jsx("p",{className:"text-sm text-gray-500",children:a==null?void 0:a.email})]})]}),t.jsxs("div",{className:"py-2",children:[t.jsxs("button",{onClick:s,className:"w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",children:[t.jsx(dt,{className:"w-4 h-4"}),"Configurações da Conta"]}),t.jsxs("button",{onClick:e,className:"w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:[t.jsx(Pa,{className:"w-4 h-4"}),"Sair"]})]})]})})]})]})}function ge(...e){return Aa(Fa(e))}function pi({downloads:e,maxDownloads:i,className:a}){const r=Math.min(e/i*100,100),n=e.toLocaleString(),s=i.toLocaleString();return t.jsx("div",{className:ge("flex items-center gap-3",a),children:t.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg",children:[t.jsx(Ae,{className:"w-4 h-4 text-gray-600"}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-32 h-2 bg-gray-200 rounded-full overflow-hidden",children:t.jsx("div",{className:"h-full bg-indigo-600 transition-all duration-300",style:{width:`${r}%`}})}),t.jsxs("span",{className:"text-sm text-gray-600 font-medium",children:[n,"/",s]})]})]})})}function ui({templateName:e,onLogoClick:i,isAuthenticated:a,onLogout:r,onOpenSettings:n,onOpenAdmin:s}){const{profile:c,loading:o}=Et(),[u,h]=V.useState(0);return V.useEffect(()=>{if(!c)return;(async()=>{const{count:f}=await ie.from("downloads").select("*",{count:"exact",head:!0}).eq("user_id",c.id);h(f||0)})()},[c]),t.jsx("header",{className:"bg-white border-b border-gray-200",children:t.jsx("div",{className:"w-full px-6",children:t.jsxs("div",{className:"flex items-center h-16",children:[t.jsxs("button",{onClick:i,className:"flex items-center space-x-2.5 hover:opacity-80 transition-opacity",children:[t.jsx(Ct,{className:"h-6 w-6 text-indigo-600"}),t.jsx("span",{className:"font-sora font-bold text-lg text-gray-900",children:"Templatefy"}),e&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mx-4 text-gray-300",children:"/"}),t.jsx("h1",{className:"text-gray-900",children:e})]})]}),t.jsx("div",{className:"flex-1"}),t.jsxs("div",{className:"flex items-center gap-4",children:[a&&(c==null?void 0:c.is_admin)&&t.jsx("button",{onClick:s,className:"p-2 rounded-lg bg-gray-100 transition-colors",title:"Admin Panel",children:t.jsx(Ia,{className:"w-5 h-5 text-gray-600"})}),a&&t.jsx(pi,{downloads:u,maxDownloads:(c==null?void 0:c.download_limit)||10}),a&&r&&t.jsx(di,{onLogout:r,onOpenSettings:n})]})]})})})}function Je(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var pa={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(e,i){(function(a){e.exports=a()})(function(){return function a(r,n,s){function c(h,g){if(!n[h]){if(!r[h]){var f=typeof Je=="function"&&Je;if(!g&&f)return f(h,!0);if(o)return o(h,!0);var y=new Error("Cannot find module '"+h+"'");throw y.code="MODULE_NOT_FOUND",y}var m=n[h]={exports:{}};r[h][0].call(m.exports,function(x){var p=r[h][1][x];return c(p||x)},m,m.exports,a,r,n,s)}return n[h].exports}for(var o=typeof Je=="function"&&Je,u=0;u<s.length;u++)c(s[u]);return c}({1:[function(a,r,n){var s=a("./utils"),c=a("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(u){for(var h,g,f,y,m,x,p,b=[],v=0,j=u.length,N=j,E=s.getTypeOf(u)!=="string";v<u.length;)N=j-v,f=E?(h=u[v++],g=v<j?u[v++]:0,v<j?u[v++]:0):(h=u.charCodeAt(v++),g=v<j?u.charCodeAt(v++):0,v<j?u.charCodeAt(v++):0),y=h>>2,m=(3&h)<<4|g>>4,x=1<N?(15&g)<<2|f>>6:64,p=2<N?63&f:64,b.push(o.charAt(y)+o.charAt(m)+o.charAt(x)+o.charAt(p));return b.join("")},n.decode=function(u){var h,g,f,y,m,x,p=0,b=0,v="data:";if(u.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var j,N=3*(u=u.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(u.charAt(u.length-1)===o.charAt(64)&&N--,u.charAt(u.length-2)===o.charAt(64)&&N--,N%1!=0)throw new Error("Invalid base64 input, bad content length.");for(j=c.uint8array?new Uint8Array(0|N):new Array(0|N);p<u.length;)h=o.indexOf(u.charAt(p++))<<2|(y=o.indexOf(u.charAt(p++)))>>4,g=(15&y)<<4|(m=o.indexOf(u.charAt(p++)))>>2,f=(3&m)<<6|(x=o.indexOf(u.charAt(p++))),j[b++]=h,m!==64&&(j[b++]=g),x!==64&&(j[b++]=f);return j}},{"./support":30,"./utils":32}],2:[function(a,r,n){var s=a("./external"),c=a("./stream/DataWorker"),o=a("./stream/Crc32Probe"),u=a("./stream/DataLengthProbe");function h(g,f,y,m,x){this.compressedSize=g,this.uncompressedSize=f,this.crc32=y,this.compression=m,this.compressedContent=x}h.prototype={getContentWorker:function(){var g=new c(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),f=this;return g.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),g},getCompressedWorker:function(){return new c(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(g,f,y){return g.pipe(new o).pipe(new u("uncompressedSize")).pipe(f.compressWorker(y)).pipe(new u("compressedSize")).withStreamInfo("compression",f)},r.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(a,r,n){var s=a("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},n.DEFLATE=a("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(a,r,n){var s=a("./utils"),c=function(){for(var o,u=[],h=0;h<256;h++){o=h;for(var g=0;g<8;g++)o=1&o?3988292384^o>>>1:o>>>1;u[h]=o}return u}();r.exports=function(o,u){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?function(h,g,f,y){var m=c,x=y+f;h^=-1;for(var p=y;p<x;p++)h=h>>>8^m[255&(h^g[p])];return-1^h}(0|u,o,o.length,0):function(h,g,f,y){var m=c,x=y+f;h^=-1;for(var p=y;p<x;p++)h=h>>>8^m[255&(h^g.charCodeAt(p))];return-1^h}(0|u,o,o.length,0):0}},{"./utils":32}],5:[function(a,r,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(a,r,n){var s=null;s=typeof Promise<"u"?Promise:a("lie"),r.exports={Promise:s}},{lie:37}],7:[function(a,r,n){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",c=a("pako"),o=a("./utils"),u=a("./stream/GenericWorker"),h=s?"uint8array":"array";function g(f,y){u.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=y,this.meta={}}n.magic="\b\0",o.inherits(g,u),g.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(h,f.data),!1)},g.prototype.flush=function(){u.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},g.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this._pako=null},g.prototype._createPako=function(){this._pako=new c[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(y){f.push({data:y,meta:f.meta})}},n.compressWorker=function(f){return new g("Deflate",f)},n.uncompressWorker=function(){return new g("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(a,r,n){function s(m,x){var p,b="";for(p=0;p<x;p++)b+=String.fromCharCode(255&m),m>>>=8;return b}function c(m,x,p,b,v,j){var N,E,S=m.file,B=m.compression,F=j!==h.utf8encode,q=o.transformTo("string",j(S.name)),R=o.transformTo("string",h.utf8encode(S.name)),O=S.comment,Q=o.transformTo("string",j(O)),_=o.transformTo("string",h.utf8encode(O)),P=R.length!==S.name.length,d=_.length!==O.length,M="",ne="",Z="",oe=S.dir,W=S.date,te={crc32:0,compressedSize:0,uncompressedSize:0};x&&!p||(te.crc32=m.crc32,te.compressedSize=m.compressedSize,te.uncompressedSize=m.uncompressedSize);var A=0;x&&(A|=8),F||!P&&!d||(A|=2048);var z=0,J=0;oe&&(z|=16),v==="UNIX"?(J=798,z|=function(Y,de){var ve=Y;return Y||(ve=de?16893:33204),(65535&ve)<<16}(S.unixPermissions,oe)):(J=20,z|=function(Y){return 63&(Y||0)}(S.dosPermissions)),N=W.getUTCHours(),N<<=6,N|=W.getUTCMinutes(),N<<=5,N|=W.getUTCSeconds()/2,E=W.getUTCFullYear()-1980,E<<=4,E|=W.getUTCMonth()+1,E<<=5,E|=W.getUTCDate(),P&&(ne=s(1,1)+s(g(q),4)+R,M+="up"+s(ne.length,2)+ne),d&&(Z=s(1,1)+s(g(Q),4)+_,M+="uc"+s(Z.length,2)+Z);var G="";return G+=`
\0`,G+=s(A,2),G+=B.magic,G+=s(N,2),G+=s(E,2),G+=s(te.crc32,4),G+=s(te.compressedSize,4),G+=s(te.uncompressedSize,4),G+=s(q.length,2),G+=s(M.length,2),{fileRecord:f.LOCAL_FILE_HEADER+G+q+M,dirRecord:f.CENTRAL_FILE_HEADER+s(J,2)+G+s(Q.length,2)+"\0\0\0\0"+s(z,4)+s(b,4)+q+M+Q}}var o=a("../utils"),u=a("../stream/GenericWorker"),h=a("../utf8"),g=a("../crc32"),f=a("../signature");function y(m,x,p,b){u.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=x,this.zipPlatform=p,this.encodeFileName=b,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(y,u),y.prototype.push=function(m){var x=m.meta.percent||0,p=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,u.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:p?(x+100*(p-b-1))/p:100}}))},y.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var x=this.streamFiles&&!m.file.dir;if(x){var p=c(m,x,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},y.prototype.closedSource=function(m){this.accumulate=!1;var x=this.streamFiles&&!m.file.dir,p=c(m,x,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),x)this.push({data:function(b){return f.DATA_DESCRIPTOR+s(b.crc32,4)+s(b.compressedSize,4)+s(b.uncompressedSize,4)}(m),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},y.prototype.flush=function(){for(var m=this.bytesWritten,x=0;x<this.dirRecords.length;x++)this.push({data:this.dirRecords[x],meta:{percent:100}});var p=this.bytesWritten-m,b=function(v,j,N,E,S){var B=o.transformTo("string",S(E));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(v,2)+s(v,2)+s(j,4)+s(N,4)+s(B.length,2)+B}(this.dirRecords.length,p,m,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},y.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},y.prototype.registerPrevious=function(m){this._sources.push(m);var x=this;return m.on("data",function(p){x.processChunk(p)}),m.on("end",function(){x.closedSource(x.previous.streamInfo),x._sources.length?x.prepareNextSource():x.end()}),m.on("error",function(p){x.error(p)}),this},y.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},y.prototype.error=function(m){var x=this._sources;if(!u.prototype.error.call(this,m))return!1;for(var p=0;p<x.length;p++)try{x[p].error(m)}catch{}return!0},y.prototype.lock=function(){u.prototype.lock.call(this);for(var m=this._sources,x=0;x<m.length;x++)m[x].lock()},r.exports=y},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(a,r,n){var s=a("../compressions"),c=a("./ZipFileWorker");n.generateWorker=function(o,u,h){var g=new c(u.streamFiles,h,u.platform,u.encodeFileName),f=0;try{o.forEach(function(y,m){f++;var x=function(j,N){var E=j||N,S=s[E];if(!S)throw new Error(E+" is not a valid compression method !");return S}(m.options.compression,u.compression),p=m.options.compressionOptions||u.compressionOptions||{},b=m.dir,v=m.date;m._compressWorker(x,p).withStreamInfo("file",{name:y,dir:b,date:v,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(g)}),g.entriesCount=f}catch(y){g.error(y)}return g}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(a,r,n){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var c=new s;for(var o in this)typeof this[o]!="function"&&(c[o]=this[o]);return c}}(s.prototype=a("./object")).loadAsync=a("./load"),s.support=a("./support"),s.defaults=a("./defaults"),s.version="3.10.1",s.loadAsync=function(c,o){return new s().loadAsync(c,o)},s.external=a("./external"),r.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(a,r,n){var s=a("./utils"),c=a("./external"),o=a("./utf8"),u=a("./zipEntries"),h=a("./stream/Crc32Probe"),g=a("./nodejsUtils");function f(y){return new c.Promise(function(m,x){var p=y.decompressed.getContentWorker().pipe(new h);p.on("error",function(b){x(b)}).on("end",function(){p.streamInfo.crc32!==y.decompressed.crc32?x(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}r.exports=function(y,m){var x=this;return m=s.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),g.isNode&&g.isStream(y)?c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",y,!0,m.optimizedBinaryString,m.base64).then(function(p){var b=new u(m);return b.load(p),b}).then(function(p){var b=[c.Promise.resolve(p)],v=p.files;if(m.checkCRC32)for(var j=0;j<v.length;j++)b.push(f(v[j]));return c.Promise.all(b)}).then(function(p){for(var b=p.shift(),v=b.files,j=0;j<v.length;j++){var N=v[j],E=N.fileNameStr,S=s.resolve(N.fileNameStr);x.file(S,N.decompressed,{binary:!0,optimizedBinaryString:!0,date:N.date,dir:N.dir,comment:N.fileCommentStr.length?N.fileCommentStr:null,unixPermissions:N.unixPermissions,dosPermissions:N.dosPermissions,createFolders:m.createFolders}),N.dir||(x.file(S).unsafeOriginalName=E)}return b.zipComment.length&&(x.comment=b.zipComment),x})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(a,r,n){var s=a("../utils"),c=a("../stream/GenericWorker");function o(u,h){c.call(this,"Nodejs stream input adapter for "+u),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(o,c),o.prototype._bindStream=function(u){var h=this;(this._stream=u).pause(),u.on("data",function(g){h.push({data:g,meta:{percent:0}})}).on("error",function(g){h.isPaused?this.generatedError=g:h.error(g)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},o.prototype.pause=function(){return!!c.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(a,r,n){var s=a("readable-stream").Readable;function c(o,u,h){s.call(this,u),this._helper=o;var g=this;o.on("data",function(f,y){g.push(f)||g._helper.pause(),h&&h(y)}).on("error",function(f){g.emit("error",f)}).on("end",function(){g.push(null)})}a("../utils").inherits(c,s),c.prototype._read=function(){this._helper.resume()},r.exports=c},{"../utils":32,"readable-stream":16}],14:[function(a,r,n){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,c){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,c);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,c)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var c=new Buffer(s);return c.fill(0),c},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(a,r,n){function s(S,B,F){var q,R=o.getTypeOf(B),O=o.extend(F||{},g);O.date=O.date||new Date,O.compression!==null&&(O.compression=O.compression.toUpperCase()),typeof O.unixPermissions=="string"&&(O.unixPermissions=parseInt(O.unixPermissions,8)),O.unixPermissions&&16384&O.unixPermissions&&(O.dir=!0),O.dosPermissions&&16&O.dosPermissions&&(O.dir=!0),O.dir&&(S=v(S)),O.createFolders&&(q=b(S))&&j.call(this,q,!0);var Q=R==="string"&&O.binary===!1&&O.base64===!1;F&&F.binary!==void 0||(O.binary=!Q),(B instanceof f&&B.uncompressedSize===0||O.dir||!B||B.length===0)&&(O.base64=!1,O.binary=!0,B="",O.compression="STORE",R="string");var _=null;_=B instanceof f||B instanceof u?B:x.isNode&&x.isStream(B)?new p(S,B):o.prepareContent(S,B,O.binary,O.optimizedBinaryString,O.base64);var P=new y(S,_,O);this.files[S]=P}var c=a("./utf8"),o=a("./utils"),u=a("./stream/GenericWorker"),h=a("./stream/StreamHelper"),g=a("./defaults"),f=a("./compressedObject"),y=a("./zipObject"),m=a("./generate"),x=a("./nodejsUtils"),p=a("./nodejs/NodejsStreamInputAdapter"),b=function(S){S.slice(-1)==="/"&&(S=S.substring(0,S.length-1));var B=S.lastIndexOf("/");return 0<B?S.substring(0,B):""},v=function(S){return S.slice(-1)!=="/"&&(S+="/"),S},j=function(S,B){return B=B!==void 0?B:g.createFolders,S=v(S),this.files[S]||s.call(this,S,null,{dir:!0,createFolders:B}),this.files[S]};function N(S){return Object.prototype.toString.call(S)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(S){var B,F,q;for(B in this.files)q=this.files[B],(F=B.slice(this.root.length,B.length))&&B.slice(0,this.root.length)===this.root&&S(F,q)},filter:function(S){var B=[];return this.forEach(function(F,q){S(F,q)&&B.push(q)}),B},file:function(S,B,F){if(arguments.length!==1)return S=this.root+S,s.call(this,S,B,F),this;if(N(S)){var q=S;return this.filter(function(O,Q){return!Q.dir&&q.test(O)})}var R=this.files[this.root+S];return R&&!R.dir?R:null},folder:function(S){if(!S)return this;if(N(S))return this.filter(function(R,O){return O.dir&&S.test(R)});var B=this.root+S,F=j.call(this,B),q=this.clone();return q.root=F.name,q},remove:function(S){S=this.root+S;var B=this.files[S];if(B||(S.slice(-1)!=="/"&&(S+="/"),B=this.files[S]),B&&!B.dir)delete this.files[S];else for(var F=this.filter(function(R,O){return O.name.slice(0,S.length)===S}),q=0;q<F.length;q++)delete this.files[F[q].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(S){var B,F={};try{if((F=o.extend(S||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:c.utf8encode})).type=F.type.toLowerCase(),F.compression=F.compression.toUpperCase(),F.type==="binarystring"&&(F.type="string"),!F.type)throw new Error("No output type specified.");o.checkSupport(F.type),F.platform!=="darwin"&&F.platform!=="freebsd"&&F.platform!=="linux"&&F.platform!=="sunos"||(F.platform="UNIX"),F.platform==="win32"&&(F.platform="DOS");var q=F.comment||this.comment||"";B=m.generateWorker(this,F,q)}catch(R){(B=new u("error")).error(R)}return new h(B,F.type||"string",F.mimeType)},generateAsync:function(S,B){return this.generateInternalStream(S).accumulate(B)},generateNodeStream:function(S,B){return(S=S||{}).type||(S.type="nodebuffer"),this.generateInternalStream(S).toNodejsStream(B)}};r.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(a,r,n){r.exports=a("stream")},{stream:void 0}],17:[function(a,r,n){var s=a("./DataReader");function c(o){s.call(this,o);for(var u=0;u<this.data.length;u++)o[u]=255&o[u]}a("../utils").inherits(c,s),c.prototype.byteAt=function(o){return this.data[this.zero+o]},c.prototype.lastIndexOfSignature=function(o){for(var u=o.charCodeAt(0),h=o.charCodeAt(1),g=o.charCodeAt(2),f=o.charCodeAt(3),y=this.length-4;0<=y;--y)if(this.data[y]===u&&this.data[y+1]===h&&this.data[y+2]===g&&this.data[y+3]===f)return y-this.zero;return-1},c.prototype.readAndCheckSignature=function(o){var u=o.charCodeAt(0),h=o.charCodeAt(1),g=o.charCodeAt(2),f=o.charCodeAt(3),y=this.readData(4);return u===y[0]&&h===y[1]&&g===y[2]&&f===y[3]},c.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var u=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,u},r.exports=c},{"../utils":32,"./DataReader":18}],18:[function(a,r,n){var s=a("../utils");function c(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}c.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var u,h=0;for(this.checkOffset(o),u=this.index+o-1;u>=this.index;u--)h=(h<<8)+this.byteAt(u);return this.index+=o,h},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},r.exports=c},{"../utils":32}],19:[function(a,r,n){var s=a("./Uint8ArrayReader");function c(o){s.call(this,o)}a("../utils").inherits(c,s),c.prototype.readData=function(o){this.checkOffset(o);var u=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,u},r.exports=c},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(a,r,n){var s=a("./DataReader");function c(o){s.call(this,o)}a("../utils").inherits(c,s),c.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},c.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},c.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},c.prototype.readData=function(o){this.checkOffset(o);var u=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,u},r.exports=c},{"../utils":32,"./DataReader":18}],21:[function(a,r,n){var s=a("./ArrayReader");function c(o){s.call(this,o)}a("../utils").inherits(c,s),c.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var u=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,u},r.exports=c},{"../utils":32,"./ArrayReader":17}],22:[function(a,r,n){var s=a("../utils"),c=a("../support"),o=a("./ArrayReader"),u=a("./StringReader"),h=a("./NodeBufferReader"),g=a("./Uint8ArrayReader");r.exports=function(f){var y=s.getTypeOf(f);return s.checkSupport(y),y!=="string"||c.uint8array?y==="nodebuffer"?new h(f):c.uint8array?new g(s.transformTo("uint8array",f)):new o(s.transformTo("array",f)):new u(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(a,r,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(a,r,n){var s=a("./GenericWorker"),c=a("../utils");function o(u){s.call(this,"ConvertWorker to "+u),this.destType=u}c.inherits(o,s),o.prototype.processChunk=function(u){this.push({data:c.transformTo(this.destType,u.data),meta:u.meta})},r.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(a,r,n){var s=a("./GenericWorker"),c=a("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}a("../utils").inherits(o,s),o.prototype.processChunk=function(u){this.streamInfo.crc32=c(u.data,this.streamInfo.crc32||0),this.push(u)},r.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(a,r,n){var s=a("../utils"),c=a("./GenericWorker");function o(u){c.call(this,"DataLengthProbe for "+u),this.propName=u,this.withStreamInfo(u,0)}s.inherits(o,c),o.prototype.processChunk=function(u){if(u){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+u.data.length}c.prototype.processChunk.call(this,u)},r.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(a,r,n){var s=a("../utils"),c=a("./GenericWorker");function o(u){c.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,u.then(function(g){h.dataIsReady=!0,h.data=g,h.max=g&&g.length||0,h.type=s.getTypeOf(g),h.isPaused||h._tickAndRepeat()},function(g){h.error(g)})}s.inherits(o,c),o.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var u=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,h);break;case"uint8array":u=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":u=this.data.slice(this.index,h)}return this.index=h,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(a,r,n){function s(c){this.name=c||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(c){this.emit("data",c)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(c){this.emit("error",c)}return!0},error:function(c){return!this.isFinished&&(this.isPaused?this.generatedError=c:(this.isFinished=!0,this.emit("error",c),this.previous&&this.previous.error(c),this.cleanUp()),!0)},on:function(c,o){return this._listeners[c].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(c,o){if(this._listeners[c])for(var u=0;u<this._listeners[c].length;u++)this._listeners[c][u].call(this,o)},pipe:function(c){return c.registerPrevious(this)},registerPrevious:function(c){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=c.streamInfo,this.mergeStreamInfo(),this.previous=c;var o=this;return c.on("data",function(u){o.processChunk(u)}),c.on("end",function(){o.end()}),c.on("error",function(u){o.error(u)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var c=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),c=!0),this.previous&&this.previous.resume(),!c},flush:function(){},processChunk:function(c){this.push(c)},withStreamInfo:function(c,o){return this.extraStreamInfo[c]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var c in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,c)&&(this.streamInfo[c]=this.extraStreamInfo[c])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var c="Worker "+this.name;return this.previous?this.previous+" -> "+c:c}},r.exports=s},{}],29:[function(a,r,n){var s=a("../utils"),c=a("./ConvertWorker"),o=a("./GenericWorker"),u=a("../base64"),h=a("../support"),g=a("../external"),f=null;if(h.nodestream)try{f=a("../nodejs/NodejsStreamOutputAdapter")}catch{}function y(x,p){return new g.Promise(function(b,v){var j=[],N=x._internalType,E=x._outputType,S=x._mimeType;x.on("data",function(B,F){j.push(B),p&&p(F)}).on("error",function(B){j=[],v(B)}).on("end",function(){try{var B=function(F,q,R){switch(F){case"blob":return s.newBlob(s.transformTo("arraybuffer",q),R);case"base64":return u.encode(q);default:return s.transformTo(F,q)}}(E,function(F,q){var R,O=0,Q=null,_=0;for(R=0;R<q.length;R++)_+=q[R].length;switch(F){case"string":return q.join("");case"array":return Array.prototype.concat.apply([],q);case"uint8array":for(Q=new Uint8Array(_),R=0;R<q.length;R++)Q.set(q[R],O),O+=q[R].length;return Q;case"nodebuffer":return Buffer.concat(q);default:throw new Error("concat : unsupported type '"+F+"'")}}(N,j),S);b(B)}catch(F){v(F)}j=[]}).resume()})}function m(x,p,b){var v=p;switch(p){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=p,this._mimeType=b,s.checkSupport(v),this._worker=x.pipe(new c(v)),x.lock()}catch(j){this._worker=new o("error"),this._worker.error(j)}}m.prototype={accumulate:function(x){return y(this,x)},on:function(x,p){var b=this;return x==="data"?this._worker.on(x,function(v){p.call(b,v.data,v.meta)}):this._worker.on(x,function(){s.delay(p,arguments,b)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(x){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},x)}},r.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(a,r,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var s=new ArrayBuffer(0);try{n.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);c.append(s),n.blob=c.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!a("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(a,r,n){for(var s=a("./utils"),c=a("./support"),o=a("./nodejsUtils"),u=a("./stream/GenericWorker"),h=new Array(256),g=0;g<256;g++)h[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;h[254]=h[254]=1;function f(){u.call(this,"utf-8 decode"),this.leftOver=null}function y(){u.call(this,"utf-8 encode")}n.utf8encode=function(m){return c.nodebuffer?o.newBufferFrom(m,"utf-8"):function(x){var p,b,v,j,N,E=x.length,S=0;for(j=0;j<E;j++)(64512&(b=x.charCodeAt(j)))==55296&&j+1<E&&(64512&(v=x.charCodeAt(j+1)))==56320&&(b=65536+(b-55296<<10)+(v-56320),j++),S+=b<128?1:b<2048?2:b<65536?3:4;for(p=c.uint8array?new Uint8Array(S):new Array(S),j=N=0;N<S;j++)(64512&(b=x.charCodeAt(j)))==55296&&j+1<E&&(64512&(v=x.charCodeAt(j+1)))==56320&&(b=65536+(b-55296<<10)+(v-56320),j++),b<128?p[N++]=b:(b<2048?p[N++]=192|b>>>6:(b<65536?p[N++]=224|b>>>12:(p[N++]=240|b>>>18,p[N++]=128|b>>>12&63),p[N++]=128|b>>>6&63),p[N++]=128|63&b);return p}(m)},n.utf8decode=function(m){return c.nodebuffer?s.transformTo("nodebuffer",m).toString("utf-8"):function(x){var p,b,v,j,N=x.length,E=new Array(2*N);for(p=b=0;p<N;)if((v=x[p++])<128)E[b++]=v;else if(4<(j=h[v]))E[b++]=65533,p+=j-1;else{for(v&=j===2?31:j===3?15:7;1<j&&p<N;)v=v<<6|63&x[p++],j--;1<j?E[b++]=65533:v<65536?E[b++]=v:(v-=65536,E[b++]=55296|v>>10&1023,E[b++]=56320|1023&v)}return E.length!==b&&(E.subarray?E=E.subarray(0,b):E.length=b),s.applyFromCharCode(E)}(m=s.transformTo(c.uint8array?"uint8array":"array",m))},s.inherits(f,u),f.prototype.processChunk=function(m){var x=s.transformTo(c.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(c.uint8array){var p=x;(x=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),x.set(p,this.leftOver.length)}else x=this.leftOver.concat(x);this.leftOver=null}var b=function(j,N){var E;for((N=N||j.length)>j.length&&(N=j.length),E=N-1;0<=E&&(192&j[E])==128;)E--;return E<0||E===0?N:E+h[j[E]]>N?E:N}(x),v=x;b!==x.length&&(c.uint8array?(v=x.subarray(0,b),this.leftOver=x.subarray(b,x.length)):(v=x.slice(0,b),this.leftOver=x.slice(b,x.length))),this.push({data:n.utf8decode(v),meta:m.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=f,s.inherits(y,u),y.prototype.processChunk=function(m){this.push({data:n.utf8encode(m.data),meta:m.meta})},n.Utf8EncodeWorker=y},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(a,r,n){var s=a("./support"),c=a("./base64"),o=a("./nodejsUtils"),u=a("./external");function h(p){return p}function g(p,b){for(var v=0;v<p.length;++v)b[v]=255&p.charCodeAt(v);return b}a("setimmediate"),n.newBlob=function(p,b){n.checkSupport("blob");try{return new Blob([p],{type:b})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(p),v.getBlob(b)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(p,b,v){var j=[],N=0,E=p.length;if(E<=v)return String.fromCharCode.apply(null,p);for(;N<E;)b==="array"||b==="nodebuffer"?j.push(String.fromCharCode.apply(null,p.slice(N,Math.min(N+v,E)))):j.push(String.fromCharCode.apply(null,p.subarray(N,Math.min(N+v,E)))),N+=v;return j.join("")},stringifyByChar:function(p){for(var b="",v=0;v<p.length;v++)b+=String.fromCharCode(p[v]);return b},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}}()}};function y(p){var b=65536,v=n.getTypeOf(p),j=!0;if(v==="uint8array"?j=f.applyCanBeUsed.uint8array:v==="nodebuffer"&&(j=f.applyCanBeUsed.nodebuffer),j)for(;1<b;)try{return f.stringifyByChunk(p,v,b)}catch{b=Math.floor(b/2)}return f.stringifyByChar(p)}function m(p,b){for(var v=0;v<p.length;v++)b[v]=p[v];return b}n.applyFromCharCode=y;var x={};x.string={string:h,array:function(p){return g(p,new Array(p.length))},arraybuffer:function(p){return x.string.uint8array(p).buffer},uint8array:function(p){return g(p,new Uint8Array(p.length))},nodebuffer:function(p){return g(p,o.allocBuffer(p.length))}},x.array={string:y,array:h,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return o.newBufferFrom(p)}},x.arraybuffer={string:function(p){return y(new Uint8Array(p))},array:function(p){return m(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:h,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return o.newBufferFrom(new Uint8Array(p))}},x.uint8array={string:y,array:function(p){return m(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:h,nodebuffer:function(p){return o.newBufferFrom(p)}},x.nodebuffer={string:y,array:function(p){return m(p,new Array(p.length))},arraybuffer:function(p){return x.nodebuffer.uint8array(p).buffer},uint8array:function(p){return m(p,new Uint8Array(p.length))},nodebuffer:h},n.transformTo=function(p,b){if(b=b||"",!p)return b;n.checkSupport(p);var v=n.getTypeOf(b);return x[v][p](b)},n.resolve=function(p){for(var b=p.split("/"),v=[],j=0;j<b.length;j++){var N=b[j];N==="."||N===""&&j!==0&&j!==b.length-1||(N===".."?v.pop():v.push(N))}return v.join("/")},n.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(p)?"nodebuffer":s.uint8array&&p instanceof Uint8Array?"uint8array":s.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(p){if(!s[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(p){var b,v,j="";for(v=0;v<(p||"").length;v++)j+="\\x"+((b=p.charCodeAt(v))<16?"0":"")+b.toString(16).toUpperCase();return j},n.delay=function(p,b,v){setImmediate(function(){p.apply(v||null,b||[])})},n.inherits=function(p,b){function v(){}v.prototype=b.prototype,p.prototype=new v},n.extend=function(){var p,b,v={};for(p=0;p<arguments.length;p++)for(b in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],b)&&v[b]===void 0&&(v[b]=arguments[p][b]);return v},n.prepareContent=function(p,b,v,j,N){return u.Promise.resolve(b).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new u.Promise(function(S,B){var F=new FileReader;F.onload=function(q){S(q.target.result)},F.onerror=function(q){B(q.target.error)},F.readAsArrayBuffer(E)}):E}).then(function(E){var S=n.getTypeOf(E);return S?(S==="arraybuffer"?E=n.transformTo("uint8array",E):S==="string"&&(N?E=c.decode(E):v&&j!==!0&&(E=function(B){return g(B,s.uint8array?new Uint8Array(B.length):new Array(B.length))}(E))),E):u.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(a,r,n){var s=a("./reader/readerFor"),c=a("./utils"),o=a("./signature"),u=a("./zipEntry"),h=a("./support");function g(f){this.files=[],this.loadOptions=f}g.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var y=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+c.pretty(y)+", expected "+c.pretty(f)+")")}},isSignature:function(f,y){var m=this.reader.index;this.reader.setIndex(f);var x=this.reader.readString(4)===y;return this.reader.setIndex(m),x},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),y=h.uint8array?"uint8array":"array",m=c.transformTo(y,f);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,y,m,x=this.zip64EndOfCentralSize-44;0<x;)f=this.reader.readInt(2),y=this.reader.readInt(4),m=this.reader.readData(y),this.zip64ExtensibleData[f]={id:f,length:y,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,y;for(f=0;f<this.files.length;f++)y=this.files[f],this.reader.setIndex(y.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),y.readLocalPart(this.reader),y.handleUTF8(),y.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(f=new u({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var y=f;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===c.MAX_VALUE_16BITS||this.diskWithCentralDirStart===c.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===c.MAX_VALUE_16BITS||this.centralDirRecords===c.MAX_VALUE_16BITS||this.centralDirSize===c.MAX_VALUE_32BITS||this.centralDirOffset===c.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var x=y-m;if(0<x)this.isSignature(y,o.CENTRAL_FILE_HEADER)||(this.reader.zero=x);else if(x<0)throw new Error("Corrupted zip: missing "+Math.abs(x)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=g},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(a,r,n){var s=a("./reader/readerFor"),c=a("./utils"),o=a("./compressedObject"),u=a("./crc32"),h=a("./utf8"),g=a("./compressions"),f=a("./support");function y(m,x){this.options=m,this.loadOptions=x}y.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var x,p;if(m.skip(22),this.fileNameLength=m.readInt(2),p=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((x=function(b){for(var v in g)if(Object.prototype.hasOwnProperty.call(g,v)&&g[v].magic===b)return g[v];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+c.pretty(this.compressionMethod)+" unknown (inner file : "+c.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,x,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var x=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(x),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var m=s(this.extraFields[1].value);this.uncompressedSize===c.MAX_VALUE_32BITS&&(this.uncompressedSize=m.readInt(8)),this.compressedSize===c.MAX_VALUE_32BITS&&(this.compressedSize=m.readInt(8)),this.localHeaderOffset===c.MAX_VALUE_32BITS&&(this.localHeaderOffset=m.readInt(8)),this.diskNumberStart===c.MAX_VALUE_32BITS&&(this.diskNumberStart=m.readInt(4))}},readExtraFields:function(m){var x,p,b,v=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<v;)x=m.readInt(2),p=m.readInt(2),b=m.readData(p),this.extraFields[x]={id:x,length:p,value:b};m.setIndex(v)},handleUTF8:function(){var m=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var x=this.findExtraFieldUnicodePath();if(x!==null)this.fileNameStr=x;else{var p=c.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var v=c.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var x=s(m.value);return x.readInt(1)!==1||u(this.fileName)!==x.readInt(4)?null:h.utf8decode(x.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var x=s(m.value);return x.readInt(1)!==1||u(this.fileComment)!==x.readInt(4)?null:h.utf8decode(x.readData(m.length-5))}return null}},r.exports=y},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(a,r,n){function s(x,p,b){this.name=x,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=p,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var c=a("./stream/StreamHelper"),o=a("./stream/DataWorker"),u=a("./utf8"),h=a("./compressedObject"),g=a("./stream/GenericWorker");s.prototype={internalStream:function(x){var p=null,b="string";try{if(!x)throw new Error("No output type specified.");var v=(b=x.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),p=this._decompressWorker();var j=!this._dataBinary;j&&!v&&(p=p.pipe(new u.Utf8EncodeWorker)),!j&&v&&(p=p.pipe(new u.Utf8DecodeWorker))}catch(N){(p=new g("error")).error(N)}return new c(p,b,"")},async:function(x,p){return this.internalStream(x).accumulate(p)},nodeStream:function(x,p){return this.internalStream(x||"nodebuffer").toNodejsStream(p)},_compressWorker:function(x,p){if(this._data instanceof h&&this._data.compression.magic===x.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new u.Utf8EncodeWorker)),h.createWorkerFrom(b,x,p)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof g?this._data:new o(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],y=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<f.length;m++)s.prototype[f[m]]=y;r.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(a,r,n){(function(s){var c,o,u=s.MutationObserver||s.WebKitMutationObserver;if(u){var h=0,g=new u(x),f=s.document.createTextNode("");g.observe(f,{characterData:!0}),c=function(){f.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)c="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var p=s.document.createElement("script");p.onreadystatechange=function(){x(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},s.document.documentElement.appendChild(p)}:function(){setTimeout(x,0)};else{var y=new s.MessageChannel;y.port1.onmessage=x,c=function(){y.port2.postMessage(0)}}var m=[];function x(){var p,b;o=!0;for(var v=m.length;v;){for(b=m,m=[],p=-1;++p<v;)b[p]();v=m.length}o=!1}r.exports=function(p){m.push(p)!==1||o||c()}}).call(this,typeof Qe<"u"?Qe:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(a,r,n){var s=a("immediate");function c(){}var o={},u=["REJECTED"],h=["FULFILLED"],g=["PENDING"];function f(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,v!==c&&p(this,v)}function y(v,j,N){this.promise=v,typeof j=="function"&&(this.onFulfilled=j,this.callFulfilled=this.otherCallFulfilled),typeof N=="function"&&(this.onRejected=N,this.callRejected=this.otherCallRejected)}function m(v,j,N){s(function(){var E;try{E=j(N)}catch(S){return o.reject(v,S)}E===v?o.reject(v,new TypeError("Cannot resolve promise with itself")):o.resolve(v,E)})}function x(v){var j=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof j=="function")return function(){j.apply(v,arguments)}}function p(v,j){var N=!1;function E(F){N||(N=!0,o.reject(v,F))}function S(F){N||(N=!0,o.resolve(v,F))}var B=b(function(){j(S,E)});B.status==="error"&&E(B.value)}function b(v,j){var N={};try{N.value=v(j),N.status="success"}catch(E){N.status="error",N.value=E}return N}(r.exports=f).prototype.finally=function(v){if(typeof v!="function")return this;var j=this.constructor;return this.then(function(N){return j.resolve(v()).then(function(){return N})},function(N){return j.resolve(v()).then(function(){throw N})})},f.prototype.catch=function(v){return this.then(null,v)},f.prototype.then=function(v,j){if(typeof v!="function"&&this.state===h||typeof j!="function"&&this.state===u)return this;var N=new this.constructor(c);return this.state!==g?m(N,this.state===h?v:j,this.outcome):this.queue.push(new y(N,v,j)),N},y.prototype.callFulfilled=function(v){o.resolve(this.promise,v)},y.prototype.otherCallFulfilled=function(v){m(this.promise,this.onFulfilled,v)},y.prototype.callRejected=function(v){o.reject(this.promise,v)},y.prototype.otherCallRejected=function(v){m(this.promise,this.onRejected,v)},o.resolve=function(v,j){var N=b(x,j);if(N.status==="error")return o.reject(v,N.value);var E=N.value;if(E)p(v,E);else{v.state=h,v.outcome=j;for(var S=-1,B=v.queue.length;++S<B;)v.queue[S].callFulfilled(j)}return v},o.reject=function(v,j){v.state=u,v.outcome=j;for(var N=-1,E=v.queue.length;++N<E;)v.queue[N].callRejected(j);return v},f.resolve=function(v){return v instanceof this?v:o.resolve(new this(c),v)},f.reject=function(v){var j=new this(c);return o.reject(j,v)},f.all=function(v){var j=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var N=v.length,E=!1;if(!N)return this.resolve([]);for(var S=new Array(N),B=0,F=-1,q=new this(c);++F<N;)R(v[F],F);return q;function R(O,Q){j.resolve(O).then(function(_){S[Q]=_,++B!==N||E||(E=!0,o.resolve(q,S))},function(_){E||(E=!0,o.reject(q,_))})}},f.race=function(v){var j=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var N=v.length,E=!1;if(!N)return this.resolve([]);for(var S=-1,B=new this(c);++S<N;)F=v[S],j.resolve(F).then(function(q){E||(E=!0,o.resolve(B,q))},function(q){E||(E=!0,o.reject(B,q))});var F;return B}},{immediate:36}],38:[function(a,r,n){var s={};(0,a("./lib/utils/common").assign)(s,a("./lib/deflate"),a("./lib/inflate"),a("./lib/zlib/constants")),r.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(a,r,n){var s=a("./zlib/deflate"),c=a("./utils/common"),o=a("./utils/strings"),u=a("./zlib/messages"),h=a("./zlib/zstream"),g=Object.prototype.toString,f=0,y=-1,m=0,x=8;function p(v){if(!(this instanceof p))return new p(v);this.options=c.assign({level:y,method:x,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},v||{});var j=this.options;j.raw&&0<j.windowBits?j.windowBits=-j.windowBits:j.gzip&&0<j.windowBits&&j.windowBits<16&&(j.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var N=s.deflateInit2(this.strm,j.level,j.method,j.windowBits,j.memLevel,j.strategy);if(N!==f)throw new Error(u[N]);if(j.header&&s.deflateSetHeader(this.strm,j.header),j.dictionary){var E;if(E=typeof j.dictionary=="string"?o.string2buf(j.dictionary):g.call(j.dictionary)==="[object ArrayBuffer]"?new Uint8Array(j.dictionary):j.dictionary,(N=s.deflateSetDictionary(this.strm,E))!==f)throw new Error(u[N]);this._dict_set=!0}}function b(v,j){var N=new p(j);if(N.push(v,!0),N.err)throw N.msg||u[N.err];return N.result}p.prototype.push=function(v,j){var N,E,S=this.strm,B=this.options.chunkSize;if(this.ended)return!1;E=j===~~j?j:j===!0?4:0,typeof v=="string"?S.input=o.string2buf(v):g.call(v)==="[object ArrayBuffer]"?S.input=new Uint8Array(v):S.input=v,S.next_in=0,S.avail_in=S.input.length;do{if(S.avail_out===0&&(S.output=new c.Buf8(B),S.next_out=0,S.avail_out=B),(N=s.deflate(S,E))!==1&&N!==f)return this.onEnd(N),!(this.ended=!0);S.avail_out!==0&&(S.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(c.shrinkBuf(S.output,S.next_out))):this.onData(c.shrinkBuf(S.output,S.next_out)))}while((0<S.avail_in||S.avail_out===0)&&N!==1);return E===4?(N=s.deflateEnd(this.strm),this.onEnd(N),this.ended=!0,N===f):E!==2||(this.onEnd(f),!(S.avail_out=0))},p.prototype.onData=function(v){this.chunks.push(v)},p.prototype.onEnd=function(v){v===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},n.Deflate=p,n.deflate=b,n.deflateRaw=function(v,j){return(j=j||{}).raw=!0,b(v,j)},n.gzip=function(v,j){return(j=j||{}).gzip=!0,b(v,j)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(a,r,n){var s=a("./zlib/inflate"),c=a("./utils/common"),o=a("./utils/strings"),u=a("./zlib/constants"),h=a("./zlib/messages"),g=a("./zlib/zstream"),f=a("./zlib/gzheader"),y=Object.prototype.toString;function m(p){if(!(this instanceof m))return new m(p);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},p||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||p&&p.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&!(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var v=s.inflateInit2(this.strm,b.windowBits);if(v!==u.Z_OK)throw new Error(h[v]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function x(p,b){var v=new m(b);if(v.push(p,!0),v.err)throw v.msg||h[v.err];return v.result}m.prototype.push=function(p,b){var v,j,N,E,S,B,F=this.strm,q=this.options.chunkSize,R=this.options.dictionary,O=!1;if(this.ended)return!1;j=b===~~b?b:b===!0?u.Z_FINISH:u.Z_NO_FLUSH,typeof p=="string"?F.input=o.binstring2buf(p):y.call(p)==="[object ArrayBuffer]"?F.input=new Uint8Array(p):F.input=p,F.next_in=0,F.avail_in=F.input.length;do{if(F.avail_out===0&&(F.output=new c.Buf8(q),F.next_out=0,F.avail_out=q),(v=s.inflate(F,u.Z_NO_FLUSH))===u.Z_NEED_DICT&&R&&(B=typeof R=="string"?o.string2buf(R):y.call(R)==="[object ArrayBuffer]"?new Uint8Array(R):R,v=s.inflateSetDictionary(this.strm,B)),v===u.Z_BUF_ERROR&&O===!0&&(v=u.Z_OK,O=!1),v!==u.Z_STREAM_END&&v!==u.Z_OK)return this.onEnd(v),!(this.ended=!0);F.next_out&&(F.avail_out!==0&&v!==u.Z_STREAM_END&&(F.avail_in!==0||j!==u.Z_FINISH&&j!==u.Z_SYNC_FLUSH)||(this.options.to==="string"?(N=o.utf8border(F.output,F.next_out),E=F.next_out-N,S=o.buf2string(F.output,N),F.next_out=E,F.avail_out=q-E,E&&c.arraySet(F.output,F.output,N,E,0),this.onData(S)):this.onData(c.shrinkBuf(F.output,F.next_out)))),F.avail_in===0&&F.avail_out===0&&(O=!0)}while((0<F.avail_in||F.avail_out===0)&&v!==u.Z_STREAM_END);return v===u.Z_STREAM_END&&(j=u.Z_FINISH),j===u.Z_FINISH?(v=s.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===u.Z_OK):j!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),!(F.avail_out=0))},m.prototype.onData=function(p){this.chunks.push(p)},m.prototype.onEnd=function(p){p===u.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},n.Inflate=m,n.inflate=x,n.inflateRaw=function(p,b){return(b=b||{}).raw=!0,x(p,b)},n.ungzip=x},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(a,r,n){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(u){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var g=h.shift();if(g){if(typeof g!="object")throw new TypeError(g+"must be non-object");for(var f in g)g.hasOwnProperty(f)&&(u[f]=g[f])}}return u},n.shrinkBuf=function(u,h){return u.length===h?u:u.subarray?u.subarray(0,h):(u.length=h,u)};var c={arraySet:function(u,h,g,f,y){if(h.subarray&&u.subarray)u.set(h.subarray(g,g+f),y);else for(var m=0;m<f;m++)u[y+m]=h[g+m]},flattenChunks:function(u){var h,g,f,y,m,x;for(h=f=0,g=u.length;h<g;h++)f+=u[h].length;for(x=new Uint8Array(f),h=y=0,g=u.length;h<g;h++)m=u[h],x.set(m,y),y+=m.length;return x}},o={arraySet:function(u,h,g,f,y){for(var m=0;m<f;m++)u[y+m]=h[g+m]},flattenChunks:function(u){return[].concat.apply([],u)}};n.setTyped=function(u){u?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,c)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,o))},n.setTyped(s)},{}],42:[function(a,r,n){var s=a("./common"),c=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{c=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var u=new s.Buf8(256),h=0;h<256;h++)u[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function g(f,y){if(y<65537&&(f.subarray&&o||!f.subarray&&c))return String.fromCharCode.apply(null,s.shrinkBuf(f,y));for(var m="",x=0;x<y;x++)m+=String.fromCharCode(f[x]);return m}u[254]=u[254]=1,n.string2buf=function(f){var y,m,x,p,b,v=f.length,j=0;for(p=0;p<v;p++)(64512&(m=f.charCodeAt(p)))==55296&&p+1<v&&(64512&(x=f.charCodeAt(p+1)))==56320&&(m=65536+(m-55296<<10)+(x-56320),p++),j+=m<128?1:m<2048?2:m<65536?3:4;for(y=new s.Buf8(j),p=b=0;b<j;p++)(64512&(m=f.charCodeAt(p)))==55296&&p+1<v&&(64512&(x=f.charCodeAt(p+1)))==56320&&(m=65536+(m-55296<<10)+(x-56320),p++),m<128?y[b++]=m:(m<2048?y[b++]=192|m>>>6:(m<65536?y[b++]=224|m>>>12:(y[b++]=240|m>>>18,y[b++]=128|m>>>12&63),y[b++]=128|m>>>6&63),y[b++]=128|63&m);return y},n.buf2binstring=function(f){return g(f,f.length)},n.binstring2buf=function(f){for(var y=new s.Buf8(f.length),m=0,x=y.length;m<x;m++)y[m]=f.charCodeAt(m);return y},n.buf2string=function(f,y){var m,x,p,b,v=y||f.length,j=new Array(2*v);for(m=x=0;m<v;)if((p=f[m++])<128)j[x++]=p;else if(4<(b=u[p]))j[x++]=65533,m+=b-1;else{for(p&=b===2?31:b===3?15:7;1<b&&m<v;)p=p<<6|63&f[m++],b--;1<b?j[x++]=65533:p<65536?j[x++]=p:(p-=65536,j[x++]=55296|p>>10&1023,j[x++]=56320|1023&p)}return g(j,x)},n.utf8border=function(f,y){var m;for((y=y||f.length)>f.length&&(y=f.length),m=y-1;0<=m&&(192&f[m])==128;)m--;return m<0||m===0?y:m+u[f[m]]>y?m:y}},{"./common":41}],43:[function(a,r,n){r.exports=function(s,c,o,u){for(var h=65535&s|0,g=s>>>16&65535|0,f=0;o!==0;){for(o-=f=2e3<o?2e3:o;g=g+(h=h+c[u++]|0)|0,--f;);h%=65521,g%=65521}return h|g<<16|0}},{}],44:[function(a,r,n){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(a,r,n){var s=function(){for(var c,o=[],u=0;u<256;u++){c=u;for(var h=0;h<8;h++)c=1&c?3988292384^c>>>1:c>>>1;o[u]=c}return o}();r.exports=function(c,o,u,h){var g=s,f=h+u;c^=-1;for(var y=h;y<f;y++)c=c>>>8^g[255&(c^o[y])];return-1^c}},{}],46:[function(a,r,n){var s,c=a("../utils/common"),o=a("./trees"),u=a("./adler32"),h=a("./crc32"),g=a("./messages"),f=0,y=4,m=0,x=-2,p=-1,b=4,v=2,j=8,N=9,E=286,S=30,B=19,F=2*E+1,q=15,R=3,O=258,Q=O+R+1,_=42,P=113,d=1,M=2,ne=3,Z=4;function oe(l,U){return l.msg=g[U],U}function W(l){return(l<<1)-(4<l?9:0)}function te(l){for(var U=l.length;0<=--U;)l[U]=0}function A(l){var U=l.state,T=U.pending;T>l.avail_out&&(T=l.avail_out),T!==0&&(c.arraySet(l.output,U.pending_buf,U.pending_out,T,l.next_out),l.next_out+=T,U.pending_out+=T,l.total_out+=T,l.avail_out-=T,U.pending-=T,U.pending===0&&(U.pending_out=0))}function z(l,U){o._tr_flush_block(l,0<=l.block_start?l.block_start:-1,l.strstart-l.block_start,U),l.block_start=l.strstart,A(l.strm)}function J(l,U){l.pending_buf[l.pending++]=U}function G(l,U){l.pending_buf[l.pending++]=U>>>8&255,l.pending_buf[l.pending++]=255&U}function Y(l,U){var T,k,w=l.max_chain_length,C=l.strstart,$=l.prev_length,H=l.nice_match,D=l.strstart>l.w_size-Q?l.strstart-(l.w_size-Q):0,X=l.window,I=l.w_mask,L=l.prev,K=l.strstart+O,re=X[C+$-1],ae=X[C+$];l.prev_length>=l.good_match&&(w>>=2),H>l.lookahead&&(H=l.lookahead);do if(X[(T=U)+$]===ae&&X[T+$-1]===re&&X[T]===X[C]&&X[++T]===X[C+1]){C+=2,T++;do;while(X[++C]===X[++T]&&X[++C]===X[++T]&&X[++C]===X[++T]&&X[++C]===X[++T]&&X[++C]===X[++T]&&X[++C]===X[++T]&&X[++C]===X[++T]&&X[++C]===X[++T]&&C<K);if(k=O-(K-C),C=K-O,$<k){if(l.match_start=U,H<=($=k))break;re=X[C+$-1],ae=X[C+$]}}while((U=L[U&I])>D&&--w!=0);return $<=l.lookahead?$:l.lookahead}function de(l){var U,T,k,w,C,$,H,D,X,I,L=l.w_size;do{if(w=l.window_size-l.lookahead-l.strstart,l.strstart>=L+(L-Q)){for(c.arraySet(l.window,l.window,L,L,0),l.match_start-=L,l.strstart-=L,l.block_start-=L,U=T=l.hash_size;k=l.head[--U],l.head[U]=L<=k?k-L:0,--T;);for(U=T=L;k=l.prev[--U],l.prev[U]=L<=k?k-L:0,--T;);w+=L}if(l.strm.avail_in===0)break;if($=l.strm,H=l.window,D=l.strstart+l.lookahead,X=w,I=void 0,I=$.avail_in,X<I&&(I=X),T=I===0?0:($.avail_in-=I,c.arraySet(H,$.input,$.next_in,I,D),$.state.wrap===1?$.adler=u($.adler,H,I,D):$.state.wrap===2&&($.adler=h($.adler,H,I,D)),$.next_in+=I,$.total_in+=I,I),l.lookahead+=T,l.lookahead+l.insert>=R)for(C=l.strstart-l.insert,l.ins_h=l.window[C],l.ins_h=(l.ins_h<<l.hash_shift^l.window[C+1])&l.hash_mask;l.insert&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[C+R-1])&l.hash_mask,l.prev[C&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=C,C++,l.insert--,!(l.lookahead+l.insert<R)););}while(l.lookahead<Q&&l.strm.avail_in!==0)}function ve(l,U){for(var T,k;;){if(l.lookahead<Q){if(de(l),l.lookahead<Q&&U===f)return d;if(l.lookahead===0)break}if(T=0,l.lookahead>=R&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+R-1])&l.hash_mask,T=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),T!==0&&l.strstart-T<=l.w_size-Q&&(l.match_length=Y(l,T)),l.match_length>=R)if(k=o._tr_tally(l,l.strstart-l.match_start,l.match_length-R),l.lookahead-=l.match_length,l.match_length<=l.max_lazy_match&&l.lookahead>=R){for(l.match_length--;l.strstart++,l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+R-1])&l.hash_mask,T=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart,--l.match_length!=0;);l.strstart++}else l.strstart+=l.match_length,l.match_length=0,l.ins_h=l.window[l.strstart],l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+1])&l.hash_mask;else k=o._tr_tally(l,0,l.window[l.strstart]),l.lookahead--,l.strstart++;if(k&&(z(l,!1),l.strm.avail_out===0))return d}return l.insert=l.strstart<R-1?l.strstart:R-1,U===y?(z(l,!0),l.strm.avail_out===0?ne:Z):l.last_lit&&(z(l,!1),l.strm.avail_out===0)?d:M}function se(l,U){for(var T,k,w;;){if(l.lookahead<Q){if(de(l),l.lookahead<Q&&U===f)return d;if(l.lookahead===0)break}if(T=0,l.lookahead>=R&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+R-1])&l.hash_mask,T=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),l.prev_length=l.match_length,l.prev_match=l.match_start,l.match_length=R-1,T!==0&&l.prev_length<l.max_lazy_match&&l.strstart-T<=l.w_size-Q&&(l.match_length=Y(l,T),l.match_length<=5&&(l.strategy===1||l.match_length===R&&4096<l.strstart-l.match_start)&&(l.match_length=R-1)),l.prev_length>=R&&l.match_length<=l.prev_length){for(w=l.strstart+l.lookahead-R,k=o._tr_tally(l,l.strstart-1-l.prev_match,l.prev_length-R),l.lookahead-=l.prev_length-1,l.prev_length-=2;++l.strstart<=w&&(l.ins_h=(l.ins_h<<l.hash_shift^l.window[l.strstart+R-1])&l.hash_mask,T=l.prev[l.strstart&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=l.strstart),--l.prev_length!=0;);if(l.match_available=0,l.match_length=R-1,l.strstart++,k&&(z(l,!1),l.strm.avail_out===0))return d}else if(l.match_available){if((k=o._tr_tally(l,0,l.window[l.strstart-1]))&&z(l,!1),l.strstart++,l.lookahead--,l.strm.avail_out===0)return d}else l.match_available=1,l.strstart++,l.lookahead--}return l.match_available&&(k=o._tr_tally(l,0,l.window[l.strstart-1]),l.match_available=0),l.insert=l.strstart<R-1?l.strstart:R-1,U===y?(z(l,!0),l.strm.avail_out===0?ne:Z):l.last_lit&&(z(l,!1),l.strm.avail_out===0)?d:M}function le(l,U,T,k,w){this.good_length=l,this.max_lazy=U,this.nice_length=T,this.max_chain=k,this.func=w}function he(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=j,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*F),this.dyn_dtree=new c.Buf16(2*(2*S+1)),this.bl_tree=new c.Buf16(2*(2*B+1)),te(this.dyn_ltree),te(this.dyn_dtree),te(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(q+1),this.heap=new c.Buf16(2*E+1),te(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*E+1),te(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ue(l){var U;return l&&l.state?(l.total_in=l.total_out=0,l.data_type=v,(U=l.state).pending=0,U.pending_out=0,U.wrap<0&&(U.wrap=-U.wrap),U.status=U.wrap?_:P,l.adler=U.wrap===2?0:1,U.last_flush=f,o._tr_init(U),m):oe(l,x)}function ye(l){var U=ue(l);return U===m&&function(T){T.window_size=2*T.w_size,te(T.head),T.max_lazy_match=s[T.level].max_lazy,T.good_match=s[T.level].good_length,T.nice_match=s[T.level].nice_length,T.max_chain_length=s[T.level].max_chain,T.strstart=0,T.block_start=0,T.lookahead=0,T.insert=0,T.match_length=T.prev_length=R-1,T.match_available=0,T.ins_h=0}(l.state),U}function ke(l,U,T,k,w,C){if(!l)return x;var $=1;if(U===p&&(U=6),k<0?($=0,k=-k):15<k&&($=2,k-=16),w<1||N<w||T!==j||k<8||15<k||U<0||9<U||C<0||b<C)return oe(l,x);k===8&&(k=9);var H=new he;return(l.state=H).strm=l,H.wrap=$,H.gzhead=null,H.w_bits=k,H.w_size=1<<H.w_bits,H.w_mask=H.w_size-1,H.hash_bits=w+7,H.hash_size=1<<H.hash_bits,H.hash_mask=H.hash_size-1,H.hash_shift=~~((H.hash_bits+R-1)/R),H.window=new c.Buf8(2*H.w_size),H.head=new c.Buf16(H.hash_size),H.prev=new c.Buf16(H.w_size),H.lit_bufsize=1<<w+6,H.pending_buf_size=4*H.lit_bufsize,H.pending_buf=new c.Buf8(H.pending_buf_size),H.d_buf=1*H.lit_bufsize,H.l_buf=3*H.lit_bufsize,H.level=U,H.strategy=C,H.method=T,ye(l)}s=[new le(0,0,0,0,function(l,U){var T=65535;for(T>l.pending_buf_size-5&&(T=l.pending_buf_size-5);;){if(l.lookahead<=1){if(de(l),l.lookahead===0&&U===f)return d;if(l.lookahead===0)break}l.strstart+=l.lookahead,l.lookahead=0;var k=l.block_start+T;if((l.strstart===0||l.strstart>=k)&&(l.lookahead=l.strstart-k,l.strstart=k,z(l,!1),l.strm.avail_out===0)||l.strstart-l.block_start>=l.w_size-Q&&(z(l,!1),l.strm.avail_out===0))return d}return l.insert=0,U===y?(z(l,!0),l.strm.avail_out===0?ne:Z):(l.strstart>l.block_start&&(z(l,!1),l.strm.avail_out),d)}),new le(4,4,8,4,ve),new le(4,5,16,8,ve),new le(4,6,32,32,ve),new le(4,4,16,16,se),new le(8,16,32,32,se),new le(8,16,128,128,se),new le(8,32,128,256,se),new le(32,128,258,1024,se),new le(32,258,258,4096,se)],n.deflateInit=function(l,U){return ke(l,U,j,15,8,0)},n.deflateInit2=ke,n.deflateReset=ye,n.deflateResetKeep=ue,n.deflateSetHeader=function(l,U){return l&&l.state?l.state.wrap!==2?x:(l.state.gzhead=U,m):x},n.deflate=function(l,U){var T,k,w,C;if(!l||!l.state||5<U||U<0)return l?oe(l,x):x;if(k=l.state,!l.output||!l.input&&l.avail_in!==0||k.status===666&&U!==y)return oe(l,l.avail_out===0?-5:x);if(k.strm=l,T=k.last_flush,k.last_flush=U,k.status===_)if(k.wrap===2)l.adler=0,J(k,31),J(k,139),J(k,8),k.gzhead?(J(k,(k.gzhead.text?1:0)+(k.gzhead.hcrc?2:0)+(k.gzhead.extra?4:0)+(k.gzhead.name?8:0)+(k.gzhead.comment?16:0)),J(k,255&k.gzhead.time),J(k,k.gzhead.time>>8&255),J(k,k.gzhead.time>>16&255),J(k,k.gzhead.time>>24&255),J(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),J(k,255&k.gzhead.os),k.gzhead.extra&&k.gzhead.extra.length&&(J(k,255&k.gzhead.extra.length),J(k,k.gzhead.extra.length>>8&255)),k.gzhead.hcrc&&(l.adler=h(l.adler,k.pending_buf,k.pending,0)),k.gzindex=0,k.status=69):(J(k,0),J(k,0),J(k,0),J(k,0),J(k,0),J(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),J(k,3),k.status=P);else{var $=j+(k.w_bits-8<<4)<<8;$|=(2<=k.strategy||k.level<2?0:k.level<6?1:k.level===6?2:3)<<6,k.strstart!==0&&($|=32),$+=31-$%31,k.status=P,G(k,$),k.strstart!==0&&(G(k,l.adler>>>16),G(k,65535&l.adler)),l.adler=1}if(k.status===69)if(k.gzhead.extra){for(w=k.pending;k.gzindex<(65535&k.gzhead.extra.length)&&(k.pending!==k.pending_buf_size||(k.gzhead.hcrc&&k.pending>w&&(l.adler=h(l.adler,k.pending_buf,k.pending-w,w)),A(l),w=k.pending,k.pending!==k.pending_buf_size));)J(k,255&k.gzhead.extra[k.gzindex]),k.gzindex++;k.gzhead.hcrc&&k.pending>w&&(l.adler=h(l.adler,k.pending_buf,k.pending-w,w)),k.gzindex===k.gzhead.extra.length&&(k.gzindex=0,k.status=73)}else k.status=73;if(k.status===73)if(k.gzhead.name){w=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>w&&(l.adler=h(l.adler,k.pending_buf,k.pending-w,w)),A(l),w=k.pending,k.pending===k.pending_buf_size)){C=1;break}C=k.gzindex<k.gzhead.name.length?255&k.gzhead.name.charCodeAt(k.gzindex++):0,J(k,C)}while(C!==0);k.gzhead.hcrc&&k.pending>w&&(l.adler=h(l.adler,k.pending_buf,k.pending-w,w)),C===0&&(k.gzindex=0,k.status=91)}else k.status=91;if(k.status===91)if(k.gzhead.comment){w=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>w&&(l.adler=h(l.adler,k.pending_buf,k.pending-w,w)),A(l),w=k.pending,k.pending===k.pending_buf_size)){C=1;break}C=k.gzindex<k.gzhead.comment.length?255&k.gzhead.comment.charCodeAt(k.gzindex++):0,J(k,C)}while(C!==0);k.gzhead.hcrc&&k.pending>w&&(l.adler=h(l.adler,k.pending_buf,k.pending-w,w)),C===0&&(k.status=103)}else k.status=103;if(k.status===103&&(k.gzhead.hcrc?(k.pending+2>k.pending_buf_size&&A(l),k.pending+2<=k.pending_buf_size&&(J(k,255&l.adler),J(k,l.adler>>8&255),l.adler=0,k.status=P)):k.status=P),k.pending!==0){if(A(l),l.avail_out===0)return k.last_flush=-1,m}else if(l.avail_in===0&&W(U)<=W(T)&&U!==y)return oe(l,-5);if(k.status===666&&l.avail_in!==0)return oe(l,-5);if(l.avail_in!==0||k.lookahead!==0||U!==f&&k.status!==666){var H=k.strategy===2?function(D,X){for(var I;;){if(D.lookahead===0&&(de(D),D.lookahead===0)){if(X===f)return d;break}if(D.match_length=0,I=o._tr_tally(D,0,D.window[D.strstart]),D.lookahead--,D.strstart++,I&&(z(D,!1),D.strm.avail_out===0))return d}return D.insert=0,X===y?(z(D,!0),D.strm.avail_out===0?ne:Z):D.last_lit&&(z(D,!1),D.strm.avail_out===0)?d:M}(k,U):k.strategy===3?function(D,X){for(var I,L,K,re,ae=D.window;;){if(D.lookahead<=O){if(de(D),D.lookahead<=O&&X===f)return d;if(D.lookahead===0)break}if(D.match_length=0,D.lookahead>=R&&0<D.strstart&&(L=ae[K=D.strstart-1])===ae[++K]&&L===ae[++K]&&L===ae[++K]){re=D.strstart+O;do;while(L===ae[++K]&&L===ae[++K]&&L===ae[++K]&&L===ae[++K]&&L===ae[++K]&&L===ae[++K]&&L===ae[++K]&&L===ae[++K]&&K<re);D.match_length=O-(re-K),D.match_length>D.lookahead&&(D.match_length=D.lookahead)}if(D.match_length>=R?(I=o._tr_tally(D,1,D.match_length-R),D.lookahead-=D.match_length,D.strstart+=D.match_length,D.match_length=0):(I=o._tr_tally(D,0,D.window[D.strstart]),D.lookahead--,D.strstart++),I&&(z(D,!1),D.strm.avail_out===0))return d}return D.insert=0,X===y?(z(D,!0),D.strm.avail_out===0?ne:Z):D.last_lit&&(z(D,!1),D.strm.avail_out===0)?d:M}(k,U):s[k.level].func(k,U);if(H!==ne&&H!==Z||(k.status=666),H===d||H===ne)return l.avail_out===0&&(k.last_flush=-1),m;if(H===M&&(U===1?o._tr_align(k):U!==5&&(o._tr_stored_block(k,0,0,!1),U===3&&(te(k.head),k.lookahead===0&&(k.strstart=0,k.block_start=0,k.insert=0))),A(l),l.avail_out===0))return k.last_flush=-1,m}return U!==y?m:k.wrap<=0?1:(k.wrap===2?(J(k,255&l.adler),J(k,l.adler>>8&255),J(k,l.adler>>16&255),J(k,l.adler>>24&255),J(k,255&l.total_in),J(k,l.total_in>>8&255),J(k,l.total_in>>16&255),J(k,l.total_in>>24&255)):(G(k,l.adler>>>16),G(k,65535&l.adler)),A(l),0<k.wrap&&(k.wrap=-k.wrap),k.pending!==0?m:1)},n.deflateEnd=function(l){var U;return l&&l.state?(U=l.state.status)!==_&&U!==69&&U!==73&&U!==91&&U!==103&&U!==P&&U!==666?oe(l,x):(l.state=null,U===P?oe(l,-3):m):x},n.deflateSetDictionary=function(l,U){var T,k,w,C,$,H,D,X,I=U.length;if(!l||!l.state||(C=(T=l.state).wrap)===2||C===1&&T.status!==_||T.lookahead)return x;for(C===1&&(l.adler=u(l.adler,U,I,0)),T.wrap=0,I>=T.w_size&&(C===0&&(te(T.head),T.strstart=0,T.block_start=0,T.insert=0),X=new c.Buf8(T.w_size),c.arraySet(X,U,I-T.w_size,T.w_size,0),U=X,I=T.w_size),$=l.avail_in,H=l.next_in,D=l.input,l.avail_in=I,l.next_in=0,l.input=U,de(T);T.lookahead>=R;){for(k=T.strstart,w=T.lookahead-(R-1);T.ins_h=(T.ins_h<<T.hash_shift^T.window[k+R-1])&T.hash_mask,T.prev[k&T.w_mask]=T.head[T.ins_h],T.head[T.ins_h]=k,k++,--w;);T.strstart=k,T.lookahead=R-1,de(T)}return T.strstart+=T.lookahead,T.block_start=T.strstart,T.insert=T.lookahead,T.lookahead=0,T.match_length=T.prev_length=R-1,T.match_available=0,l.next_in=H,l.input=D,l.avail_in=$,T.wrap=C,m},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(a,r,n){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(a,r,n){r.exports=function(s,c){var o,u,h,g,f,y,m,x,p,b,v,j,N,E,S,B,F,q,R,O,Q,_,P,d,M;o=s.state,u=s.next_in,d=s.input,h=u+(s.avail_in-5),g=s.next_out,M=s.output,f=g-(c-s.avail_out),y=g+(s.avail_out-257),m=o.dmax,x=o.wsize,p=o.whave,b=o.wnext,v=o.window,j=o.hold,N=o.bits,E=o.lencode,S=o.distcode,B=(1<<o.lenbits)-1,F=(1<<o.distbits)-1;e:do{N<15&&(j+=d[u++]<<N,N+=8,j+=d[u++]<<N,N+=8),q=E[j&B];t:for(;;){if(j>>>=R=q>>>24,N-=R,(R=q>>>16&255)===0)M[g++]=65535&q;else{if(!(16&R)){if(!(64&R)){q=E[(65535&q)+(j&(1<<R)-1)];continue t}if(32&R){o.mode=12;break e}s.msg="invalid literal/length code",o.mode=30;break e}O=65535&q,(R&=15)&&(N<R&&(j+=d[u++]<<N,N+=8),O+=j&(1<<R)-1,j>>>=R,N-=R),N<15&&(j+=d[u++]<<N,N+=8,j+=d[u++]<<N,N+=8),q=S[j&F];a:for(;;){if(j>>>=R=q>>>24,N-=R,!(16&(R=q>>>16&255))){if(!(64&R)){q=S[(65535&q)+(j&(1<<R)-1)];continue a}s.msg="invalid distance code",o.mode=30;break e}if(Q=65535&q,N<(R&=15)&&(j+=d[u++]<<N,(N+=8)<R&&(j+=d[u++]<<N,N+=8)),m<(Q+=j&(1<<R)-1)){s.msg="invalid distance too far back",o.mode=30;break e}if(j>>>=R,N-=R,(R=g-f)<Q){if(p<(R=Q-R)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break e}if(P=v,(_=0)===b){if(_+=x-R,R<O){for(O-=R;M[g++]=v[_++],--R;);_=g-Q,P=M}}else if(b<R){if(_+=x+b-R,(R-=b)<O){for(O-=R;M[g++]=v[_++],--R;);if(_=0,b<O){for(O-=R=b;M[g++]=v[_++],--R;);_=g-Q,P=M}}}else if(_+=b-R,R<O){for(O-=R;M[g++]=v[_++],--R;);_=g-Q,P=M}for(;2<O;)M[g++]=P[_++],M[g++]=P[_++],M[g++]=P[_++],O-=3;O&&(M[g++]=P[_++],1<O&&(M[g++]=P[_++]))}else{for(_=g-Q;M[g++]=M[_++],M[g++]=M[_++],M[g++]=M[_++],2<(O-=3););O&&(M[g++]=M[_++],1<O&&(M[g++]=M[_++]))}break}}break}}while(u<h&&g<y);u-=O=N>>3,j&=(1<<(N-=O<<3))-1,s.next_in=u,s.next_out=g,s.avail_in=u<h?h-u+5:5-(u-h),s.avail_out=g<y?y-g+257:257-(g-y),o.hold=j,o.bits=N}},{}],49:[function(a,r,n){var s=a("../utils/common"),c=a("./adler32"),o=a("./crc32"),u=a("./inffast"),h=a("./inftrees"),g=1,f=2,y=0,m=-2,x=1,p=852,b=592;function v(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function j(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function N(_){var P;return _&&_.state?(P=_.state,_.total_in=_.total_out=P.total=0,_.msg="",P.wrap&&(_.adler=1&P.wrap),P.mode=x,P.last=0,P.havedict=0,P.dmax=32768,P.head=null,P.hold=0,P.bits=0,P.lencode=P.lendyn=new s.Buf32(p),P.distcode=P.distdyn=new s.Buf32(b),P.sane=1,P.back=-1,y):m}function E(_){var P;return _&&_.state?((P=_.state).wsize=0,P.whave=0,P.wnext=0,N(_)):m}function S(_,P){var d,M;return _&&_.state?(M=_.state,P<0?(d=0,P=-P):(d=1+(P>>4),P<48&&(P&=15)),P&&(P<8||15<P)?m:(M.window!==null&&M.wbits!==P&&(M.window=null),M.wrap=d,M.wbits=P,E(_))):m}function B(_,P){var d,M;return _?(M=new j,(_.state=M).window=null,(d=S(_,P))!==y&&(_.state=null),d):m}var F,q,R=!0;function O(_){if(R){var P;for(F=new s.Buf32(512),q=new s.Buf32(32),P=0;P<144;)_.lens[P++]=8;for(;P<256;)_.lens[P++]=9;for(;P<280;)_.lens[P++]=7;for(;P<288;)_.lens[P++]=8;for(h(g,_.lens,0,288,F,0,_.work,{bits:9}),P=0;P<32;)_.lens[P++]=5;h(f,_.lens,0,32,q,0,_.work,{bits:5}),R=!1}_.lencode=F,_.lenbits=9,_.distcode=q,_.distbits=5}function Q(_,P,d,M){var ne,Z=_.state;return Z.window===null&&(Z.wsize=1<<Z.wbits,Z.wnext=0,Z.whave=0,Z.window=new s.Buf8(Z.wsize)),M>=Z.wsize?(s.arraySet(Z.window,P,d-Z.wsize,Z.wsize,0),Z.wnext=0,Z.whave=Z.wsize):(M<(ne=Z.wsize-Z.wnext)&&(ne=M),s.arraySet(Z.window,P,d-M,ne,Z.wnext),(M-=ne)?(s.arraySet(Z.window,P,d-M,M,0),Z.wnext=M,Z.whave=Z.wsize):(Z.wnext+=ne,Z.wnext===Z.wsize&&(Z.wnext=0),Z.whave<Z.wsize&&(Z.whave+=ne))),0}n.inflateReset=E,n.inflateReset2=S,n.inflateResetKeep=N,n.inflateInit=function(_){return B(_,15)},n.inflateInit2=B,n.inflate=function(_,P){var d,M,ne,Z,oe,W,te,A,z,J,G,Y,de,ve,se,le,he,ue,ye,ke,l,U,T,k,w=0,C=new s.Buf8(4),$=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return m;(d=_.state).mode===12&&(d.mode=13),oe=_.next_out,ne=_.output,te=_.avail_out,Z=_.next_in,M=_.input,W=_.avail_in,A=d.hold,z=d.bits,J=W,G=te,U=y;e:for(;;)switch(d.mode){case x:if(d.wrap===0){d.mode=13;break}for(;z<16;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}if(2&d.wrap&&A===35615){C[d.check=0]=255&A,C[1]=A>>>8&255,d.check=o(d.check,C,2,0),z=A=0,d.mode=2;break}if(d.flags=0,d.head&&(d.head.done=!1),!(1&d.wrap)||(((255&A)<<8)+(A>>8))%31){_.msg="incorrect header check",d.mode=30;break}if((15&A)!=8){_.msg="unknown compression method",d.mode=30;break}if(z-=4,l=8+(15&(A>>>=4)),d.wbits===0)d.wbits=l;else if(l>d.wbits){_.msg="invalid window size",d.mode=30;break}d.dmax=1<<l,_.adler=d.check=1,d.mode=512&A?10:12,z=A=0;break;case 2:for(;z<16;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}if(d.flags=A,(255&d.flags)!=8){_.msg="unknown compression method",d.mode=30;break}if(57344&d.flags){_.msg="unknown header flags set",d.mode=30;break}d.head&&(d.head.text=A>>8&1),512&d.flags&&(C[0]=255&A,C[1]=A>>>8&255,d.check=o(d.check,C,2,0)),z=A=0,d.mode=3;case 3:for(;z<32;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}d.head&&(d.head.time=A),512&d.flags&&(C[0]=255&A,C[1]=A>>>8&255,C[2]=A>>>16&255,C[3]=A>>>24&255,d.check=o(d.check,C,4,0)),z=A=0,d.mode=4;case 4:for(;z<16;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}d.head&&(d.head.xflags=255&A,d.head.os=A>>8),512&d.flags&&(C[0]=255&A,C[1]=A>>>8&255,d.check=o(d.check,C,2,0)),z=A=0,d.mode=5;case 5:if(1024&d.flags){for(;z<16;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}d.length=A,d.head&&(d.head.extra_len=A),512&d.flags&&(C[0]=255&A,C[1]=A>>>8&255,d.check=o(d.check,C,2,0)),z=A=0}else d.head&&(d.head.extra=null);d.mode=6;case 6:if(1024&d.flags&&(W<(Y=d.length)&&(Y=W),Y&&(d.head&&(l=d.head.extra_len-d.length,d.head.extra||(d.head.extra=new Array(d.head.extra_len)),s.arraySet(d.head.extra,M,Z,Y,l)),512&d.flags&&(d.check=o(d.check,M,Y,Z)),W-=Y,Z+=Y,d.length-=Y),d.length))break e;d.length=0,d.mode=7;case 7:if(2048&d.flags){if(W===0)break e;for(Y=0;l=M[Z+Y++],d.head&&l&&d.length<65536&&(d.head.name+=String.fromCharCode(l)),l&&Y<W;);if(512&d.flags&&(d.check=o(d.check,M,Y,Z)),W-=Y,Z+=Y,l)break e}else d.head&&(d.head.name=null);d.length=0,d.mode=8;case 8:if(4096&d.flags){if(W===0)break e;for(Y=0;l=M[Z+Y++],d.head&&l&&d.length<65536&&(d.head.comment+=String.fromCharCode(l)),l&&Y<W;);if(512&d.flags&&(d.check=o(d.check,M,Y,Z)),W-=Y,Z+=Y,l)break e}else d.head&&(d.head.comment=null);d.mode=9;case 9:if(512&d.flags){for(;z<16;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}if(A!==(65535&d.check)){_.msg="header crc mismatch",d.mode=30;break}z=A=0}d.head&&(d.head.hcrc=d.flags>>9&1,d.head.done=!0),_.adler=d.check=0,d.mode=12;break;case 10:for(;z<32;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}_.adler=d.check=v(A),z=A=0,d.mode=11;case 11:if(d.havedict===0)return _.next_out=oe,_.avail_out=te,_.next_in=Z,_.avail_in=W,d.hold=A,d.bits=z,2;_.adler=d.check=1,d.mode=12;case 12:if(P===5||P===6)break e;case 13:if(d.last){A>>>=7&z,z-=7&z,d.mode=27;break}for(;z<3;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}switch(d.last=1&A,z-=1,3&(A>>>=1)){case 0:d.mode=14;break;case 1:if(O(d),d.mode=20,P!==6)break;A>>>=2,z-=2;break e;case 2:d.mode=17;break;case 3:_.msg="invalid block type",d.mode=30}A>>>=2,z-=2;break;case 14:for(A>>>=7&z,z-=7&z;z<32;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}if((65535&A)!=(A>>>16^65535)){_.msg="invalid stored block lengths",d.mode=30;break}if(d.length=65535&A,z=A=0,d.mode=15,P===6)break e;case 15:d.mode=16;case 16:if(Y=d.length){if(W<Y&&(Y=W),te<Y&&(Y=te),Y===0)break e;s.arraySet(ne,M,Z,Y,oe),W-=Y,Z+=Y,te-=Y,oe+=Y,d.length-=Y;break}d.mode=12;break;case 17:for(;z<14;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}if(d.nlen=257+(31&A),A>>>=5,z-=5,d.ndist=1+(31&A),A>>>=5,z-=5,d.ncode=4+(15&A),A>>>=4,z-=4,286<d.nlen||30<d.ndist){_.msg="too many length or distance symbols",d.mode=30;break}d.have=0,d.mode=18;case 18:for(;d.have<d.ncode;){for(;z<3;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}d.lens[$[d.have++]]=7&A,A>>>=3,z-=3}for(;d.have<19;)d.lens[$[d.have++]]=0;if(d.lencode=d.lendyn,d.lenbits=7,T={bits:d.lenbits},U=h(0,d.lens,0,19,d.lencode,0,d.work,T),d.lenbits=T.bits,U){_.msg="invalid code lengths set",d.mode=30;break}d.have=0,d.mode=19;case 19:for(;d.have<d.nlen+d.ndist;){for(;le=(w=d.lencode[A&(1<<d.lenbits)-1])>>>16&255,he=65535&w,!((se=w>>>24)<=z);){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}if(he<16)A>>>=se,z-=se,d.lens[d.have++]=he;else{if(he===16){for(k=se+2;z<k;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}if(A>>>=se,z-=se,d.have===0){_.msg="invalid bit length repeat",d.mode=30;break}l=d.lens[d.have-1],Y=3+(3&A),A>>>=2,z-=2}else if(he===17){for(k=se+3;z<k;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}z-=se,l=0,Y=3+(7&(A>>>=se)),A>>>=3,z-=3}else{for(k=se+7;z<k;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}z-=se,l=0,Y=11+(127&(A>>>=se)),A>>>=7,z-=7}if(d.have+Y>d.nlen+d.ndist){_.msg="invalid bit length repeat",d.mode=30;break}for(;Y--;)d.lens[d.have++]=l}}if(d.mode===30)break;if(d.lens[256]===0){_.msg="invalid code -- missing end-of-block",d.mode=30;break}if(d.lenbits=9,T={bits:d.lenbits},U=h(g,d.lens,0,d.nlen,d.lencode,0,d.work,T),d.lenbits=T.bits,U){_.msg="invalid literal/lengths set",d.mode=30;break}if(d.distbits=6,d.distcode=d.distdyn,T={bits:d.distbits},U=h(f,d.lens,d.nlen,d.ndist,d.distcode,0,d.work,T),d.distbits=T.bits,U){_.msg="invalid distances set",d.mode=30;break}if(d.mode=20,P===6)break e;case 20:d.mode=21;case 21:if(6<=W&&258<=te){_.next_out=oe,_.avail_out=te,_.next_in=Z,_.avail_in=W,d.hold=A,d.bits=z,u(_,G),oe=_.next_out,ne=_.output,te=_.avail_out,Z=_.next_in,M=_.input,W=_.avail_in,A=d.hold,z=d.bits,d.mode===12&&(d.back=-1);break}for(d.back=0;le=(w=d.lencode[A&(1<<d.lenbits)-1])>>>16&255,he=65535&w,!((se=w>>>24)<=z);){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}if(le&&!(240&le)){for(ue=se,ye=le,ke=he;le=(w=d.lencode[ke+((A&(1<<ue+ye)-1)>>ue)])>>>16&255,he=65535&w,!(ue+(se=w>>>24)<=z);){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}A>>>=ue,z-=ue,d.back+=ue}if(A>>>=se,z-=se,d.back+=se,d.length=he,le===0){d.mode=26;break}if(32&le){d.back=-1,d.mode=12;break}if(64&le){_.msg="invalid literal/length code",d.mode=30;break}d.extra=15&le,d.mode=22;case 22:if(d.extra){for(k=d.extra;z<k;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}d.length+=A&(1<<d.extra)-1,A>>>=d.extra,z-=d.extra,d.back+=d.extra}d.was=d.length,d.mode=23;case 23:for(;le=(w=d.distcode[A&(1<<d.distbits)-1])>>>16&255,he=65535&w,!((se=w>>>24)<=z);){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}if(!(240&le)){for(ue=se,ye=le,ke=he;le=(w=d.distcode[ke+((A&(1<<ue+ye)-1)>>ue)])>>>16&255,he=65535&w,!(ue+(se=w>>>24)<=z);){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}A>>>=ue,z-=ue,d.back+=ue}if(A>>>=se,z-=se,d.back+=se,64&le){_.msg="invalid distance code",d.mode=30;break}d.offset=he,d.extra=15&le,d.mode=24;case 24:if(d.extra){for(k=d.extra;z<k;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}d.offset+=A&(1<<d.extra)-1,A>>>=d.extra,z-=d.extra,d.back+=d.extra}if(d.offset>d.dmax){_.msg="invalid distance too far back",d.mode=30;break}d.mode=25;case 25:if(te===0)break e;if(Y=G-te,d.offset>Y){if((Y=d.offset-Y)>d.whave&&d.sane){_.msg="invalid distance too far back",d.mode=30;break}de=Y>d.wnext?(Y-=d.wnext,d.wsize-Y):d.wnext-Y,Y>d.length&&(Y=d.length),ve=d.window}else ve=ne,de=oe-d.offset,Y=d.length;for(te<Y&&(Y=te),te-=Y,d.length-=Y;ne[oe++]=ve[de++],--Y;);d.length===0&&(d.mode=21);break;case 26:if(te===0)break e;ne[oe++]=d.length,te--,d.mode=21;break;case 27:if(d.wrap){for(;z<32;){if(W===0)break e;W--,A|=M[Z++]<<z,z+=8}if(G-=te,_.total_out+=G,d.total+=G,G&&(_.adler=d.check=d.flags?o(d.check,ne,G,oe-G):c(d.check,ne,G,oe-G)),G=te,(d.flags?A:v(A))!==d.check){_.msg="incorrect data check",d.mode=30;break}z=A=0}d.mode=28;case 28:if(d.wrap&&d.flags){for(;z<32;){if(W===0)break e;W--,A+=M[Z++]<<z,z+=8}if(A!==(4294967295&d.total)){_.msg="incorrect length check",d.mode=30;break}z=A=0}d.mode=29;case 29:U=1;break e;case 30:U=-3;break e;case 31:return-4;case 32:default:return m}return _.next_out=oe,_.avail_out=te,_.next_in=Z,_.avail_in=W,d.hold=A,d.bits=z,(d.wsize||G!==_.avail_out&&d.mode<30&&(d.mode<27||P!==4))&&Q(_,_.output,_.next_out,G-_.avail_out)?(d.mode=31,-4):(J-=_.avail_in,G-=_.avail_out,_.total_in+=J,_.total_out+=G,d.total+=G,d.wrap&&G&&(_.adler=d.check=d.flags?o(d.check,ne,G,_.next_out-G):c(d.check,ne,G,_.next_out-G)),_.data_type=d.bits+(d.last?64:0)+(d.mode===12?128:0)+(d.mode===20||d.mode===15?256:0),(J==0&&G===0||P===4)&&U===y&&(U=-5),U)},n.inflateEnd=function(_){if(!_||!_.state)return m;var P=_.state;return P.window&&(P.window=null),_.state=null,y},n.inflateGetHeader=function(_,P){var d;return _&&_.state&&2&(d=_.state).wrap?((d.head=P).done=!1,y):m},n.inflateSetDictionary=function(_,P){var d,M=P.length;return _&&_.state?(d=_.state).wrap!==0&&d.mode!==11?m:d.mode===11&&c(1,P,M,0)!==d.check?-3:Q(_,P,M,M)?(d.mode=31,-4):(d.havedict=1,y):m},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(a,r,n){var s=a("../utils/common"),c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(g,f,y,m,x,p,b,v){var j,N,E,S,B,F,q,R,O,Q=v.bits,_=0,P=0,d=0,M=0,ne=0,Z=0,oe=0,W=0,te=0,A=0,z=null,J=0,G=new s.Buf16(16),Y=new s.Buf16(16),de=null,ve=0;for(_=0;_<=15;_++)G[_]=0;for(P=0;P<m;P++)G[f[y+P]]++;for(ne=Q,M=15;1<=M&&G[M]===0;M--);if(M<ne&&(ne=M),M===0)return x[p++]=20971520,x[p++]=20971520,v.bits=1,0;for(d=1;d<M&&G[d]===0;d++);for(ne<d&&(ne=d),_=W=1;_<=15;_++)if(W<<=1,(W-=G[_])<0)return-1;if(0<W&&(g===0||M!==1))return-1;for(Y[1]=0,_=1;_<15;_++)Y[_+1]=Y[_]+G[_];for(P=0;P<m;P++)f[y+P]!==0&&(b[Y[f[y+P]]++]=P);if(F=g===0?(z=de=b,19):g===1?(z=c,J-=257,de=o,ve-=257,256):(z=u,de=h,-1),_=d,B=p,oe=P=A=0,E=-1,S=(te=1<<(Z=ne))-1,g===1&&852<te||g===2&&592<te)return 1;for(;;){for(q=_-oe,O=b[P]<F?(R=0,b[P]):b[P]>F?(R=de[ve+b[P]],z[J+b[P]]):(R=96,0),j=1<<_-oe,d=N=1<<Z;x[B+(A>>oe)+(N-=j)]=q<<24|R<<16|O|0,N!==0;);for(j=1<<_-1;A&j;)j>>=1;if(j!==0?(A&=j-1,A+=j):A=0,P++,--G[_]==0){if(_===M)break;_=f[y+b[P]]}if(ne<_&&(A&S)!==E){for(oe===0&&(oe=ne),B+=d,W=1<<(Z=_-oe);Z+oe<M&&!((W-=G[Z+oe])<=0);)Z++,W<<=1;if(te+=1<<Z,g===1&&852<te||g===2&&592<te)return 1;x[E=A&S]=ne<<24|Z<<16|B-p|0}}return A!==0&&(x[B+A]=_-oe<<24|64<<16|0),v.bits=ne,0}},{"../utils/common":41}],51:[function(a,r,n){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(a,r,n){var s=a("../utils/common"),c=0,o=1;function u(w){for(var C=w.length;0<=--C;)w[C]=0}var h=0,g=29,f=256,y=f+1+g,m=30,x=19,p=2*y+1,b=15,v=16,j=7,N=256,E=16,S=17,B=18,F=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],q=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],R=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],O=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(y+2));u(Q);var _=new Array(2*m);u(_);var P=new Array(512);u(P);var d=new Array(256);u(d);var M=new Array(g);u(M);var ne,Z,oe,W=new Array(m);function te(w,C,$,H,D){this.static_tree=w,this.extra_bits=C,this.extra_base=$,this.elems=H,this.max_length=D,this.has_stree=w&&w.length}function A(w,C){this.dyn_tree=w,this.max_code=0,this.stat_desc=C}function z(w){return w<256?P[w]:P[256+(w>>>7)]}function J(w,C){w.pending_buf[w.pending++]=255&C,w.pending_buf[w.pending++]=C>>>8&255}function G(w,C,$){w.bi_valid>v-$?(w.bi_buf|=C<<w.bi_valid&65535,J(w,w.bi_buf),w.bi_buf=C>>v-w.bi_valid,w.bi_valid+=$-v):(w.bi_buf|=C<<w.bi_valid&65535,w.bi_valid+=$)}function Y(w,C,$){G(w,$[2*C],$[2*C+1])}function de(w,C){for(var $=0;$|=1&w,w>>>=1,$<<=1,0<--C;);return $>>>1}function ve(w,C,$){var H,D,X=new Array(b+1),I=0;for(H=1;H<=b;H++)X[H]=I=I+$[H-1]<<1;for(D=0;D<=C;D++){var L=w[2*D+1];L!==0&&(w[2*D]=de(X[L]++,L))}}function se(w){var C;for(C=0;C<y;C++)w.dyn_ltree[2*C]=0;for(C=0;C<m;C++)w.dyn_dtree[2*C]=0;for(C=0;C<x;C++)w.bl_tree[2*C]=0;w.dyn_ltree[2*N]=1,w.opt_len=w.static_len=0,w.last_lit=w.matches=0}function le(w){8<w.bi_valid?J(w,w.bi_buf):0<w.bi_valid&&(w.pending_buf[w.pending++]=w.bi_buf),w.bi_buf=0,w.bi_valid=0}function he(w,C,$,H){var D=2*C,X=2*$;return w[D]<w[X]||w[D]===w[X]&&H[C]<=H[$]}function ue(w,C,$){for(var H=w.heap[$],D=$<<1;D<=w.heap_len&&(D<w.heap_len&&he(C,w.heap[D+1],w.heap[D],w.depth)&&D++,!he(C,H,w.heap[D],w.depth));)w.heap[$]=w.heap[D],$=D,D<<=1;w.heap[$]=H}function ye(w,C,$){var H,D,X,I,L=0;if(w.last_lit!==0)for(;H=w.pending_buf[w.d_buf+2*L]<<8|w.pending_buf[w.d_buf+2*L+1],D=w.pending_buf[w.l_buf+L],L++,H===0?Y(w,D,C):(Y(w,(X=d[D])+f+1,C),(I=F[X])!==0&&G(w,D-=M[X],I),Y(w,X=z(--H),$),(I=q[X])!==0&&G(w,H-=W[X],I)),L<w.last_lit;);Y(w,N,C)}function ke(w,C){var $,H,D,X=C.dyn_tree,I=C.stat_desc.static_tree,L=C.stat_desc.has_stree,K=C.stat_desc.elems,re=-1;for(w.heap_len=0,w.heap_max=p,$=0;$<K;$++)X[2*$]!==0?(w.heap[++w.heap_len]=re=$,w.depth[$]=0):X[2*$+1]=0;for(;w.heap_len<2;)X[2*(D=w.heap[++w.heap_len]=re<2?++re:0)]=1,w.depth[D]=0,w.opt_len--,L&&(w.static_len-=I[2*D+1]);for(C.max_code=re,$=w.heap_len>>1;1<=$;$--)ue(w,X,$);for(D=K;$=w.heap[1],w.heap[1]=w.heap[w.heap_len--],ue(w,X,1),H=w.heap[1],w.heap[--w.heap_max]=$,w.heap[--w.heap_max]=H,X[2*D]=X[2*$]+X[2*H],w.depth[D]=(w.depth[$]>=w.depth[H]?w.depth[$]:w.depth[H])+1,X[2*$+1]=X[2*H+1]=D,w.heap[1]=D++,ue(w,X,1),2<=w.heap_len;);w.heap[--w.heap_max]=w.heap[1],function(ae,be){var Ee,_e,Fe,me,Ie,Re,Se=be.dyn_tree,Ue=be.max_code,We=be.stat_desc.static_tree,gt=be.stat_desc.has_stree,Ea=be.stat_desc.extra_bits,At=be.stat_desc.extra_base,He=be.stat_desc.max_length,Ke=0;for(me=0;me<=b;me++)ae.bl_count[me]=0;for(Se[2*ae.heap[ae.heap_max]+1]=0,Ee=ae.heap_max+1;Ee<p;Ee++)He<(me=Se[2*Se[2*(_e=ae.heap[Ee])+1]+1]+1)&&(me=He,Ke++),Se[2*_e+1]=me,Ue<_e||(ae.bl_count[me]++,Ie=0,At<=_e&&(Ie=Ea[_e-At]),Re=Se[2*_e],ae.opt_len+=Re*(me+Ie),gt&&(ae.static_len+=Re*(We[2*_e+1]+Ie)));if(Ke!==0){do{for(me=He-1;ae.bl_count[me]===0;)me--;ae.bl_count[me]--,ae.bl_count[me+1]+=2,ae.bl_count[He]--,Ke-=2}while(0<Ke);for(me=He;me!==0;me--)for(_e=ae.bl_count[me];_e!==0;)Ue<(Fe=ae.heap[--Ee])||(Se[2*Fe+1]!==me&&(ae.opt_len+=(me-Se[2*Fe+1])*Se[2*Fe],Se[2*Fe+1]=me),_e--)}}(w,C),ve(X,re,w.bl_count)}function l(w,C,$){var H,D,X=-1,I=C[1],L=0,K=7,re=4;for(I===0&&(K=138,re=3),C[2*($+1)+1]=65535,H=0;H<=$;H++)D=I,I=C[2*(H+1)+1],++L<K&&D===I||(L<re?w.bl_tree[2*D]+=L:D!==0?(D!==X&&w.bl_tree[2*D]++,w.bl_tree[2*E]++):L<=10?w.bl_tree[2*S]++:w.bl_tree[2*B]++,X=D,re=(L=0)===I?(K=138,3):D===I?(K=6,3):(K=7,4))}function U(w,C,$){var H,D,X=-1,I=C[1],L=0,K=7,re=4;for(I===0&&(K=138,re=3),H=0;H<=$;H++)if(D=I,I=C[2*(H+1)+1],!(++L<K&&D===I)){if(L<re)for(;Y(w,D,w.bl_tree),--L!=0;);else D!==0?(D!==X&&(Y(w,D,w.bl_tree),L--),Y(w,E,w.bl_tree),G(w,L-3,2)):L<=10?(Y(w,S,w.bl_tree),G(w,L-3,3)):(Y(w,B,w.bl_tree),G(w,L-11,7));X=D,re=(L=0)===I?(K=138,3):D===I?(K=6,3):(K=7,4)}}u(W);var T=!1;function k(w,C,$,H){G(w,(h<<1)+(H?1:0),3),function(D,X,I,L){le(D),J(D,I),J(D,~I),s.arraySet(D.pending_buf,D.window,X,I,D.pending),D.pending+=I}(w,C,$)}n._tr_init=function(w){T||(function(){var C,$,H,D,X,I=new Array(b+1);for(D=H=0;D<g-1;D++)for(M[D]=H,C=0;C<1<<F[D];C++)d[H++]=D;for(d[H-1]=D,D=X=0;D<16;D++)for(W[D]=X,C=0;C<1<<q[D];C++)P[X++]=D;for(X>>=7;D<m;D++)for(W[D]=X<<7,C=0;C<1<<q[D]-7;C++)P[256+X++]=D;for($=0;$<=b;$++)I[$]=0;for(C=0;C<=143;)Q[2*C+1]=8,C++,I[8]++;for(;C<=255;)Q[2*C+1]=9,C++,I[9]++;for(;C<=279;)Q[2*C+1]=7,C++,I[7]++;for(;C<=287;)Q[2*C+1]=8,C++,I[8]++;for(ve(Q,y+1,I),C=0;C<m;C++)_[2*C+1]=5,_[2*C]=de(C,5);ne=new te(Q,F,f+1,y,b),Z=new te(_,q,0,m,b),oe=new te(new Array(0),R,0,x,j)}(),T=!0),w.l_desc=new A(w.dyn_ltree,ne),w.d_desc=new A(w.dyn_dtree,Z),w.bl_desc=new A(w.bl_tree,oe),w.bi_buf=0,w.bi_valid=0,se(w)},n._tr_stored_block=k,n._tr_flush_block=function(w,C,$,H){var D,X,I=0;0<w.level?(w.strm.data_type===2&&(w.strm.data_type=function(L){var K,re=4093624447;for(K=0;K<=31;K++,re>>>=1)if(1&re&&L.dyn_ltree[2*K]!==0)return c;if(L.dyn_ltree[18]!==0||L.dyn_ltree[20]!==0||L.dyn_ltree[26]!==0)return o;for(K=32;K<f;K++)if(L.dyn_ltree[2*K]!==0)return o;return c}(w)),ke(w,w.l_desc),ke(w,w.d_desc),I=function(L){var K;for(l(L,L.dyn_ltree,L.l_desc.max_code),l(L,L.dyn_dtree,L.d_desc.max_code),ke(L,L.bl_desc),K=x-1;3<=K&&L.bl_tree[2*O[K]+1]===0;K--);return L.opt_len+=3*(K+1)+5+5+4,K}(w),D=w.opt_len+3+7>>>3,(X=w.static_len+3+7>>>3)<=D&&(D=X)):D=X=$+5,$+4<=D&&C!==-1?k(w,C,$,H):w.strategy===4||X===D?(G(w,2+(H?1:0),3),ye(w,Q,_)):(G(w,4+(H?1:0),3),function(L,K,re,ae){var be;for(G(L,K-257,5),G(L,re-1,5),G(L,ae-4,4),be=0;be<ae;be++)G(L,L.bl_tree[2*O[be]+1],3);U(L,L.dyn_ltree,K-1),U(L,L.dyn_dtree,re-1)}(w,w.l_desc.max_code+1,w.d_desc.max_code+1,I+1),ye(w,w.dyn_ltree,w.dyn_dtree)),se(w),H&&le(w)},n._tr_tally=function(w,C,$){return w.pending_buf[w.d_buf+2*w.last_lit]=C>>>8&255,w.pending_buf[w.d_buf+2*w.last_lit+1]=255&C,w.pending_buf[w.l_buf+w.last_lit]=255&$,w.last_lit++,C===0?w.dyn_ltree[2*$]++:(w.matches++,C--,w.dyn_ltree[2*(d[$]+f+1)]++,w.dyn_dtree[2*z(C)]++),w.last_lit===w.lit_bufsize-1},n._tr_align=function(w){G(w,2,3),Y(w,N,Q),function(C){C.bi_valid===16?(J(C,C.bi_buf),C.bi_buf=0,C.bi_valid=0):8<=C.bi_valid&&(C.pending_buf[C.pending++]=255&C.bi_buf,C.bi_buf>>=8,C.bi_valid-=8)}(w)}},{"../utils/common":41}],53:[function(a,r,n){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(a,r,n){(function(s){(function(c,o){if(!c.setImmediate){var u,h,g,f,y=1,m={},x=!1,p=c.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(c);b=b&&b.setTimeout?b:c,u={}.toString.call(c.process)==="[object process]"?function(E){process.nextTick(function(){j(E)})}:function(){if(c.postMessage&&!c.importScripts){var E=!0,S=c.onmessage;return c.onmessage=function(){E=!1},c.postMessage("","*"),c.onmessage=S,E}}()?(f="setImmediate$"+Math.random()+"$",c.addEventListener?c.addEventListener("message",N,!1):c.attachEvent("onmessage",N),function(E){c.postMessage(f+E,"*")}):c.MessageChannel?((g=new MessageChannel).port1.onmessage=function(E){j(E.data)},function(E){g.port2.postMessage(E)}):p&&"onreadystatechange"in p.createElement("script")?(h=p.documentElement,function(E){var S=p.createElement("script");S.onreadystatechange=function(){j(E),S.onreadystatechange=null,h.removeChild(S),S=null},h.appendChild(S)}):function(E){setTimeout(j,0,E)},b.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var S=new Array(arguments.length-1),B=0;B<S.length;B++)S[B]=arguments[B+1];var F={callback:E,args:S};return m[y]=F,u(y),y++},b.clearImmediate=v}function v(E){delete m[E]}function j(E){if(x)setTimeout(j,0,E);else{var S=m[E];if(S){x=!0;try{(function(B){var F=B.callback,q=B.args;switch(q.length){case 0:F();break;case 1:F(q[0]);break;case 2:F(q[0],q[1]);break;case 3:F(q[0],q[1],q[2]);break;default:F.apply(o,q)}})(S)}finally{v(E),x=!1}}}}function N(E){E.source===c&&typeof E.data=="string"&&E.data.indexOf(f)===0&&j(+E.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Qe<"u"?Qe:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(pa);var mi=pa.exports;const hi=Jt(mi);let et;const fi=new Uint8Array(16);function gi(){if(!et&&(et=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!et))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return et(fi)}const we=[];for(let e=0;e<256;++e)we.push((e+256).toString(16).slice(1));function xi(e,i=0){return we[e[i+0]]+we[e[i+1]]+we[e[i+2]]+we[e[i+3]]+"-"+we[e[i+4]]+we[e[i+5]]+"-"+we[e[i+6]]+we[e[i+7]]+"-"+we[e[i+8]]+we[e[i+9]]+"-"+we[e[i+10]]+we[e[i+11]]+we[e[i+12]]+we[e[i+13]]+we[e[i+14]]+we[e[i+15]]}const vi=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Tt={randomUUID:vi};function yt(e,i,a){if(Tt.randomUUID&&!i&&!e)return Tt.randomUUID();e=e||{};const r=e.random||(e.rng||gi)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,xi(r)}class bi{constructor(){this.images=new Map}async addImage(i){const a=yt(),r=URL.createObjectURL(i),n={id:a,originalName:i.name,previewUrl:r,blob:i};return this.images.set(a,n),n}async addStorageImage(i,a){const r=yt(),n=URL.createObjectURL(i),s={id:r,originalName:a,previewUrl:n,blob:i};return this.images.set(r,s),s}getImage(i){return this.images.get(i)}getAllImages(){return Array.from(this.images.values())}clear(){for(const i of this.images.values())URL.revokeObjectURL(i.previewUrl);this.images.clear()}}class yi{constructor(){this.downloadMode=!1,this.imageMap=new Map}setDownloadMode(i){this.downloadMode=i}addImage(i,a){this.imageMap.set(i,a)}transformHtml(i){return this.downloadMode&&(i=i.replace(/<img[^>]+src="(blob:[^"]+)"[^>]*>/g,(a,r)=>{const n=this.imageMap.get(r);return n?a.replace(r,`images/${n.originalName}`):a}),i=i.replace(/background-image:\s*url\(['"]?(blob:[^'"\)]+)['"]?\)/g,(a,r)=>{const n=this.imageMap.get(r);return n?`background-image: url('images/${n.originalName}')`:a}),i=i.replace(/style="[^"]*background-image:\s*url\(['"]?(blob:[^'"\)]+)['"]?\)[^"]*"/g,(a,r)=>{const n=this.imageMap.get(r);return n?a.replace(r,`images/${n.originalName}`):a})),i}clear(){this.imageMap.clear()}}class Dt{constructor(){this.html="",this.images=new Map,this.imageManager=new bi,this.imageTransformer=new yi}setHtml(i){this.html=i}async addImage(i,a){const r=await this.imageManager.addImage(i),n=r.previewUrl;return this.imageTransformer.addImage(n,r),this.images.set(a,{image:r,localPath:a,previewUrl:n}),{previewUrl:n,localPath:a}}async addStorageImage(i,a){const r=await this.imageManager.addStorageImage(i,a),n=`images/${a}`;this.imageTransformer.addImage(r.previewUrl,r),this.images.set(n,{image:r,localPath:n,previewUrl:r.previewUrl})}async build(){const i=new hi,a=i.folder("template");if(!a)throw new Error("Failed to create template folder");const r=a.folder("images");if(!r)throw new Error("Failed to create images folder");this.imageTransformer.setDownloadMode(!0);let n=this.imageTransformer.transformHtml(this.html);for(const[s,{image:c}]of this.images.entries()){const o=s.split("/").pop()||c.originalName;r.file(o,c.blob)}return a.file("index.html",n),await i.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:9}})}clear(){this.imageManager.clear(),this.images.clear(),this.imageTransformer.clear(),this.html=""}}class wi{constructor(){this.isDownloading=!1,this.templateBuilder=new Dt}setDownloadMode(i){this.isDownloading=i}async processImagePath(i,a){return i?!this.isDownloading&&(i.startsWith("blob:")||i.startsWith("http"))?i:this.isDownloading?`images/${i.split("/").pop()||""}`:a:a}async processProductImages(i){return i.map(a=>({...a,images:a.images.map(r=>{if(!this.isDownloading&&(r.startsWith("blob:")||r.startsWith("http")))return r;const n=r.split("/").pop()||"";return this.isDownloading?`images/${n}`:r})}))}}const Te=new wi;class ua{constructor(){this.templateBuilder=new Dt}async renderPreview(i,a){return Te.setDownloadMode(!1),i.generate(a)}async renderDownload(i,a){Te.setDownloadMode(!0);try{return await i.generate(a)}finally{Te.setDownloadMode(!1)}}}const ji=new ua;function ki({template:e,onClose:i,onSelect:a}){const[r,n]=V.useState("");return V.useEffect(()=>{(async()=>{try{const c=await ji.renderPreview(e,e.defaultValues);n(c)}catch(c){console.error("Error generating preview:",c)}})()},[e]),t.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-6",onClick:s=>{s.target===s.currentTarget&&i()},children:[t.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),t.jsxs("div",{className:"relative w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[85vh]",children:[t.jsx("div",{className:"absolute top-4 right-4 z-10",children:t.jsx("button",{onClick:i,className:"p-2 hover:bg-black/20 rounded-full transition-colors",children:t.jsx(Be,{className:"w-5 h-5 text-white"})})}),t.jsx("div",{className:"flex-1 overflow-hidden",children:t.jsx("iframe",{srcDoc:r,className:"w-full h-full border-0",title:`Preview do template ${e.name}`})}),t.jsxs("div",{className:"p-4 border-t border-gray-200 bg-white flex items-center justify-end gap-3",children:[t.jsx("button",{onClick:i,className:`min-w-[120px] h-11 rounded-md border border-gray-900 bg-transparent text-gray-900 text-sm font-medium
              transition-colors hover:bg-gray-50`,children:"Voltar"}),t.jsx("button",{onClick:()=>{i(),a(e)},className:`min-w-[120px] h-11 rounded-md bg-gray-900 text-white text-sm font-medium
              transition-colors hover:bg-gray-800`,children:"Selecionar"})]})]})]})}function _i({template:e,onSelect:i}){const[a,r]=V.useState(!1),[n,s]=V.useState(!1),[c,o]=V.useState("");return V.useEffect(()=>{(async()=>{try{const h=await e.generate(e.defaultValues);o(h)}catch(h){console.error("Error generating preview:",h)}})()},[e]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"relative rounded-xl overflow-hidden bg-white border border-gray-200 transition-shadow hover:shadow-lg",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[t.jsx("div",{className:"aspect-square w-full overflow-hidden",children:t.jsx("div",{className:"w-full h-full relative",children:t.jsx("iframe",{srcDoc:c,className:"w-[250%] h-[250%] scale-[0.4] origin-top-left border-0 pointer-events-none",title:`Preview do template ${e.name}`})})}),t.jsx("div",{className:"p-3 border-t bg-white",children:t.jsx("h3",{className:"font-medium text-gray-900 text-sm",children:e.name})}),t.jsxs("div",{className:`
            absolute inset-0 flex flex-col items-center justify-center gap-3
            bg-black/40 backdrop-blur-sm transition-opacity duration-200
            ${a?"opacity-100":"opacity-0 pointer-events-none"}
          `,children:[t.jsx("button",{onClick:()=>s(!0),className:`w-32 h-10 rounded-md border border-white text-white text-base font-medium
              transition-colors hover:bg-white/10`,children:"Visualizar"}),t.jsx("button",{onClick:()=>i(e),className:`w-32 h-10 rounded-md bg-white text-gray-900 text-base font-medium
              transition-colors hover:bg-gray-100`,children:"Selecionar"})]})]}),n&&t.jsx(ki,{template:e,onClose:()=>s(!1),onSelect:i})]})}function Ni(){return t.jsxs("div",{className:"relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-900",children:[t.jsxs("div",{className:"relative z-10 flex items-center",children:[t.jsx("div",{className:"flex-1 px-8 py-12 lg:px-12",children:t.jsxs("div",{className:"max-w-xl",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[t.jsx(Ct,{className:"w-5 h-5 text-indigo-200"}),t.jsx("span",{className:"text-indigo-200 font-medium",children:"Crie experiências únicas"})]}),t.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-sora font-bold text-white mb-4",children:"Potencialize seus resultados com templates profissionais"}),t.jsx("p",{className:"text-base sm:text-lg text-indigo-100",children:"Escolha, personalize e publique templates otimizados para maximizar suas conversões e engajamento"})]})}),t.jsx("div",{className:"hidden lg:block relative flex-1 h-full",children:t.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:t.jsxs("div",{className:"relative w-full max-w-lg",children:[t.jsx("div",{className:"absolute inset-0 grid grid-cols-6 gap-3 transform rotate-12 opacity-20",children:Array.from({length:24}).map((e,i)=>t.jsx("div",{className:"h-12 rounded-lg bg-white"},i))}),t.jsxs("div",{className:"absolute inset-0",children:[t.jsx("div",{className:"absolute top-1/4 left-1/4 w-20 h-20 bg-indigo-400/30 rounded-lg backdrop-blur-xl animate-float"}),t.jsx("div",{className:"absolute top-1/2 right-1/3 w-24 h-24 bg-indigo-300/20 rounded-lg backdrop-blur-xl animate-float-delayed"}),t.jsx("div",{className:"absolute bottom-1/3 right-1/4 w-16 h-16 bg-indigo-200/20 rounded-lg backdrop-blur-xl animate-float"})]})]})})})]}),t.jsx("div",{className:"absolute right-0 top-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-indigo-400/20 to-transparent blur-3xl"}),t.jsx("div",{className:"absolute left-0 bottom-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-indigo-500/20 to-transparent blur-3xl"})]})}function Ci({templates:e,onSelectTemplate:i}){return t.jsxs("div",{className:"w-full max-w-[1600px] mx-auto space-y-8",children:[t.jsx(Ni,{}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:e.map(a=>t.jsx(_i,{template:a,onSelect:i},a.id))})]})}function ce({className:e,variant:i="primary",size:a="md",...r}){return t.jsx("button",{className:ge("inline-flex items-center justify-center rounded-md font-medium transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",{"bg-indigo-600 text-white hover:bg-indigo-700":i==="primary","bg-gray-100 text-gray-900 hover:bg-gray-200":i==="secondary","border border-gray-300 bg-transparent hover:bg-gray-50":i==="outline","h-8 px-3 text-sm":a==="sm","h-10 px-4":a==="md","h-12 px-6 text-lg":a==="lg"},e),...r})}function Ge({isOpen:e,onClose:i,title:a,description:r,children:n}){return e?t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50",children:t.jsxs("div",{className:"relative w-full max-w-md bg-white rounded-lg shadow-lg",children:[t.jsx("button",{onClick:i,className:"absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors",children:t.jsx(Be,{className:"w-4 h-4 text-gray-500"})}),t.jsxs("div",{className:"p-6",children:[t.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-2",children:a}),r&&t.jsx("p",{className:"text-sm text-gray-600 mb-4",children:r}),n]})]})}):null}function ft({isOpen:e,onClose:i,onConfirm:a,title:r,description:n,confirmText:s="Confirmar",cancelText:c="Cancelar"}){return t.jsxs(Ge,{isOpen:e,onClose:i,title:r,children:[t.jsxs("div",{className:"mt-2 flex items-center gap-3 text-gray-600",children:[t.jsx(Ye,{className:"w-5 h-5 text-amber-500 flex-shrink-0"}),t.jsx("p",{children:n})]}),t.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[t.jsx(ce,{variant:"outline",onClick:i,children:c}),t.jsx(ce,{variant:"primary",onClick:a,children:s})]})]})}function xe({label:e,value:i,onChange:a}){return t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:e}),t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx("div",{className:"relative",children:t.jsx("input",{type:"color",value:i,onChange:r=>a(r.target.value),className:"h-8 w-8 rounded cursor-pointer border border-gray-300"})}),t.jsx("input",{type:"text",value:i.toUpperCase(),onChange:r=>a(r.target.value),className:"flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm uppercase",pattern:"^#[0-9A-Fa-f]{6}$",maxLength:7})]})]})}function ee({label:e,error:i,className:a,multiline:r=!1,rows:n=3,value:s,onChange:c,...o}){const u=()=>{const g={target:{value:""}};c==null||c(g)},h=ge("w-full rounded-md shadow-sm text-sm p-3 pr-10","border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",i&&"border-red-300 focus:border-red-500 focus:ring-red-500",a);return t.jsxs("div",{className:"space-y-1",children:[e&&t.jsx("label",{className:"block text-sm font-medium text-gray-700",children:e}),t.jsxs("div",{className:"relative",children:[r?t.jsx("textarea",{value:s,onChange:c,rows:n,className:h,...o}):t.jsx("input",{type:"text",value:s,onChange:c,className:h,...o}),s&&t.jsx("button",{type:"button",onClick:u,className:"absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors",title:"Limpar",children:t.jsx(Be,{className:"w-4 h-4 text-gray-400"})})]}),i&&t.jsx("p",{className:"text-sm text-red-600",children:i})]})}var ma={exports:{}},Si="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ei=Si,Di=Ei;function ha(){}function fa(){}fa.resetWarningCache=ha;var zi=function(){function e(r,n,s,c,o,u){if(u!==Di){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function i(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:i,element:e,elementType:e,instanceOf:i,node:e,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:fa,resetWarningCache:ha};return a.PropTypes=a,a};ma.exports=zi();var Pi=ma.exports;const pe=Jt(Pi);function Me(e,i,a,r){function n(s){return s instanceof a?s:new a(function(c){c(s)})}return new(a||(a=Promise))(function(s,c){function o(g){try{h(r.next(g))}catch(f){c(f)}}function u(g){try{h(r.throw(g))}catch(f){c(f)}}function h(g){g.done?s(g.value):n(g.value).then(o,u)}h((r=r.apply(e,i||[])).next())})}const Ai=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function qe(e,i,a){const r=Fi(e),{webkitRelativePath:n}=e,s=typeof i=="string"?i:typeof n=="string"&&n.length>0?n:`./${e.name}`;return typeof r.path!="string"&&Ot(r,"path",s),Ot(r,"relativePath",s),r}function Fi(e){const{name:i}=e;if(i&&i.lastIndexOf(".")!==-1&&!e.type){const r=i.split(".").pop().toLowerCase(),n=Ai.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}function Ot(e,i,a){Object.defineProperty(e,i,{value:a,writable:!1,configurable:!1,enumerable:!0})}const Ii=[".DS_Store","Thumbs.db"];function Ti(e){return Me(this,void 0,void 0,function*(){return st(e)&&Oi(e.dataTransfer)?Mi(e.dataTransfer,e.type):Ri(e)?Li(e):Array.isArray(e)&&e.every(i=>"getFile"in i&&typeof i.getFile=="function")?Bi(e):[]})}function Oi(e){return st(e)}function Ri(e){return st(e)&&st(e.target)}function st(e){return typeof e=="object"&&e!==null}function Li(e){return wt(e.target.files).map(i=>qe(i))}function Bi(e){return Me(this,void 0,void 0,function*(){return(yield Promise.all(e.map(a=>a.getFile()))).map(a=>qe(a))})}function Mi(e,i){return Me(this,void 0,void 0,function*(){if(e.items){const a=wt(e.items).filter(n=>n.kind==="file");if(i!=="drop")return a;const r=yield Promise.all(a.map(Ui));return Rt(ga(r))}return Rt(wt(e.files).map(a=>qe(a)))})}function Rt(e){return e.filter(i=>Ii.indexOf(i.name)===-1)}function wt(e){if(e===null)return[];const i=[];for(let a=0;a<e.length;a++){const r=e[a];i.push(r)}return i}function Ui(e){if(typeof e.webkitGetAsEntry!="function")return Lt(e);const i=e.webkitGetAsEntry();return i&&i.isDirectory?xa(i):Lt(e,i)}function ga(e){return e.reduce((i,a)=>[...i,...Array.isArray(a)?ga(a):[a]],[])}function Lt(e,i){return Me(this,void 0,void 0,function*(){var a;if(globalThis.isSecureContext&&typeof e.getAsFileSystemHandle=="function"){const s=yield e.getAsFileSystemHandle();if(s===null)throw new Error(`${e} is not a File`);if(s!==void 0){const c=yield s.getFile();return c.handle=s,qe(c)}}const r=e.getAsFile();if(!r)throw new Error(`${e} is not a File`);return qe(r,(a=i==null?void 0:i.fullPath)!==null&&a!==void 0?a:void 0)})}function $i(e){return Me(this,void 0,void 0,function*(){return e.isDirectory?xa(e):qi(e)})}function xa(e){const i=e.createReader();return new Promise((a,r)=>{const n=[];function s(){i.readEntries(c=>Me(this,void 0,void 0,function*(){if(c.length){const o=Promise.all(c.map($i));n.push(o),s()}else try{const o=yield Promise.all(n);a(o)}catch(o){r(o)}}),c=>{r(c)})}s()})}function qi(e){return Me(this,void 0,void 0,function*(){return new Promise((i,a)=>{e.file(r=>{const n=qe(r,e.fullPath);i(n)},r=>{a(r)})})})}var xt=function(e,i){if(e&&i){var a=Array.isArray(i)?i:i.split(",");if(a.length===0)return!0;var r=e.name||"",n=(e.type||"").toLowerCase(),s=n.replace(/\/.*$/,"");return a.some(function(c){var o=c.trim().toLowerCase();return o.charAt(0)==="."?r.toLowerCase().endsWith(o):o.endsWith("/*")?s===o.replace(/\/.*$/,""):n===o})}return!0};function Bt(e){return Vi(e)||Hi(e)||ba(e)||Wi()}function Wi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vi(e){if(Array.isArray(e))return jt(e)}function Mt(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function Ut(e){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Mt(Object(a),!0).forEach(function(r){va(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Mt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function va(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}function Xe(e,i){return Yi(e)||Xi(e,i)||ba(e,i)||Zi()}function Zi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ba(e,i){if(e){if(typeof e=="string")return jt(e,i);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return jt(e,i)}}function jt(e,i){(i==null||i>e.length)&&(i=e.length);for(var a=0,r=new Array(i);a<i;a++)r[a]=e[a];return r}function Xi(e,i){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r=[],n=!0,s=!1,c,o;try{for(a=a.call(e);!(n=(c=a.next()).done)&&(r.push(c.value),!(i&&r.length===i));n=!0);}catch(u){s=!0,o=u}finally{try{!n&&a.return!=null&&a.return()}finally{if(s)throw o}}return r}}function Yi(e){if(Array.isArray(e))return e}var Gi=typeof xt=="function"?xt:xt.default,Ki="file-invalid-type",Qi="file-too-large",Ji="file-too-small",en="too-many-files",tn=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=i.split(","),r=a.length>1?"one of ".concat(a.join(", ")):a[0];return{code:Ki,message:"File type must be ".concat(r)}},$t=function(i){return{code:Qi,message:"File is larger than ".concat(i," ").concat(i===1?"byte":"bytes")}},qt=function(i){return{code:Ji,message:"File is smaller than ".concat(i," ").concat(i===1?"byte":"bytes")}},an={code:en,message:"Too many files"};function ya(e,i){var a=e.type==="application/x-moz-file"||Gi(e,i);return[a,a?null:tn(i)]}function wa(e,i,a){if(Le(e.size))if(Le(i)&&Le(a)){if(e.size>a)return[!1,$t(a)];if(e.size<i)return[!1,qt(i)]}else{if(Le(i)&&e.size<i)return[!1,qt(i)];if(Le(a)&&e.size>a)return[!1,$t(a)]}return[!0,null]}function Le(e){return e!=null}function nn(e){var i=e.files,a=e.accept,r=e.minSize,n=e.maxSize,s=e.multiple,c=e.maxFiles,o=e.validator;return!s&&i.length>1||s&&c>=1&&i.length>c?!1:i.every(function(u){var h=ya(u,a),g=Xe(h,1),f=g[0],y=wa(u,r,n),m=Xe(y,1),x=m[0],p=o?o(u):null;return f&&x&&!p})}function lt(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function tt(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(i){return i==="Files"||i==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Wt(e){e.preventDefault()}function rn(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function on(e){return e.indexOf("Edge/")!==-1}function sn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return rn(e)||on(e)}function De(){for(var e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];return function(r){for(var n=arguments.length,s=new Array(n>1?n-1:0),c=1;c<n;c++)s[c-1]=arguments[c];return i.some(function(o){return!lt(r)&&o&&o.apply(void 0,[r].concat(s)),lt(r)})}}function ln(){return"showOpenFilePicker"in window}function cn(e){if(Le(e)){var i=Object.entries(e).filter(function(a){var r=Xe(a,2),n=r[0],s=r[1],c=!0;return ja(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(s)||!s.every(ka))&&(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(a,r){var n=Xe(r,2),s=n[0],c=n[1];return Ut(Ut({},a),{},va({},s,c))},{});return[{description:"Files",accept:i}]}return e}function dn(e){if(Le(e))return Object.entries(e).reduce(function(i,a){var r=Xe(a,2),n=r[0],s=r[1];return[].concat(Bt(i),[n],Bt(s))},[]).filter(function(i){return ja(i)||ka(i)}).join(",")}function pn(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function un(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function ja(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||e==="application/*"||/\w+\/[-+.\w]+/g.test(e)}function ka(e){return/^.*\.[\w]+$/.test(e)}var mn=["children"],hn=["open"],fn=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],gn=["refKey","onChange","onClick"];function xn(e){return yn(e)||bn(e)||_a(e)||vn()}function vn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yn(e){if(Array.isArray(e))return kt(e)}function vt(e,i){return kn(e)||jn(e,i)||_a(e,i)||wn()}function wn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _a(e,i){if(e){if(typeof e=="string")return kt(e,i);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return kt(e,i)}}function kt(e,i){(i==null||i>e.length)&&(i=e.length);for(var a=0,r=new Array(i);a<i;a++)r[a]=e[a];return r}function jn(e,i){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r=[],n=!0,s=!1,c,o;try{for(a=a.call(e);!(n=(c=a.next()).done)&&(r.push(c.value),!(i&&r.length===i));n=!0);}catch(u){s=!0,o=u}finally{try{!n&&a.return!=null&&a.return()}finally{if(s)throw o}}return r}}function kn(e){if(Array.isArray(e))return e}function Ht(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function fe(e){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Ht(Object(a),!0).forEach(function(r){_t(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ht(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function _t(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}function ct(e,i){if(e==null)return{};var a=_n(e,i),r,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(i.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function _n(e,i){if(e==null)return{};var a={},r=Object.keys(e),n,s;for(s=0;s<r.length;s++)n=r[s],!(i.indexOf(n)>=0)&&(a[n]=e[n]);return a}var zt=V.forwardRef(function(e,i){var a=e.children,r=ct(e,mn),n=Ca(r),s=n.open,c=ct(n,hn);return V.useImperativeHandle(i,function(){return{open:s}},[s]),Ne.createElement(V.Fragment,null,a(fe(fe({},c),{},{open:s})))});zt.displayName="Dropzone";var Na={disabled:!1,getFilesFromEvent:Ti,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};zt.defaultProps=Na;zt.propTypes={children:pe.func,accept:pe.objectOf(pe.arrayOf(pe.string)),multiple:pe.bool,preventDropOnDocument:pe.bool,noClick:pe.bool,noKeyboard:pe.bool,noDrag:pe.bool,noDragEventsBubbling:pe.bool,minSize:pe.number,maxSize:pe.number,maxFiles:pe.number,disabled:pe.bool,getFilesFromEvent:pe.func,onFileDialogCancel:pe.func,onFileDialogOpen:pe.func,useFsAccessApi:pe.bool,autoFocus:pe.bool,onDragEnter:pe.func,onDragLeave:pe.func,onDragOver:pe.func,onDrop:pe.func,onDropAccepted:pe.func,onDropRejected:pe.func,onError:pe.func,validator:pe.func};var Nt={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Ca(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=fe(fe({},Na),e),a=i.accept,r=i.disabled,n=i.getFilesFromEvent,s=i.maxSize,c=i.minSize,o=i.multiple,u=i.maxFiles,h=i.onDragEnter,g=i.onDragLeave,f=i.onDragOver,y=i.onDrop,m=i.onDropAccepted,x=i.onDropRejected,p=i.onFileDialogCancel,b=i.onFileDialogOpen,v=i.useFsAccessApi,j=i.autoFocus,N=i.preventDropOnDocument,E=i.noClick,S=i.noKeyboard,B=i.noDrag,F=i.noDragEventsBubbling,q=i.onError,R=i.validator,O=V.useMemo(function(){return dn(a)},[a]),Q=V.useMemo(function(){return cn(a)},[a]),_=V.useMemo(function(){return typeof b=="function"?b:Vt},[b]),P=V.useMemo(function(){return typeof p=="function"?p:Vt},[p]),d=V.useRef(null),M=V.useRef(null),ne=V.useReducer(Nn,Nt),Z=vt(ne,2),oe=Z[0],W=Z[1],te=oe.isFocused,A=oe.isFileDialogActive,z=V.useRef(typeof window<"u"&&window.isSecureContext&&v&&ln()),J=function(){!z.current&&A&&setTimeout(function(){if(M.current){var L=M.current.files;L.length||(W({type:"closeDialog"}),P())}},300)};V.useEffect(function(){return window.addEventListener("focus",J,!1),function(){window.removeEventListener("focus",J,!1)}},[M,A,P,z]);var G=V.useRef([]),Y=function(L){d.current&&d.current.contains(L.target)||(L.preventDefault(),G.current=[])};V.useEffect(function(){return N&&(document.addEventListener("dragover",Wt,!1),document.addEventListener("drop",Y,!1)),function(){N&&(document.removeEventListener("dragover",Wt),document.removeEventListener("drop",Y))}},[d,N]),V.useEffect(function(){return!r&&j&&d.current&&d.current.focus(),function(){}},[d,j,r]);var de=V.useCallback(function(I){q?q(I):console.error(I)},[q]),ve=V.useCallback(function(I){I.preventDefault(),I.persist(),$(I),G.current=[].concat(xn(G.current),[I.target]),tt(I)&&Promise.resolve(n(I)).then(function(L){if(!(lt(I)&&!F)){var K=L.length,re=K>0&&nn({files:L,accept:O,minSize:c,maxSize:s,multiple:o,maxFiles:u,validator:R}),ae=K>0&&!re;W({isDragAccept:re,isDragReject:ae,isDragActive:!0,type:"setDraggedFiles"}),h&&h(I)}}).catch(function(L){return de(L)})},[n,h,de,F,O,c,s,o,u,R]),se=V.useCallback(function(I){I.preventDefault(),I.persist(),$(I);var L=tt(I);if(L&&I.dataTransfer)try{I.dataTransfer.dropEffect="copy"}catch{}return L&&f&&f(I),!1},[f,F]),le=V.useCallback(function(I){I.preventDefault(),I.persist(),$(I);var L=G.current.filter(function(re){return d.current&&d.current.contains(re)}),K=L.indexOf(I.target);K!==-1&&L.splice(K,1),G.current=L,!(L.length>0)&&(W({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),tt(I)&&g&&g(I))},[d,g,F]),he=V.useCallback(function(I,L){var K=[],re=[];I.forEach(function(ae){var be=ya(ae,O),Ee=vt(be,2),_e=Ee[0],Fe=Ee[1],me=wa(ae,c,s),Ie=vt(me,2),Re=Ie[0],Se=Ie[1],Ue=R?R(ae):null;if(_e&&Re&&!Ue)K.push(ae);else{var We=[Fe,Se];Ue&&(We=We.concat(Ue)),re.push({file:ae,errors:We.filter(function(gt){return gt})})}}),(!o&&K.length>1||o&&u>=1&&K.length>u)&&(K.forEach(function(ae){re.push({file:ae,errors:[an]})}),K.splice(0)),W({acceptedFiles:K,fileRejections:re,isDragReject:re.length>0,type:"setFiles"}),y&&y(K,re,L),re.length>0&&x&&x(re,L),K.length>0&&m&&m(K,L)},[W,o,O,c,s,u,y,m,x,R]),ue=V.useCallback(function(I){I.preventDefault(),I.persist(),$(I),G.current=[],tt(I)&&Promise.resolve(n(I)).then(function(L){lt(I)&&!F||he(L,I)}).catch(function(L){return de(L)}),W({type:"reset"})},[n,he,de,F]),ye=V.useCallback(function(){if(z.current){W({type:"openDialog"}),_();var I={multiple:o,types:Q};window.showOpenFilePicker(I).then(function(L){return n(L)}).then(function(L){he(L,null),W({type:"closeDialog"})}).catch(function(L){pn(L)?(P(L),W({type:"closeDialog"})):un(L)?(z.current=!1,M.current?(M.current.value=null,M.current.click()):de(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):de(L)});return}M.current&&(W({type:"openDialog"}),_(),M.current.value=null,M.current.click())},[W,_,P,v,he,de,Q,o]),ke=V.useCallback(function(I){!d.current||!d.current.isEqualNode(I.target)||(I.key===" "||I.key==="Enter"||I.keyCode===32||I.keyCode===13)&&(I.preventDefault(),ye())},[d,ye]),l=V.useCallback(function(){W({type:"focus"})},[]),U=V.useCallback(function(){W({type:"blur"})},[]),T=V.useCallback(function(){E||(sn()?setTimeout(ye,0):ye())},[E,ye]),k=function(L){return r?null:L},w=function(L){return S?null:k(L)},C=function(L){return B?null:k(L)},$=function(L){F&&L.stopPropagation()},H=V.useMemo(function(){return function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},L=I.refKey,K=L===void 0?"ref":L,re=I.role,ae=I.onKeyDown,be=I.onFocus,Ee=I.onBlur,_e=I.onClick,Fe=I.onDragEnter,me=I.onDragOver,Ie=I.onDragLeave,Re=I.onDrop,Se=ct(I,fn);return fe(fe(_t({onKeyDown:w(De(ae,ke)),onFocus:w(De(be,l)),onBlur:w(De(Ee,U)),onClick:k(De(_e,T)),onDragEnter:C(De(Fe,ve)),onDragOver:C(De(me,se)),onDragLeave:C(De(Ie,le)),onDrop:C(De(Re,ue)),role:typeof re=="string"&&re!==""?re:"presentation"},K,d),!r&&!S?{tabIndex:0}:{}),Se)}},[d,ke,l,U,T,ve,se,le,ue,S,B,r]),D=V.useCallback(function(I){I.stopPropagation()},[]),X=V.useMemo(function(){return function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},L=I.refKey,K=L===void 0?"ref":L,re=I.onChange,ae=I.onClick,be=ct(I,gn),Ee=_t({accept:O,multiple:o,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:k(De(re,ue)),onClick:k(De(ae,D)),tabIndex:-1},K,M);return fe(fe({},Ee),be)}},[M,a,o,ue,r]);return fe(fe({},oe),{},{isFocused:te&&!r,getRootProps:H,getInputProps:X,rootRef:d,inputRef:M,open:k(ye)})}function Nn(e,i){switch(i.type){case"focus":return fe(fe({},e),{},{isFocused:!0});case"blur":return fe(fe({},e),{},{isFocused:!1});case"openDialog":return fe(fe({},Nt),{},{isFileDialogActive:!0});case"closeDialog":return fe(fe({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return fe(fe({},e),{},{isDragActive:i.isDragActive,isDragAccept:i.isDragAccept,isDragReject:i.isDragReject});case"setFiles":return fe(fe({},e),{},{acceptedFiles:i.acceptedFiles,fileRejections:i.fileRejections,isDragReject:i.isDragReject});case"reset":return fe({},Nt);default:return e}}function Vt(){}const Ve=new Dt;async function Cn(e,i){const{data:{user:a}}=await ie.auth.getUser();if(!a)throw new Error("User not authenticated");const r=e.name.split(".").pop(),n=`${yt()}.${r}`,s=`temp/${a.id}/${n}`,{error:c}=await ie.storage.from("images").upload(s,e);if(c)throw c;ie.storage.from("images").getPublicUrl(s);const o=`images/${e.name}`,{previewUrl:u}=await Ve.addImage(e,o),{error:h}=await ie.from("temp_images").insert({user_id:a.id,template_id:i,filename:e.name,storage_path:s});if(h)throw h;return{id:s,filename:e.name,previewUrl:u,localPath:o}}async function Sn(e,i){const{data:{user:a}}=await ie.auth.getUser();if(!a)throw new Error("User not authenticated");try{const{data:r}=await ie.from("temp_images").select("*").eq("user_id",a.id).eq("template_id",i);if(r)for(const s of r){const{data:c,error:o}=await ie.storage.from("images").download(s.storage_path);if(o)throw o;c&&await Ve.addStorageImage(c,s.filename)}Ve.setHtml(e);const n=await Ve.build();if(Ve.clear(),r)for(const s of r)await ie.storage.from("images").remove([s.storage_path]),await ie.from("temp_images").delete().eq("id",s.id);return n}catch(r){throw console.error("Error creating template zip:",r),r}}function En({value:e,onChange:i,className:a,label:r,templateId:n}){const s=V.useCallback(async h=>{try{const g=h[0];if(!g)return;const{previewUrl:f}=await Cn(g,n);i(f)}catch(g){console.error("Upload error:",g),alert("Error uploading image")}},[i,n]),{getRootProps:c,getInputProps:o,isDragActive:u}=Ca({onDrop:s,accept:{"image/*":[".png",".jpg",".jpeg",".gif",".webp"]},maxSize:5*1024*1024,multiple:!1});return t.jsxs("div",{className:a,children:[r&&t.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:r}),t.jsxs("div",{...c(),className:ge("border-2 border-dashed rounded-lg p-2 transition-colors min-h-[60px] max-h-[80px]",u?"border-indigo-500 bg-indigo-50":"border-gray-300","hover:border-indigo-500 cursor-pointer"),children:[t.jsx("input",{...o()}),e?t.jsxs("div",{className:"relative",children:[t.jsx("img",{src:e,alt:"Preview",className:"w-full h-[60px] object-contain rounded-lg"}),t.jsx("button",{onClick:h=>{h.stopPropagation(),i("")},className:"absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-gray-50",children:t.jsx(Be,{className:"w-4 h-4 text-gray-500"})})]}):t.jsxs("div",{className:"text-center",children:[t.jsx(ea,{className:"mx-auto h-6 w-6 text-gray-400"}),t.jsx("p",{className:"text-xs text-gray-600",children:"Arraste uma imagem ou clique para selecionar"}),t.jsx("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF até 5MB"})]})]})]})}function Ce({value:e,onChange:i,className:a,label:r,templateId:n="",previewClassName:s,urlPlaceholder:c="Ex: https://exemplo.com/imagem.jpg",pathPlaceholder:o="Ex: images/logo.png",hidePreview:u=!1,isRedirectUrl:h=!1}){const[g,f]=Ne.useState("upload"),[y,m]=Ne.useState(!1),[x,p]=Ne.useState("");Ne.useEffect(()=>{h&&f("url")},[h]);const b=()=>{m(!0)},v=()=>{m(!1)};Ne.useEffect(()=>{(e!=null&&e.startsWith("http")||e!=null&&e.startsWith("blob:"))&&p(e)},[e]);const j=()=>{i(""),m(!1),p("")};return t.jsxs("div",{className:ge("space-y-3",a),children:[t.jsxs("div",{className:"flex items-center justify-between gap-2",children:[r&&t.jsx("label",{className:"block text-sm font-medium text-gray-700",children:r}),t.jsxs("div",{className:"flex gap-0.5 p-0.5 bg-gray-100 rounded-md",children:[!h&&t.jsxs("button",{onClick:()=>{f("upload"),i("")},className:ge("flex items-center gap-1 px-1.5 py-1 rounded transition-colors",g==="upload"?"bg-white shadow-sm":"hover:bg-white/50"),title:"Upload de arquivo",children:[t.jsx(Ta,{className:"w-4 h-4 text-gray-600"}),t.jsx("span",{className:"text-xs text-gray-600",children:"Upload"})]}),t.jsxs("button",{onClick:()=>{f("url"),i("")},className:ge("flex items-center gap-1 px-2 py-1.5 rounded transition-colors",g==="url"?"bg-white shadow-sm":"hover:bg-white/50"),title:"URL externa",children:[t.jsx(Oa,{className:"w-4 h-4 text-gray-600"}),t.jsx("span",{className:"text-xs text-gray-600",children:"URL"})]}),t.jsxs("button",{onClick:()=>{f("path"),i("")},className:ge("flex items-center gap-1 px-2 py-1.5 rounded transition-colors",g==="path"?"bg-white shadow-sm":"hover:bg-white/50"),title:"Caminho local",children:[t.jsx(ea,{className:"w-4 h-4 text-gray-600"}),t.jsx("span",{className:"text-xs text-gray-600",children:"Local"})]})]})]}),g==="upload"?t.jsx(En,{value:e,onChange:i,templateId:n,className:"overflow-hidden"}):t.jsxs("div",{className:"relative",children:[t.jsx("input",{type:"text",value:e,onChange:N=>i(N.target.value),placeholder:g==="url"?c:o,className:ge("w-full rounded-md shadow-sm text-sm p-3 pr-16","border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",y&&"border-red-300 focus:border-red-500 focus:ring-red-500")}),t.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2",children:e&&t.jsx("button",{onClick:j,className:"p-1 hover:bg-gray-100 rounded-full transition-colors",title:"Limpar",children:t.jsx(Be,{className:"w-4 h-4 text-gray-400"})})})]}),(e||x)&&!u&&g==="url"&&!h&&t.jsxs("div",{className:ge("group relative bg-gray-50 rounded-lg overflow-hidden",y?"border-2 border-dashed border-red-200":"border border-gray-200",s||"aspect-video h-16"),children:[y?t.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-red-400 p-4",children:t.jsxs("span",{className:"text-sm text-center",children:["Não foi possível carregar a imagem.",t.jsx("br",{}),"Verifique se a URL está correta."]})}):t.jsx("img",{src:x||e,alt:"Preview",className:"w-full h-full object-contain",onError:b,onLoad:v}),t.jsx("div",{className:ge("absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity","flex items-center justify-center","group-hover:opacity-100"),children:(e==null?void 0:e.startsWith("http"))&&t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:`px-4 h-9 bg-white rounded-md flex items-center text-sm font-medium
                  text-gray-700 hover:bg-gray-50 transition-colors`,children:"Ver imagem"})})]})]})}function Dn({fields:e,values:i,onChange:a,templateId:r}){return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-1 gap-6",children:[t.jsx(ee,{label:"Nome da Marca",value:i.brandName||"",onChange:n=>a("brandName",n.target.value),placeholder:"Digite o nome da sua marca"}),t.jsx(ee,{label:"Título do Quiz",value:i.quizTitle||"",onChange:n=>a("quizTitle",n.target.value),placeholder:"Ex: Quiz Interativo"}),t.jsx(Ce,{label:"Logo",value:i.logoUrl||"",onChange:n=>a("logoUrl",n),templateId:r})]}),t.jsxs("div",{className:"border-t pt-6 mt-6",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900 mb-4",children:"Cores do Template"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsx(xe,{label:"Cor Principal",value:i.primaryColor||"#FF9900",onChange:n=>a("primaryColor",n)}),t.jsx(xe,{label:"Cor do Fundo",value:i.backgroundColor||"#FFFFFF",onChange:n=>a("backgroundColor",n)}),t.jsx(xe,{label:"Cor do Menu",value:i.menuColor||"#FFFFFF",onChange:n=>a("menuColor",n)}),t.jsx(xe,{label:"Cor da Box",value:i.boxColor||"#F0F0F0",onChange:n=>a("boxColor",n)})]})]})]})}function zn({questionNumber:e,values:i,onChange:a,onSave:r,onCancel:n}){const s=`question${e}`;return t.jsxs("div",{className:"h-full flex flex-col overflow-hidden",children:[t.jsx("header",{className:"sticky top-0 z-10 bg-white border-b px-6 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"p-2 bg-indigo-100 rounded-lg",children:t.jsx(St,{className:"h-5 w-5 text-indigo-600"})}),t.jsxs("h3",{className:"text-lg font-medium text-gray-900",children:["Pergunta ",e]})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(ce,{variant:"outline",onClick:n,children:"Cancelar"}),t.jsx(ce,{variant:"primary",onClick:r,children:"Salvar Pergunta"})]})]})}),t.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[t.jsx(ee,{label:"Texto da Pergunta",value:i[s]||"",onChange:c=>a(s,c.target.value),placeholder:"Digite sua pergunta aqui...",multiline:!0,rows:2}),t.jsx(Ce,{label:"Imagem da Pergunta",value:i[`${s}Image`]||"",onChange:c=>a(`${s}Image`,c)}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Opções de Resposta"}),t.jsx("div",{className:"grid grid-cols-2 gap-4",children:Array.from({length:4},(c,o)=>t.jsx(ee,{value:i[`${s}option${o+1}`]||"",onChange:u=>a(`${s}option${o+1}`,u.target.value),placeholder:`Opção ${o+1}`,prefix:t.jsx("span",{className:"absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none",children:t.jsx("span",{className:"flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium",children:o+1})})},o))})]})]})]})}function Pt({className:e,children:i}){return t.jsx("div",{className:ge("rounded-lg border border-gray-200 bg-white p-6 shadow-sm",e),children:i})}function Pn({questions:e,onEdit:i,onDelete:a,onAdd:r}){return t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Perguntas"}),t.jsxs("span",{className:"text-sm text-gray-500",children:["(",e.length,"/5)"]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[e.length>=5&&t.jsxs("span",{className:"text-sm text-amber-600 flex items-center gap-1",children:[t.jsx(Ye,{className:"w-4 h-4"}),"Limite máximo de 5 perguntas"]}),t.jsxs(ce,{onClick:r,variant:"outline",className:"flex items-center gap-2",disabled:e.length>=5,children:[t.jsx(ta,{className:"w-4 h-4"}),t.jsx("span",{children:"Adicionar Pergunta"})]})]})]}),t.jsx("div",{className:"grid gap-4",children:e.map(n=>t.jsx(Pt,{className:"p-4",children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0",children:t.jsx("img",{src:n.image,alt:`Imagem da pergunta ${n.number}`,className:"w-full h-full object-cover"})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("h4",{className:"text-sm font-medium text-gray-900 truncate",children:["Pergunta ",n.number]}),t.jsx("p",{className:"mt-1 text-sm text-gray-500 truncate",children:n.text||"Sem texto definido"}),t.jsxs("p",{className:"mt-1 text-xs text-gray-400",children:[n.options.filter(Boolean).length," opções definidas"]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ce,{variant:"outline",onClick:()=>i(n.number),children:"Editar"}),t.jsx(ce,{variant:"outline",onClick:()=>a(n.number),className:"text-red-600 hover:text-red-700",children:t.jsx(aa,{className:"w-4 h-4"})})]})]})},n.number))})]})}async function Oe(e,i,a,r){if(!a)throw new Error("Usuário não autenticado");try{const[{count:n,error:s},{data:c,error:o}]=await Promise.all([ie.from("downloads").select("*",{count:"exact",head:!0}).eq("user_id",a),ie.from("profiles").select("download_limit").eq("id",a).single()]);if(s)throw s;if(o)throw o;if(!c)throw new Error("Limite de downloads não encontrado");const u=c.download_limit;if(console.log("Current downloads:",n,"Limit:",u),n&&n>=u){if(r){r();return}throw new Error("Limite de downloads atingido")}try{const{error:m}=await ie.from("downloads").insert({user_id:a,template_id:e.id});if(m)throw console.error("Error recording download:",m),new Error("Erro ao registrar download")}catch(m){throw console.error("Error recording download:",m),new Error("Erro ao registrar download")}const h=await e.generate(i),g=await Sn(h,e.id),f=URL.createObjectURL(g),y=document.createElement("a");y.href=f,y.download=`${e.id}.zip`,document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(f)}catch(n){throw console.error("Error in downloadTemplate:",n),n}}const Zt=[{title:"Configurações da Marca",icon:dt},{title:"Perguntas",icon:St},{title:"Finalização",icon:Ae}];function An({fields:e,values:i,onChange:a,currentStep:r,onNextStep:n,onPrevStep:s,template:c}){const[o,u]=V.useState(!1),[h,g]=V.useState(!1),[f,y]=V.useState(!1),[m,x]=V.useState(!1),[p,b]=V.useState(null),v=!p,j=Zt[r],N=r===Zt.length-1,E=async()=>{if(h){x(!0);return}u(!0);try{const{data:{user:O}}=await ie.auth.getUser();if(!O)throw new Error("Usuário não autenticado");await Oe(c,i,O.id,()=>y(!0)),g(!0)}catch(O){alert(O instanceof Error?O.message:"Erro ao baixar template")}finally{u(!1)}},S=()=>Array.from({length:5},(O,Q)=>({number:Q+1,text:i[`question${Q+1}`]||"",image:i[`question${Q+1}Image`]||"",options:Array.from({length:4},(_,P)=>i[`question${Q+1}option${P+1}`]||"")})).filter(O=>O.text||O.image||O.options.some(Boolean)),B=()=>{const Q=S().length+1;Q>5||b(Q)},F=O=>{b(O)},q=O=>{const _=S().filter(P=>P.number!==O);for(let P=1;P<=5;P++){a(`question${P}`,""),a(`question${P}Image`,"");for(let d=1;d<=4;d++)a(`question${P}option${d}`,"")}_.forEach((P,d)=>{const M=d+1;a(`question${M}`,P.text),a(`question${M}Image`,P.image),P.options.forEach((ne,Z)=>{a(`question${M}option${Z+1}`,ne)})})},R=()=>p!==null?t.jsx(zn,{questionNumber:p,values:i,onChange:a,onSave:()=>b(null),onCancel:()=>b(null)}):r===0?t.jsx(Dn,{fields:e,values:i,onChange:a}):r===1?t.jsx(Pn,{questions:S(),onEdit:F,onDelete:q,onAdd:B}):r===2?t.jsx("div",{className:"space-y-6",children:t.jsx(Ce,{label:"URL de Redirecionamento",value:i.redirectUrl||"",onChange:O=>a("redirectUrl",O),urlPlaceholder:"https://exemplo.com/resultado",pathPlaceholder:"pages/result.html",hidePreview:!0,isRedirectUrl:!0})}):null;return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"h-full flex flex-col",children:[t.jsxs("div",{className:"flex-1 overflow-auto p-6",children:[!p&&t.jsxs("div",{className:"flex items-center space-x-3 mb-6",children:[t.jsx("div",{className:"p-2 bg-indigo-100 rounded-lg",children:Ne.createElement(j.icon,{className:"h-5 w-5 text-indigo-600"})}),t.jsx("h3",{className:"text-lg font-medium text-gray-900",children:j.title})]}),R()]}),v&&t.jsxs("div",{className:"flex justify-between p-4 bg-gray-50 border-t",children:[t.jsxs(ce,{onClick:s,variant:"outline",disabled:r===0,className:"flex items-center space-x-2",children:[t.jsx(pt,{className:"h-4 w-4"}),t.jsx("span",{children:"Anterior"})]}),N?t.jsx("div",{className:"flex gap-3",children:t.jsx(ce,{onClick:E,variant:"primary",disabled:o,className:"flex items-center space-x-2 min-w-[140px]",children:o?t.jsxs(t.Fragment,{children:[t.jsx(ut,{className:"h-4 w-4 animate-spin"}),t.jsx("span",{children:"Baixando..."})]}):t.jsxs(t.Fragment,{children:[t.jsx(Ae,{className:"h-4 w-4"}),t.jsx("span",{children:"Finalizar"})]})})}):t.jsxs(ce,{onClick:n,variant:"primary",className:"flex items-center space-x-2",children:[t.jsx("span",{children:"Próximo"}),t.jsx(mt,{className:"h-4 w-4"})]})]})]}),t.jsx(Ge,{isOpen:f,onClose:()=>y(!1),title:"Limite de Downloads Atingido",description:"Você atingiu o seu limite atual de downloads. Entre em contato conosco para aumentar seu limite.",children:t.jsx("button",{onClick:()=>y(!1),className:"w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors",children:"Entendi"})}),t.jsx(ft,{isOpen:m,onClose:()=>x(!1),onConfirm:async()=>{x(!1),u(!0);try{const{data:{user:O}}=await ie.auth.getUser();if(!O)throw new Error("Usuário não autenticado");await Oe(c,i,O.id,()=>y(!0))}catch(O){alert(O instanceof Error?O.message:"Erro ao baixar template")}finally{u(!1)}},title:"Confirmar Download",description:"Você tem certeza que deseja baixar novamente? Isso custará mais 1 token.",confirmText:"Baixar novamente"})]})}function Fn({values:e,onChange:i,templateId:a}){const r=e.useBackgroundColor==="true";return t.jsxs("div",{className:"space-y-3",children:[t.jsx(ee,{label:"Nome da Marca",value:e.brandName||"",onChange:n=>i("brandName",n.target.value),placeholder:"Digite o nome da sua marca"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Fundo da Página"}),t.jsxs("div",{className:"flex gap-1 p-1 bg-gray-100 rounded-md w-fit",children:[t.jsxs("button",{onClick:()=>i("useBackgroundColor","false"),className:`flex items-center gap-2 px-3 py-1.5 rounded transition-colors ${r?"hover:bg-white/50":"bg-white shadow-sm"}`,title:"Usar imagem de fundo",children:[t.jsx(St,{className:"w-4 h-4 text-gray-600"}),t.jsx("span",{className:"text-sm text-gray-600",children:"Imagem"})]}),t.jsxs("button",{onClick:()=>i("useBackgroundColor","true"),className:`flex items-center gap-2 px-3 py-1.5 rounded transition-colors ${r?"bg-white shadow-sm":"hover:bg-white/50"}`,title:"Usar cor sólida",children:[t.jsx(Ra,{className:"w-4 h-4 text-gray-600"}),t.jsx("span",{className:"text-sm text-gray-600",children:"Cor sólida"})]})]})]}),r?t.jsx(xe,{label:"Cor do Fundo",value:e.backgroundColor||"#000000",onChange:n=>i("backgroundColor",n)}):t.jsx(Ce,{label:"Imagem de Fundo",value:e.backgroundImage||"",onChange:n=>i("backgroundImage",n),templateId:a,previewClassName:"aspect-[9/16] h-32"})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx(Ce,{label:"Imagem da Roleta",value:e.wheelImage||"",onChange:n=>i("wheelImage",n),templateId:a,previewClassName:"aspect-square h-16"}),t.jsx(Ce,{label:"Imagem Central",value:e.centerImage||"",onChange:n=>i("centerImage",n),templateId:a,previewClassName:"aspect-square h-16"})]}),t.jsxs("div",{className:"space-y-3 border-t pt-3",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Configuração do Botão"}),t.jsx(ee,{label:"Texto do Botão",value:e.buttonText||"",onChange:n=>i("buttonText",n.target.value),placeholder:"Ex: GIRAR ROLETA"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsx(xe,{label:"Cor do Botão",value:e.buttonColor||"#FFFFFF",onChange:n=>i("buttonColor",n)}),t.jsx(xe,{label:"Cor do Texto",value:e.buttonTextColor||"#000000",onChange:n=>i("buttonTextColor",n)})]})]})]})}function it({checked:e,onCheckedChange:i,className:a}){return t.jsx("button",{role:"switch","aria-checked":e,onClick:()=>i(!e),className:ge("relative inline-flex h-6 w-11 items-center rounded-full transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500",e?"bg-indigo-600":"bg-gray-200",a),children:t.jsx("span",{className:ge("inline-block h-4 w-4 rounded-full bg-white transition-transform","transform translate-x-1",e&&"translate-x-6")})})}function In({values:e,onChange:i}){return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"space-y-1",children:[t.jsx("h3",{className:"text-sm font-medium text-gray-900",children:"Notificações de Engajamento"}),t.jsx("p",{className:"text-sm text-gray-500",children:"Exibe notificações de outras pessoas ganhando para aumentar o engajamento"})]}),t.jsx(it,{checked:e.showNotifications==="true",onCheckedChange:a=>i("showNotifications",a.toString())})]}),e.showNotifications==="true"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Valores de Desconto"}),t.jsx("p",{className:"text-sm text-gray-500",children:"Digite os valores de desconto que aparecerão nas notificações, separados por vírgula"}),t.jsx(ee,{value:e.discountValues||"10,20,30,40,50",onChange:a=>i("discountValues",a.target.value),placeholder:"Ex: 10,20,30,40,50"}),t.jsx("p",{className:"text-xs text-gray-400",children:"Estes valores devem corresponder aos descontos presentes na sua roleta"})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsx(xe,{label:"Cor de Fundo",value:e.notificationBgColor||"#FFFFFF",onChange:a=>i("notificationBgColor",a)}),t.jsx(xe,{label:"Cor do Texto",value:e.notificationTextColor||"#000000",onChange:a=>i("notificationTextColor",a)})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(ee,{label:"Intervalo Mínimo (segundos)",type:"number",value:e.notificationMinInterval||"2",onChange:a=>i("notificationMinInterval",a.target.value),min:"1",max:"10"}),t.jsx(ee,{label:"Intervalo Máximo (segundos)",type:"number",value:e.notificationMaxInterval||"5",onChange:a=>i("notificationMaxInterval",a.target.value),min:"2",max:"15"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Mensagens Personalizadas"}),t.jsxs("p",{className:"text-sm text-gray-500",children:["Use ","{name}"," para inserir nomes aleatórios e ","{discount}"," para o valor do desconto"]}),t.jsx(ee,{label:"Modelo da Mensagem",value:e.notificationTemplate||"{name} acabou de ganhar {discount}% de desconto!",onChange:a=>i("notificationTemplate",a.target.value),placeholder:"Ex: {name} ganhou {discount}% de desconto!"})]})]})]})}function Tn({values:e,onChange:i}){return t.jsxs("div",{className:"space-y-6",children:[t.jsx(ee,{label:"Emoji de Falha",value:e.failureEmoji||"😢",onChange:a=>i("failureEmoji",a.target.value),placeholder:"Ex: 😢"}),t.jsx(ee,{label:"Título do Popup de Falha",value:e.tryAgainTitle||"",onChange:a=>i("tryAgainTitle",a.target.value),placeholder:"Ex: Tente novamente!"}),t.jsx(ee,{label:"Descrição do Popup de Falha",value:e.tryAgainDescription||"",onChange:a=>i("tryAgainDescription",a.target.value),placeholder:"Digite a mensagem que será exibida quando o usuário não ganhar...",multiline:!0,rows:3}),t.jsx(ee,{label:"Texto do Botão de Falha",value:e.tryAgainButtonText||"",onChange:a=>i("tryAgainButtonText",a.target.value),placeholder:"Ex: TENTAR NOVAMENTE"})]})}function On({values:e,onChange:i}){return t.jsxs("div",{className:"space-y-6",children:[t.jsx(ee,{label:"Emoji de Sucesso",value:e.successEmoji||"🎉",onChange:a=>i("successEmoji",a.target.value),placeholder:"Ex: 🎉"}),t.jsx(ee,{label:"Título do Popup de Vitória",value:e.popupTitle||"",onChange:a=>i("popupTitle",a.target.value),placeholder:"Ex: Parabéns! Você Ganhou!"}),t.jsx(ee,{label:"Descrição do Popup de Vitória",value:e.popupDescription||"",onChange:a=>i("popupDescription",a.target.value),placeholder:"Digite a mensagem que será exibida quando o usuário ganhar...",multiline:!0,rows:3}),t.jsx(ee,{label:"Texto do Botão do Popup",value:e.popupButtonText||"",onChange:a=>i("popupButtonText",a.target.value),placeholder:"Ex: RESGATAR PRÊMIO"})]})}const Xt=[{title:"Configurações da Roleta",icon:dt},{title:"Configurações de Falha",icon:Ye},{title:"Configurações do Prêmio",icon:La},{title:"Configurações das Notificações",icon:Ba},{title:"Finalização",icon:Ae}];function Rn({values:e,onChange:i,currentStep:a,onNextStep:r,onPrevStep:n,template:s}){const[c,o]=V.useState(!1),[u,h]=V.useState(!1),[g,f]=V.useState(!1),[y,m]=V.useState(!1);V.useState(null);const x=Xt[a],p=a===Xt.length-1,b=async()=>{if(u){m(!0);return}o(!0);try{const{data:{user:j}}=await ie.auth.getUser();if(!j)throw new Error("Usuário não autenticado");await Oe(s,e,j.id,()=>f(!0)),h(!0)}catch(j){alert(j instanceof Error?j.message:"Erro ao baixar template")}finally{o(!1)}},v=()=>{switch(a){case 0:return t.jsx(Fn,{values:e,onChange:i,templateId:s.id});case 1:return t.jsx(Tn,{values:e,onChange:i});case 2:return t.jsx(On,{values:e,onChange:i});case 3:return t.jsx(In,{values:e,onChange:i});case 4:return t.jsx("div",{className:"space-y-6",children:t.jsx(Ce,{label:"URL de Redirecionamento",value:e.redirectUrl||"",onChange:j=>i("redirectUrl",j),urlPlaceholder:"https://exemplo.com/resgate",pathPlaceholder:"pages/success.html",hidePreview:!0,isRedirectUrl:!0})});default:return null}};return t.jsxs("div",{className:"h-full flex flex-col max-h-full",children:[t.jsxs("div",{className:"flex-1 overflow-auto p-6",children:[t.jsxs("div",{className:"flex items-center space-x-3 mb-6",children:[t.jsx("div",{className:"p-2 bg-indigo-100 rounded-lg",children:Ne.createElement(x.icon,{className:"h-5 w-5 text-indigo-600"})}),t.jsx("h3",{className:"text-lg font-medium text-gray-900",children:x.title})]}),v()]}),t.jsxs("div",{className:"flex justify-between p-4 bg-gray-50 border-t flex-shrink-0 mt-auto",children:[t.jsxs(ce,{onClick:n,variant:"outline",disabled:a===0,className:"flex items-center space-x-2",children:[t.jsx(pt,{className:"h-4 w-4"}),t.jsx("span",{children:"Anterior"})]}),p?t.jsx("div",{className:"flex gap-3",children:t.jsx(ce,{onClick:b,variant:"primary",disabled:c,className:"flex items-center space-x-2 min-w-[140px]",children:c?t.jsxs(t.Fragment,{children:[t.jsx(ut,{className:"h-4 w-4 animate-spin"}),t.jsx("span",{children:"Baixando..."})]}):t.jsxs(t.Fragment,{children:[t.jsx(Ae,{className:"h-4 w-4"}),t.jsx("span",{children:"Finalizar"})]})})}):t.jsxs(ce,{onClick:r,variant:"primary",className:"flex items-center space-x-2",children:[t.jsx("span",{children:"Próximo"}),t.jsx(mt,{className:"h-4 w-4"})]})]}),t.jsx(Ge,{isOpen:g,onClose:()=>f(!1),title:"Limite de Downloads Atingido",description:"Você atingiu o seu limite atual de downloads. Entre em contato conosco para aumentar seu limite.",children:t.jsx("button",{onClick:()=>f(!1),className:"w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors",children:"Entendi"})}),t.jsx(ft,{isOpen:y,onClose:()=>m(!1),onConfirm:async()=>{m(!1),o(!0);try{const{data:{user:j}}=await ie.auth.getUser();if(!j)throw new Error("Usuário não autenticado");await Oe(s,e,j.id,()=>f(!0))}catch(j){alert(j instanceof Error?j.message:"Erro ao baixar template")}finally{o(!1)}},title:"Confirmar Download",description:"Você tem certeza que deseja baixar novamente? Isso custará mais 1 token.",confirmText:"Baixar novamente"})]})}function Ln({values:e,onChange:i,templateId:a}){return t.jsxs("div",{className:"space-y-6",children:[t.jsx(ee,{label:"Nome da Loja",value:e.brandName||"",onChange:r=>i("brandName",r.target.value),placeholder:"Digite o nome da sua loja"}),t.jsx(Ce,{label:"Logo da Loja",value:e.logoUrl||"",onChange:r=>i("logoUrl",r),templateId:a}),t.jsx(Ce,{label:"Banner Principal",value:e.bannerUrl||"",onChange:r=>i("bannerUrl",r),templateId:a,previewClassName:"aspect-[21/9]"}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Cores do Template"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsx(xe,{label:"Cor do Menu Superior",value:e.headerColor||"#FFFFFF",onChange:r=>i("headerColor",r)}),t.jsx(xe,{label:"Cor do Background",value:e.backgroundColor||"#F5F5F5",onChange:r=>i("backgroundColor",r)}),t.jsx(xe,{label:"Cor do Preço Atual",value:e.currentPriceColor||"#1A73E8",onChange:r=>i("currentPriceColor",r)}),t.jsx(xe,{label:"Cor dos Detalhes",value:e.detailsColor||"#BCBCBC",onChange:r=>i("detailsColor",r)}),t.jsx(xe,{label:"Cor do Botão",value:e.buttonColor||"#1A73E8",onChange:r=>i("buttonColor",r)}),t.jsx(xe,{label:"Cor do Botão (Hover)",value:e.buttonHoverColor||"#1557B0",onChange:r=>i("buttonHoverColor",r)})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Tag de Promoção"}),t.jsx(ee,{label:"Texto da Promoção",value:e.promoText||"",onChange:r=>i("promoText",r.target.value),placeholder:"Ex: 🎄 Promoção de Natal"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsx(xe,{label:"Cor de Fundo",value:e.promoBgColor||"#ffebee",onChange:r=>i("promoBgColor",r)}),t.jsx(xe,{label:"Cor do Texto",value:e.promoTextColor||"#c62828",onChange:r=>i("promoTextColor",r)})]})]})]})}function Bn({products:e,onEdit:i,onDelete:a,onAdd:r}){return t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Produtos"}),t.jsxs(ce,{onClick:r,variant:"outline",className:"flex items-center gap-2",children:[t.jsx(ta,{className:"w-4 h-4"}),t.jsx("span",{children:"Adicionar Produto"})]})]}),t.jsx("div",{className:"grid gap-4",children:e.map(n=>t.jsx(Pt,{className:"p-4",children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0",children:t.jsx("img",{src:n.images[0],alt:n.name,className:"w-full h-full object-cover"})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900 truncate",children:n.name}),t.jsxs("div",{className:"mt-1 flex items-center gap-2 text-sm text-gray-500",children:[t.jsxs("span",{className:"line-through",children:["R$ ",n.price.toFixed(2)]}),t.jsxs("span",{className:"font-medium text-indigo-600",children:["R$ ",n.discountPrice.toFixed(2)]}),t.jsx("span",{className:"text-gray-400",children:"•"}),t.jsxs("span",{children:[n.stock," unidades"]})]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ce,{variant:"outline",onClick:()=>i(n.id),children:"Editar"}),t.jsx(ce,{variant:"outline",onClick:()=>a(n.id),className:"text-red-600 hover:text-red-700",children:t.jsx(aa,{className:"w-4 h-4"})})]})]})},n.id))})]})}function Mn({product:e,onSave:i,onCancel:a}){var c;const[r,n]=Ne.useState({...e,specs:"",comments:e.comments||[],showDescription:e.showDescription!==!1,showSpecs:e.showSpecs!==!1,showComments:e.showComments!==!1}),s=(o,u)=>{n(h=>({...h,[o]:u}))};return t.jsxs("div",{className:"h-full flex flex-col overflow-hidden",children:[t.jsx("header",{className:"sticky top-0 z-10 bg-white border-b px-6 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"p-2 bg-indigo-100 rounded-lg",children:t.jsx(ia,{className:"h-5 w-5 text-indigo-600"})}),t.jsx("h3",{className:"text-lg font-medium text-gray-900",children:e.id?"Editar Produto":"Novo Produto"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(ce,{variant:"outline",onClick:a,children:"Cancelar"}),t.jsx(ce,{variant:"primary",onClick:()=>i(r),children:"Salvar"})]})]})}),t.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-8",children:[t.jsx(ee,{label:"Nome do Produto",value:r.name,onChange:o=>s("name",o.target.value),placeholder:"Ex: Smartphone Galaxy S23 Ultra"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Descrição do Produto"}),t.jsx(it,{checked:r.showDescription,onCheckedChange:o=>s("showDescription",o)})]}),r.showDescription&&t.jsx(ee,{value:r.description,onChange:o=>s("description",o.target.value),placeholder:"Descreva as principais características e diferenciais do produto...",multiline:!0,rows:3})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsx(ee,{label:"Preço Original",type:"number",value:r.price,onChange:o=>s("price",Number(o.target.value))}),t.jsx(ee,{label:"Preço com Desconto",type:"number",value:r.discountPrice,onChange:o=>s("discountPrice",Number(o.target.value))})]}),t.jsx(ee,{label:"Estoque",type:"number",value:r.stock,onChange:o=>s("stock",Number(o.target.value))}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:["Imagens do Produto",t.jsx("span",{className:"text-xs text-gray-500 ml-2",children:"(Primeira imagem é obrigatória)"})]}),r.images.map((o,u)=>t.jsxs("div",{className:"flex gap-4",children:[t.jsx(Ce,{value:o,onChange:h=>{const g=[...r.images];g[u]=h,s("images",g)},className:"flex-1"}),u>0&&t.jsx(ce,{variant:"outline",onClick:()=>{const h=r.images.filter((g,f)=>f!==u);s("images",h)},className:"text-red-600 hover:text-red-700",children:t.jsx(Be,{className:"w-4 h-4"})})]},u)),t.jsx(ce,{variant:"outline",onClick:()=>s("images",[...r.images,""]),disabled:r.images.length>=5,children:r.images.length>=5?"Limite máximo de 5 imagens":"Adicionar Imagem"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Especificações do Produto"}),t.jsx(it,{checked:r.showSpecs,onCheckedChange:o=>s("showSpecs",o)})]}),r.showSpecs&&t.jsx(ee,{value:r.specs||"",onChange:o=>s("specs",o.target.value),placeholder:"Digite as especificações do produto...",multiline:!0,rows:4})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Avaliações"}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(it,{checked:r.showComments,onCheckedChange:o=>s("showComments",o)}),r.showComments&&t.jsx(ce,{variant:"outline",onClick:()=>{const o=[...r.comments||[],{author:"",rating:5,text:""}];s("comments",o)},children:"Adicionar Avaliação"})]})]}),r.showComments&&((c=r.comments)==null?void 0:c.map((o,u)=>t.jsxs("div",{className:"space-y-4 p-4 bg-gray-50 rounded-lg",children:[t.jsxs("div",{className:"flex justify-between",children:[t.jsx(ee,{label:"Nome do Autor",value:o.author,onChange:h=>{const g=[...r.comments];g[u]={...o,author:h.target.value},s("comments",g)},className:"flex-1"}),t.jsxs("div",{className:"ml-4",children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Avaliação"}),t.jsx("select",{value:o.rating,onChange:h=>{const g=[...r.comments];g[u]={...o,rating:Number(h.target.value)},s("comments",g)},className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",children:[5,4,3,2,1].map(h=>t.jsxs("option",{value:h,children:["★".repeat(h),"☆".repeat(5-h)]},h))})]}),t.jsx(ce,{variant:"outline",onClick:()=>{const h=r.comments.filter((g,f)=>f!==u);s("comments",h)},className:"ml-4 text-red-600 hover:text-red-700 self-end",children:t.jsx(Be,{className:"w-4 h-4"})})]}),t.jsx(ee,{label:"Comentário",value:o.text,onChange:h=>{const g=[...r.comments];g[u]={...o,text:h.target.value},s("comments",g)},multiline:!0,rows:2})]},u)))]}),t.jsx(ee,{label:"URL de Compra",value:r.buyUrl,onChange:o=>s("buyUrl",o.target.value),placeholder:"https://..."})]})]})}const Yt=[{title:"Configurações da Loja",icon:Ma},{title:"Produtos",icon:ia},{title:"Finalização",icon:Ae}];function Un({values:e,onChange:i,currentStep:a,onNextStep:r,onPrevStep:n,template:s}){const[c,o]=V.useState(!1),[u,h]=V.useState(!1),[g,f]=V.useState(!1),[y,m]=V.useState(!1),[x,p]=V.useState(null),b=!x,v=JSON.parse(e.products||"[]"),j=Yt[a],N=a===Yt.length-1,E=async()=>{if(u){m(!0);return}o(!0);try{const{data:{user:O}}=await ie.auth.getUser();if(!O)throw new Error("Usuário não autenticado");await Oe(s,e,O.id,()=>f(!0)),h(!0)}catch(O){alert(O instanceof Error?O.message:"Erro ao baixar template")}finally{o(!1)}},S=()=>{p({id:Date.now(),name:"",description:"",price:0,discountPrice:0,stock:0,images:[""],specs:{},buyUrl:""})},B=O=>{const Q=v.find(_=>_.id===O);Q&&p(Q)},F=O=>{const Q=v.filter(_=>_.id!==O);i("products",JSON.stringify(Q))},q=O=>{const Q=[...v],_=Q.findIndex(P=>P.id===O.id);_>=0?Q[_]=O:Q.push(O),i("products",JSON.stringify(Q)),p(null)},R=()=>{if(x)return t.jsx(Mn,{product:x,onSave:q,onCancel:()=>p(null)});switch(a){case 0:return t.jsx(Ln,{values:e,onChange:i,templateId:s.id});case 1:return t.jsx(Bn,{products:v,onEdit:B,onDelete:F,onAdd:S,isRedirectUrl:!0});case 2:return null;default:return null}};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"h-full flex flex-col",children:[t.jsxs("div",{className:"flex-1 overflow-auto p-6",children:[!x&&t.jsxs("div",{className:"flex items-center space-x-3 mb-6",children:[t.jsx("div",{className:"p-2 bg-indigo-100 rounded-lg",children:Ne.createElement(j.icon,{className:"h-5 w-5 text-indigo-600"})}),t.jsx("h3",{className:"text-lg font-medium text-gray-900",children:j.title})]}),R()]}),b&&t.jsxs("div",{className:"flex justify-between p-4 bg-gray-50 border-t",children:[t.jsxs(ce,{onClick:n,variant:"outline",disabled:a===0,className:"flex items-center space-x-2",children:[t.jsx(pt,{className:"h-4 w-4"}),t.jsx("span",{children:"Anterior"})]}),N?t.jsx("div",{className:"flex gap-3",children:t.jsx(ce,{onClick:E,variant:"primary",disabled:c,className:"flex items-center space-x-2 min-w-[140px]",children:c?t.jsxs(t.Fragment,{children:[t.jsx(ut,{className:"h-4 w-4 animate-spin"}),t.jsx("span",{children:"Baixando..."})]}):t.jsxs(t.Fragment,{children:[t.jsx(Ae,{className:"h-4 w-4"}),t.jsx("span",{children:"Finalizar"})]})})}):t.jsxs(ce,{onClick:r,variant:"primary",className:"flex items-center space-x-2",children:[t.jsx("span",{children:"Próximo"}),t.jsx(mt,{className:"h-4 w-4"})]})]})]}),t.jsx(Ge,{isOpen:g,onClose:()=>f(!1),title:"Limite de Downloads Atingido",description:"Você atingiu o seu limite atual de downloads. Entre em contato conosco para aumentar seu limite.",children:t.jsx("button",{onClick:()=>f(!1),className:"w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors",children:"Entendi"})}),t.jsx(ft,{isOpen:y,onClose:()=>m(!1),onConfirm:async()=>{m(!1),o(!0);try{const{data:{user:O}}=await ie.auth.getUser();if(!O)throw new Error("Usuário não autenticado");await Oe(s,e,O.id,()=>f(!0))}catch(O){alert(O instanceof Error?O.message:"Erro ao baixar template")}finally{o(!1)}},title:"Confirmar Download",description:"Você tem certeza que deseja baixar novamente? Isso custará mais 1 token.",confirmText:"Baixar novamente"})]})}function $n({values:e,onChange:i,templateId:a}){var r;return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Cores do Template"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsx(xe,{label:"Cor do Fundo",value:e.backgroundColor||"#FFFFFF",onChange:n=>i("backgroundColor",n)}),t.jsx(xe,{label:"Cor do Header",value:e.headerColor||"#FFFFFF",onChange:n=>i("headerColor",n)})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Configuração do Botão"}),t.jsx(ee,{label:"Texto do Botão",value:e.buttonText||"",onChange:n=>i("buttonText",n.target.value),placeholder:"Ex: Leia mais sobre este assunto"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsx(xe,{label:"Cor do Botão",value:e.buttonColor||"#1a73e8",onChange:n=>i("buttonColor",n)}),t.jsx(xe,{label:"Cor do Texto do Botão",value:e.buttonTextColor||"#ffffff",onChange:n=>i("buttonTextColor",n)})]}),t.jsx(Ce,{label:"URL de Redirecionamento",value:e.redirectUrl||"",onChange:n=>i("redirectUrl",n),urlPlaceholder:"https://exemplo.com/noticia",pathPlaceholder:"pages/article.html",hidePreview:!0,isRedirectUrl:!0})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(ee,{label:"Nome do Site",value:e.brandName||"",onChange:n=>i("brandName",n.target.value),placeholder:"Digite o nome do seu site"}),t.jsx(Ce,{label:"Logo do Site",value:e.logoUrl||"",onChange:n=>i("logoUrl",n),templateId:a})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(ee,{label:"Categoria",value:e.category||"",onChange:n=>i("category",n.target.value),placeholder:"Ex: Tecnologia"}),t.jsx(ee,{label:"Autor",value:e.author||"",onChange:n=>i("author",n.target.value),placeholder:"Nome do autor"}),t.jsx(ee,{label:"Data de Publicação",type:"datetime-local",value:((r=e.publishDate)==null?void 0:r.slice(0,16))||"",onChange:n=>i("publishDate",new Date(n.target.value).toISOString())})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Configurações SEO"}),t.jsx(ee,{label:"Meta Title",value:e.metaTitle||"",onChange:n=>i("metaTitle",n.target.value),placeholder:"Deixe em branco para usar o título da notícia"}),t.jsx(ee,{label:"Meta Description",value:e.metaDescription||"",onChange:n=>i("metaDescription",n.target.value),placeholder:"Deixe em branco para usar o subtítulo da notícia",multiline:!0,rows:3}),t.jsx(ee,{label:"Meta Keywords",value:e.metaKeywords||"",onChange:n=>i("metaKeywords",n.target.value),placeholder:"Deixe em branco para gerar automaticamente"})]})]})}function qn({values:e,onChange:i}){return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(ee,{label:"Título da Notícia",value:e.title||"",onChange:a=>i("title",a.target.value),placeholder:"Digite o título principal da notícia"}),t.jsx(ee,{label:"Subtítulo",value:e.subtitle||"",onChange:a=>i("subtitle",a.target.value),placeholder:"Digite o subtítulo ou linha fina da notícia",multiline:!0,rows:2})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(Ce,{label:"Imagem Principal",value:e.mainImage||"",onChange:a=>i("mainImage",a),previewClassName:"aspect-video"}),t.jsx(ee,{label:"Legenda da Imagem",value:e.imageCaption||"",onChange:a=>i("imageCaption",a.target.value),placeholder:"Digite a legenda da imagem principal"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(ee,{label:"Conteúdo da Notícia",value:e.content||"",onChange:a=>i("content",a.target.value),placeholder:"Digite o conteúdo da notícia em formato HTML",multiline:!0,rows:12}),t.jsxs("div",{className:"bg-gray-50 border rounded-lg p-4",children:[t.jsx("h5",{className:"text-sm font-medium text-gray-700 mb-2",children:"Dicas de Formatação HTML:"}),t.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[t.jsxs("li",{children:[t.jsx("code",{children:"<h2>"})," - Subtítulos"]}),t.jsxs("li",{children:[t.jsx("code",{children:"<p>"})," - Parágrafos"]}),t.jsxs("li",{children:[t.jsx("code",{children:"<blockquote>"})," - Citações"]}),t.jsxs("li",{children:[t.jsx("code",{children:"<strong>"})," - Texto em negrito"]}),t.jsxs("li",{children:[t.jsx("code",{children:"<em>"})," - Texto em itálico"]})]})]})]})]})}const Gt=[{title:"Configurações da Notícia",icon:dt},{title:"Conteúdo",icon:Ua},{title:"Finalização",icon:Ae}];function Wn({values:e,onChange:i,currentStep:a,onNextStep:r,onPrevStep:n,template:s}){const[c,o]=V.useState(!1),[u,h]=V.useState(!1),[g,f]=V.useState(!1),[y,m]=V.useState(!1),x=Gt[a],p=a===Gt.length-1,b=async()=>{if(u){m(!0);return}o(!0);try{const{data:{user:j}}=await ie.auth.getUser();if(!j)throw new Error("Usuário não autenticado");await Oe(s,e,j.id,()=>f(!0)),h(!0)}catch(j){alert(j instanceof Error?j.message:"Erro ao baixar template")}finally{o(!1)}},v=()=>{switch(a){case 0:return t.jsx($n,{values:e,onChange:i,templateId:s.id});case 1:return t.jsx(qn,{values:e,onChange:i});case 2:return t.jsx("div",{className:"space-y-6",children:t.jsx(Ce,{label:"URL de Redirecionamento",value:e.redirectUrl||"",onChange:j=>i("redirectUrl",j),urlPlaceholder:"https://exemplo.com/noticia",pathPlaceholder:"pages/article.html",hidePreview:!0,isRedirectUrl:!0})});default:return null}};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"h-full flex flex-col",children:[t.jsxs("div",{className:"flex-1 overflow-auto p-6",children:[t.jsxs("div",{className:"flex items-center space-x-3 mb-6",children:[t.jsx("div",{className:"p-2 bg-indigo-100 rounded-lg",children:Ne.createElement(x.icon,{className:"h-5 w-5 text-indigo-600"})}),t.jsx("h3",{className:"text-lg font-medium text-gray-900",children:x.title})]}),v()]}),t.jsxs("div",{className:"flex justify-between p-4 bg-gray-50 border-t",children:[t.jsxs(ce,{onClick:n,variant:"outline",disabled:a===0,className:"flex items-center space-x-2",children:[t.jsx(pt,{className:"h-4 w-4"}),t.jsx("span",{children:"Anterior"})]}),p?t.jsx("div",{className:"flex gap-3",children:t.jsx(ce,{onClick:b,variant:"primary",disabled:c,className:"flex items-center space-x-2 min-w-[140px]",children:c?t.jsxs(t.Fragment,{children:[t.jsx(ut,{className:"h-4 w-4 animate-spin"}),t.jsx("span",{children:"Baixando..."})]}):t.jsxs(t.Fragment,{children:[t.jsx(Ae,{className:"h-4 w-4"}),t.jsx("span",{children:"Finalizar"})]})})}):t.jsxs(ce,{onClick:r,variant:"primary",className:"flex items-center space-x-2",children:[t.jsx("span",{children:"Próximo"}),t.jsx(mt,{className:"h-4 w-4"})]})]})]}),t.jsx(Ge,{isOpen:g,onClose:()=>f(!1),title:"Limite de Downloads Atingido",description:"Você atingiu o seu limite atual de downloads. Entre em contato conosco para aumentar seu limite.",children:t.jsx("button",{onClick:()=>f(!1),className:"w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors",children:"Entendi"})}),t.jsx(ft,{isOpen:y,onClose:()=>m(!1),onConfirm:async()=>{m(!1),o(!0);try{const{data:{user:j}}=await ie.auth.getUser();if(!j)throw new Error("Usuário não autenticado");await Oe(s,e,j.id,()=>f(!0))}catch(j){alert(j instanceof Error?j.message:"Erro ao baixar template")}finally{o(!1)}},title:"Confirmar Download",description:"Você tem certeza que deseja baixar novamente? Isso custará mais 1 token.",confirmText:"Baixar novamente"})]})}function Hn({onSuccess:e}){const[i,a]=V.useState(!0),[r,n]=V.useState(!1),[s,c]=V.useState(null),[o,u]=V.useState({email:"",password:"",fullName:""}),h=async g=>{g.preventDefault(),c(null),n(!0);try{if(i){const{error:f}=await ie.auth.signInWithPassword({email:o.email,password:o.password});if(f)throw f.message==="Invalid login credentials"?new Error("E-mail ou senha inválidos"):f;e()}else{const{error:f}=await ie.auth.signUp({email:o.email,password:o.password,options:{data:{full_name:o.fullName}}});if(f)throw f.code==="23505"?new Error("Este e-mail já está cadastrado"):f;e()}}catch(f){c(f instanceof Error?f.message:"Ocorreu um erro")}finally{n(!1)}};return t.jsxs("div",{className:"w-full min-h-[calc(100vh-4rem)] flex",children:[t.jsx("div",{className:"w-full lg:w-1/2 flex items-center justify-center p-6",children:t.jsxs("div",{className:"w-full max-w-md",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[t.jsx(Ct,{className:"h-8 w-8 text-indigo-600"}),t.jsx("span",{className:"text-2xl font-bold",children:"Templatefy"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("h2",{className:"text-2xl font-bold",children:i?"Bem-vindo de volta!":"Crie sua conta"}),t.jsx("p",{className:"text-gray-600",children:i?"Entre com suas credenciais para acessar o sistema":"Preencha os dados abaixo para criar sua conta"})]}),s&&t.jsxs("div",{className:"mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-600",children:[t.jsx(Ye,{className:"w-4 h-4 flex-shrink-0"}),t.jsx("p",{className:"text-sm",children:s})]}),t.jsxs("form",{onSubmit:h,className:"mt-8 space-y-4",children:[t.jsx("div",{className:ge("space-y-4 transition-all duration-300",i?"opacity-0 h-0":"opacity-100 h-auto"),children:!i&&t.jsx(ee,{label:"Nome completo",value:o.fullName,onChange:g=>u(f=>({...f,fullName:g.target.value})),placeholder:"Seu nome completo",required:!i})}),t.jsx(ee,{label:"E-mail",type:"email",value:o.email,onChange:g=>u(f=>({...f,email:g.target.value})),placeholder:"exemplo@email.com",required:!0}),t.jsx(ee,{label:"Senha",type:"password",value:o.password,onChange:g=>u(f=>({...f,password:g.target.value})),placeholder:"••••••••",required:!0}),t.jsx(ce,{type:"submit",variant:"primary",className:"w-full h-12 mt-6",disabled:r,children:r?"Carregando...":i?"Entrar":"Cadastrar"}),t.jsx("div",{className:"text-center",children:t.jsx("button",{type:"button",onClick:()=>a(!i),className:"text-sm text-indigo-600 hover:text-indigo-500",children:i?"Não tem uma conta? Cadastre-se":"Já tem uma conta? Entre"})})]})]})}),t.jsx("div",{className:"hidden lg:flex w-1/2 bg-gray-50 items-center justify-center overflow-hidden",children:t.jsx("dotlottie-player",{src:"https://lottie.host/415ee7ae-b979-428f-8e93-fe8c649af923/AS0KidHzzb.lottie",background:"transparent",speed:"1",style:{width:"600px",height:"600px"},loop:!0,autoplay:!0,class:"animate-float"})})]})}const Vn=e=>`
:root {
  --primary-color: ${e.primaryColor};
  --background-color: ${e.backgroundColor};
  --menu-color: ${e.menuColor};
  --box-color: ${e.boxColor};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background-color: var(--background-color);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--menu-color);
  padding: 15px 10px;
  margin-bottom: 5px;
}

.logo {
  height: 30px;
}

.pergunta {
  display: block;
  margin: 0 auto;
  background-color: var(--box-color);
  width: 93%;
  border-radius: 15px;
  margin-top: 0px;
}

.respondaeganhe {
  width: 90%;
  display: flex;
  margin: 0 auto;
  height: 35px;
  background-color: var(--primary-color);
  margin-bottom: 35px;
  border-radius: 10px;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.container {
  text-align: center;
  width: 90%;
  margin: 0 auto;
  display: block;
  padding-top: 10px;
  margin-top: -30px;
}

.progress-bar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
}

.progress-bar {
  background-color: #e0e0e0;
  border-radius: 20px;
  width: 80%;
  height: 15px;
  position: relative;
}

.progress {
  background-color: var(--primary-color);
  height: 100%;
  border-radius: 20px;
  width: 0%;
  transition: width 0.5s ease-in-out;
}

.progress-text {
  font-size: 20px;
  width: 20%;
  text-align: right;
  color: var(--primary-color);
}

.quiz-options {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: space-between;
  gap: 10px;
}

.quiz-options li {
  flex: 1 1 calc(50% - 10px);
  display: flex;
  justify-content: center;
}

.quiz-options button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 25px;
  background-color: var(--box-color);
  color: #555;
  cursor: pointer;
  transition: all 0.3s;
}

.quiz-options button:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.pergunta_title {
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 15px;
  text-align: center;
  font-size: 20px;
  padding-bottom: 10px;
}

.next-button {
  padding: 10px 20px;
  width: 90%;
  display: block;
  margin: 0 auto;
  font-size: 18px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 20px;
}

.next-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.question-container > div {
  display: none;
}

.question-container > div.active {
  display: block;
}`,Zn=e=>`
let currentQuestion = 1;
const totalQuestions = document.querySelectorAll('.question-container > div').length;
const redirectUrl = '${e}';

function updateProgress() {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  document.getElementById('progress').style.width = progressPercentage + '%';
  document.getElementById('progress-text').textContent = Math.round(progressPercentage) + '%';
}

function nextQuestion() {
  if (currentQuestion < totalQuestions) {
    document.getElementById('p' + currentQuestion).classList.remove('active');
    currentQuestion++;
    document.getElementById('p' + currentQuestion).classList.add('active');
    updateProgress();
    
    if (currentQuestion === totalQuestions) {
      document.getElementById('next-button').textContent = 'Finalizar';
    }
  } else {
    window.location.href = redirectUrl;
  }
}

document.querySelectorAll('.quiz-options button').forEach(button => {
  button.addEventListener('click', () => {
    const currentOptions = button.closest('.question-container > div').querySelectorAll('button');
    currentOptions.forEach(btn => {
      btn.style.borderColor = '#ccc';
      btn.style.backgroundColor = 'var(--box-color)';
    });
    button.style.borderColor = 'var(--primary-color)';
    button.style.backgroundColor = '#fff8e7';
    document.getElementById('next-button').disabled = false;
  });
});

document.getElementById('next-button').addEventListener('click', nextQuestion);

updateProgress();`,Xn={id:"image-quiz",name:"Quiz com imagens",description:"Template para criar quizzes interativos com imagens",fields:[{id:"brandName",label:"Nome da Marca",type:"text",description:"Nome da empresa ou marca"},{id:"logoUrl",label:"URL do Logo",type:"url",description:"URL do logotipo da marca"},{id:"quizTitle",label:"Título do Quiz",type:"text",description:"Título que aparece no topo do quiz"},{id:"primaryColor",label:"Cor Principal",type:"color",description:"Cor principal do tema"},{id:"backgroundColor",label:"Cor do Fundo",type:"color",description:"Cor do fundo da página"},{id:"menuColor",label:"Cor do Menu",type:"color",description:"Cor do menu superior"},{id:"boxColor",label:"Cor da Box",type:"color",description:"Cor do fundo das perguntas"},...Array.from({length:5},(e,i)=>[{id:`question${i+1}`,label:`Pergunta ${i+1}`,type:"text",description:`Texto da pergunta ${i+1}`},{id:`question${i+1}Image`,label:`Imagem da Pergunta ${i+1}`,type:"url",description:`URL da imagem para a pergunta ${i+1}`},...Array.from({length:4},(a,r)=>({id:`question${i+1}option${r+1}`,label:`Opção ${r+1} da Pergunta ${i+1}`,type:"text",description:`Texto da opção ${r+1} da pergunta ${i+1}`}))]).flat(),{id:"redirectUrl",label:"URL de Redirecionamento",type:"url",description:"URL para onde o usuário será redirecionado após completar o quiz"}],defaultValues:{brandName:"Sua Marca",logoUrl:"https://placehold.co/200x100/FF9900/FFFFFF/png?text=QUIZ",quizTitle:"Quiz Interativo",primaryColor:"#FF9900",backgroundColor:"#FFFFFF",menuColor:"#FFFFFF",boxColor:"#F0F0F0",question1:"Qual é sua cor favorita?",question1Image:"https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+1",question1option1:"Azul",question1option2:"Verde",question1option3:"Vermelho",question1option4:"Amarelo",question2:"Qual estação do ano você mais gosta?",question2Image:"https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+2",question2option1:"Primavera",question2option2:"Verão",question2option3:"Outono",question2option4:"Inverno",question3:"Qual seu hobby favorito?",question3Image:"https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+3",question3option1:"Leitura",question3option2:"Esportes",question3option3:"Música",question3option4:"Viagens",question4:"Qual seu tipo de filme preferido?",question4Image:"https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+4",question4option1:"Ação",question4option2:"Comédia",question4option3:"Drama",question4option4:"Ficção Científica",question5:"Como você prefere passar seu tempo livre?",question5Image:"https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+5",question5option1:"Com amigos",question5option2:"Em casa",question5option3:"Ao ar livre",question5option4:"Praticando hobbies",redirectUrl:"https://exemplo.com/resultado"},generate:async e=>{var r;const i=(r=e.logoUrl)!=null&&r.startsWith("http")?e.logoUrl:`${e.logoUrl}`,a=Array.from({length:5},(n,s)=>{const c=s+1,o=e[`question${c}`],u=e[`question${c}Image`],h=Array.from({length:4},(g,f)=>e[`question${c}option${f+1}`]);return(o||u)&&h.some(Boolean)?{number:c,text:o,image:u,options:h}:null}).filter(Boolean);return a.length===0&&a.push({number:1,text:"Exemplo de pergunta",image:"https://placehold.co/600x300/FF9900/FFFFFF/png?text=Pergunta+1",options:["Opção 1","Opção 2","Opção 3","Opção 4"]}),`<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${e.brandName} - Quiz</title>
        <style>${Vn({primaryColor:e.primaryColor,backgroundColor:e.backgroundColor,menuColor:e.menuColor,boxColor:e.boxColor})}</style>
    </head>
    <body>
        <nav class="navbar">
            <img src="${i}" alt="${e.brandName}" class="logo">
            <span style="color: white; font-size: 24px;">☰</span>
        </nav>

        <div class="pergunta">
            <div style="padding-bottom: 20px;"></div>

            <div class="respondaeganhe">
                <p>${e.quizTitle}</p>
            </div>

            <div class="container">
                <div class="progress-bar-container">
                    <div class="progress-bar">
                        <div class="progress" id="progress"></div>
                    </div>
                    <div class="progress-text" id="progress-text">20%</div>
                </div>
            </div>

            <div class="question-container">
                ${a.map((n,s)=>`
                    <div id="p${n.number}" ${s===0?'class="active"':""}>
                        <img src="${n.image}" style="width: 90%; display: flex; margin: 0 auto; border-radius: 15px;">
                        <p class="pergunta_title">${n.text}</p>
                        <ul class="quiz-options">
                            ${n.options.map(c=>`
                                <li><button>${c}</button></li>
                            `).join("")}
                        </ul>
                    </div>
                `).join("")}
            </div>

            <div style="padding-bottom: 15px;"></div>
            <button class="next-button" id="next-button">Próximo</button>
            <div style="padding-bottom: 5px;"></div>
        </div>

        <script>${Zn(e.redirectUrl)}<\/script>
    </body>
    </html>`}},Yn=e=>`
.notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px;
  background: ${e.notificationBgColor||"#fff"};
  color: ${e.notificationTextColor||"#000"};
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.notification.active {
  opacity: 1;
  visibility: visible;
  bottom: 30px;
}

.notification-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #f3f4f6;
}

.notification-content {
  flex: 1;
  text-align: left;
}`,Gn=e=>`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sora', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

body {
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
}

.wheel-container {
  position: relative;
  width: 100%;
  max-width: 460px;
  aspect-ratio: 1;
  transition: transform 0.3s;
}

.wheel-img {
  width: 100%;
  height: 100%;
  transition: transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99);
}

.center-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22%;
  height: 20%;
  margin-left: 1%;
  cursor: pointer;
  z-index: 10;
  aspect-ratio: 1 / 1;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

.button-container {
  margin-top: -20px;
  text-align: center;
}

.button {
  background: #fff;
  padding: 8px 28px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 18px;
  color: #000;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: none;
  animation: pulse 1s linear infinite;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 100;
}

.popup.active {
  opacity: 1;
  visibility: visible;
}

.popup-content {
  background: #fff;
  width: 90%;
  max-width: 480px;
  text-align: center;
  padding: 40px 20px;
  border-radius: 20px;
  position: relative;
  transform: scale(0.6);
  transition: 0.3s;
}

.popup.active .popup-content {
  transform: scale(1);
}

.popup-emoji {
  font-size: 60px;
  margin-bottom: 15px;
}

.popup-title {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 15px;
}

.popup-desc {
  font-size: 16px;
  color: #636363;
  margin-bottom: 20px;
}

.popup-button {
  display: inline-block;
  background: #000;
  color: #fff;
  padding: 14px 24px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
}

${Yn(e)}`,Kn=[{name:"Maria",gender:"female",image:"https://i.ibb.co/Fn0c0Pm/mulher1.jpg"},{name:"Ana",gender:"female",image:"https://i.ibb.co/n0HzJ8m/mulher2.jpg"},{name:"Julia",gender:"female",image:"https://i.ibb.co/QdNrcPD/mulher3.jpg"},{name:"Carla",gender:"female",image:"https://i.ibb.co/sVzd8R2/mulher4.jpg"},{name:"João",gender:"male",image:"https://i.ibb.co/9VNrVcQ/homem1.webp"},{name:"Pedro",gender:"male",image:"https://i.ibb.co/XJrNk27/homem2.jpg"},{name:"Lucas",gender:"male",image:"https://i.ibb.co/4sDKm4k/homem3.jpg"},{name:"Bruno",gender:"male",image:"https://i.ibb.co/XVV5nhs/homem4.jpg"}],Qn=e=>{const i=(e.discountValues||"10,20,30,40,50").split(",").map(a=>a.trim()).filter(Boolean);return`
    const profiles = ${JSON.stringify(Kn)};
    const discounts = ${JSON.stringify(i)};
    let notificationTimeout;
    let showingNotification = false;
    
    function showNotification() {
      if ('${e.showNotifications}' !== 'true') return;
      
      const notification = document.querySelector('.notification');
      const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];
      const randomDiscount = discounts[Math.floor(Math.random() * discounts.length)];
      const template = '${e.notificationTemplate||"{name} acabou de ganhar {discount}% de desconto!"}';
      const message = template
        .replace('{name}', randomProfile.name)
        .replace('{discount}', randomDiscount);
      
      if (!showingNotification) {
        showingNotification = true;
        notification.innerHTML = \`
          <img src="\${randomProfile.image}" alt="\${randomProfile.name}" class="notification-avatar">
          <div class="notification-content">\${message}</div>
        \`;
        notification.classList.add('active');
        
        setTimeout(() => {
          notification.classList.remove('active');
          showingNotification = false;
          
          const minInterval = ${e.notificationMinInterval||2} * 1000;
          const maxInterval = ${e.notificationMaxInterval||5} * 1000;
          const randomInterval = Math.random() * (maxInterval - minInterval) + minInterval;
          
          notificationTimeout = setTimeout(showNotification, randomInterval);
        }, 3000);
      }
    }
    
    // Start notifications if enabled
    if ('${e.showNotifications}' === 'true') {
      setTimeout(showNotification, 2000);
    }`},Jn=e=>`
const wheel = document.querySelector('.wheel-img');
const button = document.querySelector('.button');
const popup = document.querySelector('.popup');

let canSpin = true;
let spinCount = 0;

function showPopup(config) {
  popup.querySelector('.popup-emoji').textContent = config.emoji;
  popup.querySelector('.popup-title').textContent = config.title;
  popup.querySelector('.popup-desc').textContent = config.description;
  popup.querySelector('.popup-button').textContent = config.buttonText;
  popup.classList.add('active');
}

function hidePopup() {
  popup.classList.remove('active');
  if (spinCount === 1) {
    canSpin = true;
  }
}

function spin() {
  if (!canSpin) return;
  
  canSpin = false;
  spinCount++;
  
  // Calculate rotation
  const currentRotation = wheel.style.transform ? 
    parseInt(wheel.style.transform.replace(/[^0-9]/g, '')) : 0;
  
  const baseSpins = 5 * 360; // 5 full rotations
  let targetAngle;
  
  if (spinCount === 1) {
    // First spin: Land on "Tente outra vez" (270 degrees)
    targetAngle = baseSpins + 270 - (currentRotation % 360);
  } else {
    // Second spin: Land on "100%" (90 degrees)
    targetAngle = baseSpins + 90 - (currentRotation % 360);
  }
  
  wheel.style.transform = \`rotate(\${currentRotation + targetAngle}deg)\`;
  
  // Show popup after wheel stops
  setTimeout(() => {
    if (spinCount === 1) {
      showPopup({
        emoji: '${e.failureEmoji}',
        title: '${e.tryAgainTitle}',
        description: '${e.tryAgainDescription}',
        buttonText: '${e.tryAgainButtonText}'
      });
    } else {
      showPopup({
        emoji: '${e.successEmoji}',
        title: '${e.popupTitle}',
        description: '${e.popupDescription}',
        buttonText: '${e.popupButtonText}'
      });
      
      // Add redirect for winning popup
      popup.querySelector('.popup-button').addEventListener('click', () => {
        window.location.href = '${e.redirectUrl}';
      });
    }
  }, 5000);
}

// Event Listeners
button.addEventListener('click', spin);

popup.addEventListener('click', (e) => {
  if (e.target === popup || e.target.classList.contains('popup-button')) {
    hidePopup();
  }
});

// Prevent wheel image dragging
wheel.addEventListener('dragstart', (e) => e.preventDefault());

${Qn(e)}`,er=[{id:"showNotifications",label:"Mostrar Notificações",type:"text",description:"Se true, mostra notificações de pessoas ganhando"},{id:"notificationBgColor",label:"Cor de Fundo da Notificação",type:"color",description:"Cor de fundo das notificações"},{id:"notificationTextColor",label:"Cor do Texto da Notificação",type:"color",description:"Cor do texto das notificações"},{id:"discountValues",label:"Valores de Desconto",type:"text",description:"Lista de valores de desconto separados por vírgula (ex: 10,20,30)"}],tr={id:"wheel",name:"Roleta Premiada",description:"Template de roleta da sorte com prêmios personalizáveis",fields:[{id:"brandName",label:"Nome da Marca",type:"text",description:"Nome da empresa ou marca"},{id:"useBackgroundColor",label:"Usar Cor de Fundo",type:"text",description:"Se true, usa cor sólida ao invés de imagem"},{id:"backgroundColor",label:"Cor do Fundo",type:"color",description:"Cor de fundo quando não usar imagem"},{id:"backgroundImage",label:"Imagem de Fundo",type:"url",description:"URL da imagem de fundo"},{id:"wheelImage",label:"Imagem da Roleta",type:"url",description:"URL da imagem da roleta"},{id:"centerImage",label:"Imagem Central",type:"url",description:"URL da imagem central da roleta"},{id:"buttonText",label:"Texto do Botão",type:"text",description:"Texto do botão de girar"},{id:"buttonColor",label:"Cor do Botão",type:"color",description:"Cor de fundo do botão"},{id:"buttonTextColor",label:"Cor do Texto do Botão",type:"color",description:"Cor do texto do botão"},{id:"failureEmoji",label:"Emoji de Falha",type:"text",description:"Emoji exibido no popup de falha"},{id:"tryAgainTitle",label:"Título do Popup de Falha",type:"text",description:"Título exibido quando o usuário não ganhar"},{id:"tryAgainDescription",label:"Descrição do Popup de Falha",type:"textarea",description:"Descrição exibida quando o usuário não ganhar"},{id:"tryAgainButtonText",label:"Texto do Botão de Falha",type:"text",description:"Texto do botão quando o usuário não ganhar"},{id:"successEmoji",label:"Emoji de Sucesso",type:"text",description:"Emoji exibido no popup de vitória"},{id:"popupTitle",label:"Título do Popup de Vitória",type:"text",description:"Título exibido quando o usuário ganhar"},{id:"popupDescription",label:"Descrição do Popup de Vitória",type:"textarea",description:"Descrição exibida quando o usuário ganhar"},{id:"popupButtonText",label:"Texto do Botão de Vitória",type:"text",description:"Texto do botão quando o usuário ganhar"},{id:"redirectUrl",label:"URL de Redirecionamento",type:"url",description:"URL para onde o usuário será redirecionado após ganhar"},...er],defaultValues:{brandName:"Sua Marca",useBackgroundColor:"false",backgroundColor:"#000000",backgroundImage:"https://placehold.co/1080x1920/000000/000000/png",wheelImage:"https://i.ibb.co/kxmYpTB/roleta.png",centerImage:"https://i.ibb.co/BCLRBBM/centro.png",buttonText:"GIRAR ROLETA",buttonColor:"#FFFFFF",buttonTextColor:"#000000",failureEmoji:"😢",tryAgainTitle:"Não foi dessa vez!",tryAgainDescription:"Mas não desanime, você tem mais uma chance de ganhar!",tryAgainButtonText:"TENTAR NOVAMENTE",successEmoji:"🎉",popupTitle:"Parabéns! Você Ganhou!",popupDescription:"Clique no botão abaixo para resgatar seu prêmio!",popupButtonText:"RESGATAR PRÊMIO",redirectUrl:"https://exemplo.com/resgate",showNotifications:"true",notificationBgColor:"#FFFFFF",notificationTextColor:"#000000",discountValues:"10,20,30,40,50",notificationMinInterval:"2",notificationMaxInterval:"5",notificationTemplate:"{name} acabou de ganhar {discount}% de desconto!"},generate:async e=>{var c,o,u,h,g,f;const i=(c=e.wheelImage)!=null&&c.startsWith("blob:")||(o=e.wheelImage)!=null&&o.startsWith("http")?e.wheelImage:"images/wheel.png",a=(u=e.centerImage)!=null&&u.startsWith("blob:")||(h=e.centerImage)!=null&&h.startsWith("http")?e.centerImage:"images/center.png",r=(g=e.backgroundImage)!=null&&g.startsWith("blob:")||(f=e.backgroundImage)!=null&&f.startsWith("http")?e.backgroundImage:"images/background.png",s=e.useBackgroundColor==="true"?`background-color: ${e.backgroundColor};`:`background-image: url('${r}');`;return`<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${e.brandName} - Roleta Premiada</title>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>${Gn(e)}</style>
    </head>
    <body style="${s}">
        <div class="main-container">
            <div class="wheel-container">
                <img src="${i}" alt="Roleta" class="wheel-img">
                <img src="${a}" alt="Girar" class="center-img">
            </div>

            <div class="button-container">
                <button class="button" style="background: ${e.buttonColor}; color: ${e.buttonTextColor}">
                    ${e.buttonText}
                </button>
            </div>
        </div>

        <div class="popup">
            <div class="popup-content">
                <div class="popup-emoji"></div>
                <div class="popup-title"></div>
                <div class="popup-desc"></div>
                <div class="popup-button"></div>
            </div>
        </div>

        <div class="notification"></div>

        <script>${Jn(e)}<\/script>
    </body>
    </html>`}},ar=()=>`
.header {
  background-color: var(--header-color);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 40px;
}

.cart-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.cart-button .material-icons {
  font-size: 24px;
  color: #333;
}`,ir=()=>`
.banner {
  width: 100%;
  margin-bottom: 2rem;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
}`,nr=()=>`
.products {
  max-width: 600px;
  margin: 1rem auto;
  padding: 0 8px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 0;
  width: 100%;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-2px);
}

.discount-tag {
  position: absolute;
  top: 4px;
  left: 4px;
  background-color: #019c3a;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 1;
  font-weight: 500;
}

.product-image {
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  padding: 0;
  margin-top: 5px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-name {
  font-size: 16px;
  color: #333;
  margin: 2px 0;
  line-height: 1.2;
  font-weight: 400;
  text-align: left;
}

.stock-indicator {
  margin: 4px 0;
  padding: 2px;
  border-radius: 4px;
  background-color: #e8f5e9;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.stock-indicator.medium {
  background-color: #fff3e0;
}

.stock-indicator.low {
  background-color: #ffebee;
}

.stock-text {
  font-size: 12px;
  color: #2e7d32;
  margin: 0;
}

.stock-indicator.medium .stock-text {
  color: #f57c00;
}

.stock-indicator.low .stock-text {
  color: #c62828;
}

.price-container {
  margin-top: auto;
  text-align: left;
}

.original-price {
  color: #999;
  text-decoration: line-through;
  font-size: 16px;
  margin-bottom: 2px;
}

.current-price {
  color: var(--current-price-color);
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
}`,rr=()=>`
.product-details {
  display: none;
  background: white;
  min-height: 100vh;
}

.product-details.active {
  display: block;
}

.product-header .nav {
  justify-content: space-between;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
}

.back-button:hover {
  background: rgba(0, 0, 0, 0.05);
}

.back-button .material-icons {
  font-size: 20px;
}

.product-display {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.main-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  object-fit: contain;
}

.image-thumbnails {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 4px;
  max-width: 400px;
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.image-thumbnails::-webkit-scrollbar {
  display: none;
}

.thumbnail {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
  border: 2px solid transparent;
  transition: border-color 0.2s;
}

.thumbnail.active {
  border-color: var(--button-color);
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.gallery-nav:hover {
  background: white;
}

.gallery-nav.prev {
  left: 10px;
}

.gallery-nav.next {
  right: 10px;
}

.product-info {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.product-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.promo-tag {
  display: inline-block;
  background: #ffebee;
  color: #c62828;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 16px;
}

.product-price {
  margin-bottom: 16px;
}

.old-price {
  color: #999;
  text-decoration: line-through;
  font-size: 14px;
  margin-bottom: 4px;
}

.current-price {
  color: var(--current-price-color);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.buy-button {
  width: 100%;
  background: var(--button-color);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background-color 0.2s;
}

.buy-button:hover {
  background: var(--button-hover-color);
}

.info-container {
  border-radius: 8px;
  margin-bottom: 24px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
}

.info-item .material-icons {
  color: var(--button-color);
  font-size: 20px;
}

.info-text {
  font-size: 14px;
  color: #666;
  flex: 1;
}

.info-text a {
  color: var(--button-color);
  text-decoration: none;
  font-weight: 500;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  width: fit-content;
  padding: 3px 15px;
  background-color: var(--details-color);
  border-radius: 10px 10px 0px 0px;
}

.section-content {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
  border: 1px solid var(--details-color);
  border-radius: 0px 10px 10px 10px;
  padding: 3px 10px;
}

.specs-list {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
  border: 1px solid var(--details-color);
  border-radius: 0px 10px 10px 10px;
  padding: 3px 10px;
}

.specs-list dt {
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
}

.specs-list dd {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.comments-section {
  margin-bottom: 70px;
}

.comment {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.comment:last-child {
  border-bottom: none;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.comment-author {
  font-weight: 500;
  color: #333;
}

.comment-rating {
  color: #ffc107;
  letter-spacing: 2px;
}

.comment-text {
  color: #666;
  line-height: 1.5;
}

.no-comments {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 0;
  color: #999;
  text-align: center;
}

.no-comments .material-icons {
  font-size: 32px;
  opacity: 0.5;
}

.fixed-button {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  max-width: 600px;
  background: var(--button-color);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 100;
  transition: background-color 0.2s;
}

.fixed-button:hover {
  background: var(--button-hover-color);
}

@media (min-width: 768px) {
  .product-title {
    font-size: 24px;
  }

  .current-price {
    font-size: 36px;
  }

  .section-title {
    font-size: 18px;
  }

  .specs-list {
    grid-template-columns: repeat(2, 1fr);
  }
}`,or=()=>`
.footer {
  background-color: #333;
  color: white;
  padding: 4rem 1rem 1rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-section a:hover {
  color: white;
}

.footer-bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid #444;
  text-align: center;
  color: #ccc;
}`,sr=e=>`
/* CSS Variables */
:root {
  --header-color: ${e.headerColor};
  --background-color: ${e.backgroundColor};
  --current-price-color: ${e.currentPriceColor};
  --details-color: ${e.detailsColor};
  --button-color: ${e.buttonColor};
  --button-hover-color: ${e.buttonHoverColor};
}

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background-color: var(--background-color);
  min-height: 100vh;
}

main {
  min-height: calc(100vh - 60px);
}

/* Component Styles */
${ar()}
${ir()}
${nr()}
${rr()}
${or()}

/* Utility Classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}`,lr=()=>`
// Store current image index for each product
const productStates = {};

function showProductDetails(productId) {
  // Hide home page
  document.getElementById('home-page').style.display = 'none';
  
  // Show product details
  const details = document.getElementById('product-' + productId);
  details.classList.add('active');
  
  // Initialize product state
  productStates[productId] = { currentIndex: 0 };
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  // Handle fixed button visibility
  const fixedButton = details.querySelector('.fixed-button');
  const buyButton = details.querySelector('.buy-button');
  
  const scrollHandler = () => {
    const buttonRect = buyButton.getBoundingClientRect();
    if (buttonRect.bottom < 0) {
      fixedButton.style.display = 'block';
    } else {
      fixedButton.style.display = 'none';
    }
  };
  
  window.addEventListener('scroll', scrollHandler);
  details.scrollHandler = scrollHandler;
}

function hideProductDetails(productId) {
  // Show home page
  document.getElementById('home-page').style.display = 'block';
  
  // Hide product details
  const details = document.getElementById('product-' + productId);
  details.classList.remove('active');
  
  // Remove scroll listener
  if (details.scrollHandler) {
    window.removeEventListener('scroll', details.scrollHandler);
  }
}

function setImage(productId, index) {
  const product = data.products.find(p => p.id === productId);
  if (!product || !product.images[index]) return;
  
  const mainImage = document.getElementById('main-image-' + productId);
  const thumbnails = document.querySelectorAll('#product-' + productId + ' .thumbnail');
  
  productStates[productId].currentIndex = index;
  mainImage.src = product.images[index];
  
  // Update active thumbnail
  thumbnails.forEach((thumb, idx) => {
    if (idx === index) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}

function changeImage(productId, direction) {
  const product = data.products.find(p => p.id === productId);
  if (!product) return;
  
  const state = productStates[productId];
  const totalImages = product.images.length;
  let newIndex;
  
  if (direction === 'next') {
    newIndex = (state.currentIndex + 1) % totalImages;
  } else {
    newIndex = state.currentIndex - 1;
    if (newIndex < 0) {
      newIndex = totalImages - 1;
    }
  }
  
  setImage(productId, newIndex);
}`,cr=(e,i)=>{var a;return`
<div id="product-${e.id}" class="product-details">
  <header class="header product-header">
    <nav class="nav">
      <button class="back-button" onclick="hideProductDetails(${e.id})">
        <span class="material-icons">arrow_back</span>
      </button>
      <img src="${i.logoUrl}" alt="${i.brandName}" class="logo">
      <div style="width: 40px"></div>
    </nav>
  </header>

  <div class="product-display">
    <div style="position: relative; width: 100%; max-width: 400px;">
      <img src="${e.images[0]}" alt="${e.name}" class="main-image" id="main-image-${e.id}">
      ${e.images.length>1?`
        <button class="gallery-nav prev" onclick="changeImage(${e.id}, 'prev')">
          <span class="material-icons">chevron_left</span>
        </button>
        <button class="gallery-nav next" onclick="changeImage(${e.id}, 'next')">
          <span class="material-icons">chevron_right</span>
        </button>
      `:""}
    </div>
    ${e.images.length>1?`
      <div class="image-thumbnails">
        ${e.images.map((r,n)=>`
          <img 
            src="${r}" 
            alt="${e.name} - Imagem ${n+1}"
            class="thumbnail ${n===0?"active":""}"
            onclick="setImage(${e.id}, ${n})"
          >
        `).join("")}
      </div>
    `:""}
  </div>

  <div class="product-info">
    <h1 class="product-title">${e.name}</h1>
    <div class="promo-tag" style="background: ${i.promoBgColor}; color: ${i.promoTextColor}">
      ${i.promoText}
    </div>
    
    <div class="product-price">
      <div class="old-price">${e.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</div>
      <div class="current-price">${e.discountPrice.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</div>
    </div>

    <button class="buy-button" onclick="window.location.href='${e.buyUrl||"#"}'">
      Comprar agora
    </button>

    <div class="info-container">
      <div class="info-item">
        <span class="material-icons">verified_user</span>
        <span class="info-text">
          <a>Compra Garantida</a>, receba o produto que está esperando ou devolvemos o dinheiro.
        </span>
      </div>
      <div class="info-item">
        <span class="material-icons">emoji_events</span>
        <span class="info-text">12 meses de garantia de fábrica.</span>
      </div>
    </div>

    ${e.showDescription!==!1?`
      <h2 class="section-title">DETALHES</h2>
      <div class="section-content">
        ${e.description||`
          <div class="no-comments">
            <span class="material-icons">description</span>
            <p>Este produto ainda não possui uma descrição detalhada</p>
          </div>
        `}
      </div>
    `:""}

    ${e.showSpecs!==!1?`
      <h2 class="section-title">CARACTERÍSTICAS</h2>
      <dl class="specs-list">
        <dd>${e.specs||`
          <div class="no-comments">
            <span class="material-icons">list_alt</span>
            <p>Este produto ainda não possui especificações cadastradas</p>
          </div>
        `}</dd>
      </dl>
    `:""}

    ${e.showComments!==!1?`
      <h2 class="section-title">AVALIAÇÕES</h2>
      <div class="section-content comments-section">
        ${(a=e.comments)!=null&&a.length?`
          ${e.comments.map(r=>`
            <div class="comment">
              <div class="comment-header">
                <div class="comment-author">${r.author}</div>
                <div class="comment-rating">
                  ${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}
                </div>
              </div>
              <div class="comment-text">${r.text}</div>
            </div>
          `).join("")}
        `:`
          <div class="no-comments">
            <span class="material-icons">chat_bubble_outline</span>
            <p>Ainda não há avaliações para este produto</p>
          </div>
        `}
      </div>
    `:""}
  </div>

  <button class="fixed-button" onclick="window.location.href='${e.buyUrl||"#"}'">
    Comprar agora
  </button>
</div>`},dr={id:"store",name:"Loja Virtual",description:"Template para criar uma loja virtual completa e personalizada",fields:[{id:"brandName",label:"Nome da Marca",type:"text",description:"Nome da sua loja"},{id:"logoUrl",label:"URL do Logo",type:"url",description:"URL do logotipo da marca"},{id:"bannerUrl",label:"URL do Banner",type:"url",description:"Banner principal da loja"},{id:"headerColor",label:"Cor do Menu Superior",type:"color",description:"Cor do menu superior"},{id:"backgroundColor",label:"Cor do Background",type:"color",description:"Cor de fundo da página"},{id:"currentPriceColor",label:"Cor do Preço Atual",type:"color",description:"Cor do preço com desconto"},{id:"detailsColor",label:"Cor dos Detalhes",type:"color",description:"Cor dos títulos de seção"},{id:"buttonColor",label:"Cor do Botão",type:"color",description:"Cor principal dos botões"},{id:"buttonHoverColor",label:"Cor do Botão (Hover)",type:"color",description:"Cor dos botões ao passar o mouse"},{id:"promoText",label:"Texto da Promoção",type:"text",description:"Texto que aparece na tag de promoção"},{id:"promoBgColor",label:"Cor de Fundo da Promoção",type:"color",description:"Cor de fundo da tag de promoção"},{id:"promoTextColor",label:"Cor do Texto da Promoção",type:"color",description:"Cor do texto da tag de promoção"},{id:"products",label:"Produtos",type:"text",description:"Lista de produtos em formato JSON"}],defaultValues:{brandName:"Minha Loja",logoUrl:"https://placehold.co/200x80",bannerUrl:"https://images.unsplash.com/photo-1441986300917-64674bd600d8",headerColor:"#FFFFFF",backgroundColor:"#F5F5F5",currentPriceColor:"#1A73E8",detailsColor:"#BCBCBC",promoText:"🎄 Promoção de Natal",promoBgColor:"#ffebee",promoTextColor:"#c62828",buttonColor:"#1A73E8",buttonHoverColor:"#1557B0",products:JSON.stringify([{id:1,name:"Produto 1",description:"Descrição do produto 1",price:99.9,discountPrice:79.9,stock:15,images:["https://images.unsplash.com/photo-1523275335684-37898b6baf30","https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"],specs:`
          • Sistema: iOS 17
          • Tela: 6.7" Super Retina XDR
          • Processador: A17 Pro
          • Câmera: 48MP + 12MP + 12MP
          • Bateria: 4.422 mAh
        `,comments:[],buyUrl:"https://exemplo.com/produto/1"},{id:2,name:"Produto 2",description:"Descrição do produto 2",price:149.9,discountPrice:129.9,stock:8,images:["https://images.unsplash.com/photo-1505740420928-5e560c06d30e","https://images.unsplash.com/photo-1583394838336-acd977736f90"],specs:`
          • Sistema: Android 14
          • Tela: 6.8" Dynamic AMOLED
          • Processador: Snapdragon 8 Gen 3
          • Câmera: 200MP + 12MP + 12MP
          • Bateria: 5.000 mAh
        `,comments:[],buyUrl:"https://exemplo.com/produto/2"}])},generate:async e=>{const[i,a]=await Promise.all([Te.processImagePath(e.logoUrl,"images/logo.png"),Te.processImagePath(e.bannerUrl,"images/banner.png")]),r=JSON.parse(e.products||"[]"),n=await Te.processProductImages(r);return`<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${e.brandName}</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <style>${sr(e)}</style>
    </head>
    <body>
        <div id="home-page">
          <header class="header">
              <nav class="nav">
                  <img src="${i}" alt="${e.brandName}" class="logo">
                  <button class="cart-button">
                      <span class="material-icons">shopping_cart</span>
                  </button>
              </nav>
          </header>

          <main>
              <div class="banner">
                  <img src="${a}" alt="Banner" class="banner-image">
              </div>

              <div class="products">
                  <div class="products-grid">
                      ${n.map(s=>`
                          <div class="product-card" onclick="showProductDetails(${s.id})">
                              <span class="discount-tag">
                                  <strong>100%</strong> off
                              </span>
                              
                              <div class="product-image">
                                  <img src="${s.images[0]}" alt="${s.name}">
                              </div>

                              <p class="product-name">${s.name}</p>

                              <div class="stock-indicator ${s.stock>12?"":s.stock>8?"medium":"low"}">
                                  <p class="stock-text">Restam ${s.stock} unidades</p>
                              </div>

                              <div class="price-container">
                                  <p class="original-price">${s.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</p>
                                  <p class="current-price">${s.discountPrice.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</p>
                              </div>
                          </div>
                      `).join("")}
                  </div>
              </div>
          </main>
        </div>

        ${n.map(s=>cr(s,e)).join("")}

        <script>
          const data = ${JSON.stringify({products:n})};
          ${lr()}
        <\/script>
    </body>
    </html>`}},pr=({backgroundColor:e,headerColor:i,buttonColor:a,buttonTextColor:r})=>`
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-serif: 'Merriweather', Georgia, serif;
  --color-primary: #1a73e8;
  --color-text: #1a1a1a;
  --color-text-light: #666666;
  --color-border: #e5e5e5;
  --color-background: ${e};
  --color-header: ${i};
  --color-button: ${a};
  --color-button-text: ${r};
  --container-width: 800px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  line-height: 1.6;
  color: var(--color-text);
  background: var(--color-background);
}

.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-header);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  justify-content: center;
}

.logo img {
  height: 40px;
  width: auto;
}

/* Article */
.article {
  padding: 2rem 0;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.category {
  color: var(--color-primary);
  font-weight: 500;
}

.article-title {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  font-weight: 700;
}

.article-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  line-height: 1.4;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 500;
}

.author-name {
  font-weight: 500;
}

.article-image {
  margin-bottom: 2rem;
}

.article-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.article-image figcaption {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-light);
  text-align: center;
}

.image-button-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.image-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-button);
  color: var(--color-button-text);
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.image-button:hover {
  opacity: 0.9;
}

.article-content {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  line-height: 1.8;
}

.article-content h2 {
  font-family: var(--font-sans);
  font-size: 1.75rem;
  margin: 2rem 0 1rem;
}

.article-content p {
  margin-bottom: 1.5rem;
}

.article-content blockquote {
  border-left: 4px solid var(--color-primary);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: var(--color-text-light);
}

/* Comments */
.article-comments {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.article-comments h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.login-message {
  text-align: center;
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.comment {
  display: flex;
  gap: 1rem;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  flex-shrink: 0;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.comment-author {
  font-weight: 500;
}

.comment-header time {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

/* Related News */
.related-news {
  background: #f8f9fa;
  padding: 4rem 0;
}

.related-news h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.related-card {
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}

.related-card:hover {
  transform: translateY(-4px);
}

.related-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.related-card h4 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.related-card time {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

/* Footer */
.footer {
  padding: 2rem 0;
  background: #f8f9fa;
  text-align: center;
  color: var(--color-text-light);
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 768px) {
  .article-title {
    font-size: 2rem;
  }

  .article-subtitle {
    font-size: 1.125rem;
  }

  .article-content {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .article-meta {
    flex-wrap: wrap;
  }
}
`,ur=()=>`
// Auto-save functionality
let autoSaveTimeout;
const autoSave = () => {
  clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(() => {
    console.log('Content auto-saved');
    // Implement actual save logic here
  }, 1000);
};

// Version control
const versions = [];
const saveVersion = (content) => {
  versions.push({
    content,
    timestamp: new Date().toISOString()
  });
};

// Sticky header behavior
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }
  
  lastScroll = currentScroll;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set up content observers for auto-save
  const content = document.querySelector('.article-content');
  if (content) {
    const observer = new MutationObserver(autoSave);
    observer.observe(content, { 
      childList: true, 
      subtree: true, 
      characterData: true 
    });
  }
});`,mr={id:"news",name:"Página de Notícias",description:"Template profissional para publicação de notícias e artigos",fields:[{id:"backgroundColor",label:"Cor do Fundo",type:"color",description:"Cor de fundo da página"},{id:"headerColor",label:"Cor do Header",type:"color",description:"Cor de fundo do cabeçalho"},{id:"buttonColor",label:"Cor do Botão",type:"color",description:"Cor de fundo do botão"},{id:"buttonTextColor",label:"Cor do Texto do Botão",type:"color",description:"Cor do texto do botão"},{id:"buttonText",label:"Texto do Botão",type:"text",description:"Texto que aparece no botão abaixo da imagem"},{id:"brandName",label:"Nome do Site",type:"text",description:"Nome do site ou portal de notícias"},{id:"logoUrl",label:"Logo do Site",type:"url",description:"URL do logotipo do site"},{id:"title",label:"Título da Notícia",type:"text",description:"Título principal da notícia"},{id:"subtitle",label:"Subtítulo",type:"textarea",description:"Linha fina ou resumo da notícia"},{id:"author",label:"Autor",type:"text",description:"Nome do autor da notícia"},{id:"category",label:"Categoria",type:"text",description:"Categoria da notícia (ex: Tecnologia, Esportes, etc)"},{id:"mainImage",label:"Imagem Principal",type:"url",description:"Imagem destacada da notícia"},{id:"imageCaption",label:"Legenda da Imagem",type:"text",description:"Legenda da imagem principal"},{id:"content",label:"Conteúdo",type:"textarea",description:"Corpo da notícia em formato HTML"},{id:"metaTitle",label:"Meta Title",type:"text",description:"Título para SEO"},{id:"metaDescription",label:"Meta Description",type:"textarea",description:"Descrição para SEO"},{id:"metaKeywords",label:"Meta Keywords",type:"text",description:"Palavras-chave para SEO"},{id:"publishDate",label:"Data de Publicação",type:"text",description:"Data e hora da publicação"},{id:"status",label:"Status",type:"text",description:"Status da publicação (rascunho, publicado, etc)"}],defaultValues:{brandName:"Meu Portal de Notícias",logoUrl:"https://placehold.co/200x50/FF9900/FFFFFF/png?text=NEWS",backgroundColor:"#ffffff",headerColor:"#ffffff",buttonColor:"#1a73e8",buttonTextColor:"#ffffff",buttonText:"Leia mais sobre este assunto",title:"Título da Notícia",subtitle:"Subtítulo ou linha fina da notícia com mais detalhes sobre o conteúdo",author:"Nome do Autor",category:"Tecnologia",mainImage:"https://images.unsplash.com/photo-1504711434969-e33886168f5c",imageCaption:"Legenda da imagem principal",content:`<h2>Subtítulo da Seção</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<blockquote>Esta é uma citação importante que destaca um ponto chave da notícia.</blockquote>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`,metaTitle:"",metaDescription:"",metaKeywords:"",publishDate:new Date().toISOString(),status:"published"},generate:async e=>{var h;const[i,a]=await Promise.all([Te.processImagePath(e.logoUrl,"images/logo.png"),Te.processImagePath(e.mainImage,"images/main.jpg")]),n=new Date(e.publishDate).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),s=e.metaTitle||e.title,c=e.metaDescription||((h=e.subtitle)==null?void 0:h.slice(0,160))||`${e.title} - Leia mais sobre ${e.category.toLowerCase()} em ${e.brandName}`,o=e.metaKeywords||`${e.category.toLowerCase()}, notícia, ${e.title.toLowerCase().split(" ").slice(0,3).join(", ")}`,u=pr({backgroundColor:e.backgroundColor,headerColor:e.headerColor,buttonColor:e.buttonColor,buttonTextColor:e.buttonTextColor});return`<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${s}</title>
        <meta name="description" content="${c}">
        <meta name="keywords" content="${o}">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
        <style>${u}</style>
    </head>
    <body>
        <header class="header">
            <div class="container">
                <a href="#" class="logo">
                    <img src="${i}" alt="${e.brandName}" />
                </a>
            </div>
        </header>

        <main class="main">
            <article class="article">
                <div class="container">
                    <div class="article-meta">
                        <span class="category">${e.category}</span>
                        <time datetime="${e.publishDate}">${n}</time>
                    </div>

                    <h1 class="article-title">${e.title}</h1>
                    <p class="article-subtitle">${e.subtitle}</p>

                    <div class="article-author">
                        <div class="author-avatar">
                            ${e.author.charAt(0)}
                        </div>
                        <div class="author-info">
                            <span class="author-name">Por ${e.author}</span>
                        </div>
                    </div>

                    <figure class="article-image">
                        <img src="${a}" alt="${e.imageCaption}">
                        <figcaption>${e.imageCaption}</figcaption>
                        <div class="image-button-container">
                            <a href="${e.redirectUrl||"#"}" class="image-button" style="background-color: ${e.buttonColor}; color: ${e.buttonTextColor}">
                                ${e.buttonText}
                            </a>
                        </div>
                    </figure>

                    <div class="article-content">
                        ${e.content}
                    </div>

                    <div class="article-comments">
                        <h3>Comentários</h3>
                        <p class="login-message">Faça login para comentar nesta notícia</p>
                        <div class="comments-list">
                            <div class="comment">
                                <div class="comment-avatar">M</div>
                                <div class="comment-content">
                                    <div class="comment-header">
                                        <span class="comment-author">Maria Silva</span>
                                        <time>há 2 horas</time>
                                    </div>
                                    <time>Como sempre, uma ótima notícia!</time>
                                </div>
                        </div>
                        <div class="comment">
                            <div class="comment-avatar">J</div>
                            <div class="comment-content">
                                <div class="comment-header">
                                    <span class="comment-author">João Santos</span>
                                    <time>há 2 horas</time>
                                </div>
                                <p>Concordo com os pontos apresentados. Seria interessante ver um aprofundamento sobre esse tema em artigos futuros.</p>
                            </div>
                        </div>
                        <div class="comment">
                            <div class="comment-avatar">P</div>
                            <div class="comment-content">
                                <div class="comment-header">
                                    <span class="comment-author">Pedro Oliveira</span>
                                    <time>há 1 hora</time>
                                </div>
                                <p>Ótima análise! As referências citadas ajudam muito a entender o contexto geral do assunto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <aside class="related-news">
                <div class="container">
                    <h3>Notícias Relacionadas</h3>
                    <div class="related-grid">
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74" alt="Apple anuncia novo iPhone">
                            <h4>Apple anuncia novo iPhone com recursos revolucionários de IA</h4>
                            <time>12 de janeiro de 2024</time>
                        </div>
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" alt="SpaceX lança foguete">
                            <h4>SpaceX realiza lançamento histórico com nova tecnologia de propulsão</h4>
                            <time>11 de janeiro de 2024</time>
                        </div>
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="Descoberta científica">
                            <h4>Cientistas descobrem novo planeta potencialmente habitável</h4>
                            <time>10 de janeiro de 2024</time>
                        </div>
                    </div>
                </div>
            </aside>
        </main>

        <footer class="footer">
            <div class="container">
                <p>&copy; ${new Date().getFullYear()} ${e.brandName}. Todos os direitos reservados.</p>
            </div>
        </footer>

        <script>${ur()}<\/script>
    </body>
    </html>`}},hr=[Xn,tr,dr,mr],fr=[{id:"personal",label:"Dados Pessoais",icon:rt},{id:"plans",label:"Planos",icon:ot},{id:"financial",label:"Dados Financeiros",icon:ot}];function gr({activeSection:e,onChangeSection:i,onClose:a}){return t.jsx("aside",{className:"w-64 flex-shrink-0 border-r border-gray-200 bg-white",children:t.jsxs("div",{className:"p-4",children:[t.jsx("button",{onClick:a,className:"mb-4 p-2 hover:bg-gray-100 rounded-lg transition-colors",children:t.jsx(na,{className:"w-4 h-4 text-gray-600"})}),t.jsx("nav",{className:"space-y-1",children:fr.map(r=>t.jsxs("button",{onClick:()=>i(r.id),className:ge("w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",e===r.id?"bg-indigo-50 text-indigo-600 shadow-sm":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"),children:[Ne.createElement(r.icon,{className:ge("w-4 h-4",e===r.id?"text-indigo-600":"text-gray-400")}),r.label]},r.id))})]})})}function xr(){const[e,i]=V.useState(null),[a,r]=V.useState(!1),[n,s]=V.useState(null),[c,o]=V.useState(null),[u,h]=V.useState({fullName:"",email:"",currentPassword:"",newPassword:"",confirmPassword:""});return{formData:u,activeField:e,loading:a,error:n,success:c,handleChange:(x,p)=>{h(b=>({...b,[x]:p}))},handleUpdateName:async x=>{x.preventDefault(),r(!0),s(null),o(null);try{const{error:p}=await ie.from("users").update({full_name:u.fullName}).eq("email","admin@templatefy.com");if(p)throw p;o("Nome atualizado com sucesso!"),i(null)}catch(p){s(p instanceof Error?p.message:"Ocorreu um erro")}finally{r(!1)}},handleUpdateEmail:async x=>{x.preventDefault(),r(!0),s(null),o(null);try{const{error:p}=await ie.from("users").update({email:u.email}).eq("email","admin@templatefy.com");if(p)throw p.code==="23505"?new Error("Este e-mail já está em uso"):p;o("E-mail atualizado com sucesso!"),i(null)}catch(p){s(p instanceof Error?p.message:"Ocorreu um erro")}finally{r(!1)}},handleUpdatePassword:async x=>{x.preventDefault(),r(!0),s(null),o(null);try{if(u.newPassword!==u.confirmPassword)throw new Error("As senhas não coincidem");const{data:p}=await ie.from("users").select("password").eq("email","admin@templatefy.com").single();if(!p||p.password!==u.currentPassword)throw new Error("Senha atual incorreta");const{error:b}=await ie.from("users").update({password:u.newPassword}).eq("email","admin@templatefy.com");if(b)throw b;o("Senha atualizada com sucesso!"),i(null)}catch(p){s(p instanceof Error?p.message:"Ocorreu um erro")}finally{r(!1)}},setActiveField:i}}function Ze({icon:e,title:i,value:a,children:r,activeField:n,onToggle:s,error:c,success:o,disabled:u}){return t.jsx("div",{className:"bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden",children:t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"p-3 bg-gray-100 rounded-xl",children:t.jsx(e,{className:"w-5 h-5 text-gray-600"})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-medium text-gray-900",children:i}),t.jsx("p",{className:"text-sm text-gray-500",children:a})]})]}),s&&!u&&t.jsx(ce,{variant:"outline",onClick:s,children:n?"Cancelar":"Alterar"})]}),(n||r)&&t.jsxs("div",{className:ge("pt-6",{"mt-6 border-t":n}),children:[c&&t.jsxs("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-sm text-red-600",children:[t.jsx(Ye,{className:"w-4 h-4 flex-shrink-0"}),c]}),o&&t.jsxs("div",{className:"mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-sm text-green-600",children:[t.jsx($a,{className:"w-4 h-4 flex-shrink-0"}),o]}),r]})]})})}function vr(){const{profile:e}=Et(),{formData:i,activeField:a,loading:r,error:n,success:s,handleChange:c,handleUpdateName:o,handleUpdateEmail:u,handleUpdatePassword:h,setActiveField:g}=xr();return V.useEffect(()=>{e&&(c("fullName",e.full_name||""),c("email",e.email))},[e]),t.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[t.jsx(Ze,{icon:rt,title:"Nome Completo",value:(e==null?void 0:e.full_name)||"Sem nome",activeField:a==="name",onToggle:()=>g(a==="name"?null:"name"),error:n,success:s,children:a==="name"&&t.jsxs("form",{onSubmit:o,className:"space-y-4",children:[t.jsx(ee,{label:"Novo Nome",value:i.fullName,onChange:f=>c("fullName",f.target.value),placeholder:"Digite seu novo nome",required:!0}),t.jsx("div",{className:"flex justify-end",children:t.jsx(ce,{type:"submit",variant:"primary",disabled:r,children:r?"Salvando...":"Salvar"})})]})}),t.jsx(Ze,{icon:qa,title:"E-mail",value:(e==null?void 0:e.email)||"",activeField:a==="email",onToggle:()=>g(a==="email"?null:"email"),error:n,success:s,children:a==="email"&&t.jsxs("form",{onSubmit:u,className:"space-y-4",children:[t.jsx(ee,{label:"Novo E-mail",type:"email",value:i.email,onChange:f=>c("email",f.target.value),placeholder:"Digite seu novo e-mail",required:!0}),t.jsx("div",{className:"flex justify-end",children:t.jsx(ce,{type:"submit",variant:"primary",disabled:r,children:r?"Salvando...":"Salvar"})})]})}),t.jsx(Ze,{icon:Wa,title:"Senha",value:"••••••••",activeField:a==="password",onToggle:()=>g(a==="password"?null:"password"),error:n,success:s,children:a==="password"&&t.jsxs("form",{onSubmit:h,className:"space-y-4",children:[t.jsx(ee,{label:"Senha Atual",type:"password",value:i.currentPassword,onChange:f=>c("currentPassword",f.target.value),placeholder:"Digite sua senha atual",required:!0}),t.jsx(ee,{label:"Nova Senha",type:"password",value:i.newPassword,onChange:f=>c("newPassword",f.target.value),placeholder:"Digite sua nova senha",required:!0}),t.jsx(ee,{label:"Confirmar Nova Senha",type:"password",value:i.confirmPassword,onChange:f=>c("confirmPassword",f.target.value),placeholder:"Confirme sua nova senha",required:!0}),t.jsx("div",{className:"flex justify-end",children:t.jsx(ce,{type:"submit",variant:"primary",disabled:r,children:r?"Salvando...":"Salvar"})})]})})]})}function br(){return t.jsx("div",{className:"w-full space-y-6",children:t.jsx(Ze,{icon:ot,title:"Dados de Pagamento",value:"Em breve",disabled:!0})})}const yr=[{id:"free",name:"Plano Gratuito",price:"R$ 0",features:["10 downloads por mês","Acesso a todos os templates","Suporte por email"],current:!0},{id:"pro",name:"Plano Pro",price:"R$ 29,90",features:["50 downloads por mês","Acesso a todos os templates","Suporte prioritário","Remoção da marca d'água","Templates exclusivos"],comingSoon:!0},{id:"enterprise",name:"Plano Enterprise",price:"R$ 99,90",features:["Downloads ilimitados","Acesso a todos os templates","Suporte VIP","Remoção da marca d'água","Templates exclusivos","API de integração","Múltiplos usuários"],comingSoon:!0}];function wr(){return t.jsx("div",{className:"w-full space-y-6",children:t.jsx(Ze,{icon:ot,title:"Planos",value:"Gerencie seu plano atual",children:t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-6",children:yr.map(e=>t.jsxs(Pt,{className:"relative overflow-hidden",children:[e.current&&t.jsx("div",{className:"absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg",children:"Plano Atual"}),e.comingSoon&&t.jsx("div",{className:"absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg",children:"Em Breve"}),t.jsxs("div",{className:"p-6",children:[t.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:e.name}),t.jsxs("div",{className:"mb-4",children:[t.jsx("span",{className:"text-2xl font-bold text-gray-900",children:e.price}),t.jsx("span",{className:"text-gray-500",children:"/mês"})]}),t.jsx("ul",{className:"space-y-3 mb-6",children:e.features.map((i,a)=>t.jsxs("li",{className:"flex items-center gap-2 text-sm text-gray-600",children:[t.jsx(Ha,{className:"w-4 h-4 text-indigo-600 flex-shrink-0"}),i]},a))}),t.jsx("button",{className:`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors
                    ${e.current?"bg-gray-100 text-gray-400 cursor-not-allowed":e.comingSoon?"bg-amber-500 text-white hover:bg-amber-600":"bg-indigo-600 text-white hover:bg-indigo-700"}`,disabled:e.current||e.comingSoon,children:e.current?"Plano Atual":e.comingSoon?"Em Breve":"Assinar Plano"})]})]},e.id))})})})}function jr(){const[e,i]=V.useState("personal");return{activeSection:e,setActiveSection:i}}function kr({onClose:e}){const{activeSection:i,setActiveSection:a}=jr();return t.jsx("div",{className:"h-full flex flex-col bg-gray-50",children:t.jsx("div",{className:"flex-1 overflow-hidden",children:t.jsxs("div",{className:"h-full flex",children:[t.jsx(gr,{activeSection:i,onChangeSection:a,onClose:e}),t.jsxs("div",{className:"flex-1 overflow-y-auto p-8",children:[i==="personal"&&t.jsx(vr,{}),i==="financial"&&t.jsx(br,{}),i==="plans"&&t.jsx(wr,{})]})]})})})}const _r=new ua;function Nr({template:e,values:i}){const[a,r]=V.useState("");return V.useEffect(()=>{(async()=>{try{const s=await _r.renderPreview(e,i);r(s)}catch(s){console.error("Error generating preview:",s)}})()},[e,i]),t.jsx("iframe",{srcDoc:a,className:"w-full h-full border-0",title:"Template Preview"})}function bt({title:e,value:i,icon:a,trend:r,className:n}){return t.jsxs("div",{className:ge("bg-white p-6 rounded-lg border border-gray-200",n),children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("div",{className:"p-2 bg-indigo-50 rounded-lg",children:t.jsx(a,{className:"w-5 h-5 text-indigo-600"})}),r&&t.jsxs("div",{className:ge("text-sm font-medium",r.isPositive?"text-green-600":"text-red-600"),children:[r.isPositive?"+":"-",Math.abs(r.value),"%"]})]}),t.jsx("h3",{className:"mt-4 text-2xl font-semibold text-gray-900",children:i}),t.jsx("p",{className:"mt-1 text-sm text-gray-500",children:e})]})}function Cr({data:e}){const i=Math.max(...e.map(a=>a.count));return t.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[t.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Downloads por Dia"}),t.jsx("div",{className:"h-[200px] flex items-end gap-2",children:e.map((a,r)=>{const n=a.count/i*100;return t.jsxs("div",{className:"flex-1 flex flex-col items-center gap-2",children:[t.jsxs("div",{className:"w-full bg-indigo-100 rounded-t-sm relative group",children:[t.jsx("div",{className:"bg-indigo-600 rounded-t-sm transition-all duration-300",style:{height:`${n}%`}}),t.jsxs("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-1 px-2 rounded",children:[a.count," downloads"]})]}),t.jsx("span",{className:"text-xs text-gray-500 -rotate-45 origin-top-left",children:new Date(a.date).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})})]},r)})})]})}function Sr({templates:e}){return t.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[t.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Templates Mais Baixados"}),t.jsx("div",{className:"space-y-4",children:e.map(i=>t.jsxs("div",{children:[t.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[t.jsx("span",{className:"font-medium text-gray-700",children:i.name}),t.jsxs("span",{className:"text-gray-500",children:[i.downloads," downloads"]})]}),t.jsx("div",{className:"w-full h-2 bg-gray-100 rounded-full overflow-hidden",children:t.jsx("div",{className:"h-full bg-indigo-600 rounded-full",style:{width:`${i.percentage}%`}})})]},i.id))})]})}function Er(){const[e,i]=V.useState(null),[a,r]=V.useState(!0);V.useEffect(()=>{n()},[]);const n=async()=>{try{const{count:s}=await ie.from("downloads").select("*",{count:"exact",head:!0}),{count:c}=await ie.from("profiles").select("*",{count:"exact",head:!0}),o=new Date;o.setDate(o.getDate()-7);const{data:u}=await ie.from("downloads").select("created_at").gte("created_at",o.toISOString()),h=u==null?void 0:u.reduce((x,p)=>{const b=new Date(p.created_at).toISOString().split("T")[0];return x[b]=(x[b]||0)+1,x},{}),{data:g}=await ie.from("downloads").select("template_id"),f=g==null?void 0:g.reduce((x,p)=>(x[p.template_id]=(x[p.template_id]||0)+1,x),{}),m=[{id:"image-quiz",name:"Quiz com Imagens"},{id:"wheel",name:"Roleta Premiada"},{id:"store",name:"Loja Virtual"}].map(x=>({...x,downloads:(f==null?void 0:f[x.id])||0,percentage:((f==null?void 0:f[x.id])||0)/(s||1)*100})).sort((x,p)=>p.downloads-x.downloads);i({totalDownloads:s||0,totalUsers:c||0,downloadsTrend:12,usersTrend:8,dailyDownloads:Object.entries(h||{}).map(([x,p])=>({date:x,count:p})).sort((x,p)=>x.date.localeCompare(p.date)),templateStats:m})}catch(s){console.error("Error loading stats:",s)}finally{r(!1)}};return a?t.jsx("div",{className:"p-6",children:t.jsxs("div",{className:"animate-pulse space-y-4",children:[t.jsx("div",{className:"h-32 bg-gray-200 rounded-lg"}),t.jsx("div",{className:"h-64 bg-gray-200 rounded-lg"}),t.jsx("div",{className:"h-48 bg-gray-200 rounded-lg"})]})}):e?t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[t.jsx(bt,{title:"Downloads Totais",value:e.totalDownloads,icon:Ae,trend:{value:e.downloadsTrend,isPositive:!0}}),t.jsx(bt,{title:"Usuários Totais",value:e.totalUsers,icon:ra,trend:{value:e.usersTrend,isPositive:!0}}),t.jsx(bt,{title:"Taxa de Conversão",value:`${(e.totalDownloads/e.totalUsers*100).toFixed(1)}%`,icon:Va})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[t.jsx(Cr,{data:e.dailyDownloads}),t.jsx(Sr,{templates:e.templateStats})]})]}):null}function je(e){const i=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&i==="[object Date]"?new e.constructor(+e):typeof e=="number"||i==="[object Number]"||typeof e=="string"||i==="[object String]"?new Date(e):new Date(NaN)}function Dr(e,i){return e instanceof Date?new e.constructor(i):new Date(i)}const at=43200,Kt=1440;let zr={};function Pr(){return zr}function Qt(e){const i=je(e),a=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));return a.setUTCFullYear(i.getFullYear()),+e-+a}function nt(e,i){const a=je(e),r=je(i),n=a.getTime()-r.getTime();return n<0?-1:n>0?1:n}function Ar(e){return Dr(e,Date.now())}function Fr(e,i){const a=je(e),r=je(i),n=a.getFullYear()-r.getFullYear(),s=a.getMonth()-r.getMonth();return n*12+s}function Ir(e){return i=>{const r=(e?Math[e]:Math.trunc)(i);return r===0?0:r}}function Tr(e,i){return+je(e)-+je(i)}function Or(e){const i=je(e);return i.setHours(23,59,59,999),i}function Rr(e){const i=je(e),a=i.getMonth();return i.setFullYear(i.getFullYear(),a+1,0),i.setHours(23,59,59,999),i}function Lr(e){const i=je(e);return+Or(i)==+Rr(i)}function Br(e,i){const a=je(e),r=je(i),n=nt(a,r),s=Math.abs(Fr(a,r));let c;if(s<1)c=0;else{a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-n*s);let o=nt(a,r)===-n;Lr(je(e))&&s===1&&nt(e,r)===1&&(o=!1),c=n*(s-Number(o))}return c===0?0:c}function Mr(e,i,a){const r=Tr(e,i)/1e3;return Ir(a==null?void 0:a.roundingMethod)(r)}const Ur={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},$r=(e,i,a)=>{let r;const n=Ur[e];return typeof n=="string"?r=n:i===1?r=n.one:r=n.other.replace("{{count}}",i.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r};function $e(e){return(i={})=>{const a=i.width?String(i.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}const qr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Wr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Hr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Vr={date:$e({formats:qr,defaultWidth:"full"}),time:$e({formats:Wr,defaultWidth:"full"}),dateTime:$e({formats:Hr,defaultWidth:"full"})},Zr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Xr=(e,i,a,r)=>Zr[e];function ze(e){return(i,a)=>{const r=a!=null&&a.context?String(a.context):"standalone";let n;if(r==="formatting"&&e.formattingValues){const c=e.defaultFormattingWidth||e.defaultWidth,o=a!=null&&a.width?String(a.width):c;n=e.formattingValues[o]||e.formattingValues[c]}else{const c=e.defaultWidth,o=a!=null&&a.width?String(a.width):e.defaultWidth;n=e.values[o]||e.values[c]}const s=e.argumentCallback?e.argumentCallback(i):i;return n[s]}}const Yr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Gr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Kr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Qr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Jr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},eo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},to=(e,i)=>{const a=Number(e),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},ao={ordinalNumber:to,era:ze({values:Yr,defaultWidth:"wide"}),quarter:ze({values:Gr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:Kr,defaultWidth:"wide"}),day:ze({values:Qr,defaultWidth:"wide"}),dayPeriod:ze({values:Jr,defaultWidth:"wide",formattingValues:eo,defaultFormattingWidth:"wide"})};function Pe(e){return(i,a={})=>{const r=a.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=i.match(n);if(!s)return null;const c=s[0],o=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(o)?no(o,f=>f.test(c)):io(o,f=>f.test(c));let h;h=e.valueCallback?e.valueCallback(u):u,h=a.valueCallback?a.valueCallback(h):h;const g=i.slice(c.length);return{value:h,rest:g}}}function io(e,i){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&i(e[a]))return a}function no(e,i){for(let a=0;a<e.length;a++)if(i(e[a]))return a}function Sa(e){return(i,a={})=>{const r=i.match(e.matchPattern);if(!r)return null;const n=r[0],s=i.match(e.parsePattern);if(!s)return null;let c=e.valueCallback?e.valueCallback(s[0]):s[0];c=a.valueCallback?a.valueCallback(c):c;const o=i.slice(n.length);return{value:c,rest:o}}}const ro=/^(\d+)(th|st|nd|rd)?/i,oo=/\d+/i,so={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},lo={any:[/^b/i,/^(a|c)/i]},co={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},po={any:[/1/i,/2/i,/3/i,/4/i]},uo={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},mo={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ho={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},fo={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},go={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xo={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},vo={ordinalNumber:Sa({matchPattern:ro,parsePattern:oo,valueCallback:e=>parseInt(e,10)}),era:Pe({matchPatterns:so,defaultMatchWidth:"wide",parsePatterns:lo,defaultParseWidth:"any"}),quarter:Pe({matchPatterns:co,defaultMatchWidth:"wide",parsePatterns:po,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Pe({matchPatterns:uo,defaultMatchWidth:"wide",parsePatterns:mo,defaultParseWidth:"any"}),day:Pe({matchPatterns:ho,defaultMatchWidth:"wide",parsePatterns:fo,defaultParseWidth:"any"}),dayPeriod:Pe({matchPatterns:go,defaultMatchWidth:"any",parsePatterns:xo,defaultParseWidth:"any"})},bo={code:"en-US",formatDistance:$r,formatLong:Vr,formatRelative:Xr,localize:ao,match:vo,options:{weekStartsOn:0,firstWeekContainsDate:1}};function yo(e,i,a){const r=Pr(),n=(a==null?void 0:a.locale)??r.locale??bo,s=2520,c=nt(e,i);if(isNaN(c))throw new RangeError("Invalid time value");const o=Object.assign({},a,{addSuffix:a==null?void 0:a.addSuffix,comparison:c});let u,h;c>0?(u=je(i),h=je(e)):(u=je(e),h=je(i));const g=Mr(h,u),f=(Qt(h)-Qt(u))/1e3,y=Math.round((g-f)/60);let m;if(y<2)return a!=null&&a.includeSeconds?g<5?n.formatDistance("lessThanXSeconds",5,o):g<10?n.formatDistance("lessThanXSeconds",10,o):g<20?n.formatDistance("lessThanXSeconds",20,o):g<40?n.formatDistance("halfAMinute",0,o):g<60?n.formatDistance("lessThanXMinutes",1,o):n.formatDistance("xMinutes",1,o):y===0?n.formatDistance("lessThanXMinutes",1,o):n.formatDistance("xMinutes",y,o);if(y<45)return n.formatDistance("xMinutes",y,o);if(y<90)return n.formatDistance("aboutXHours",1,o);if(y<Kt){const x=Math.round(y/60);return n.formatDistance("aboutXHours",x,o)}else{if(y<s)return n.formatDistance("xDays",1,o);if(y<at){const x=Math.round(y/Kt);return n.formatDistance("xDays",x,o)}else if(y<at*2)return m=Math.round(y/at),n.formatDistance("aboutXMonths",m,o)}if(m=Br(h,u),m<12){const x=Math.round(y/at);return n.formatDistance("xMonths",x,o)}else{const x=m%12,p=Math.trunc(m/12);return x<3?n.formatDistance("aboutXYears",p,o):x<9?n.formatDistance("overXYears",p,o):n.formatDistance("almostXYears",p+1,o)}}function wo(e,i){return yo(e,Ar(e),i)}const jo={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},ko=(e,i,a)=>{let r;const n=jo[e];return typeof n=="string"?r=n:i===1?r=n.one:r=n.other.replace("{{count}}",String(i)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"em "+r:"há "+r:r},_o={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},No={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Co={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},So={date:$e({formats:_o,defaultWidth:"full"}),time:$e({formats:No,defaultWidth:"full"}),dateTime:$e({formats:Co,defaultWidth:"full"})},Eo={lastWeek:e=>{const i=e.getDay();return"'"+(i===0||i===6?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},Do=(e,i,a,r)=>{const n=Eo[e];return typeof n=="function"?n(i):n},zo={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},Po={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},Ao={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},Fo={narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","terça","quarta","quinta","sexta","sábado"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},Io={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},To={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},Oo=(e,i)=>{const a=Number(e);return(i==null?void 0:i.unit)==="week"?a+"ª":a+"º"},Ro={ordinalNumber:Oo,era:ze({values:zo,defaultWidth:"wide"}),quarter:ze({values:Po,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:Ao,defaultWidth:"wide"}),day:ze({values:Fo,defaultWidth:"wide"}),dayPeriod:ze({values:Io,defaultWidth:"wide",formattingValues:To,defaultFormattingWidth:"wide"})},Lo=/^(\d+)[ºªo]?/i,Bo=/\d+/i,Mo={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},Uo={any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},$o={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},qo={any:[/1/i,/2/i,/3/i,/4/i]},Wo={narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},Ho={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},Vo={narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},Zo={short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},Xo={narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},Yo={any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},Go={ordinalNumber:Sa({matchPattern:Lo,parsePattern:Bo,valueCallback:e=>parseInt(e,10)}),era:Pe({matchPatterns:Mo,defaultMatchWidth:"wide",parsePatterns:Uo,defaultParseWidth:"any"}),quarter:Pe({matchPatterns:$o,defaultMatchWidth:"wide",parsePatterns:qo,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Pe({matchPatterns:Wo,defaultMatchWidth:"wide",parsePatterns:Ho,defaultParseWidth:"any"}),day:Pe({matchPatterns:Vo,defaultMatchWidth:"wide",parsePatterns:Zo,defaultParseWidth:"any"}),dayPeriod:Pe({matchPatterns:Xo,defaultMatchWidth:"any",parsePatterns:Yo,defaultParseWidth:"any"})},Ko={code:"pt-BR",formatDistance:ko,formatLong:So,formatRelative:Do,localize:Ro,match:Go,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Qo(e){switch(e.toLowerCase()){case"create":return"text-green-600 bg-green-50";case"update":return"text-blue-600 bg-blue-50";case"delete":return"text-red-600 bg-red-50";default:return"text-gray-600 bg-gray-50"}}function Jo(e){return e?Object.entries(e).map(([i,a])=>`${i}: ${JSON.stringify(a)}`).join(", "):""}function es({log:e}){const i=Qo(e.action),a=wo(new Date(e.created_at),{addSuffix:!0,locale:Ko});return t.jsxs("div",{className:"flex gap-4 p-4 hover:bg-gray-50 transition-colors",children:[t.jsx("div",{className:"flex-shrink-0",children:t.jsx("div",{className:`p-2 rounded-lg ${i}`,children:t.jsx(Za,{className:"w-5 h-5"})})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center justify-between mb-1",children:[t.jsx("p",{className:"text-sm font-medium text-gray-900",children:e.user_email}),t.jsx("span",{className:"text-sm text-gray-500",children:a})]}),t.jsxs("p",{className:"text-sm text-gray-600",children:[e.action," ",e.entity_type," (",e.entity_id,")"]}),e.details&&Object.keys(e.details).length>0&&t.jsx("div",{className:"mt-2 text-xs text-gray-500 font-mono bg-gray-50 p-2 rounded",children:Jo(e.details)}),t.jsxs("div",{className:"mt-1 text-xs text-gray-400",children:["IP: ",e.ip_address]})]})]})}function ts(){const[e,i]=V.useState([]),[a,r]=V.useState(!0),[n,s]=V.useState(""),[c,o]=V.useState("all");V.useEffect(()=>{u()},[]);const u=async()=>{try{const{data:g,error:f}=await ie.from("audit_logs").select(`
          *,
          profiles:user_id (
            email
          )
        `).order("created_at",{ascending:!1}).limit(100);if(f)throw f;i(g.map(y=>{var m;return{...y,user_email:((m=y.profiles)==null?void 0:m.email)||"Sistema"}}))}catch(g){console.error("Error loading audit logs:",g)}finally{r(!1)}},h=e.filter(g=>{const f=n===""||g.user_email.toLowerCase().includes(n.toLowerCase())||g.action.toLowerCase().includes(n.toLowerCase())||g.entity_type.toLowerCase().includes(n.toLowerCase())||g.entity_id.toLowerCase().includes(n.toLowerCase()),y=c==="all"||g.action.toLowerCase()===c;return f&&y});return a?t.jsx("div",{className:"p-6",children:t.jsx("div",{className:"animate-pulse space-y-4",children:[...Array(5)].map((g,f)=>t.jsx("div",{className:"h-24 bg-gray-100 rounded-lg"},f))})}):t.jsxs("div",{className:"bg-white rounded-lg border border-gray-200 overflow-hidden",children:[t.jsx("div",{className:"p-4 border-b border-gray-200 bg-gray-50",children:t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx(Xa,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),t.jsx("input",{type:"text",value:n,onChange:g=>s(g.target.value),placeholder:"Buscar logs...",className:"w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Ya,{className:"w-4 h-4 text-gray-400"}),t.jsxs("select",{value:c,onChange:g=>o(g.target.value),className:"text-sm border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500",children:[t.jsx("option",{value:"all",children:"Todas ações"}),t.jsx("option",{value:"create",children:"Criação"}),t.jsx("option",{value:"update",children:"Atualização"}),t.jsx("option",{value:"delete",children:"Exclusão"})]})]})]})}),t.jsx("div",{className:"divide-y divide-gray-200",children:h.length===0?t.jsx("div",{className:"p-8 text-center text-gray-500",children:"Nenhum log encontrado"}):h.map(g=>t.jsx(es,{log:g},g.id))})]})}function as({onClose:e}){const[i,a]=V.useState([]),[r,n]=V.useState(!0),[s,c]=V.useState("analytics");V.useEffect(()=>{o()},[]);const o=async()=>{try{const{data:h,error:g}=await ie.from("profiles").select("*").order("created_at",{ascending:!1}).throwOnError();if(g)throw g;const f=await Promise.all((h||[]).map(async y=>{const{count:m}=await ie.from("downloads").select("*",{count:"exact",head:!0}).eq("user_id",y.id);return{id:y.id,email:y.email,full_name:y.full_name||"Sem nome",downloads_count:m||0,download_limit:y.download_limit,is_admin:y.is_admin}}));a(f)}catch(h){console.error("Error loading users:",h)}finally{n(!1)}},u=async(h,g)=>{try{const{error:f}=await ie.rpc("update_user_limit",{p_user_id:h,p_download_limit:g});if(f)throw f;a(i.map(y=>y.id===h?{...y,download_limit:g}:y))}catch(f){console.error("Error updating limit:",f),alert(f instanceof Error?f.message:"Erro ao atualizar limite")}};return t.jsxs("div",{className:"h-full flex flex-col bg-gray-50",children:[t.jsx("div",{className:"bg-white border-b border-gray-200 px-6 py-4",children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:t.jsx(na,{className:"w-4 h-4 text-gray-600"})}),t.jsx("h1",{className:"text-lg font-medium",children:"Painel Administrativo"}),t.jsxs("div",{className:"ml-8 flex gap-1",children:[t.jsx("button",{onClick:()=>c("analytics"),className:ge("px-4 py-2 text-sm font-medium rounded-lg transition-colors",s==="analytics"?"bg-indigo-50 text-indigo-600":"text-gray-600 hover:bg-gray-50"),children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Ga,{className:"w-4 h-4"}),t.jsx("span",{children:"Analytics"})]})}),t.jsx("button",{onClick:()=>c("logs"),className:ge("px-4 py-2 text-sm font-medium rounded-lg transition-colors",s==="logs"?"bg-indigo-50 text-indigo-600":"text-gray-600 hover:bg-gray-50"),children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Ka,{className:"w-4 h-4"}),t.jsx("span",{children:"Logs"})]})}),t.jsx("button",{onClick:()=>c("users"),className:ge("px-4 py-2 text-sm font-medium rounded-lg transition-colors",s==="users"?"bg-indigo-50 text-indigo-600":"text-gray-600 hover:bg-gray-50"),children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ra,{className:"w-4 h-4"}),t.jsx("span",{children:"Usuários"})]})})]})]})}),t.jsx("div",{className:"flex-1 p-6",children:s==="analytics"?t.jsx(Er,{}):s==="logs"?t.jsx(ts,{}):t.jsx("div",{className:"bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden",children:t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"bg-gray-50 border-b border-gray-200",children:[t.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nome"}),t.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Email"}),t.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Downloads"}),t.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Limite"}),t.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Admin"}),t.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Ações"})]})}),t.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:r?t.jsx("tr",{children:t.jsx("td",{colSpan:6,className:"px-6 py-4 text-center text-gray-500",children:"Carregando..."})}):i.map(h=>t.jsxs("tr",{children:[t.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.jsx("div",{className:"text-sm font-medium text-gray-900",children:h.full_name})}),t.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.jsx("div",{className:"text-sm text-gray-500",children:h.email})}),t.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.jsx("div",{className:"text-sm text-gray-900",children:h.downloads_count})}),t.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.jsx("input",{type:"number",value:h.download_limit,onChange:g=>u(h.id,parseInt(g.target.value)),className:"w-20 px-2 py-1 text-sm border border-gray-300 rounded-md"})}),t.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.jsx("div",{className:"text-sm text-gray-900",children:h.is_admin?"✓":""})}),t.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:t.jsx("button",{onClick:()=>u(h.id,h.download_limit),className:"text-indigo-600 hover:text-indigo-900",children:"Salvar"})})]},h.id))})]})})})})]})}function is(){const[e,i]=V.useState(null),[a,r]=V.useState(0),[n,s]=V.useState({}),[c,o]=V.useState(!1),[u,h]=V.useState(!1),[g,f]=V.useState(!1),[y,m]=V.useState(null);Ne.useEffect(()=>{ie.auth.getSession().then(({data:{session:F}})=>{o(!!F),m((F==null?void 0:F.user)||null)});const{data:{subscription:B}}=ie.auth.onAuthStateChange((F,q)=>{o(!!q),m((q==null?void 0:q.user)||null)});return()=>{B.unsubscribe()}},[]);const x=async()=>{const{data:{session:B}}=await ie.auth.getSession();B&&(o(!0),m(B.user))},p=async()=>{await ie.auth.signOut()},b=B=>{i(B),s(B.defaultValues),r(0)},v=()=>{i(null),r(0),h(!1)},j=(B,F)=>{s(q=>({...q,[B]:F}))},N=()=>{a<6&&r(B=>B+1)},E=()=>{a>0&&r(B=>B-1)},S=()=>{if(!e)return null;switch(e.id){case"image-quiz":return t.jsx(An,{fields:e.fields,values:n,onChange:j,currentStep:a,onNextStep:N,onPrevStep:E,template:e});case"wheel":return t.jsx(Rn,{values:n,onChange:j,currentStep:a,onNextStep:N,onPrevStep:E,template:e});case"store":return t.jsx(Un,{values:n,onChange:j,currentStep:a,onNextStep:N,onPrevStep:E,template:e});case"news":return t.jsx(Wn,{values:n,onChange:j,currentStep:a,onNextStep:N,onPrevStep:E,template:e});default:return null}};return t.jsxs("div",{className:"h-screen flex flex-col bg-gray-50",children:[c&&t.jsx(ui,{isAuthenticated:c,onLogout:p,onOpenSettings:()=>h(!0),onOpenAdmin:()=>f(!0),templateName:e==null?void 0:e.name,onLogoClick:v}),t.jsx("main",{className:`flex-1 overflow-hidden flex items-center justify-center ${c?"":"h-screen"}`,children:c?e?t.jsxs("div",{className:"h-full w-full max-w-[1600px] mx-auto p-6 flex gap-6",children:[t.jsxs("div",{className:"flex-1 flex flex-col h-full",children:[t.jsx("div",{className:"bg-gray-100 p-2 text-center text-sm font-medium text-gray-600 border-b rounded-t-lg",children:"Editor do Template"}),t.jsx("div",{className:"flex-1 bg-white rounded-b-lg border border-gray-200 shadow-sm overflow-hidden",children:S()})]}),t.jsxs("div",{className:"w-[400px] flex-shrink-0 flex flex-col h-full",children:[t.jsx("div",{className:"bg-gray-100 p-2 text-center text-sm font-medium text-gray-600 border-b rounded-t-lg",children:"Preview do Template"}),t.jsx("div",{className:"flex-1 bg-white rounded-b-lg border border-gray-200 shadow-sm overflow-hidden",children:t.jsx(Nr,{template:e,values:n})})]})]}):t.jsx("div",{className:"h-full w-full",children:u?t.jsx(kr,{onClose:()=>h(!1)}):g?t.jsx(as,{onClose:()=>f(!1)}):t.jsx("div",{className:"h-full w-full max-w-[1600px] mx-auto p-6 overflow-auto",children:t.jsx(Ci,{templates:hr,onSelectTemplate:b})})}):t.jsx(Hn,{onSuccess:x})})]})}const ns=V.createContext(void 0);function rs({children:e}){const i=da();return t.jsx(ns.Provider,{value:i,children:e})}const os=la(document.getElementById("root"));os.render(t.jsx(Ne.StrictMode,{children:t.jsx(rs,{children:t.jsx(is,{})})}));
//# sourceMappingURL=index-Dgibrnyt.js.map
