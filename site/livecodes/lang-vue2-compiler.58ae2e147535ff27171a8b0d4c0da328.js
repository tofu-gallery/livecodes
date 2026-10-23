"use strict";(()=>{var U=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var L=e=>{let t="",s=0,o=r=>{t+=e.slice(s,r).replace(/[^\n]/g," "),s=r};for(;s<e.length;){let r=e[s],i=e[s+1];if(r==="/"&&i==="/"&&e[s-1]!==":"){let n=e.indexOf(`
`,s);o(n===-1?e.length:n)}else if(r==="/"&&i==="*"){let n=e.indexOf("*/",s+2);o(n===-1?e.length:n+2)}else if(r==='"'||r==="'"||r==="`"){let n=s+1;for(;n<e.length&&e[n]!==r;){if(e[n]==="\\")n++;else if(r!=="`"&&e[n]===`
`)break;n++}n=Math.min(n+1,e.length),t+=e.slice(s,n),s=n}else t+=r,s++}return t};var C=e=>e.split(".")[e.split(".").length-1];var E=()=>{let e=N.DOCS_BASE_URL||"docs/",t=e;if(!e.startsWith("http"))try{t=new URL(e,location.href).href}catch{}return t.endsWith("/")?t:`${t}/`},N={APP_VERSION:"49",SDK_VERSION:"0.14.1",COMMIT_SHA:"50c3286",REPO_URL:"https://github.com/live-codes/livecodes",DOCS_BASE_URL:"https://livecodes.io/docs/"};var W=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],R=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],P=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],p={getModuleUrl:(e,{isModule:t=!0,defaultCDN:s="esm.sh",external:o}={})=>{e=e.replace(/#nobundle/g,"");let r=n=>!o||!n.includes("https://esm.sh")?n:n.includes("?")?`${n}&external=${o}`:`${n}?external=${o}`,i=T(e,t,s);return i?r(i):t?r("https://esm.sh/"+e):"https://cdn.jsdelivr.net/npm/"+e},getUrl:(e,t)=>e.startsWith("http")||e.startsWith("data:")?e:T(e,!1,t||F())||e,cdnLists:{npm:R,module:W,gh:P},checkCDNs:async(e,t)=>{let s=[t,...p.cdnLists.npm].filter(Boolean);for(let o of s)try{if((await fetch(p.getUrl(e,o),{method:"HEAD"})).ok)return o}catch{}return p.cdnLists.npm[0]}},F=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||p.cdnLists.npm[0]}catch{return p.cdnLists.npm[0]}},T=(e,t,s)=>{let o=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",P[0]):e.includes(":")||(e=(s||(t?W[0]:R[0]))+":"+e);for(let r of z){let[i,n]=r;if(i.test(e))return e.replace(i,n)+o}return null},z=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(pr:)(.+)/i,"https://esm.sh/pr/$2"],[/^(pkg\.pr\.new:)(.+)/i,"https://esm.sh/pkg.pr.new/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:H,getModuleUrl:se}=p;var V="5.9.3",re=H(`typescript@${V}/lib/typescript.js`);var J=(e,t)=>{var o;if(!globalThis.window?.deps)return;(o=window.deps).loggedDeprecations??(o.loggedDeprecations=[]);let s=t?.deprecation?.(e.toLowerCase());!s||window.deps.loggedDeprecations.includes(s.old)||(console.warn(`Deprecation warning: The language name "${e}" will use the compiler "${s.new}" in the future.`,`If you want to continue using the current compiler, use the language name "${s.old}" instead.`,t?.name?`Docs: ${E()}languages/${t.name}`:""),window.deps.loggedDeprecations.push(s.old))},k=(e="",t={})=>{if(!e)return;let s=e?.toLowerCase(),o=window.deps.languages.find(r=>r.name===s||r.title.toLowerCase()===s||r.extensions.map(i=>i.toLowerCase()).includes(s));return t.warn!==!1&&J(e,o),o?.name};var M=(e="")=>window.deps.languages.find(t=>t.name===k(e))?.editor;var S=(e,t)=>window.deps.processors.map(s=>s.name).includes(e)?t.languages?t.languages.includes(e):!0:!1,B=(e,t)=>t.processors.includes(e);var f=e=>typeof e=="string"?{code:e,info:{}}:e;var v=async(e,t,s,o={},r=self)=>new Promise(i=>{if(!e||!t||!s)return i(f(""));let n=async function(c){let a=c.data.payload;c.data.trigger==="compileInCompiler"&&a?.content===e&&a?.language===t&&(r.removeEventListener("message",n),i(f(a.compiled)))};r.addEventListener("message",n),r.postMessage({type:"compileInCompiler",payload:{content:e,language:t,config:s,options:o}})});var K=/(?:@import\s+?)((?:".*?")|(?:'.*?')|(?:url\('.*?'\))|(?:url\(".*?"\)))(.*)?;/g,A=e=>new RegExp(K).test(e);var I=(e,t,s)=>s?[...s.matchAll(new RegExp(t,"g"))].map(o=>{let r=o.index??0,i=e.slice(r,r+o[0].length);return new RegExp(t).exec(i)??o}):[...e.matchAll(new RegExp(t,"g"))],D=(e,t,s,o)=>{let r=new RegExp(t,"g");if(!o)return e.replace(r,()=>s.shift()||"");let i="",n=0;for(let c of o.matchAll(r)){let a=c.index??0;i+=e.slice(n,a)+(s.shift()||""),n=a+c[0].length}return i+e.slice(n)},Z=e=>{let t=/(?:import\s+?(?:(?:(\w*)\s+from\s+?)|))((?:".*?")|(?:'.*?'))([\s]*?(?:;|$|))/g,s=[];for(let o of[...e.matchAll(new RegExp(t,"g"))]){let[r,i]=o;s.push(i)}return s.length===0?"":`
export { ${s.join(", ")} };`},G=async(e,t,s)=>{let r=(n=>`(<${n}(?:[^>]*?))(?:\\ssrc=["']([^"'\\s]*?)["'])((?:[^>]*))(>(?:\\s*?)<\\/${n}>|\\/>)`)(t),i=[];for(let n of I(e,r,s)){let[c,a,u,d,l]=n;if(!u)i.push(c);else{let m=p.getUrl(u);try{let x=await fetch(m);if(!x.ok)throw new Error("failed to fetch: "+m);let j=await x.text(),b=a.includes("lang")||d.includes("lang")?"":` lang="${C(m)}"`;i.push(`${a+b+d}>${j}</${t}>`)}catch{i.push(c)}}}return D(e,r,i,s)},Q=async(e,t,s)=>{let o=e,r={},i=!1,n=M(s)||"markup",c=S("tailwindcss",t)&&B("tailwindcss",t);n==="style"&&A(o)&&!c&&(i=!0);for(let a of window.deps.processors)if(!["tailwindcss","unocss","windicss"].includes(a.name)&&(S(a.name,t)&&B(a.name,t)&&a.editor===n||n==="style"&&a.name==="postcss"))if(a.isPostcssPlugin)i=!0;else{if(a.name==="postcss"&&!i)continue;let u=c&&a.name==="tailwindcss"?`@reference "tailwindcss";
`:"",d=await v(u+o,a.name,t),l=f(d);o=l.code,r={...r,...l.info}}return{code:o,info:r}},X=async(e,t,s,o={})=>{let r=l=>o.ignoreComments?L(l):void 0,i=await G(e,t,r(e));typeof o.prepareFn=="function"&&(i=await o.prepareFn(i,s));let n=s.processors.filter(l=>!o.skipCompilers?.includes(l)).length>0,a=((l,m="lang")=>`(<${l}\\s*)(?:([\\s\\S]*?)${m}\\s*=\\s*["']([A-Za-z0-9 _]*)["'])?((?:[^>]*)>)([\\s\\S]*?)(<\\/${l}>)`)(t,o.languageAttribute),u=r(i),d=[];for(let l of I(i,a,u)){let[m,x,j="",b="",O,w,_]=l;if((!b||!w)&&(t!=="style"||!n)){d.push(m);continue}let h=k(b);if((!h||o.skipCompilers?.includes(h))&&(t!=="style"||!n)){d.push(m);continue}let y="";["typescript","jsx","tsx","babel","sucrase"].includes(h||"")&&(y=Z(w));let g=(await v(w+y,h,s)).code||w;y&&(g=g.replace(y,"")),n&&(g=f(await Q(g,s,h??"css")).code),d.push(m.replace(new RegExp(a,"g"),t==="template"&&o.removeEnclosingTemplate?g:x+j+O+g+_))}return D(i,a,d,u)},$=async(e,t,s={})=>{let o=["template","style","script"];for(let r of o)e=await X(e,r,t,s);return e};var q=e=>`const options = {
  moduleCache: {
    vue: Vue,
  },
  pathResolve({ refPath, relPath }) {
    if ( relPath === '.' ) {
      return refPath;
    }
    if ( relPath.startsWith('http') || relPath === 'vue' ) {
      return relPath;
    }
    // relPath is a module name ?
    if ( relPath[0] !== '.' && relPath[0] !== '/' ) {
      const importMapScript = document.querySelector('script[type="importmap"]')?.innerHTML.trim();
      if (importMapScript) {
        try {
          const importMap = JSON.parse(importMapScript);
          if (importMap?.imports?.[relPath]) {
            return importMap.imports[relPath];
          }
        } catch {}
      }
      return '${p.getModuleUrl("",{defaultCDN:e})}' + relPath;
    }

    return refPath === undefined || !refPath.startsWith('http') ? relPath : String(new URL(relPath, refPath));
  },
  async getFile(url) {
    if (url === '/component.vue') return content;
    const res = await fetch(url);
    if ( !res.ok )
      throw Object.assign(new Error(res.statusText + ' ' + url), { res });
    return await res.text();
  },
  loadModule(path, options) {
    if ( path === 'vue' ) return Vue;
    if ( path.endsWith('.vue') || path.endsWith('.css') || path.endsWith('.scss') ) return;
    if ( !['http://', 'https://'].some(x => path.startsWith(x)) ) return;
    return import(path).catch(() => import(path + '.js'));
  },
  handleModule: async function (type, getContentData, path, options) {
    switch (type) {
      case '.css':
        options.addStyle(await getContentData(false));
        return null;
    }
  },
  addStyle: (textContent) => {
    const style = Object.assign(document.createElement('style'), { textContent });
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  },
};
`;self.createVueCompiler=()=>async(e,{config:t})=>`(() => {
let app = document.querySelector("#livecodes-app") || document.body.appendChild(document.createElement('div'));

/* <!-- */
let content = \`${U(await $(e,t))}\`;
/* --> */
${q(t.customSettings.defaultCDN)}
const { loadModule } = window['vue3-sfc-loader'];
const App = Vue.createApp(Vue.defineAsyncComponent(() => loadModule('/component.vue', options)));
App.mount(app)
App.config.devtools = true;
})();
`;self.createVue2Compiler=()=>async(e,{config:t})=>`(() => {
let app = document.querySelector("#livecodes-app") || document.body.appendChild(document.createElement('div'));

/* <!-- */
let content = \`${U(await $(e,t))}\`;
/* --> */
${q(t.customSettings.defaultCDN)}
const { loadModule, vueVersion } = window['vue2-sfc-loader'];
loadModule('/component.vue', options)
.then(component => new Vue(component).$mount(app));
Vue.config.devtools = true;
})();
`;})();
