/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        cta_text: "hsl(356, 100%, 66%)",
        cta_hover_bg: " hsl(355, 100%, 74%)",
        headings: "hsl(208, 49%, 24%)",
      },
      neutral: {
        text: " hsl(0, 0%, 100%)",
        footer_text: "hsl(240, 2%, 79%)",
        body_copy: "hsl(207, 13%, 34%)",
        footer_bg: "hsl(240, 10%, 16%)",
      },
      gradient: {
        bg_gradient_cta_mobile_nav: {
          very_light_red: "hsl(13, 100%, 72%)",
          light_red: "hsl(353, 100%, 62%)",
        },
        bg_gradient_body: {
          very_dark_gray_blue: "hsl(237, 17%, 21%)",
          very_dark_desaturated_blue: "hsl(237, 23%, 32%)",
        },
      },
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      containers: {
        sm: "23.438rem",
        xl: "90rem",
      },
      backgroundImage: {
        hero_section_mobile: "url('/images/bg-pattern-intro-mobile.svg')",
        hero_section_desktop: "url('/images/bg-pattern-intro-desktop.svg')",
        pattern_circle: "url('/images/bg-pattern-circles.svg')",
        design_for_feature_mobile: "url('/images/bg-pattern-circles.svg')",
        design_for_feature_desktop: "url('/images/bg-pattern-circles.svg')",
      },
      backgroundSize: {
        'mobile-size': "100vh",
        'desktop-size': "270vh",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
