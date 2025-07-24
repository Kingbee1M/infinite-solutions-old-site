import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5530",
        newAccent: "#FF482C",
        accent: "#2D2D2D",
        hover: "#ffddd6",
        contact: "#ffddd6",
        textColor: "#2D2D2D",
        secondary: "var(--secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "280px",
        sm: "320px",
        md: "540px",
        lg: "720px",
        xl: "1080px",
        },
        backgroundImage: {
          'card-pattern': "url('/assets/cardBack.png')",
         },
         backgroundPosition: {
          'bottom-right': '100% 100%',
          'top-right': '100% 0%',
        },

      width: {
          '10p': '10%',
          '20p': '20%',
          '30p': '30%',
          '45p': '45%',
          '55p': '55%',
          '150': '140px'

        },

        height: {
            '150': '130px'
        },

        scrollbar: {
          hide: {
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '&': {
              scrollbarWidth: 'none', /* Firefox */
            },
          },
        },

    },
  },
  plugins: [],
};
export default config;
