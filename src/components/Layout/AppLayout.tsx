
import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Header from './Header';
import Sidebar from './Sidebar';
import ThemeCustomizer from '../ThemeCustomizer/ThemeCustomizer';
import DashboardContent from '../Dashboard/DashboardContent';
import { useTheme } from '../../contexts/ThemeContext';

const { Content } = Layout;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState('dashboard');
  const [themeCustomizerOpen, setThemeCustomizerOpen] = useState(false);
  const { brandConfig } = useTheme();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuSelect = (key: string) => {
    setSelectedMenuKey(key);
  };

  const renderContent = () => {
    switch (selectedMenuKey) {
      case 'dashboard':
        return <DashboardContent />;
      case 'analytics':
        return (
          <div className="p-6 text-center">
            <h2 style={{ fontFamily: brandConfig.fontFamily }}>Analytics Page</h2>
            <p>Analytics content would go here...</p>
          </div>
        );
      case 'users':
        return (
          <div className="p-6 text-center">
            <h2 style={{ fontFamily: brandConfig.fontFamily }}>Users Page</h2>
            <p>User management content would go here...</p>
          </div>
        );
      default:
        return (
          <div className="p-6 text-center">
            <h2 style={{ fontFamily: brandConfig.fontFamily }}>{selectedMenuKey.charAt(0).toUpperCase() + selectedMenuKey.slice(1)} Page</h2>
            <p>Content for {selectedMenuKey} would go here...</p>
          </div>
        );
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header onThemeToggle={() => setThemeCustomizerOpen(true)} />
      
      <Layout>
        <Sidebar
          collapsed={collapsed}
          selectedKey={selectedMenuKey}
          onMenuSelect={handleMenuSelect}
        />
        
        <Layout style={{ marginLeft: collapsed ? 80 : brandConfig.sidebarWidth }}>
          <div 
            className="collapse-trigger"
            style={{
              position: 'fixed',
              top: brandConfig.headerHeight + 16,
              left: collapsed ? 90 : brandConfig.sidebarWidth + 10,
              zIndex: 1000,
              background: brandConfig.primaryColor,
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
            }}
            onClick={toggleCollapsed}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>

          <Content
            style={{
              margin: '16px',
              padding: 0,
              background: brandConfig.backgroundColor,
              borderRadius: brandConfig.borderRadius,
              minHeight: `calc(100vh - ${brandConfig.headerHeight + 32}px)`,
              transition: 'margin-left 0.3s ease',
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>

      <ThemeCustomizer
        open={themeCustomizerOpen}
        onClose={() => setThemeCustomizerOpen(false)}
      />
    </Layout>
  );
};

export default AppLayout;
