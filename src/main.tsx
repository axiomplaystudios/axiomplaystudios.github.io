import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

const THEME_STORAGE_KEY = 'axiomplay-theme';
const FALLBACK_REDIRECT_PATH = '/';

const sanitizeRedirectPath = (redirect: string): string | null => {
  const candidate = redirect.trim();

  if (!candidate.startsWith('/') || candidate.startsWith('//')) {
    return null;
  }

  if (/[\u0000-\u001F\u007F]/.test(candidate)) {
    return null;
  }

  try {
    const url = new URL(candidate, window.location.origin);
    if (url.origin !== window.location.origin) {
      return null;
    }

    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return null;
  }
};

try {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  const theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
} catch {
  document.documentElement.setAttribute('data-theme', 'dark');
}

const redirect = new URLSearchParams(window.location.search).get('redirect');
if (redirect) {
  const safeRedirect = sanitizeRedirectPath(redirect);
  const destination = safeRedirect ?? FALLBACK_REDIRECT_PATH;

  try {
    window.history.replaceState(null, '', destination);
  } catch {
    window.history.replaceState(null, '', FALLBACK_REDIRECT_PATH);
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
