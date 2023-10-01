/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main1: '	hsl(208, 100%, 31%)',
        main2: 'hsl(207,70%,65%)',
        main3: 'hsl(207,70%,88%)',
        dark1: 'hsl(227,2%,12%)',
        dark2: 'hsl(227,2%,50%)',
        dark3: 'hsl(227,2%,72%)',
        dark4: 'hsl(227,2%,25%)',
        light1: 'hsl(0,0%,92%)',
        light2: 'hsl(0,0%,99%)',
        accent1: '	hsl(20, 77%, 72%)',
        accent2: 'hsl(42, 90%, 88%)',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
        shadow1: ' 0px 5px 15px rgba(0, 0, 0, 0.35) ',
        shadow2:
          '2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [],
};
