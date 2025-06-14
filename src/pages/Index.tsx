
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import AppLayout from '../components/Layout/AppLayout';

const Index = () => {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
};

export default Index;
