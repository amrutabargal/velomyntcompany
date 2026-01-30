import { Helmet } from "react-helmet-async";

/**
 * SEO Component for managing page meta tags
 * @param {Object} props
 * @param {string} props.title - Page title (max ~60 characters)
 * @param {string} props.description - Meta description (max ~160 characters)
 * @param {string} props.keywords - Comma-separated keywords
 * @param {string} props.canonical - Canonical URL (optional)
 */
export function SEO({ title, description, keywords, canonical }) {
  const siteName = "Velomynt Digital";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

