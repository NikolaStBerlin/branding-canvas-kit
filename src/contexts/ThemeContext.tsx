import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ConfigProvider, theme } from 'antd';
import { BrandConfig, defaultTheme, themePresets } from '../types/theme';

interface ThemeContextType {
  brandConfig: BrandConfig;
  updateBrandConfig: (config: Partial<BrandConfig>) => void;
  setBrandConfig: (config: BrandConfig) => void;
  resetToDefault: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
  initialConfig?: BrandConfig;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialConfig = defaultTheme 
}) => {
  const [brandConfig, setBrandConfigState] = useState<BrandConfig>(initialConfig);

  const updateBrandConfig = (config: Partial<BrandConfig>) => {
    setBrandConfigState(prev => ({ ...prev, ...config }));
  };

  const setBrandConfig = (config: BrandConfig) => {
    setBrandConfigState(config);
  };

  const resetToDefault = () => {
    setBrandConfigState(defaultTheme);
  };

  // Apply CSS custom properties for dynamic styling
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', brandConfig.primaryColor);
    root.style.setProperty('--brand-secondary', brandConfig.secondaryColor);
    root.style.setProperty('--brand-accent', brandConfig.accentColor);
    root.style.setProperty('--brand-background', brandConfig.backgroundColor);
    root.style.setProperty('--brand-text', brandConfig.textColor);
    root.style.setProperty('--brand-radius', `${brandConfig.borderRadius}px`);
    root.style.setProperty('--brand-font', brandConfig.fontFamily);
    root.style.setProperty('--header-height', `${brandConfig.headerHeight}px`);
    root.style.setProperty('--sidebar-width', `${brandConfig.sidebarWidth}px`);
  }, [brandConfig]);

  const antdTheme = {
    token: {
      colorPrimary: brandConfig.primaryColor,
      colorBgContainer: brandConfig.backgroundColor,
      colorText: brandConfig.textColor,
      borderRadius: brandConfig.borderRadius,
      fontFamily: brandConfig.fontFamily,
    },
    algorithm: theme.defaultAlgorithm,
  };

  return (
    <ThemeContext.Provider value={{
      brandConfig,
      updateBrandConfig,
      setBrandConfig,
      resetToDefault,
    }}>
      <ConfigProvider theme={antdTheme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
