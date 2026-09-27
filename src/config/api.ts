export const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000').replace(/\/+$/, '');
export const API_URL = API_BASE + '/api/events';
export const imageUrl = (filename: string) => API_BASE + '/uploads/' + encodeURIComponent(filename);
