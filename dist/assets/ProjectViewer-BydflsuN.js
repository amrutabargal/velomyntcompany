import{r as c,j as e}from"./vendor-BNC8S10W.js";import{P as h}from"./index-CBt-9uOg.js";import{m}from"./vendor-icons-CjicgmzY.js";import"./vendor-motion-DJVpcUl9.js";function v({slug:i,onNavigate:a}){const d=c.useRef(null),[u,r]=c.useState(!0),o=h[i];return c.useEffect(()=>{if(!o)return;const t=d.current;if(!t)return;let s=!1;r(!0);const f=o.substring(0,o.lastIndexOf("/")+1);return t.src="/viewer-frame.html",t.onload=function(){t.onload=null;try{t.contentWindow.history.replaceState(null,"","/")}catch{}fetch(o).then(n=>n.text()).then(n=>{if(s)return;const p=`<base href="${window.location.origin}${f}">`;n=n.replace(/<head([^>]*)>/i,"<head$1>"+p+`
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
          `);const l=t.contentDocument;l.open(),l.write(n),l.close();try{t.contentWindow.scrollTo(0,0),t.contentDocument.documentElement.scrollTop=0,t.contentDocument.body.scrollTop=0}catch{}r(!1)}).catch(()=>{s||r(!1)})},()=>{s=!0,t.onload=null}},[o]),o?e.jsxs("div",{className:"pt-16 flex flex-col",style:{height:"100vh"},children:[e.jsxs("div",{className:"bg-slate-950 border-b border-slate-800 px-4 py-2 flex items-center gap-4 shrink-0",children:[e.jsxs("button",{onClick:()=>a("portfolio"),className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors text-sm",children:[e.jsx(m,{size:16}),"Back to Portfolio"]}),e.jsx("span",{className:"text-gray-400 text-sm truncate",children:i.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")})]}),u&&e.jsx("div",{className:"absolute inset-0 pt-16 flex items-center justify-center bg-slate-900 z-10",children:e.jsxs("div",{className:"flex items-center gap-3 text-indigo-400",children:[e.jsx("div",{className:"w-8 h-8 border-3 border-slate-700 border-t-indigo-500 rounded-full animate-spin"}),e.jsx("span",{children:"Loading project..."})]})}),e.jsx("iframe",{ref:d,title:"Project Preview",className:"flex-1 w-full border-none bg-white"})]}):e.jsxs("div",{className:"pt-16 min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Project not found"}),e.jsxs("button",{onClick:()=>a("portfolio"),className:"inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors",children:[e.jsx(m,{size:18}),"Back to Portfolio"]})]})}export{v as ProjectViewer};
