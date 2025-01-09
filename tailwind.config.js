/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './latest_jobs.html', './state-wise-job.html', './all-government-job.html', './admin-panel.html', './link-click-page.html', './privacy-policy.html'],
  theme: {
    extend: {
      colors:{
        skyblue:'#5EB5D3',
        darkbule:'#172F5F',
        textColor:'#ffffff',
        linkcolor:'#0800EE',
        borderColor:'#A9DBED',
        darkSkyblue:'#4682B4',
        darkSkybule2:'#2C598E',
        skyblue2: '#409CBC',
        purple:'#ff0000',
      },
      fontFamily:{
        montserrat: 'Montserrat',
        poppin: 'Poppins',
      },
      boxShadow:{
        custom: '0 1px 15px #D7F5FF',
        custom2: '0 3px 8px #4F6FB0',
        customm3:'0 0px 6px #9ADDF4',
      },
      fontSize:{
        iconsize: '8px',
      }
      
    },
  },
  plugins: [
  
  ],
}

