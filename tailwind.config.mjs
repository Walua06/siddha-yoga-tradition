/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sacred-ivory': '#FFF8F0',
        'lotus-pink': '#F3B3A6',
        'himalayan-sky': '#C3DDFD',
        'deep-charcoal': '#333333',
        'saffron-light': '#F4C430',
        'lotus-coral': '#E37A68',
        'misty-ash': '#E0E0E0',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'great-vibes': ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        'soft-glow': '0 0 15px rgba(255, 248, 240, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}