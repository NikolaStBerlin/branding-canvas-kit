
import React from 'react';
import { Select } from 'antd';
import { useTheme } from '../../contexts/ThemeContext';
import { themePresets } from '../../types/theme';

const { Option } = Select;

const QuickThemeToggle: React.FC = () => {
  const { brandConfig, setBrandConfig } = useTheme();

  const handleThemeChange = (presetId: string) => {
    const preset = themePresets.find(p => p.id === presetId);
    if (preset) {
      setBrandConfig(preset.config);
    }
  };

  const getCurrentPresetId = () => {
    const currentPreset = themePresets.find(preset => 
      preset.config.primaryColor === brandConfig.primaryColor &&
      preset.config.name === brandConfig.name
    );
    return currentPreset?.id || 'custom';
  };

  return (
    <Select
      value={getCurrentPresetId()}
      onChange={handleThemeChange}
      style={{ width: 160 }}
      size="small"
      className="text-white"
      dropdownStyle={{ zIndex: 9999 }}
    >
      {themePresets.map(preset => (
        <Option key={preset.id} value={preset.id}>
          {preset.name}
        </Option>
      ))}
    </Select>
  );
};

export default QuickThemeToggle;
