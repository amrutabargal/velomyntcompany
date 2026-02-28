import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { PROJECT_MAP } from "../config/projectMap.js";

export function ProjectViewer({ slug, onNavigate }) {
  const iframeRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const projectPath = PROJECT_MAP[slug];

  useEffect(() => {
    if (!projectPath) return;

    const iframe = iframeRef.current;
    if (!iframe) return;
    let cancelled = false;
    setLoading(true);

    const basePath = projectPath.substring(0, projectPath.lastIndexOf("/") + 1);

    iframe.src = "/viewer-frame.html";
    iframe.onload = function onFrameReady() {
      iframe.onload = null;

      try {
        iframe.contentWindow.history.replaceState(null, "", "/");
      } catch (_) { /* cross-origin safe */ }

      fetch(projectPath)
        .then((r) => r.text())
        .then((html) => {
          if (cancelled) return;
          const baseTag = `<base href="${window.location.origin}${basePath}">`;
          const resetScript = `
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
            </script>
          `;
          html = html.replace(/<head([^>]*)>/i, "<head$1>" + baseTag + resetScript);

          const doc = iframe.contentDocument;
          doc.open();
          doc.write(html);
          doc.close();
          try {
            iframe.contentWindow.scrollTo(0, 0);
            iframe.contentDocument.documentElement.scrollTop = 0;
            iframe.contentDocument.body.scrollTop = 0;
          } catch (_) { /* same-origin safe */ }
          setLoading(false);
        })
        .catch(() => {
          if (!cancelled) setLoading(false);
        });
    };

    return () => {
      cancelled = true;
      iframe.onload = null;
    };
  }, [projectPath]);

  if (!projectPath) {
    return (
      <div className="pt-16 min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <button
          onClick={() => onNavigate("portfolio")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="pt-16 flex flex-col" style={{ height: "100vh" }}>
      <div className="bg-slate-950 border-b border-slate-800 px-4 py-2 flex items-center gap-4 shrink-0">
        <button
          onClick={() => onNavigate("portfolio")}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </button>
        <span className="text-gray-400 text-sm truncate">
          {slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
        </span>
      </div>

      {loading && (
        <div className="absolute inset-0 pt-16 flex items-center justify-center bg-slate-900 z-10">
          <div className="flex items-center gap-3 text-indigo-400">
            <div className="w-8 h-8 border-3 border-slate-700 border-t-indigo-500 rounded-full animate-spin" />
            <span>Loading project...</span>
          </div>
        </div>
      )}

      <iframe
        ref={iframeRef}
        title="Project Preview"
        className="flex-1 w-full border-none bg-white"
      />
    </div>
  );
}

