// Application constants
export const APP_NAME = 'Crew Management System';
export const APP_VERSION = '1.0.0';

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || null,
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// Routes
export const ROUTES = {
  LOGIN: '/',
  DASHBOARD: '/dashboard',
  CREW: '/crew',
  VESSELS: '/vessels',
  ASSIGNMENTS: '/assignments',
  DOCUMENTS: '/documents',
  REPORTS: '/reports',
  ADMIN: '/admin',
};

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  CREW: 'crew',
};

// Status Options
export const STATUS = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  ON_LEAVE: 'On Leave',
  PENDING: 'Pending',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};

// Vessel Status
export const VESSEL_STATUS = {
  AT_SEA: 'At Sea',
  IN_PORT: 'In Port',
  UNDER_MAINTENANCE: 'Under Maintenance',
};

// Document Types
export const DOCUMENT_TYPES = {
  MEDICAL_CERTIFICATE: 'Medical Certificate',
  STCW_CERTIFICATE: 'STCW Certificate',
  PASSPORT: 'Passport',
  SEAMAN_BOOK: 'Seaman Book',
  CONTRACT: 'Contract',
};
