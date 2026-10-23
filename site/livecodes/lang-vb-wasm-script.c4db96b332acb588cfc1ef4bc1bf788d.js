"use strict";(()=>{var g=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],b=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],U=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],d={getModuleUrl:(e,{isModule:n=!0,defaultCDN:a="esm.sh",external:s}={})=>{e=e.replace(/#nobundle/g,"");let o=c=>!s||!c.includes("https://esm.sh")?c:c.includes("?")?`${c}&external=${s}`:`${c}?external=${s}`,p=x(e,n,a);return p?o(p):n?o("https://esm.sh/"+e):"https://cdn.jsdelivr.net/npm/"+e},getUrl:(e,n)=>e.startsWith("http")||e.startsWith("data:")?e:x(e,!1,n||q())||e,cdnLists:{npm:b,module:g,gh:U},checkCDNs:async(e,n)=>{let a=[n,...d.cdnLists.npm].filter(Boolean);for(let s of a)try{if((await fetch(d.getUrl(e,s),{method:"HEAD"})).ok)return s}catch{}return d.cdnLists.npm[0]}},q=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||d.cdnLists.npm[0]}catch{return d.cdnLists.npm[0]}},x=(e,n,a)=>{let s=n&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",U[0]):e.includes(":")||(e=(a||(n?g[0]:b[0]))+":"+e);for(let o of E){let[p,c]=o;if(p.test(e))return e.replace(p,c)+s}return null},E=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(pr:)(.+)/i,"https://esm.sh/pr/$2"],[/^(pkg\.pr\.new:)(.+)/i,"https://esm.sh/pkg.pr.new/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:j,getModuleUrl:_}=d;var S="5.9.3",O=j(`typescript@${S}/lib/typescript.js`);var w=j("@live-codes/vb-wasm@0.1.1/");var v=`/*
 * Runs inside a Web Worker that \`lang-vb-wasm-script.ts\` creates from a data: URL.
 * The script sets \`self.baseUrl\` to the CDN URL of the compiler bundle first.
 *
 * Boots the .NET WebAssembly runtime together with the Roslyn VB compiler and
 * compiles/runs VB.NET source on request, so the main thread never blocks.
 *
 * Protocol (main -> worker): { type: 'compile', id, source, stdin }
 * Protocol (worker -> main):
 *   { type: 'ready' }               the runtime is up, compiles can start
 *   { type: 'fatal', message }      boot failed; the worker is useless
 *   { type: 'result', id, json }    JSON result of VbRunner.RunVb
 *   { type: 'error', id, message }  the interop call itself threw
 */
(async function () {
  /** @type {any} */
  let runner = null;
  /** @type {any[]} */
  const queue = [];

  /** @param {any} value */
  const text = (value) => (value == null ? '' : String(value));

  /** @param {any} err */
  const errorMessage = (err) => String((err && err.stack) || err);

  /** @param {{ source: any; stdin: any; id: any }} msg */
  const compile = (msg) => {
    try {
      runner.RunVb(text(msg.source), text(msg.stdin)).then(
        /** @param {any} json */
        (json) => self.postMessage({ type: 'result', id: msg.id, json }),
        /** @param {any} err */
        (err) => {
          self.postMessage({ type: 'error', id: msg.id, message: errorMessage(err) });
        },
      );
    } catch (err) {
      self.postMessage({ type: 'error', id: msg.id, message: errorMessage(err) });
    }
  };

  self.onmessage = (event) => {
    const message = event.data || {};
    if (message.type !== 'compile') return;
    if (runner) compile(message);
    else queue.push(message);
  };

  try {
    // dotnet.js decides whether this worker owns the runtime ("sidecar") or is
    // just a .NET worker thread. It only infers sidecar mode when no \`onmessage\`
    // handler exists yet (and one is assigned above), so declare it up front.
    // see https://github.com/dotnet/runtime/issues/114918
    // @ts-ignore
    self.dotnetSidecar = true;

    // resolved at runtime against the CDN, so there is nothing to bundle here
    // @ts-ignore
    const dotnetModule = await import(self.baseUrl + '_framework/dotnet.js');
    const runtime = await dotnetModule.dotnet.withDiagnosticTracing(false).create();
    const config = runtime.getConfig();
    const dotnetExports = await runtime.getAssemblyExports(config.mainAssemblyName);
    // runMain() invokes VbRunner.Main(), which loads the reference assemblies
    // embedded in the app assembly, but (unlike dotnet.run()) leaves the
    // runtime alive so that later compiles work.
    await runtime.runMain();
    runner = dotnetExports.VbRunner;
    self.postMessage({ type: 'ready' });
    queue.splice(0).forEach(compile);
  } catch (err) {
    self.postMessage({ type: 'fatal', message: errorMessage(err) });
  }
})();
`;var P=12e4,R=6e4;function L(){let e=null,n=null,a=null,s=null,o={},p=1;function c(l){let r=l.data||{};if(r.type==="ready")a&&(a(""),a=null,s=null);else if(r.type==="fatal")e&&(e.terminate(),e=null),s&&(s(new Error("VB.NET worker failed to start: "+r.message)),a=null,s=null);else if(r.type==="result"){let i=o[r.id];i&&(delete o[r.id],clearTimeout(i.timer),i.resolve(JSON.parse(r.json)))}else if(r.type==="error"){let i=o[r.id];i&&(delete o[r.id],clearTimeout(i.timer),i.reject(new Error(r.message)))}}function B(l){for(let r in o)if(Object.prototype.hasOwnProperty.call(o,r)){let i=o[r];clearTimeout(i.timer),i.reject(l)}o={}}function C(l){B(new Error("VB.NET worker crashed: "+(l&&l.message?l.message:"unknown"))),e&&(e.terminate(),e=null)}function $(){n=new Promise(function(l,r){a=l,s=r});try{let r=((i,m="text/javascript")=>{let u=new TextEncoder().encode(i),h="";return u.forEach(D=>h+=String.fromCharCode(D)),`data:${m};charset=UTF-8;base64,`+btoa(h)})(`self.baseUrl = "${w}";

${v}`);e=new Worker(r),e.onmessage=c,e.onerror=C}catch(l){throw e=null,n=null,a=null,s=null,l}}function f(){e||$()}function M(){try{f()}catch(l){return Promise.reject(l)}return new Promise(function(l,r){let i=setTimeout(function(){e&&(e.terminate(),e=null),r(new Error("VB.NET worker failed to start (timeout)"))},P);n?.then(function(){clearTimeout(i),l()},function(m){clearTimeout(i),r(m)})})}function T(l,r){let i=p++;return new Promise(function(m,u){let h=setTimeout(function(){delete o[i],e&&(e.terminate(),e=null),u(new Error("VB.NET compile timed out; restarted the compiler."))},R);o[i]={resolve:m,reject:u,timer:h},e?.postMessage({type:"compile",source:l,stdin:r??"",id:i})})}function W(l,r){try{f()}catch(i){return Promise.reject(i)}return n.then(function(){return T(l,r)})}return{init:M,run:W,get ready(){return!!e&&a===null}}}var y;(y=window.livecodes).vb??(y.vb={});var t=window.livecodes.vb,k=t.runner??(t.runner=L());t.ready=!1;t.init??(t.init=function(){if(!t.ready)return parent.postMessage({type:"loading",payload:!0},"*"),k.init().then(function(){parent.postMessage({type:"loading",payload:!1},"*")}).catch(function(e){throw parent.postMessage({type:"loading",payload:!1},"*"),t.ready=!1,t.init=null,console.error("Failed to initialize VB.NET environment:",e),e})}());t.run=async function(e){let n="";if(document.querySelectorAll('script[type="text/vb-wasm"]').forEach(function(s){n+=s.innerHTML+`
`}),!n.trim())return{output:null,error:null,exitCode:0};await t.init;try{let s=await k.run(n,e);if(!s.ok){let o=(s.errors||[]).map(z).join(`
`);return t.output=s.output??null,t.error=o,t.exitCode=1,t.ready=!0,console.error(o),{output:s.output??null,error:o,exitCode:1}}return t.output=s.output,t.error=null,t.exitCode=0,t.ready=!0,console.log(s.output||""),{output:s.output,error:null,exitCode:0}}catch(s){let o="Error: "+(s&&s.message?s.message:String(s));return t.output=null,t.error=o,t.exitCode=1,t.ready=!0,console.error(o),{output:null,error:o,exitCode:1}}};t.loaded=new Promise(function(e){let n=setInterval(function(){t.ready&&(clearInterval(n),e())},50)});window.addEventListener("load",async function(){parent.postMessage({type:"loading",payload:!0},"*"),await t.run?.(t.input),parent.postMessage({type:"loading",payload:!1},"*")});function z(e){let n=e.line?" (line "+e.line+", column "+e.column+")":"";return"error "+e.id+n+": "+e.message}})();
