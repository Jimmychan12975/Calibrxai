// Contact information
export const CONTACT_INFO = {
  email: "hello@calibrxai.com",
  phone: "+1 (909) 568-3588",
  address: "Calabasas, CA, USA",
} as const;

// Social media links
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/calibrx-ai",
  twitter: "https://twitter.com/calibrxai",
  facebook: "https://facebook.com/calibrxai",
  instagram: "https://instagram.com/calibrxai",
} as const;

// Form configuration
export const FORM_CONFIG = {
  formspreeEndpoint: "https://formspree.io/f/mqalgnzz",
  maxMessageLength: 1000,
  maxSubjectLength: 200,
} as const;

// SEO constants
export const SEO_CONFIG = {
  siteName: "Calibrx AI",
  siteUrl: "https://www.calibrxai.com",
  defaultDescription: "Building AI-powered products, block by block. Delivering trustworthy, modern artificial intelligence solutions.",
  defaultKeywords: ["AI solutions", "artificial intelligence", "machine learning", "automation", "predictive analytics"],
} as const;

// Navigation items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

// Services data
export const SERVICES = [
  {
    id: "intelligent-automation",
    title: "Intelligent Automation",
    description: "Streamline operations with AI-powered automation that learns and adapts to your business processes, reducing manual tasks and increasing efficiency.",
    icon: "ri-robot-line",
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description: "Harness the power of your data with advanced machine learning models that provide actionable insights and forecast future trends with remarkable accuracy.",
    icon: "ri-brain-line",
  },
  {
    id: "customer-experience",
    title: "AI-Powered Customer Experience",
    description: "Enhance customer interactions with intelligent chatbots, personalized recommendations, and sentiment analysis that understands customer needs.",
    icon: "ri-customer-service-2-line",
  },
  {
    id: "document-intelligence",
    title: "Document Intelligence",
    description: "Transform unstructured documents into valuable data with AI that can read, understand, and extract information from any document format.",
    icon: "ri-file-search-line",
  },
  {
    id: "custom-development",
    title: "Custom AI Development",
    description: "Partner with our experts to build bespoke AI solutions tailored to your specific industry challenges and business objectives.",
    icon: "ri-code-box-line",
  },
] as const;

