/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#000000",
        secondary: "#14171A",
        bgcontact: "#061116",
        contactbg: "#E1E8ED",
        footerbg: "#060E14",
        spantext: "#4DBEE6",
        lightmode: "#f0f0f0",
      },
      backgroundImage: {
        projectmainbg: " linear-gradient(181deg, #09151d, #061116, #000);",
        testmonila: "linear-gradient(0deg, #000000, #07131b)",
        homebg: "linear-gradient(197deg, #010101 0%, #040c0f 100%);",
        feature:
          "linear-gradient(175deg, rgb(8 19 30), rgb(6 10 18), #05070d);",
        testimonialcard:
          "linear-gradient(216deg, rgb(14 35 47) 0%, rgb(12 22 25) 96.57%)",
        projectbg: "linear-gradient(217deg, #14202b, #07101a);",
        feturelg: "linear-gradient(60deg, #ecf9ff 30%, #08a3da54 71%)",
        homebglight: " linear-gradient(60deg, #f0f0f0 30%, #f0f0f0 71%)",
        lightbg: " linear-gradient(60deg, #f0f0f0 30%, #f0f0f0 71%)",
      },
    },
    animation: {
      rotate: "rotate 10s linear infinite",
    },
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0deg) scale(10)" },
        "100%": { transform: "rotate(-360deg) scale(10)" },
      },
    },
  },
  plugins: [],
};
