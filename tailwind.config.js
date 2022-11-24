/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'special': '1030px',
  
      'specialTwo': '1000px',
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
  
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        facebook: "#385785",
        link : "#00376b",
        primary: "#27c4f5",
        border: "rgba(219,219,219)",
        primary_button: "#0095F6",
        popular: "#FAFAFA"
      },
      backgroundImage: {
        'hero': "url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')",
      }
    },
  },
  plugins: [],
}
