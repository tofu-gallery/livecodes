"use strict";(()=>{var V=typeof btoa=="function",R=typeof Buffer=="function",ge=typeof TextDecoder=="function"?new TextDecoder:void 0,E=typeof TextEncoder=="function"?new TextEncoder:void 0,J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w=Array.prototype.slice.call(J),fe=(e=>{let t={};return e.forEach((r,s)=>t[r]=s),t})(w);var f=String.fromCharCode.bind(String),xe=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),K=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_");var Z=e=>{let t,r,s,o,c="",n=e.length%3;for(let u=0;u<e.length;){if((r=e.charCodeAt(u++))>255||(s=e.charCodeAt(u++))>255||(o=e.charCodeAt(u++))>255)throw new TypeError("invalid character found");t=r<<16|s<<8|o,c+=w[t>>18&63]+w[t>>12&63]+w[t>>6&63]+w[t&63]}return n?c.slice(0,n-3)+"===".substring(n):c},M=V?e=>btoa(e):R?e=>Buffer.from(e,"binary").toString("base64"):Z,G=R?e=>Buffer.from(e).toString("base64"):e=>{let r=[];for(let s=0,o=e.length;s<o;s+=4096)r.push(f.apply(null,e.subarray(s,s+4096)));return M(r.join(""))};var Q=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?f(192|t>>>6)+f(128|t&63):f(224|t>>>12&15)+f(128|t>>>6&63)+f(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return f(240|t>>>18&7)+f(128|t>>>12&63)+f(128|t>>>6&63)+f(128|t&63)}},X=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Y=e=>e.replace(X,Q),$=R?e=>Buffer.from(e,"utf8").toString("base64"):E?e=>G(E.encode(e)):e=>M(Y(e)),W=(e,t=!1)=>t?K($(e)):$(e);var ee=(e,t="text/javascript")=>`data:${t};charset=UTF-8;base64,`+W(e);var L=e=>{try{return new Worker(ee(e))}catch{return new Worker(URL.createObjectURL(new Blob([e],{type:"application/javascript"})))}};var x=e=>e==null?"":e instanceof Error||e&&typeof e=="object"&&"message"in e&&typeof e.message=="string"?e.message:String(e);var P=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],D=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],_=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],h={getModuleUrl:(e,{isModule:t=!0,defaultCDN:r="esm.sh",external:s}={})=>{e=e.replace(/#nobundle/g,"");let o=n=>!s||!n.includes("https://esm.sh")?n:n.includes("?")?`${n}&external=${s}`:`${n}?external=${s}`,c=O(e,t,r);return c?o(c):t?o("https://esm.sh/"+e):"https://cdn.jsdelivr.net/npm/"+e},getUrl:(e,t)=>e.startsWith("http")||e.startsWith("data:")?e:O(e,!1,t||te())||e,cdnLists:{npm:D,module:P,gh:_},checkCDNs:async(e,t)=>{let r=[t,...h.cdnLists.npm].filter(Boolean);for(let s of r)try{if((await fetch(h.getUrl(e,s),{method:"HEAD"})).ok)return s}catch{}return h.cdnLists.npm[0]}},te=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||h.cdnLists.npm[0]}catch{return h.cdnLists.npm[0]}},O=(e,t,r)=>{let s=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",_[0]):e.includes(":")||(e=(r||(t?P[0]:D[0]))+":"+e);for(let o of se){let[c,n]=o;if(c.test(e))return e.replace(c,n)+s}return null},se=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(pr:)(.+)/i,"https://esm.sh/pr/$2"],[/^(pkg\.pr\.new:)(.+)/i,"https://esm.sh/pkg.pr.new/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:q,getModuleUrl:ve}=h;var k=q("@live-codes/odin-wasm@0.2.0/");var re="5.9.3",je=q(`typescript@${re}/lib/typescript.js`);var oe=()=>window.parent===window?window.location.origin:window.location.ancestorOrigins?.[0]||(()=>{if(!document.referrer)return"*";try{return new URL(document.referrer).origin}catch{return"*"}})(),I=()=>{let e=oe();return t=>{parent.postMessage({type:"loading",payload:t},e)}},F=async(e,t,r,s,o,c)=>{try{await t(e)}catch(n){return o(s,null,`Error: ${x(n)}`,1)}try{let n=await e.run(r,s,c),u=(n.errors||[]).filter(Boolean);return u.length?o(s,null,u.join(`
`),n.exitCode??1):o(s,n.output??"",null,n.exitCode??0)}catch(n){return o(s,null,`Error: ${x(n)}`,1)}};var N=({getWorkerSrc:e,label:t,timeoutMs:r})=>{let s=null,o=null,c=null,n={},u=1,B=l=>{for(let i of Object.keys(n)){let p=n[Number(i)];p.timer&&clearTimeout(p.timer),p.reject(l)}n={}},g=l=>{s?.terminate(),s=null,o=null,c?.(l),c=null,l&&B(l)},b=l=>{let i=l.data??{};if(i.type==="ready"){c?.(),c=null;return}if(i.type==="error"){g(new Error(i.message));return}let p=n[i.id];p&&(delete n[i.id],p.timer&&clearTimeout(p.timer),i.error!=null?p.reject(new Error(i.error)):p.resolve(i.result))},y=()=>{o=new Promise((l,i)=>{c=p=>p?i(p):l()}),s=L(e()),s.onmessage=b,s.onerror=l=>g(new Error(`The ${t} worker crashed: ${l.message}`))},d=async()=>{o||y(),await o};return{ensureReady:d,run:(l,i,p)=>d().then(()=>new Promise((v,j)=>{if(!s){j(new Error(`The ${t} worker is not available`));return}let A=u++,S={resolve:v,reject:j};r!=null&&(S.timer=setTimeout(()=>{g(new Error(`The ${t} compiler timed out`))},r)),n[A]=S,s.postMessage({id:A,code:l,input:i,options:p})})),destroy:()=>g()}};var ne="text/odin-wasm",ie="wasi_wasm32",ae=12e4,ce=()=>`
importScripts(${JSON.stringify(k+"dist/odin-wasm.global.js")});

let compiler = null;
let compilerOptions = null;

const getCompiler = (options = {}) => {
  const key = JSON.stringify([options.compileArgs, options.target]);
  if (compiler && compilerOptions === key) return compiler;
  compilerOptions = key;
  const previous = compiler;
  const created = (async () => {
    const next = await self.odinWasm.createCompiler({
      baseUrl: ${JSON.stringify(k+"assets/")},
      compileArgs: options.compileArgs || [],
      target: options.target,
    });
    // \`compileArgs\` and \`target\` are fixed when a compiler is created, so a change builds a new
    // one and lets the old go; its assets are the browser's cache to keep.
    if (previous) previous.then((old) => old.dispose()).catch(() => undefined);
    return next;
  })();
  created.catch(() => {
    if (compiler === created) {
      compiler = null;
      compilerOptions = null;
    }
  });
  compiler = created;
  return compiler;
};

addEventListener('message', async (event) => {
  const { id, code, input, options } = event.data;
  try {
    const compiler = await getCompiler(options);
    // The js target is compiled here but run by the page, which is the only place with a DOM.
    if (options && options.kind === 'compile') {
      const compiled = await compiler.compile(code, options);
      const bytes = compiled.wasm ? compiled.wasm.slice() : null;
      postMessage(
        { id, result: { wasm: bytes ? bytes.buffer : null, errors: compiled.errors } },
        bytes ? [bytes.buffer] : [],
      );
      return;
    }
    const result = await compiler.run(code, input, { args: options && options.args });
    postMessage({
      id,
      result: {
        output: result.output,
        // The compiler's diagnostics; empty when the program built.
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
`,T=I(),U=(e,t,r,s,o=!0)=>(a.input=e,a.output=t,a.error=r,a.exitCode=s,a.ready=!0,o&&(r!=null?console.error(r):t!=null&&console.log(t)),{input:e,output:t,error:r,exitCode:s}),z;(z=window.livecodes).odinWasm??(z.odinWasm={});var a=window.livecodes.odinWasm;a.ready=!1;a.failed=!1;var le=()=>{let e=a.settings?.["odin-wasm"];return e!=null&&typeof e=="object"?e:{}},pe=()=>{let e="";return document.querySelectorAll(`script[type="${ne}"]`).forEach(t=>{e+=`${t.textContent??""}
`}),e},H=e=>{let t=a.init;return t||(a.failed=!1,t=(async()=>{T(!0);try{await e.ensureReady()}finally{T(!1)}})().catch(r=>{throw a.init=null,a.failed=!0,r}),t.catch(()=>{}),a.init=t),t},C=null,de=()=>window.odin?Promise.resolve(window.odin):(C??(C=new Promise((e,t)=>{let r=document.createElement("script");r.src=k+"assets/odin.js",r.onload=()=>e(window.odin),r.onerror=()=>t(new Error("Failed to load the Odin JS runtime (assets/odin.js)")),document.head.appendChild(r)})),C.catch(()=>{C=null}),C),me=async(e,t)=>{let r=await de(),s=new r.WasmMemoryInterface;s.setIntSize(4);let o=r.setupDefaultImports(s,null,s.memory),c=new TextEncoder().encode(t),n=0,u=[];o.odin_env.write=(d,m,l)=>{let i=s.loadString(m,l);d===2?console.error(i):(u.push(i),console.log(i))},o.odin_env.read=(d,m,l)=>{if(d!==0)return 0;let i=Math.max(0,Math.min(l,c.length-n));return i>0&&(new Uint8Array(s.memory.buffer,m,i).set(c.subarray(n,n+i)),n+=i),i};let{instance:B}=await WebAssembly.instantiate(e.slice(),o),g=B.exports;s.setExports(g),g.memory&&s.setMemory(g.memory);let b=d=>{let m=g[d];return typeof m=="function"?m():void 0},y=(d,m=null)=>U(t,u.join(""),m,d,!1);try{b("_start")}catch(d){return y(1,`The program trapped: ${x(d)}`)}if(g.step){let d=g.default_context_ptr?g.default_context_ptr():0,m,l=i=>{m===void 0&&(m=i);let p=(i-m)*.001;m=i;let v=!1;try{v=g.step(p,d)}catch(j){a.error=`The program trapped: ${x(j)}`,console.error(a.error);return}if(!v){b("_end"),a.output=u.join("");return}requestAnimationFrame(l)};return requestAnimationFrame(l),y(0)}return b("_end"),y(0)},ue=async(e,t,r,s)=>{try{await H(s);let o=await s.run(e,"",{...r,kind:"compile"});return o?.wasm?await me(new Uint8Array(o.wasm),t):U(t,null,(o?.errors??["Odin produced no module"]).join(`
`),1)}catch(o){return U(t,null,`Error: ${x(o)}`,1)}};a.loaded=new Promise((e,t)=>{let r=setInterval(()=>{a.failed?(clearInterval(r),t(new Error(a.error||"Failed to initialize the Odin compiler"))):a.ready&&(clearInterval(r),e())},50)});a.run=async e=>{let t=`${e??a.input??""}`,r=pe();if(!r.trim())return U(t,null,null,null);let s=le(),o=a.runner=a.runner||N({getWorkerSrc:ce,label:"Odin",timeoutMs:ae});return(s.target??ie)==="js_wasm32"?ue(r,t,s,o):F(o,H,r,t,U,s)};window.addEventListener("load",async()=>{T(!0),await a.run(a.input),T(!1)});})();
