"use strict";(()=>{var m=e=>e==null?"":e instanceof Error||e&&typeof e=="object"&&"message"in e&&typeof e.message=="string"?e.message:String(e);var b=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],y=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],w=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],l={getModuleUrl:(e,{isModule:r=!0,defaultCDN:t="esm.sh",external:o}={})=>{e=e.replace(/#nobundle/g,"");let c=a=>!o||!a.includes("https://esm.sh")?a:a.includes("?")?`${a}&external=${o}`:`${a}?external=${o}`,i=x(e,r,t);return i?c(i):r?c("https://esm.sh/"+e):"https://cdn.jsdelivr.net/npm/"+e},getUrl:(e,r)=>e.startsWith("http")||e.startsWith("data:")?e:x(e,!1,r||E())||e,cdnLists:{npm:y,module:b,gh:w},checkCDNs:async(e,r)=>{let t=[r,...l.cdnLists.npm].filter(Boolean);for(let o of t)try{if((await fetch(l.getUrl(e,o),{method:"HEAD"})).ok)return o}catch{}return l.cdnLists.npm[0]}},E=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||l.cdnLists.npm[0]}catch{return l.cdnLists.npm[0]}},x=(e,r,t)=>{let o=r&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",w[0]):e.includes(":")||(e=(t||(r?b[0]:y[0]))+":"+e);for(let c of $){let[i,a]=c;if(i.test(e))return e.replace(i,a)+o}return null},$=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(pr:)(.+)/i,"https://esm.sh/pr/$2"],[/^(pkg\.pr\.new:)(.+)/i,"https://esm.sh/pkg.pr.new/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:f,getModuleUrl:N}=l;var u=f("@live-codes/ghc-in-browser@0.2.0/");var U=f("https://esm.sh/gh/haskell-wasm/browser_wasi_shim@2f86b49dce50916e2984029c535321e34b234229");var R="5.9.3",_=f(`typescript@${R}/lib/typescript.js`);var v=()=>window.parent===window?window.location.origin:window.location.ancestorOrigins?.[0]||(()=>{if(!document.referrer)return"*";try{return new URL(document.referrer).origin}catch{return"*"}})();var j=`// @ts-nocheck
// Runs GHC in the browser (https://github.com/haskell-wasm/ghc-in-browser) inside a Web Worker.
// The asset URLs are injected by the main thread when the worker is created.

let dyld;
let run;
let output = '';
let error = '';

const reply = (message) => self.postMessage(message);

// GHC runs against an in-memory WASI filesystem; this is not a host path.
const ghcRuntimeDirectory = '/tmp';

const getErrorMessage = (err) => (err && err.message) || String(err);

const fetchArrayBuffer = async (url, assetName) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(\`Failed to fetch \${assetName}: \${response.status}\`);
  }
  return response.arrayBuffer();
};

const init = async () => {
  const { bsdtarUrl, ghcBrowserBaseUrl, ghcRootfsUrl, haskellWasiShimUrl } = self;
  const [{ ConsoleStdout, File, OpenFile, PreopenDirectory, WASI }, { DyLDBrowserHost, main }] =
    await Promise.all([import(haskellWasiShimUrl), import(ghcBrowserBaseUrl + 'dyld.mjs')]);
  const rootfs = new PreopenDirectory('/', []);
  const wasi = new WASI(
    ['bsdtar.wasm', '-x'],
    [],
    [
      new OpenFile(new File(new Uint8Array(), { readonly: true })),
      ConsoleStdout.lineBuffered(() => undefined),
      ConsoleStdout.lineBuffered((message) => {
        error += message + '\\n';
      }),
      rootfs,
    ],
    { debug: false },
  );
  // bsdtar extracts the GHC rootfs archive into the in-memory filesystem.
  const [wasm, archive] = await Promise.all([
    fetchArrayBuffer(bsdtarUrl, 'bsdtar.wasm'),
    fetchArrayBuffer(ghcRootfsUrl, 'GHC rootfs'),
  ]);
  const { instance } = await WebAssembly.instantiate(wasm, {
    wasi_snapshot_preview1: wasi.wasiImport,
  });
  wasi.fds[0] = new OpenFile(new File(new Uint8Array(archive), { readonly: true }));
  if (wasi.start(instance) !== 0) throw new Error(error);

  dyld = await main({
    rpc: new DyLDBrowserHost({
      rootfs,
      stdout: (message) => {
        output += message + '\\n';
      },
      stderr: (message) => {
        error += message + '\\n';
      },
    }),
    searchDirs: [
      \`\${ghcRuntimeDirectory}/clib\`,
      \`\${ghcRuntimeDirectory}/hslib/lib/wasm32-wasi-ghc-9.14.0.20251031-inplace\`,
    ],
    mainSoPath: \`\${ghcRuntimeDirectory}/libplayground001.so\`,
    args: ['libplayground001.so', '+RTS', '-c', '-RTS'],
    isIserv: false,
  });
  run = await dyld.exportFuncs.myMain(\`\${ghcRuntimeDirectory}/hslib/lib\`);
};

self.onmessage = async ({ data }) => {
  if (data.type === 'init') {
    try {
      await init();
      reply({ type: 'ready' });
    } catch (err) {
      reply({
        type: 'error',
        message: [error.trim(), getErrorMessage(err)].filter(Boolean).join('\\n'),
      });
    }
    return;
  }

  try {
    if (!run) throw new Error('Haskell runtime is not initialized.');
    output = '';
    error = '';
    // \`setStdin\` is provided by the patched runtime to back fd 0 with the
    // current input; without it the program reads an empty stdin (EOF).
    if (typeof dyld.setStdin === 'function') {
      dyld.setStdin(typeof data.stdin === 'string' ? data.stdin : '');
    }
    await run('-v0', data.code);
    reply({ type: 'result', result: { output, error, exitCode: 0 } });
  } catch (err) {
    reply({
      type: 'result',
      result: {
        output,
        error: [error.trim(), getErrorMessage(err)].filter(Boolean).join('\\n'),
        exitCode: 1,
      },
    });
  }
};
`;var W=3e5,L=12e4,D=()=>{let e=[`self.bsdtarUrl = ${JSON.stringify(u+"bsdtar.wasm")};`,`self.ghcBrowserBaseUrl = ${JSON.stringify(u)};`,`self.ghcRootfsUrl = ${JSON.stringify(u+"rootfs.tar.zst")};`,`self.haskellWasiShimUrl = ${JSON.stringify(U)};`].join(`
`),r=`data:text/javascript;charset=UTF-8;base64,${btoa(`${e}

${j}`)}`;return new Worker(r)},A=e=>{let r,t,o,c=Promise.resolve(),i=n=>{r?.terminate(),r=void 0,t=void 0,o&&(clearTimeout(o.timer),o.reject(n),o=void 0)},a=(n,g,p)=>new Promise((d,T)=>{o={resolve:d,reject:T,timer:setTimeout(()=>i(new Error(p)),g)};try{r.postMessage(n)}catch(S){i(new Error(m(S)))}}),h=()=>{if(t)return t;try{return r=e(),r.onerror=n=>i(new Error(n.message)),r.onmessageerror=()=>i(new Error("Invalid Haskell worker response.")),r.onmessage=({data:n})=>{if(n.type==="error"){i(new Error(n.message));return}o&&(clearTimeout(o.timer),o.resolve(n),o=void 0)},t=a({type:"init"},W,"Haskell initialization timed out.").then(()=>{}).catch(n=>{throw t=void 0,n}),t}catch(n){return Promise.reject(n)}};return{init:h,run:(n,g)=>{let p=c.then(async()=>{await h();let d=await a({type:"run",code:n,stdin:g},L,"Haskell execution timed out.");if(d.type!=="result")throw new Error("Invalid Haskell worker response.");return d.result});return c=p.catch(()=>{}),p}}},P=v(),B;(B=window.livecodes).haskellWasm??(B.haskellWasm={});var s=window.livecodes.haskellWasm;s.runner??(s.runner=A(D));s.input??(s.input="");var k=0,C=e=>{k+=e?1:-1,parent.postMessage({type:"loading",payload:k>0},P)};s.run=async e=>{let r=Array.from(document.querySelectorAll('script[type="text/haskell-wasm"]')).map(t=>t.textContent).join(`
`);if(s.input=e??s.input??"",!r.trim())return s.output="",s.error="",s.exitCode=0,{output:"",error:"",exitCode:0};C(!0);try{let t=await s.runner.run(r,s.input);return s.output=t.output,s.error=t.error,s.exitCode=t.exitCode,t.output&&console.log(t.output),t.error&&console.error(t.error),t}catch(t){return s.output="",s.error=m(t),s.exitCode=1,console.error(s.error),{output:"",error:s.error,exitCode:1}}finally{C(!1)}};s.loaded=new Promise((e,r)=>{window.addEventListener("load",async()=>{let t=await s.run(s.input);t.exitCode!==0?r(new Error(t.error)):e()},{once:!0})});s.loaded.catch(()=>{});})();
