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
        projectmainbg: " linear-gradient(1deg, #0a1527 80%, #0a1622 0%);",
        testmonila: "linear-gradient(1deg, #080404 56.92%, rgb(13 46 53) 100%)",
        homebg: "linear-gradient(197deg, #010101 0%, #040c0f 100%);",
        feature: "linear-gradient(195deg, rgb(8 21 32) 0%, rgb(5 10 19) 50%);",
        testimonialcard:
          "linear-gradient(216deg, rgb(14 35 47) 0%, rgb(12 22 25) 96.57%)",
        projectbg: "linear-gradient(#0a1622 15%, #0a1527 15%);",
        feturelg: "linear-gradient(60deg, #ecf9ff 30%, #08a3da54 71%)",
      },
    },
  },
  plugins: [],
};
