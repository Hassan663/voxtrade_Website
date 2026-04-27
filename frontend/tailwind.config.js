/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00FFC8',
          50: '#E5FFF9',
          100: '#CCFFF3',
          200: '#99FFE7',
          300: '#66FFDB',
          400: '#33FFCF',
          500: '#00FFC8',
          600: '#00CCA0',
          700: '#009978',
          800: '#006650',
          900: '#003328',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          50: '#F3EFFE',
          100: '#E9E0FD',
          200: '#D3C2FB',
          300: '#BDA3F9',
          400: '#A685F7',
          500: '#8B5CF6',
          600: '#6D34F2',
          700: '#5018D3',
          800: '#3B11A0',
          900: '#1E0850',
        },
        accent: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          cyan: '#00FFC8',
        },
        dark: {
          DEFAULT: '#000000',
          50: '#1A1A1A',
          100: '#0D0D0D',
          200: '#111111',
          300: '#151515',
          400: '#1A1A1A',
          500: '#222222',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'super': '-0.06em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh': 'radial-gradient(at 0% 0%, rgba(0,255,200,0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(139,92,246,0.15) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(59,130,246,0.1) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'blob': 'blob 14s ease-in-out infinite',
        'blob-reverse': 'blob 18s ease-in-out infinite reverse',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'tilt': 'tilt 10s infinite linear',
        'border-flow': 'border-flow 4s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 200, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 255, 200, 0.6)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(0, 255, 200, 0.3), 0 0 60px rgba(139, 92, 246, 0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(0, 255, 200, 0.5), 0 0 100px rgba(139, 92, 246, 0.3)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(60px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.9)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
        'border-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
