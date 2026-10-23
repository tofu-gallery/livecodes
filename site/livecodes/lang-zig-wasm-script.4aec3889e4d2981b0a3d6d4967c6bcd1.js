"use strict";(()=>{var b=e=>e==null?"":e instanceof Error||e&&typeof e=="object"&&"message"in e&&typeof e.message=="string"?e.message:String(e);var w=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],U=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],v=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],d={getModuleUrl:(e,{isModule:n=!0,defaultCDN:c="esm.sh",external:s}={})=>{e=e.replace(/#nobundle/g,"");let r=l=>!s||!l.includes("https://esm.sh")?l:l.includes("?")?`${l}&external=${s}`:`${l}?external=${s}`,p=y(e,n,c);return p?r(p):n?r("https://esm.sh/"+e):"https://cdn.jsdelivr.net/npm/"+e},getUrl:(e,n)=>e.startsWith("http")||e.startsWith("data:")?e:y(e,!1,n||W())||e,cdnLists:{npm:U,module:w,gh:v},checkCDNs:async(e,n)=>{let c=[n,...d.cdnLists.npm].filter(Boolean);for(let s of c)try{if((await fetch(d.getUrl(e,s),{method:"HEAD"})).ok)return s}catch{}return d.cdnLists.npm[0]}},W=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||d.cdnLists.npm[0]}catch{return d.cdnLists.npm[0]}},y=(e,n,c)=>{let s=n&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",v[0]):e.includes(":")||(e=(c||(n?w[0]:U[0]))+":"+e);for(let r of $){let[p,l]=r;if(p.test(e))return e.replace(p,l)+s}return null},$=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(pr:)(.+)/i,"https://esm.sh/pr/$2"],[/^(pkg\.pr\.new:)(.+)/i,"https://esm.sh/pkg.pr.new/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:u,getModuleUrl:F}=d;var D="5.9.3",N=u(`typescript@${D}/lib/typescript.js`);var j=u("@bjorn3/browser_wasi_shim@0.3.0/dist/index.js");var k=u("@seth0x41/zig-wasm@1.0.0/");var C=`// @ts-nocheck
(async function () {
  let ready = false;
  let wasi = null;
  let zigStdLib = null;
  let zigCompilerModule = null;
  /** @type {any[]} */
  const queue = [];
  /** @type {Map<number, { source: string; module: WebAssembly.Module }>} */
  const compiledModules = new Map();
  // compiled user modules are small; bound the map to avoid unbounded growth
  // when many distinct sources are compiled over a long-lived worker
  const MAX_CACHED_MODULES = 16;

  // injected by the main thread when the worker is created
  const { wasiShimUrl, zigWasmBaseUrl } = self;
  const isSharedArrayBufferSupported = typeof SharedArrayBuffer !== 'undefined';

  // hashing function for cache validation
  const createHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash * 31 + char) % 0x7fffffff;
    }
    return hash;
  };

  const getErrorMessage = (err) => (err && err.message) || String(err);

  const createFile = (data) => {
    const dataArray = data instanceof ArrayBuffer ? new Uint8Array(data) : data;

    if (isSharedArrayBufferSupported) {
      const sharedBuffer = new SharedArrayBuffer(dataArray.length);
      const view = new Uint8Array(sharedBuffer);
      view.set(dataArray);

      return {
        get data() {
          return view;
        },
        get buffer() {
          return sharedBuffer;
        },
      };
    }
    return new wasi.File(dataArray);
  };

  const ensureDependencies = async () => {
    if (!wasi) {
      wasi = await import(wasiShimUrl);
    }
  };

  // Parse the (plain ustar) stdlib archive. js-untar cannot be used inside a
  // worker (it references \`window\`, and cross-origin importScripts is blocked
  // for data-URL workers), so extract the entries we need directly.
  const parseTar = (buffer) => {
    const decoder = new TextDecoder();
    const entries = [];
    const readString = (offset, length) => {
      let end = offset + length;
      for (let i = offset; i < offset + length; i++) {
        if (buffer[i] === 0) {
          end = i;
          break;
        }
      }
      return decoder.decode(buffer.subarray(offset, end));
    };

    let offset = 0;
    while (offset + 512 <= buffer.length) {
      const name = readString(offset, 100);
      if (!name) break; // end-of-archive marker (zero block)

      const size = parseInt(readString(offset + 124, 12).trim(), 8) || 0;
      const type = String.fromCharCode(buffer[offset + 156]);
      const prefix = readString(offset + 345, 155);
      const dataStart = offset + 512;

      entries.push({
        name: prefix ? prefix + '/' + name : name,
        type,
        data: buffer.subarray(dataStart, dataStart + size),
      });

      offset = dataStart + Math.ceil(size / 512) * 512;
    }
    return entries;
  };

  const processZigArchive = async (response) => {
    const arrayBuffer = await response.arrayBuffer();
    const entries = parseTar(new Uint8Array(arrayBuffer));
    const fsMap = new Map();

    for (const entry of entries) {
      if (!entry.name.startsWith('lib/') || entry.type !== '0') continue;

      const path = entry.name.substring(4).split('/');
      let current = fsMap;

      for (let i = 0; i < path.length - 1; i++) {
        if (!current.has(path[i])) current.set(path[i], new Map());
        current = current.get(path[i]);
      }

      // copy the bytes so each file has its own buffer
      const fileData = createFile(entry.data.slice());

      current.set(path[path.length - 1], fileData);
    }

    const buildDirectory = (map) =>
      new wasi.Directory(
        Array.from(map.entries()).map(([key, value]) => [
          key,
          value instanceof Map ? buildDirectory(value) : value,
        ]),
      );

    return buildDirectory(fsMap);
  };

  const fetchArrayBuffer = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch ' + url + ': ' + response.statusText);
    return response.arrayBuffer();
  };

  const loadToolchain = async () => {
    const archiveData = await fetchArrayBuffer(zigWasmBaseUrl + 'zig.tar.gz');

    const decompressed = new Response(
      new ReadableStream({
        start(controller) {
          controller.enqueue(new Uint8Array(archiveData));
          controller.close();
        },
      }).pipeThrough(new DecompressionStream('gzip')),
    );

    zigStdLib = await processZigArchive(decompressed);

    // pre-compile the compiler once; it is instantiated for every compilation
    const compilerData = await fetchArrayBuffer(zigWasmBaseUrl + 'zig.wasm');
    zigCompilerModule = await WebAssembly.compile(compilerData);
  };

  // compile the user code to a WebAssembly module (cached for identical source,
  // e.g. interactive re-runs that only provide new stdin)
  const compileZig = async (code) => {
    const hash = createHash(code);
    const cached = compiledModules.get(hash);
    if (cached && cached.source === code) return cached.module;

    const errors = [];
    const stderr = wasi.ConsoleStdout.lineBuffered((line) => errors.push(line));

    const codeFile = createFile(new TextEncoder().encode(code));

    const compileWasi = new wasi.WASI(
      [
        'zig.wasm',
        'build-exe',
        'main.zig',
        '-target',
        'wasm32-wasi',
        '-fno-entry',
        '-O',
        'ReleaseSmall',
      ],
      [],
      [
        new wasi.OpenFile(createFile(new TextEncoder().encode(''))),
        createFile(new TextEncoder().encode('')),
        stderr,
        new wasi.PreopenDirectory('.', new Map([['main.zig', codeFile]])),
        new wasi.PreopenDirectory('/lib', zigStdLib.contents),
        new wasi.PreopenDirectory('/cache', new Map()),
      ],
      { debug: false },
    );

    const instance = await WebAssembly.instantiate(zigCompilerModule, {
      wasi_snapshot_preview1: compileWasi.wasiImport,
    });

    const exitCode = compileWasi.start(instance);
    if (exitCode !== 0) throw new Error('Compilation failed: ' + errors.join('\\n'));

    const mainWasm = compileWasi.fds[3].dir.contents.get('main.wasm');
    if (!mainWasm || !mainWasm.data) throw new Error('Compilation output not found');

    const wasmData =
      mainWasm.data instanceof Uint8Array ? mainWasm.data : new Uint8Array(mainWasm.data);
    const module = await WebAssembly.compile(wasmData);

    if (compiledModules.size >= MAX_CACHED_MODULES) {
      compiledModules.clear();
    }
    compiledModules.set(hash, { source: code, module });
    return module;
  };

  // compile and run the user code, returning the same result shape the
  // main-thread implementation used to produce
  const runZig = async (code, stdin) => {
    const output = [];
    const errors = [];

    try {
      const module = await compileZig(code);

      const stdout = wasi.ConsoleStdout.lineBuffered((line) => output.push(line));
      const stderr = wasi.ConsoleStdout.lineBuffered((line) => errors.push(line));

      const inputFile = createFile(new TextEncoder().encode(stdin || ''));

      const executeWasi = new wasi.WASI(
        ['main.wasm'],
        [],
        [new wasi.OpenFile(inputFile), stdout, stderr, new wasi.PreopenDirectory('.', new Map())],
        { debug: false },
      );

      const instance = await WebAssembly.instantiate(module, {
        wasi_snapshot_preview1: executeWasi.wasiImport,
      });

      executeWasi.start(instance);
    } catch (err) {
      compiledModules.clear();
      return { output: null, error: 'Error: ' + getErrorMessage(err) };
    }

    return {
      output: output.join('\\n') || null,
      error: errors.join('\\n') || null,
    };
  };

  self.onmessage = function (e) {
    const data = e.data || {};
    if (data.type !== 'compile') return;
    if (!ready || !zigStdLib || !zigCompilerModule) queue.push(data);
    else compile(data);
  };

  /** @param {{ source: string; stdin?: string; id: number; }} msg */
  async function compile(msg) {
    try {
      const result = await runZig(msg.source, msg.stdin);
      self.postMessage({ type: 'result', id: msg.id, json: JSON.stringify(result) });
    } catch (err) {
      // unexpected failure (runZig handles expected compile/run errors)
      self.postMessage({
        type: 'error',
        id: msg.id,
        message: String((err && err.stack) || err),
      });
    }
  }

  async function boot() {
    try {
      await ensureDependencies();
      await loadToolchain();
      ready = true;
      queue.splice(0).forEach(compile);
      self.postMessage({ type: 'ready' });
    } catch (err) {
      self.postMessage({
        type: 'fatal',
        message: String((err && err.stack) || err),
      });
    }
  }

  boot();
})();
`;var L=18e4,P=12e4;function z(){let e=null,n=null,c=null,s=null,r={},p=1;function l(i){let o=i.data||{};if(o.type==="ready")c&&(c(),c=null,s=null);else if(o.type==="fatal")e&&(e.terminate(),e=null),s&&(s(new Error("Zig worker failed to start: "+o.message)),c=null,s=null);else if(o.type==="result"){let a=r[o.id];a&&(delete r[o.id],clearTimeout(a.timer),a.resolve(JSON.parse(o.json)))}else if(o.type==="error"){let a=r[o.id];a&&(delete r[o.id],clearTimeout(a.timer),a.reject(new Error(o.message)))}}function B(i){S(new Error("Zig worker crashed: "+(i&&i.message?i.message:"unknown"))),e&&(e.terminate(),e=null)}function S(i){for(let o in r)if(Object.prototype.hasOwnProperty.call(r,o)){let a=r[o];clearTimeout(a.timer),a.reject(i)}r={}}function f(){n=new Promise(function(i,o){c=i,s=o});try{let o=((a,m="text/javascript")=>`data:${m};charset=UTF-8;base64,`+btoa(a))(`self.zigWasmBaseUrl = "${k}"; self.wasiShimUrl = "${j}";

