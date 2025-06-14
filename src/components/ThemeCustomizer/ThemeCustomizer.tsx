
import React from 'react';
import { 
  Drawer, 
  Form, 
  Input, 
  ColorPicker, 
  Slider, 
  Select, 
  Button, 
  Space, 
  Divider,
  Card,
  Row,
  Col,
  Typography 
} from 'antd';
import { useTheme } from '../../contexts/ThemeContext';
import { themePresets } from '../../types/theme';

const { Title, Text } = Typography;
const { Option } = Select;

interface ThemeCustomizerProps {
  open: boolean;
  onClose: () => void;
}

const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ open, onClose }) => {
  const { brandConfig, updateBrandConfig, setBrandConfig, resetToDefault } = useTheme();
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue(brandConfig);
  }, [brandConfig, form]);

  const handleFormChange = (changedFields: any, allFields: any) => {
    const updates = changedFields.reduce((acc: any, field: any) => {
      acc[field.name[0]] = field.value;
      return acc;
    }, {});
    updateBrandConfig(updates);
  };

  const applyPreset = (presetId: string) => {
    const preset = themePresets.find(p => p.id === presetId);
    if (preset) {
      setBrandConfig(preset.config);
    }
  };

  return (
    <Drawer
      title="Theme Customizer"
      placement="right"
      width={400}
      onClose={onClose}
      open={open}
      extra={
        <Space>
          <Button onClick={resetToDefault}>Reset</Button>
          <Button type="primary" onClick={onClose}>Done</Button>
        </Space>
      }
    >
      <div className="space-y-6">
        {/* Theme Presets */}
        <div>
          <Title level={5}>Quick Presets</Title>
          <Row gutter={[8, 8]}>
            {themePresets.map((preset) => (
              <Col span={12} key={preset.id}>
                <Card
                  hoverable
                  size="small"
                  onClick={() => applyPreset(preset.id)}
                  style={{
                    background: `linear-gradient(135deg, ${preset.config.primaryColor} 0%, ${preset.config.accentColor} 100%)`,
                    color: 'white',
                    border: 'none',
                  }}
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm">{preset.name}</div>
                    <div className="text-xs opacity-90">{preset.description}</div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <Divider />

        {/* Custom Configuration */}
        <Form
          form={form}
          layout="vertical"
          onFieldsChange={handleFormChange}
          initialValues={brandConfig}
        >
          <Form.Item label="Brand Name" name="name">
            <Input placeholder="Enter brand name" />
          </Form.Item>

          <Form.Item label="Primary Color" name="primaryColor">
            <ColorPicker showText />
          </Form.Item>

          <Form.Item label="Secondary Color" name="secondaryColor">
            <ColorPicker showText />
          </Form.Item>

          <Form.Item label="Accent Color" name="accentColor">
            <ColorPicker showText />
          </Form.Item>

          <Form.Item label="Background Color" name="backgroundColor">
            <ColorPicker showText />
          </Form.Item>

          <Form.Item label="Text Color" name="textColor">
            <ColorPicker showText />
          </Form.Item>

          <Form.Item label="Font Family" name="fontFamily">
            <Select>
              <Option value="'Inter', sans-serif">Inter</Option>
              <Option value="'Roboto', sans-serif">Roboto</Option>
              <Option value="'Open Sans', sans-serif">Open Sans</Option>
              <Option value="'Poppins', sans-serif">Poppins</Option>
              <Option value="'Lato', sans-serif">Lato</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Border Radius" name="borderRadius">
            <Slider min={0} max={20} />
          </Form.Item>

          <Form.Item label="Header Height" name="headerHeight">
            <Slider min={48} max={80} />
          </Form.Item>

          <Form.Item label="Sidebar Width" name="sidebarWidth">
            <Slider min={200} max={320} />
          </Form.Item>
        </Form>
      </div>
    </Drawer>
  );
};

export default ThemeCustomizer;
