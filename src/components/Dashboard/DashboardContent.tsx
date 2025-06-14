import React from 'react';
import { Row, Col, Card, Table, Tag, Progress, Space, Button } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  BarChartOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import StatCard from './StatCard';

const DashboardContent: React.FC = () => {
  const tableData = [
    {
      key: '1',
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      role: 'Admin',
      lastLogin: '2024-01-15',
    },
    {
      key: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'inactive',
      role: 'User',
      lastLogin: '2024-01-10',
    },
    {
      key: '3',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'active',
      role: 'Manager',
      lastLogin: '2024-01-14',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Last Login',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button type="text" icon={<EyeOutlined />} size="small" />
          <Button type="text" icon={<EditOutlined />} size="small" />
          <Button type="text" icon={<DeleteOutlined />} size="small" danger />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Statistics Cards */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Total Users"
            value={1234}
            prefix={<UserOutlined />}
            trend="up"
            trendValue={12}
            color="var(--brand-primary)"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Sales"
            value={5678}
            prefix={<ShoppingCartOutlined />}
            trend="up"
            trendValue={8}
            color="var(--brand-accent)"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Revenue"
            value={98765}
            prefix={<DollarOutlined />}
            suffix="$"
            trend="down"
            trendValue={3}
            color="#52c41a"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Analytics"
            value={4321}
            prefix={<BarChartOutlined />}
            trend="up"
            trendValue={15}
            color="#722ed1"
          />
        </Col>
      </Row>

      {/* Progress Cards */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card
            title="Project Progress"
            bordered={false}
            className="hover:shadow-lg transition-shadow duration-300"
            style={{ borderRadius: 'var(--brand-radius)' }}
          >
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Website Redesign</span>
                  <span>75%</span>
                </div>
                <Progress percent={75} strokeColor="var(--brand-primary)" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Mobile App</span>
                  <span>60%</span>
                </div>
                <Progress percent={60} strokeColor="var(--brand-accent)" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>API Development</span>
                  <span>90%</span>
                </div>
                <Progress percent={90} strokeColor="#52c41a" />
              </div>
            </div>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card
            title="Recent Activity"
            bordered={false}
            className="hover:shadow-lg transition-shadow duration-300"
            style={{ borderRadius: 'var(--brand-radius)' }}
          >
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'var(--brand-primary)' }}
                />
                <span>New user registered</span>
                <span className="text-gray-500 text-sm">2 min ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'var(--brand-accent)' }}
                />
                <span>Order completed</span>
                <span className="text-gray-500 text-sm">5 min ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span>Payment received</span>
                <span className="text-gray-500 text-sm">10 min ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span>Report generated</span>
                <span className="text-gray-500 text-sm">15 min ago</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Data Table */}
      <Card
        title="User Management"
        bordered={false}
        className="hover:shadow-lg transition-shadow duration-300"
        style={{ borderRadius: 'var(--brand-radius)' }}
        extra={
          <Button type="primary" style={{ background: 'var(--brand-primary)' }}>
            Add User
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={false}
          className="custom-table"
        />
      </Card>
    </div>
  );
};

export default DashboardContent;
