export const SITE_URL = "https://itsdhruv.online";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Dhruv Pathak",
    givenName: "Dhruv",
    familyName: "Pathak",
    gender: "Male",
    jobTitle: "AI Solutions Engineer & Solution Architect",
    description:
      "AI Solutions Engineer specializing in AI adoption, solution architecture, multi-agent systems, Voice AI telephony, and RevOps workflow automation.",
    url: SITE_URL,
    image: `${SITE_URL}/dhruv-portrait.png`,
    email: "work.dhruvpathak@gmail.com",
    telephone: "+916354666048",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Marwadi University",
      location: "Rajkot, Gujarat, India",
    },
    sameAs: [
      "https://linkedin.com/in/dhruvvpathakk",
      "https://github.com/dhruv-pathak-10",
      "https://itsdhruv.online",
    ],
    knowsAbout: [
      "AI Adoption",
      "AI Solutions Engineering",
      "Solution Architecture",
      "Multi-Agent Systems",
      "Voice AI Telephony",
      "LangGraph Orchestration",
      "LangChain",
      "n8n Workflow Automation",
      "HubSpot CRM Automation",
      "Apollo.io Lead Intelligence",
      "Python",
      "FastAPI",
      "Next.js",
      "RevOps Engineering",
      "Deterministic Guardrails",
    ],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Dhruv Pathak — AI Solutions Engineer & Solution Architecture",
    description: "I don't just build AI. I figure out where it belongs.",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    inLanguage: "en-US",
  };
}

export function getProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: "Dhruv Pathak — Executive Portfolio & Systems Architecture",
    mainEntity: {
      "@id": `${SITE_URL}/#person`,
    },
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    inLanguage: "en-US",
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${SITE_URL}${item.item}`,
    })),
  };
}

export function getProjectJsonLd({
  name,
  description,
  url,
  technologies,
  applicationCategory = "BusinessApplication",
}: {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  applicationCategory?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    applicationCategory,
    operatingSystem: "Cloud / Web",
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    keywords: technologies.join(", "),
  };
}
