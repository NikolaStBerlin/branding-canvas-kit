
import React from 'react';
import { Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

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
  const getTrendColor = () => {
    if (trend === 'up') return '#52c41a';
    if (trend === 'down') return '#ff4d4f';
    return 'var(--brand-text)';
  };

  const getTrendIcon = () => {
    if (trend === 'up') return <ArrowUpOutlined />;
    if (trend === 'down') return <ArrowDownOutlined />;
    return null;
  };

  // Note color is still provided for specific status, but falls back to CSS var
  const cardMainColor = color || 'var(--brand-primary)';
  const cardAccentColor = color || 'var(--brand-accent)';
  const statValueColor = color || 'var(--brand-primary)';

  return (
    <Card
      bordered={false}
      className="hover:shadow-lg transition-shadow duration-300"
      style={{
        background: `linear-gradient(135deg, ${cardMainColor}15 0%, ${cardAccentColor}15 100%)`,
        borderRadius: 'var(--brand-radius)',
        border: '1px solid var(--brand-secondary)',
      }}
    >
      <Statistic
        title={title}
        value={value}
        prefix={prefix}
        suffix={suffix}
        valueStyle={{
          color: statValueColor,
          fontFamily: 'var(--brand-font)',
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
