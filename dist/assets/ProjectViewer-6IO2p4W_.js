import{r as c,j as e}from"./vendor-BNC8S10W.js";import{P as x,a as b}from"./index-DOAH0IH4.js";import{m as p}from"./vendor-icons-KaofFbX1.js";import"./vendor-motion-DJVpcUl9.js";function g(o){return o==="shophube"?`
      /* Fix newsletter card overlapping footer */
      #root, #root > div { padding-bottom: 3rem !important; }
      main, [role="main"] { padding-bottom: 3rem !important; min-height: auto !important; }
      footer { margin-top: 4rem !important; position: relative !important; z-index: 1 !important; }
      /* Ensure content sections have proper spacing before footer */
      body { padding-bottom: 1rem; }
    `:""}function N({slug:o,onNavigate:a}){const d=c.useRef(null),[f,s]=c.useState(!0),n=x[o];return c.useEffect(()=>{if(!n)return;const t=d.current;if(!t)return;let i=!1;s(!0);const u=n.substring(0,n.lastIndexOf("/")+1);return t.src="/viewer-frame.html",t.onload=function(){t.onload=null;try{t.contentWindow.history.replaceState(null,"","/")}catch{}fetch(n).then(r=>r.text()).then(r=>{if(i)return;const h=`<base href="${window.location.origin}${u}">`,m=g(o);r=r.replace(/<head([^>]*)>/i,"<head$1>"+h+(m?`<style>${m}</style>`:"")+`
            <script>
              (function () {
                try {
                  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
                  history.replaceState(null, "", "/");
                  if (location.hash) location.hash = "";
                  window.scrollTo(0, 0);
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                  window.addEventListener("load", function () {
                    window.scrollTo(0, 0);
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                  }, { once: true });
                  setTimeout(function () {
                    window.scrollTo(0, 0);
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                  }, 60);
                } catch (_) {}
              })();
            <\/script>
          `);const l=t.contentDocument;l.open(),l.write(r),l.close();try{t.contentWindow.scrollTo(0,0),t.contentDocument.documentElement.scrollTop=0,t.contentDocument.body.scrollTop=0}catch{}s(!1)}).catch(()=>{i||s(!1)})},()=>{i=!0,t.onload=null}},[n]),n?e.jsxs("div",{className:"flex flex-col",style:{height:"100vh"},children:[e.jsxs("div",{className:"bg-slate-950 border-b border-slate-800 px-4 py-2 flex items-center gap-4 shrink-0",children:[e.jsxs("button",{onClick:()=>a("portfolio"),className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors text-sm",children:[e.jsx(p,{size:16}),"Back to Portfolio"]}),e.jsx("span",{className:"text-gray-400 text-sm truncate",children:b[o]??o.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")})]}),f&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-slate-900 z-10",children:e.jsxs("div",{className:"flex items-center gap-3 text-indigo-400",children:[e.jsx("div",{className:"w-8 h-8 border-3 border-slate-700 border-t-indigo-500 rounded-full animate-spin"}),e.jsx("span",{children:"Loading project..."})]})}),e.jsx("iframe",{ref:d,title:"Project Preview",className:"flex-1 w-full border-none bg-white"})]}):e.jsxs("div",{className:"pt-16 min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Project not found"}),e.jsxs("button",{onClick:()=>a("portfolio"),className:"inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors",children:[e.jsx(p,{size:18}),"Back to Portfolio"]})]})}export{N as ProjectViewer};
