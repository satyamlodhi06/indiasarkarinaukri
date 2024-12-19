/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'skyblue':'#5EB5D3',
        'darkbule':'#172F5F',
        'text-color':'#ffffff',
        
      },
      fontFamily:{
        'montserrat':'Montserrat',
        'poppin':'Poppins',
      },
      boxShadow:{
        'custom': '0 1px 15px #D7F5FF',
      }
    },
  },
  plugins: [],
}

