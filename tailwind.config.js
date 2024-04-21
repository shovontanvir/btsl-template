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
        whitehb: " url('/images/lightbg.png') ",
        darkhb: " url('/images/darkbg.png') ",
        circle: "url('/images/homecircle.png')",
        servicebgdark: "url('/images/servicebgdark.png')",
        servicebglight: "url('/images/servicebglight.jpg')",
        footerbgdark: " url('/images/footerbbg.png') ",
        footerbglight: " url('/images/footerlbg.jpg') ",
        blogpagelight: " url('/images/blogbgw.png') ",
        blogpagedark: " url('/images/blogbgb.png') ",
        blackbg: " url('/images/awardprojectdbg.png') ",
        lightbg: " url('/images/awardprojectdlbg.jpg') ",
        productbg: " url('/images/productbg.png') ",
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
