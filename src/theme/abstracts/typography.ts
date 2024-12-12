import { Marcellus } from "next/font/google";
import { Work_Sans } from "next/font/google";
const marcellus = Marcellus({ weight: "400", style: "normal", subsets: ["latin"] });
const workSans = Work_Sans({ weight: ["400", "500"], style: "normal", subsets: ["latin"] });

export const fontSizes = {
  default: {
    "900": "2rem", // 32px
    "800": "2rem", // 32px
    "700": "1.25rem", // 20px
    "600": "1.125rem", //18px
    "500": "1rem", //16px
    "400": "1rem", // 16px
    "300": "0.875rem", // 14px
    "200": "0.75rem", // 12px
  },
  lg: {
    "900": "2.8125rem", // 45px
    "700": "1.75rem", // 23px
    "500": "1.125rem", //18px
    "200": "0.875rem", // 14px
  },
};

console.log(marcellus.style.fontFamily, workSans.style.fontFamily);
export const typography = {
  fontFamilyBase: workSans.style.fontFamily,
  fontFamilyAccent: marcellus.style.fontFamily,

  fontWeightRegular: 400,
  fontWeightMedium: 500,

  // Font size custom properties are generated in theme/base/root.ts
  // from the above fontSizes object
  fontSize900: "var(--font-size-900)",
  fontSize800: "var(--font-size-800)",
  fontSize700: "var(--font-size-700)",
  fontSize600: "var(--font-size-600)",
  fontSize500: "var(--font-size-500)",
  fontSize400: "var(--font-size-400)",
  fontSize300: "var(--font-size-300)",
  fontSize200: "var(--font-size-200)",
};
