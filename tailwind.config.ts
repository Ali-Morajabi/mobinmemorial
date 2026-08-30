import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9e7',
          100: '#f9efc3',
          200: '#f4e09a',
          300: '#eecf6c',
          400: '#e8bc44',
          500: '#d4a520',
          600: '#b8891a',
          700: '#946b18',
          800: '#7a561a',
          900: '#67471b',
        },
        navy: {
          50: '#eef3ff',
          100: '#dae4ff',
          200: '#bdcfff',
          300: '#90b0ff',
          400: '#5b85ff',
          500: '#3559fc',
          600: '#1e36f1',
          700: '#1724de',
          800: '#1920b4',
          900: '#0c1052',
          950: '#070a33',
        },
        turquoise: {
          50: '#effefb',
          100: '#c7fff4',
          200: '#90ffe9',
          300: '#4ffbd8',
          400: '#1ae4c2',
          500: '#00c8a8',
          600: '#00a18b',
          700: '#058071',
          800: '#0a655b',
          900: '#0d544c',
        },
        beige: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ede4d4',
          300: '#e0d2b8',
          400: '#d1bb97',
          500: '#c5a77d',
          600: '#b8946a',
          700: '#9a7a58',
          800: '#7d644a',
          900: '#67533f',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#3d3d3d',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        persian: ['Vazirmatn', 'Tahoma', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'rotate-slow': 'rotateSlow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 165, 32, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 165, 32, 0.6)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, -10px) rotate(5deg)' },
          '50%': { transform: 'translate(-5px, -20px) rotate(-3deg)' },
          '75%': { transform: 'translate(-10px, -5px) rotate(2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
