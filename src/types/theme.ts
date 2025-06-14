
export interface BrandConfig {
  name: string;
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  borderRadius: number;
  fontFamily: string;
  headerHeight: number;
  sidebarWidth: number;
}

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  config: BrandConfig;
}

export const defaultTheme: BrandConfig = {
  name: "Default Brand",
  primaryColor: "#1890ff",
  secondaryColor: "#f0f2f5",
  accentColor: "#52c41a",
  backgroundColor: "#ffffff",
  textColor: "#262626",
  borderRadius: 6,
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  headerHeight: 64,
  sidebarWidth: 256,
};

export const themePresets: ThemePreset[] = [
  {
    id: "corporate-blue",
    name: "Corporate Blue",
    description: "Professional blue theme for corporate brands",
    config: {
      ...defaultTheme,
      name: "Corporate Solutions",
      primaryColor: "#2c5aa0",
      secondaryColor: "#e8f4fd",
      accentColor: "#1890ff",
      backgroundColor: "#fafbfc",
    },
  },
  {
    id: "modern-purple",
    name: "Modern Purple",
    description: "Contemporary purple theme for tech companies",
    config: {
      ...defaultTheme,
      name: "TechFlow",
      primaryColor: "#722ed1",
      secondaryColor: "#f9f0ff",
      accentColor: "#eb2f96",
      backgroundColor: "#fafafa",
      borderRadius: 8,
    },
  },
  {
    id: "eco-green",
    name: "Eco Green",
    description: "Nature-inspired green theme for eco-friendly brands",
    config: {
      ...defaultTheme,
      name: "EcoVision",
      primaryColor: "#389e0d",
      secondaryColor: "#f6ffed",
      accentColor: "#52c41a",
      backgroundColor: "#fcffe6",
    },
  },
  {
    id: "premium-gold",
    name: "Premium Gold",
    description: "Luxury gold theme for premium brands",
    config: {
      ...defaultTheme,
      name: "Luxe & Co",
      primaryColor: "#d4b106",
      secondaryColor: "#fffbe6",
      accentColor: "#fa8c16",
      backgroundColor: "#fefefe",
      textColor: "#434343",
    },
  },
];
