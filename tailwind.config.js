/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './latest_jobs.html'],
  theme: {
    extend: {
      colors:{
        'skyblue':'#5EB5D3',
        'darkbule':'#172F5F',
        'text-color':'#ffffff',
        'link-color':'#0800EE',
        'border-color':'#A9DBED',
      },
      fontFamily:{
        'montserrat':'Montserrat',
        'poppin':'Poppins',
      },
      boxShadow:{
        'custom': '0 1px 15px #D7F5FF',
      },
      fontSize:{
        'icon-size': '8px'
      }
      
    },
  },
  plugins: [],
}

