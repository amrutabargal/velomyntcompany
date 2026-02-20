import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";

const PROJECT_MAP = {
  "shophube": "/All_projects/shophube/dist/index.html",
  "styleverse": "/All_projects/Styleverse/index.html",
  "royal-palace": "/All_projects/Royal_palace/index.html",
  "prestigra-den": "/All_projects/prestigegrand/index.html",
  "paradise-resort": "/All_projects/paradiseresort/index.html",
  "indian-resort": "/All_projects/Indianresort/index.html",
  "caremax": "/All_projects/caremahospital/dist/index.html",
  "foodswift": "/All_projects/fooddelivery/index.html",
  "foodhub": "/All_projects/foodhub/index.html",
  "healthcare-portal": "/All_projects/Medicare/index.html",
  "medicare-plus": "/All_projects/MedicareHealthcare_Clinic/index.html",
  "eduflow": "/All_projects/Equcation/index.html",
  "velomynt-realestate": "/All_projects/Demo1/index.html",
  "tours": "/All_projects/tours/index.html",
  "finflow": "/All_projects/Finflow/index.html",
  "logiflow": "/All_projects/Logiflow/index.html",
  "premier-estate": "/All_projects/PremierEstate/index.html",
  "quickserve": "/All_projects/quickServe/index.html",
};

export function ProjectViewer({ slug, onNavigate }) {
  const iframeRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const projectPath = PROJECT_MAP[slug];

  useEffect(() => {
    if (!projectPath) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

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
          const baseTag = `<base href="${window.location.origin}${basePath}">`;
          html = html.replace(/<head([^>]*)>/i, "<head$1>" + baseTag);

          const doc = iframe.contentDocument;
          doc.open();
          doc.write(html);
          doc.close();
          setLoading(false);
        });
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

export { PROJECT_MAP };
