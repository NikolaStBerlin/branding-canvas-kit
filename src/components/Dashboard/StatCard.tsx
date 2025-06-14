
import React from 'react';
import { Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';

interface StatCardProps {
  title: string;
  value: number | string;
  prefix?: React.ReactNode;
  suffix?: string;
  trend?: 'up' | 'down';
  trendValue?: number;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  trend,
  trendValue,
  color,
}) => {
  const { brandConfig } = useTheme();

  const getTrendColor = () => {
    if (trend === 'up') return '#52c41a';
    if (trend === 'down') return '#ff4d4f';
    return brandConfig.textColor;
  };

  const getTrendIcon = () => {
    if (trend === 'up') return <ArrowUpOutlined />;
    if (trend === 'down') return <ArrowDownOutlined />;
    return null;
  };

  return (
    <Card
      bordered={false}
      className="hover:shadow-lg transition-shadow duration-300"
      style={{
        background: `linear-gradient(135deg, ${color || brandConfig.primaryColor}15 0%, ${color || brandConfig.accentColor}15 100%)`,
        borderRadius: brandConfig.borderRadius,
        border: `1px solid ${brandConfig.secondaryColor}`,
      }}
    >
      <Statistic
        title={title}
        value={value}
        prefix={prefix}
        suffix={suffix}
        valueStyle={{
          color: color || brandConfig.primaryColor,
          fontFamily: brandConfig.fontFamily,
          fontWeight: 'bold',
        }}
      />
      {trend && trendValue && (
        <div style={{ 
          color: getTrendColor(),
          fontSize: '14px',
          marginTop: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          {getTrendIcon()}
          <span>{trendValue}% from last month</span>
        </div>
      )}
    </Card>
  );
};

export default StatCard;
