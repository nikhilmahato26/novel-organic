/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1B4332',
        olive: '#2D6A4F',
        champagne: '#D4AF37',
        beige: '#F5F1E8',
        cream: '#FAF8F3',
        stone: '#6B7280',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 30px 60px -15px rgba(27, 67, 50, 0.25)',
        glow: '0 0 40px rgba(212, 175, 55, 0.25)',
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(135deg, #D4AF37 0%, #f3e3a3 50%, #D4AF37 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
