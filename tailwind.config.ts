import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        accent: 'var(--color-accent)',
        'accent-foreground': 'var(--color-accent-foreground)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        border: 'var(--color-border)',
        ring: 'var(--color-ring)',
        destructive: 'var(--color-destructive)',
        card: 'var(--color-card)',
        'card-foreground': 'var(--color-card-foreground)',
      },
      fontFamily: {
        heading: 'Cormorant Garamond, serif',
        body: 'Lato, sans-serif',
      },
    },
  },
  plugins: [],
};

export default config;
