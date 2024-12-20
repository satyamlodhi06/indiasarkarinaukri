/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'skyblue':'#5EB5D3',
        'darkbule':'#172F5F',
        'text-color':'#ffffff',
        'link-color':'#0800EE',
        'border-color':'#A9DBED'
        
      },
      fontFamily:{
        'montserrat':'Montserrat',
        'poppin':'Poppins',
      },
      boxShadow:{
        'custom': '0 1px 15px #D7F5FF',
      },
      clipath:{
        arrow:'clip-path: polygon(100% 0%, 95% 50%, 100% 100%, 25% 100%, 19% 50%, 25% 0%)'
      }
    },
  },
  plugins: [],
}

