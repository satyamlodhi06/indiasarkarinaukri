/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './latest_jobs.html', './state-wise-job.html', './all-government-job.html', './admit-panel.html' ],
  theme: {
    extend: {
      colors:{
        'skyblue':'#5EB5D3',
        'darkbule':'#172F5F',
        'text-color':'#ffffff',
        'link-color':'#0800EE',
        'border-color':'#A9DBED',
        'dark-skyblue':'#4682B4',
        'dark-skybule2':'#2C598E',
        'skyblue2': '#409CBC',
      },
      fontFamily:{
        'montserrat':'Montserrat',
        'poppin':'Poppins',
      },
      boxShadow:{
        'custom': '0 1px 15px #D7F5FF',
        'custom2': '0 3px 8px #4F6FB0',
        'customm3':'0 0px 6px #9ADDF4'
      },
      fontSize:{
        'icon-size': '8px'
      }
      
    },
  },
  plugins: [
  
  ],
}

