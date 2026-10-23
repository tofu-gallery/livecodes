"use strict";(()=>{var B=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],R=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],A=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],u={getModuleUrl:(e,{isModule:t=!0,defaultCDN:r="esm.sh",external:s}={})=>{e=e.replace(/#nobundle/g,"");let i=o=>!s||!o.includes("https://esm.sh")?o:o.includes("?")?`${o}&external=${s}`:`${o}?external=${s}`,a=T(e,t,r);return a?i(a):t?i("https://esm.sh/"+e):"https://cdn.jsdelivr.net/npm/"+e},getUrl:(e,t)=>e.startsWith("http")||e.startsWith("data:")?e:T(e,!1,t||z())||e,cdnLists:{npm:R,module:B,gh:A},checkCDNs:async(e,t)=>{let r=[t,...u.cdnLists.npm].filter(Boolean);for(let s of r)try{if((await fetch(u.getUrl(e,s),{method:"HEAD"})).ok)return s}catch{}return u.cdnLists.npm[0]}},z=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||u.cdnLists.npm[0]}catch{return u.cdnLists.npm[0]}},T=(e,t,r)=>{let s=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",A[0]):e.includes(":")||(e=(r||(t?B[0]:R[0]))+":"+e);for(let i of H){let[a,o]=i;if(a.test(e))return e.replace(a,o)+s}return null},H=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(pr:)(.+)/i,"https://esm.sh/pr/$2"],[/^(pkg\.pr\.new:)(.+)/i,"https://esm.sh/pkg.pr.new/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:h,getModuleUrl:de}=u;var b=h("@live-codes/clang-wasm@0.3.0/");var y=h("@live-codes/nim-wasm@0.6.0/");var V="5.9.3",me=h(`typescript@${V}/lib/typescript.js`);var J=typeof btoa=="function",U=typeof Buffer=="function",ge=typeof TextDecoder=="function"?new TextDecoder:void 0,S=typeof TextEncoder=="function"?new TextEncoder:void 0,K="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",g=Array.prototype.slice.call(K),fe=(e=>{let t={};return e.forEach((r,s)=>t[r]=s),t})(g);var d=String.fromCharCode.bind(String),xe=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),Z=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_");var G=e=>{let t,r,s,i,a="",o=e.length%3;for(let m=0;m<e.length;){if((r=e.charCodeAt(m++))>255||(s=e.charCodeAt(m++))>255||(i=e.charCodeAt(m++))>255)throw new TypeError("invalid character found");t=r<<16|s<<8|i,a+=g[t>>18&63]+g[t>>12&63]+g[t>>6&63]+g[t&63]}return o?a.slice(0,o-3)+"===".substring(o):a},$=J?e=>btoa(e):U?e=>Buffer.from(e,"binary").toString("base64"):G,Q=U?e=>Buffer.from(e).toString("base64"):e=>{let r=[];for(let s=0,i=e.length;s<i;s+=4096)r.push(d.apply(null,e.subarray(s,s+4096)));return $(r.join(""))};var X=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?d(192|t>>>6)+d(128|t&63):d(224|t>>>12&15)+d(128|t>>>6&63)+d(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return d(240|t>>>18&7)+d(128|t>>>12&63)+d(128|t>>>6&63)+d(128|t&63)}},Y=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,ee=e=>e.replace(Y,X),E=U?e=>Buffer.from(e,"utf8").toString("base64"):S?e=>Q(S.encode(e)):e=>$(ee(e)),W=(e,t=!1)=>t?Z(E(e)):E(e);var te=(e,t="text/javascript")=>`data:${t};charset=UTF-8;base64,`+W(e);var L=e=>{try{return new Worker(te(e))}catch{return new Worker(URL.createObjectURL(new Blob([e],{type:"application/javascript"})))}};var w=e=>e==null?"":e instanceof Error||e&&typeof e=="object"&&"message"in e&&typeof e.message=="string"?e.message:String(e);var se=()=>window.parent===window?window.location.origin:window.location.ancestorOrigins?.[0]||(()=>{if(!document.referrer)return"*";try{return new URL(document.referrer).origin}catch{return"*"}})(),M=()=>{let e=se();return t=>{parent.postMessage({type:"loading",payload:t},e)}},D=async(e,t,r,s,i,a)=>{try{await t(e)}catch(o){return i(s,null,`Error: ${w(o)}`,1)}try{let o=await e.run(r,s,a),m=(o.errors||[]).filter(Boolean);return m.length?i(s,null,m.join(`
`),o.exitCode??1):i(s,o.output??"",null,o.exitCode??0)}catch(o){return i(s,null,`Error: ${w(o)}`,1)}};var P=({getWorkerSrc:e,label:t,timeoutMs:r})=>{let s=null,i=null,a=null,o={},m=1,_=p=>{for(let c of Object.keys(o)){let l=o[Number(c)];l.timer&&clearTimeout(l.timer),l.reject(p)}o={}},f=p=>{s?.terminate(),s=null,i=null,a?.(p),a=null,p&&_(p)},N=p=>{let c=p.data??{};if(c.type==="ready"){a?.(),a=null;return}if(c.type==="error"){f(new Error(c.message));return}let l=o[c.id];l&&(delete o[c.id],l.timer&&clearTimeout(l.timer),c.error!=null?l.reject(new Error(c.error)):l.resolve(c.result))},I=()=>{i=new Promise((p,c)=>{a=l=>l?c(l):p()}),s=L(e()),s.onmessage=N,s.onerror=p=>f(new Error(`The ${t} worker crashed: ${p.message}`))},v=async()=>{i||I(),await i};return{ensureReady:v,run:(p,c,l)=>v().then(()=>new Promise((F,j)=>{if(!s){j(new Error(`The ${t} worker is not available`));return}let k=m++,C={resolve:F,reject:j};r!=null&&(C.timer=setTimeout(()=>{f(new Error(`The ${t} compiler timed out`))},r)),o[k]=C,s.postMessage({id:k,code:p,input:c,options:l})})),destroy:()=>f()}};var re="text/nim-wasm",oe=()=>`
importScripts(${JSON.stringify(b+"dist/clang-wasm-toolchain.global.js")});
importScripts(${JSON.stringify(y+"dist/nim-wasm.global.js")});

let toolchain = null;
let compiler = null;
let compilerArgs = null;

const getToolchain = () => {
  toolchain =
    toolchain ||
    self.clangWasmToolchain.createToolchain({
      baseUrl: ${JSON.stringify(b+"assets/")},
    });
  return toolchain;
};

const libraryCache = new Map();
const getCompiler = async (options = {}) => {
  const compileArgs = options.compileArgs || [];
  const requestedPackages = options.packages !== false;
  const libraries = options.libraries;
  const key = JSON.stringify({
    compileArgs,
    packages: requestedPackages,
    libraries: libraries ?? null,
  });
  if (compiler && compilerArgs === key) return compiler;
  compilerArgs = key;
  const previous = compiler;
  const created = (async () => {
    const entries = libraries
      ? await self.nimWasm.resolveLibraries(libraries, { cache: libraryCache })
      : {};
    const packages = Object.keys(entries).length ? entries : requestedPackages;
    // Compile through the Clang runtime this page already uses, rather than the second copy the
    // Nim IIFE carries inside it, so only one runtime is ever loaded.
    const built = await getToolchain();
    const next = await self.nimWasm.createCompiler({
      target: 'wasm',
      baseUrl: ${JSON.stringify(y+"assets/nim/")},
      toolchain: built,
      compileArgs,
      packages,
    });
    // compileArgs, packages and libraries are fixed when a compiler is created, so a change
    // builds a new one and releases the old; the shared toolchain belongs to this page and is
    // not released.
    if (previous) previous.then((old) => old.dispose()).catch(() => undefined);
    return next;
  })();
  created.catch(() => {
    if (compiler === created) {
      compiler = null;
      compilerArgs = null;
    }
  });
  compiler = created;
  return compiler;
};

addEventListener('message', async (event) => {
  const { id, code, input, options } = event.data;
  try {
    const result = await (await getCompiler(options)).run(code, input, options);
    postMessage({
      id,
      result: {
        output: result.output,
        errors: result.errors,
        exitCode: result.exitCode,
      },
    });
  } catch (error) {
    postMessage({ id, error: String((error && error.message) || error) });
  }
});

getCompiler().then(
  () => postMessage({ type: 'ready' }),
  (error) => postMessage({ type: 'error', message: String((error && error.message) || error) }),
);
`,x=M(),O=(e,t,r,s)=>(n.input=e,n.output=t,n.error=r,n.exitCode=s,n.ready=!0,r!=null?console.error(r):t!=null&&console.log(t),{input:e,output:t,error:r,exitCode:s}),q;(q=window.livecodes).nimWasm??(q.nimWasm={});var n=window.livecodes.nimWasm;n.ready=!1;n.failed=!1;var ne=()=>{let e=n.settings?.["nim-wasm"];return e!=null&&typeof e=="object"?e:{}},ie=()=>{let e="";return document.querySelectorAll(`script[type="${re}"]`).forEach(t=>{e+=`${t.innerHTML}
`}),e},ae=e=>{let t=n.init;return t||(n.failed=!1,t=(async()=>{x(!0);try{await e.ensureReady()}finally{x(!1)}})().catch(r=>{throw n.init=null,n.failed=!0,r}),t.catch(()=>{}),n.init=t),t};n.loaded=new Promise((e,t)=>{let r=setInterval(()=>{n.failed?(clearInterval(r),t(new Error(n.error||"Failed to initialize the Nim compiler"))):n.ready&&(clearInterval(r),e())},50)});n.run=async e=>{let t=`${e??n.input??""}`,r=ie();if(!r.trim())return O(t,null,null,null);let s=n.runner=n.runner||P({getWorkerSrc:oe,label:"Nim"});return D(s,ae,r,t,O,ne())};window.addEventListener("load",async()=>{x(!0),await n.run(n.input),x(!1)});})();
