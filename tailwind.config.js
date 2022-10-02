module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#5b451c',
        secondary: '#f3ebe3',
        tertiary: '#a3968c',
      }
    },
    fontFamily: {
      'body': [
        'Inter',
      ],
    },
  },
  plugins: [],
}
