import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bellagent: {
          purple: '#602CFB',
          'purple-light': '#7150FF',
          dark: '#293056',
          'dark-alt': '#28335A',
          lavender: '#F2F2FF',
          'lavender-mid': '#E9E7FF',
          'lavender-border': '#D6D3FF',
        },
        'brand-25': 'var(--brand-25)',
        'brand-50': 'var(--brand-50)',
        'brand-600': 'var(--brand-600)',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-bellagent': 'linear-gradient(90deg, #3B82F6 0%, #602CFB 50%, #7C3AED 100%)',
        'gradient-hero': 'linear-gradient(135deg, #E9E7FF 0%, #F2F2FF 50%, #FAFAFA 100%)',
      },
      spacing: {
        '15': '3.75rem',
        '30': '7.5rem',
        '74': '18.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
