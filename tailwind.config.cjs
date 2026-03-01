/** @type {import('tailwindcss').Config} */
// Hexfn Limited — Light Premium Eco aesthetic. Apple-level cleanliness, soft gradients, 2xl radius.
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        hexfn: {
          bg: '#F7F9F8',
          'bg-warm': '#F0F4F2',
          'bg-card': '#FFFFFF',
          green: '#2E7D5B',
          'green-light': '#A8D5BA',
          'green-muted': 'rgba(46, 125, 91, 0.12)',
          navy: '#0E2540',
          'navy-muted': 'rgba(14, 37, 64, 0.7)',
          text: '#5F6B6B',
          'text-muted': '#8A9595',
          cta: '#FF6B35',
          'cta-hover': '#E85A28',
          'cta-muted': 'rgba(255, 107, 53, 0.12)',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 5vw + 1rem, 4rem)', { lineHeight: '1.1' }],
        'display-lg': ['clamp(3rem, 6vw + 1rem, 5rem)', { lineHeight: '1.05' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        section: 'clamp(4rem, 10vw, 8rem)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(14, 37, 64, 0.06)',
        elevated: '0 24px 48px -12px rgba(14, 37, 64, 0.12)',
        card: '0 2px 16px rgba(14, 37, 64, 0.04)',
        'card-hover': '0 20px 40px -12px rgba(14, 37, 64, 0.1)',
        'cta-glow': '0 4px 28px rgba(255, 107, 53, 0.35)',
        'green-glow': '0 4px 24px rgba(46, 125, 91, 0.2)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        smooth: '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        blob: 'blob 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -3%) scale(1.02)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.98)' },
        },
      },
      backgroundImage: {
        'gradient-eco': 'linear-gradient(135deg, #F7F9F8 0%, #E8F0EC 50%, #F0F4F2 100%)',
        'gradient-mesh':
          'radial-gradient(at 40% 20%, rgba(168, 213, 186, 0.25) 0%, transparent 50%), radial-gradient(at 80% 80%, rgba(46, 125, 91, 0.08) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
};
