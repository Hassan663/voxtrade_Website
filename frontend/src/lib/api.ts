import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        // window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post('/auth/register', data),
  
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  
  forgotPassword: (email: string) =>
    api.post('/auth/forgot-password', { email }),
  
  resetPassword: (token: string, password: string) =>
    api.post(`/auth/reset-password/${token}`, { password }),
  
  verifyEmail: (token: string) =>
    api.get(`/auth/verify-email/${token}`),
};

// User API
export const userAPI = {
  getProfile: () => api.get('/users/me'),
  
  updateProfile: (data: { name?: string; email?: string }) =>
    api.put('/users/me', data),
  
  changePassword: (data: { currentPassword: string; newPassword: string }) =>
    api.put('/users/change-password', data),
  
  deleteAccount: () => api.delete('/users/me'),
};

// Newsletter API
export const newsletterAPI = {
  subscribe: (data: { email: string; name?: string }) =>
    api.post('/newsletter/subscribe', data),
  
  unsubscribe: (email: string) =>
    api.post('/newsletter/unsubscribe', { email }),
  
  confirmSubscription: (token: string) =>
    api.get(`/newsletter/confirm/${token}`),
};

// Contact API
export const contactAPI = {
  submit: (data: { name: string; email: string; subject: string; message: string }) =>
    api.post('/contact', data),
};

// Subscription API
export const subscriptionAPI = {
  createCheckoutSession: (data: { priceId: string; promoCode?: string }) =>
    api.post('/subscription/create-checkout-session', data),
  
  getStatus: () => api.get('/subscription/status'),
  
  cancel: () => api.post('/subscription/cancel'),
  
  applyPromoCode: (promoCode: string) =>
    api.post('/subscription/apply-promo', { promoCode }),
};

export default api;
