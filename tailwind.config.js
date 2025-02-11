/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '21': '5.25rem',  // Yaklaşık 84px
        '22': '5.5rem',   // Yaklaşık 88px
        '23': '5.75rem',  // Yaklaşık 92px
        '24': '6rem',     // Yaklaşık 96px
        '25': '6.25rem',  // Yaklaşık 100px
        '26': '6.5rem',   // Yaklaşık 104px
        '27': '6.75rem',  // Yaklaşık 108px
        '28': '7rem',     // Yaklaşık 112px
        '29': '7.25rem',  // Yaklaşık 116px
        '30': '7.5rem',   // Yaklaşık 120px
      },
      fontFamily: {
        segouie: ['SegoeUI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
