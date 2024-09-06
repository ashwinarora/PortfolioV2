/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#000000", // Example primary color for text
        secondary: "#14171A", // Example secondary color for text
        bgcontact: "#061116", // Background primary
        contactbg: "#E1E8ED", // Background secondary
        footerbg: "#060E14", // Accent color
      },
    },
  },
  plugins: [],
};
