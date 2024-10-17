
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '400px',  // Custom breakpoint for screens below 400px
      },
      width: {
        'full-xsm': '100%',  // Full width for very small screens
      },
      lineHeight: {
        'xsm': '2rem',   // Line height for very small screens
      },
      backgroundImage: {
        'footer-bg': "url('/assets/images/footer.png')",
        'gradient-bottom': 'linear-gradient(180deg, #969696 0%, #FFF 100%)',
        'gradient-btn': 'linear-gradient(98.56deg, #2FAEF5 0%, #1140FF 100%)',
      },
      borderRadius: {
        '22px': '22px',
      },
      width: {
        '400': '400px',
        '500': '500px',
        '700': '700px',
      },
      height: {
        '133': '133px',
      },
      padding: {
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
      },
      boxShadow: {
        'gradient-bottom': '0px 4px 8px rgba(0, 0, 0, 0.2), inset 0px -2px 5px rgba(150, 150, 150, 0.2)',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
      },
      colors: {
        "sky-blue": "#EDF9FF",
        "dark-sky": "#00A3FF",
        "fade-blue": "#0D2A52",
        "light-sky": "#E1F4FF",
        "dark-black": "#000F1F",
        "border-sky": "#00A3FF33",
        "light-gray": "#E3E3E3",
        "bgwhite": "#FAFDFF",
        "inputErrBg": "#F8F3F4",
        blue: "#0F1C51",
        red: "#C9311A",
        white: "#FFFFFF",
        gray: "#969696",
        black: "#111111",
      },
      fontSize: {
        lg: ["var(--lg)"],
        h1: ["var(--h1)"],
        h2: ["var(--h2)"],
        h3: ["var(--h3)"],
        h4: ["var(--h4)"],
        h5: ["var(--h5)"],
        h6: ["var(--h6)"],
        sm: ["var(--sm)"],
        xs: ["var(--xs)"]
      },
      textDecorationColor: {
        "dark-sky": "#00A3FF",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
