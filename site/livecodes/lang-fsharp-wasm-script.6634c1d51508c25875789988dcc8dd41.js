"use strict";(()=>{var U=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],j=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],b=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],d={getModuleUrl:(s,{isModule:n=!0,defaultCDN:a="esm.sh",external:t}={})=>{s=s.replace(/#nobundle/g,"");let r=c=>!t||!c.includes("https://esm.sh")?c:c.includes("?")?`${c}&external=${t}`:`${c}?external=${t}`,p=g(s,n,a);return p?r(p):n?r("https://esm.sh/"+s):"https://cdn.jsdelivr.net/npm/"+s},getUrl:(s,n)=>s.startsWith("http")||s.startsWith("data:")?s:g(s,!1,n||T())||s,cdnLists:{npm:j,module:U,gh:b},checkCDNs:async(s,n)=>{let a=[n,...d.cdnLists.npm].filter(Boolean);for(let t of a)try{if((await fetch(d.getUrl(s,t),{method:"HEAD"})).ok)return t}catch{}return d.cdnLists.npm[0]}},T=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||d.cdnLists.npm[0]}catch{return d.cdnLists.npm[0]}},g=(s,n,a)=>{let t=n&&s.startsWith("unpkg:")?"?module":"";s.startsWith("gh:")?s=s.replace("gh",b[0]):s.includes(":")||(s=(a||(n?U[0]:j[0]))+":"+s);for(let r of q){let[p,c]=r;if(p.test(s))return s.replace(p,c)+t}return null},q=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(pr:)(.+)/i,"https://esm.sh/pr/$2"],[/^(pkg\.pr\.new:)(.+)/i,"https://esm.sh/pkg.pr.new/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:w,getModuleUrl:I}=d;var v=w("@live-codes/fsharp-wasm@0.3.0/");var D="5.9.3",_=w(`typescript@${D}/lib/typescript.js`);var y=`(async function () {
  let ready = false;
  /** @type {{ FSharpRunner: { RunFsharp: (arg0: any, arg1: any) => any; }; } | null} */
  let exportsObj = null;
  /** @type {any[]} */
  const queue = [];

  self.onmessage = function (e) {
    const data = e.data || {};
    if (data.type !== 'compile') return;
    if (!ready || !exportsObj) queue.push(data);
    else compile(data);
  };

  /** @param {{ source: any; stdin: any; id: any; }} msg */
  async function compile(msg) {
    try {
      const json = await exportsObj?.FSharpRunner.RunFsharp(msg.source, msg.stdin ?? '');
      self.postMessage({ type: 'result', id: msg.id, json });
    } catch (err) {
      self.postMessage({
        type: 'error',
        id: msg.id,
        // @ts-ignore
        message: String((err && err.stack) || err),
      });
    }
  }

  try {
    // see https://github.com/dotnet/runtime/issues/114918
    // and https://github.com/dotnet/runtime/pull/92280
    // @ts-ignore
    self.dotnetSidecar = true;
    // @ts-ignore
    const dotnetModule = await import(self.baseUrl + '_framework/dotnet.js');
    const runtime = await dotnetModule.dotnet.withDiagnosticTracing(false).create();
    const config = runtime.getConfig();
    exportsObj = await runtime.getAssemblyExports(config.mainAssemblyName);
    // runMain() runs the app's Main() but keeps the runtime alive.
    await runtime.runMain();
    ready = true;
    queue.splice(0).forEach(compile);
    self.postMessage({ type: 'ready' });
  } catch (err) {
    self.postMessage({
      type: 'fatal',
      // @ts-ignore
      message: String((err && err.stack) || err),
    });
  }
})();
`;var P=3,N=3e4,R=6e4;function F(){let s=null,n=null,a=null,t=null,r={},p=1,c=0;function B(i){let o=i.data||{};if(o.type==="ready")a&&(a(""),a=null,t=null);else if(o.type==="fatal")s&&(s.terminate(),s=null),t&&(t(new Error("F# worker failed to start: "+o.message)),a=null,t=null);else if(o.type==="result"){let l=r[o.id];l&&(delete r[o.id],clearTimeout(l.timer),l.resolve(JSON.parse(o.json)))}else if(o.type==="error"){let l=r[o.id];l&&(delete r[o.id],clearTimeout(l.timer),l.reject(new Error(o.message)))}}function $(i){C(new Error("F# worker crashed: "+(i&&i.message?i.message:"unknown"))),s&&(s.terminate(),s=null)}function C(i){for(let o in r)if(Object.prototype.hasOwnProperty.call(r,o)){let l=r[o];clearTimeout(l.timer),l.reject(i)}r={}}function u(){c=0,n=new Promise(function(i,o){a=i,t=o});try{let o=((l,m="text/javascript")=>`data:${m};charset=UTF-8;base64,`+btoa(l))(`self.baseUrl = "${v}";

${y}`);s=new Worker(o),s.onmessage=B,s.onerror=$}catch(i){throw s=null,n=null,a=null,t=null,i}}function f(){s||u()}function M(){try{f()}catch(i){return Promise.reject(i)}return new Promise(function(i,o){let l=setTimeout(function(){s&&(s.terminate(),s=null),o(new Error("F# worker failed to start (timeout)"))},R);n?.then(function(){clearTimeout(l),i()},function(m){clearTimeout(l),o(m)})})}function W(i,o){try{f()}catch(l){return Promise.reject(l)}return n.then(function(){return c>=P?(s?.terminate(),s=null,u(),n?.then(()=>x(i,o))):x(i,o)})}function x(i,o){let l=p++;return c++,new Promise(function(m,h){let S=setTimeout(function(){delete r[l],s&&(s.terminate(),s=null),h(new Error("F# compile timed out; restarted the compiler."))},N);r[l]={resolve:m,reject:h,timer:S},s?.postMessage({type:"compile",source:i,stdin:o??"",id:l})})}return{init:M,run:W,get ready(){return!!s&&a===null}}}var k;(k=window.livecodes).fsharp??(k.fsharp={});var e=window.livecodes.fsharp;e.ready=!1;e.runner??(e.runner=F());e.init??(e.init=function(){if(!e.ready)return parent.postMessage({type:"loading",payload:!0},"*"),e.runner.init()?.then(function(){parent.postMessage({type:"loading",payload:!1},"*")}).catch(function(s){throw parent.postMessage({type:"loading",payload:!1},"*"),e.ready=!1,e.init=null,console.error("Failed to initialize F# environment:",s),s})}());e.run=async function(s){let n="";if(document.querySelectorAll('script[type="text/fsharp-wasm"]').forEach(function(t){n+=t.innerHTML+`
`}),!n.trim())return{output:null,error:null,exitCode:0};await e.init;try{let t=await e.runner?.run(n,s);if(!t.ok){let r=(t.errors||[]).map(z).join(`
`);return e.output=null,e.error=r,e.exitCode=1,e.ready=!0,console.error(r),{output:null,error:r,exitCode:1}}return e.output=t.output,e.error=null,e.exitCode=0,e.ready=!0,console.log(t.output||""),{output:t.output,error:null,exitCode:0}}catch(t){let r="Error: "+(t&&t.message?t.message:String(t));return e.output=null,e.error=r,e.exitCode=1,e.ready=!0,console.error(r),{output:null,error:r,exitCode:1}}};e.loaded=new Promise(function(s){let n=setInterval(function(){e.ready&&(clearInterval(n),s())},50)});window.addEventListener("load",async function(){parent.postMessage({type:"loading",payload:!0},"*"),await e.run?.(e.input),parent.postMessage({type:"loading",payload:!1},"*")});function z(s){let n=s.line?" (line "+s.line+")":"";return"error FS"+s.errorNumber+n+": "+s.message}})();
