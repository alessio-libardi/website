module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#fafafa',
          dark: '#101010'
        }
      },
      animation: {
        wave: 'wave 2s infinite 1.5s'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate( 0.0deg)' },
          '100%': { transform: 'rotate( 0.0deg)' }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
