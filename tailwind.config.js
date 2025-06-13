// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["font-['Noto_Sans_TC']"], // 若有 purge 問題
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Sans TC"', "sans-serif"],
      },
    },
  },
};
