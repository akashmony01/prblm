module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#152251',
        darkPrimary: '#9B0F0D',
        secondery: '#D72B27',
        textColor: '#161A1D',
        textLight: '#8E94A8',
      },
      fontFamily: {
        gtWalsheimLight: ['gt-walsheim-light'],
        gtWalsheimRegular: ['gt-walsheim-regular'],
        gtWalsheimMedium: ['gt-walsheim-medium'],
        gtWalsheimBold: ['gt-walsheim-bold'],
      },
      filter: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
