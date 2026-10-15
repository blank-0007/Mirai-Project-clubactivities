// Base URL of the shared Mirai API (same backend as the other portals). Never put secrets here.
// Resolves to injected binding URL (BACKEND_URL / VITE_BACKEND_URL), VITE_API_BASE_URL, or relative '/api' on same domain
export const API_BASE_URL: string = (
  (typeof process !== 'undefined' && process.env?.BACKEND_URL) ||
  (import.meta.env.VITE_BACKEND_URL as string | undefined) ||
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ||
  '/api'
).replace(/\/+$/, '');

// Per-portal token key, identical to the existing student portal (frontend/shared/auth/session.js).
export const TOKEN_KEY = 'mirai:student:token';
export const EXPECTED_ROLE = 'student';
