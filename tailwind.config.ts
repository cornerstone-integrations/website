import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F1B2D',
        charcoal: '#1E293B',
        slate: '#475569',
        'blue-accent': '#2563EB',
        'teal-accent': '#0EA5E9',
        amber: '#F59E0B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(15, 27, 45, 0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F1B2D 0%, #12253d 50%, #0E2137 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
