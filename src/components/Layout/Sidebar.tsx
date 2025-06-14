
import React from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  BarChartOutlined,
  SettingOutlined,
  TeamOutlined,
  FileTextOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
  selectedKey: string;
  onMenuSelect: (key: string) => void;
}

type MenuItem = Required<MenuProps>['items'][number];

const Sidebar: React.FC<SidebarProps> = ({ collapsed, selectedKey, onMenuSelect }) => {
  // Don't need brandConfig for styles now, everything is via CSS vars
  // const { brandConfig } = useTheme();

  const menuItems: MenuItem[] = [
    {
      key: 'dashboard',
      icon: <HomeOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'analytics',
      icon: <BarChartOutlined />,
      label: 'Analytics',
    },
    {
      key: 'users',
      icon: <TeamOutlined />,
      label: 'Users',
    },
    {
      key: 'products',
      icon: <ShoppingCartOutlined />,
      label: 'Products',
    },
    {
      key: 'reports',
      icon: <FileTextOutlined />,
      label: 'Reports',
    },
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
  ];

  return (
    <Sider
      collapsed={collapsed}
      width="var(--sidebar-width)"
      style={{
        background: 'var(--brand-background)',
        borderRight: '1px solid var(--brand-secondary)',
        boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
      }}
      className="sidebar-custom"
    >
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        style={{
          height: '100%',
          borderRight: 0,
          background: 'transparent',
          fontFamily: 'var(--brand-font)',
          color: 'var(--brand-text)',
        }}
        onClick={({ key }) => onMenuSelect(key)}
        items={menuItems}
        theme="light"
      />
    </Sider>
  );
};

export default Sidebar;
