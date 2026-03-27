// Application configuration
export const config = {
  // App Info
  app: {
    name: 'Crew Management System',
    version: '1.0.0',
    description: 'Maritime crew management and operations system',
  },
  
  // UI Configuration
  ui: {
    theme: {
      primary: '#1e3c72',
      secondary: '#2a5298',
      accent: '#667eea',
      success: '#28a745',
      warning: '#ffc107',
      danger: '#dc3545',
      light: '#f8f9fa',
      dark: '#343a40',
    },
    layout: {
      sidebarWidth: 250,
      navbarHeight: 70,
      footerHeight: 60,
    },
  },
  
  // API Configuration
  api: {
    baseUrl: process.env.REACT_APP_API_URL || null,
    timeout: 10000,
    retryAttempts: 3,
    headers: {
      'Content-Type': 'application/json',
    },
  },
  
  // Pagination
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [5, 10, 25, 50],
  },
  
  // File Upload
  upload: {
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowedFileTypes: ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'],
  },
  
  // Date Formats
  dateFormats: {
    display: 'MMM dd, yyyy',
    api: 'yyyy-MM-dd',
    dateTime: 'MMM dd, yyyy HH:mm',
  },
};

export default config;
