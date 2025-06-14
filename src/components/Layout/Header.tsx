
import React from 'react';
import { Layout, Button, Space, Avatar, Dropdown, MenuProps } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined, BellOutlined } from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';
import QuickThemeToggle from './QuickThemeToggle';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  onThemeToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle }) => {
  const { brandConfig } = useTheme();

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      danger: true,
    },
  ];

  return (
    <AntHeader 
      className="header-custom"
      style={{
        background: `linear-gradient(135deg, ${brandConfig.primaryColor} 0%, ${brandConfig.accentColor} 100%)`,
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        height: brandConfig.headerHeight,
      }}
    >
      <div className="flex items-center space-x-4">
        <div 
          className="text-white font-bold text-xl"
          style={{ fontFamily: brandConfig.fontFamily }}
        >
          {brandConfig.name}
        </div>
      </div>

      <Space>
        <QuickThemeToggle />
        
        <Button 
          type="text" 
          icon={<BellOutlined />} 
          className="text-white hover:bg-white/20"
          size="large"
        />
        
        {onThemeToggle && (
          <Button 
            type="text" 
            onClick={onThemeToggle}
            className="text-white hover:bg-white/20"
            size="large"
          >
            Customize Theme
          </Button>
        )}

        <Dropdown 
          menu={{ items: userMenuItems }} 
          placement="bottomRight"
          trigger={['click']}
        >
          <Avatar 
            icon={<UserOutlined />} 
            className="cursor-pointer hover:scale-110 transition-transform"
            style={{ backgroundColor: brandConfig.accentColor }}
          />
        </Dropdown>
      </Space>
    </AntHeader>
  );
};

export default Header;
