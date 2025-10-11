// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

// Product types (extending existing)
export interface Product {
  slug: string;
  name: string;
  summary: string;
  image: string;
  href: string;
  accentColor?: string;
  theme?: "default" | "calipet";
}

// Contact info types
export interface ContactInfo {
  type: "address" | "email" | "phone";
  label: string;
  value: string;
  href?: string;
  icon: string;
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ImageProps extends BaseComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  loading?: "lazy" | "eager";
}

// Theme types
export type Theme = "default" | "calipet";

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
}

