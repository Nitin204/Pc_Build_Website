// Product Type Constants - Must match backend enum exactly
export const PRODUCT_TYPES = {
  ACCESSORY: 'ACCESSORY',
  PCBUILD: 'PCBUILD', 
  PREBUILT: 'PREBUILT'
};

// API Base URL
export const API_BASE_URL = 'http://localhost:8181/api';

// User ID Helper
export const getUserId = () => localStorage.getItem('userId');