/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },

      backgroundImage: {
        whitehb: " url('src/assets/images/lightbg.png') ",
        darkhb: " url('src/assets/images/darkbg.png') ",
        circle: "url('src/assets/images/homecircle.png')",
        servicebgdark: "url('src/assets/images/servicebgdark.png')",
        servicebglight: "url('src/assets/images/servicebglight.jpg')",
        footerbgdark: " url('src/assets/images/footerbbg.png') ",
        footerbglight: " url('src/assets/images/footerlbg.jpg') ",
        blogpagelight: " url('src/assets/images/blogbgw.png') ",
        blogpagedark: " url('src/assets/images/blogbgb.png') ",
        blackbg: " url('src/assets/images/awardprojectdbg.png') ",
        lightbg: " url('src/assets/images/awardprojectdlbg.jpg') ",
        productbg: " url('src/assets/images/productbg.png') ",
      },
    },

    fontFamily: {
      blackerdisplay: ["Blacker Display Regular"],
      blackerdisplaybold: ["Blacker Display ExtraBold"],
      syne: ["Syne"],
      blackertext: ["Blacker Text"],
      prata: ["Prata"],
      Inter: ["Inter"],
      LondrinaOutline: ["Londrina Outline"],
      Poppins: ["Poppins"],
      sansserif: ["sans-serif"],
      futura: ["Futura Std"],
      bodoni72: ["Bodoni"],
    },
  },
  plugins: [],
  screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
};
