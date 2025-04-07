// File: tailwind.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#6366f1',
        background: '#f9fafb',
        card: '#ffffff',
        textPrimary: '#111827',
        textSecondary: '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
});