${C}`);e=new Worker(o),e.onmessage=l,e.onerror=B}catch(i){throw e=null,n=null,c=null,s=null,i}}function g(){e||f()}function M(){try{g()}catch(i){return Promise.reject(i)}return new Promise(function(i,o){let a=setTimeout(function(){e&&(e.terminate(),e=null),o(new Error("Zig worker failed to start (timeout)"))},L);n?.then(function(){clearTimeout(a),i()},function(m){clearTimeout(a),o(m)})})}function E(i,o){try{g()}catch(a){return Promise.reject(a)}return n?n.then(function(){return e?h(i,o):(f(),n.then(()=>h(i,o)))}):Promise.reject(new Error("Zig worker is not ready"))}function h(i,o){let a=p++;return new Promise(function(m,x){let A=setTimeout(function(){delete r[a],e&&(e.terminate(),e=null),x(new Error("Zig compile timed out; restarted the compiler."))},P);r[a]={resolve:m,reject:x,timer:A},e?.postMessage({type:"compile",source:i,stdin:o??"",id:a})})}return{init:M,run:E,get ready(){return!!e&&c===null}}}var T;(T=window.livecodes).zig??(T.zig={});var t=window.livecodes.zig;t.ready=!1;t.runner??(t.runner=z());t.init??(t.init=function(){if(!t.ready)return parent.postMessage({type:"loading",payload:!0},"*"),t.runner?.init().then(function(){parent.postMessage({type:"loading",payload:!1},"*")}).catch(function(e){throw parent.postMessage({type:"loading",payload:!1},"*"),t.ready=!1,t.init=null,t.failed=!0,t.error=b(e),console.error("Failed to initialize Zig environment:",e),e})}());t.run=async function(e){let n="";if(document.querySelectorAll('script[type="text/zig-wasm"]').forEach(function(s){n+=s.innerHTML+`
`}),!n.trim())return{output:null,error:null,exitCode:0};t.input=e,t.output=null,t.ready=!1;try{await t.init;let s=await t.runner?.run(n,e);if(!s)throw new Error("Zig runner is not available");let r=s.error;return t.output=s.output,t.error=r,t.exitCode=r?1:0,t.ready=!0,r!=null?console.error(r):s.output!=null&&console.log(s.output),{output:s.output,error:r,exitCode:r?1:0}}catch(s){let r="Error: "+(s&&s.message?s.message:String(s));return t.output=null,t.error=r,t.exitCode=1,t.ready=!0,console.error(r),{output:null,error:r,exitCode:1}}};t.loaded=new Promise((e,n)=>{let c=setInterval(function(){t.failed?(clearInterval(c),n(new Error(t.error||"Failed to initialize the Zig environment"))):t.ready&&(clearInterval(c),e())},50)});window.addEventListener("load",async function(){parent.postMessage({type:"loading",payload:!0},"*"),await t.run?.(t.input),parent.postMessage({type:"loading",payload:!1},"*")});})();
