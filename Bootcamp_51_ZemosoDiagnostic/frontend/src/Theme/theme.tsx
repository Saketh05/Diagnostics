import {
  createTheme,
  PaletteColorOptions,
  PaletteColor,
} from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor extends ColorPartial {}
}

declare module "@mui/material/styles" {
  interface Palette {
    blue: PaletteColor;
    purple: PaletteColor;
    text1: PaletteColor;
    text2: PaletteColor;
    text3: PaletteColor;
    grey1: PaletteColor;
    background1: PaletteColor;
    alerts: PaletteColor;
    textButton: PaletteColor;
  }

  interface PaletteOptions {
    blue: PaletteColorOptions;
    purple: PaletteColorOptions;
    text1: PaletteColorOptions;
    text2: PaletteColorOptions;
    text3: PaletteColorOptions;
    grey1: PaletteColorOptions;
    background1: PaletteColorOptions;
    alerts: PaletteColorOptions;
    textButton: PaletteColorOptions;
  }

  interface CustomTypography {
    title: React.CSSProperties;
    caption: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    caption4: React.CSSProperties;
    faq: React.CSSProperties;
    overline2: React.CSSProperties;
    payment: React.CSSProperties;
    body3: React.CSSProperties;
    overlineR: React.CSSProperties;
    review: React.CSSProperties;
    review2: React.CSSProperties;
    home: React.CSSProperties;


  }

  interface TypographyVariants extends CustomTypography {}
  interface TypographyVariantsOptions extends CustomTypography {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption: true;
    caption1: true;
    caption2: true;
    caption3: true;
    caption4: true;
    faq: true;
    overline2: true;
    payment: true;
    body3: true;
    overlineR: true;
    review: true;
    review2: true;
    home: true;


  }
}

const theme = createTheme({
  palette: {
    blue: {
      "50": "#F2F5FF",
      "100": "#C6CEF7",
      "300": "#9191F2",
      "500": "#6B4DE0",
      "800": "#4D1C8C",
    },

    purple: {
      "50": "#F9F5FA",
      "100": "#EBDAF2",
      "500": "#C898D9",
      "800": "#9E62B3",
    },

    text1: {
      main: "#2D2A38",
    },

    text2: {
      main: "#5A5766",
    },

    text3: {
      main: "#757380",
    },

    grey1: {
      "50": "#F8F8FA",
      "100": "#E9E8ED",
      "200": "#D4D2D9",
      "300": "#9F9DA6",
      "500": "#6D6C73",
      "600": "#3C3B40",
    },

    background1: {
      main: "#FFFFFF",
    },

    alerts: {
      main: "#4D8066",
      "500": "#DA4D4D",
      "200": "#FC5C5C",
    },
    textButton:{
      main: "#FAFAFC",
    }
  },

  typography: {
    fontFamily: "Inter",

    title: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "48px",
      lineHeight: "52px",
    },

    h1: {
      fontFamily: "Inter",
      fontStyle: "bold",
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "28px",
    },

    h2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "24px",
      lineHeight: "28px",
    },

    subtitle1: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
    },

    subtitle2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "24px",
    },

    body1: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "24px",
    },

    body2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "24px",
    },

    caption: {
      fontFamily: "Inter",
      fontStyle: "bold",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "18px",
    },

    body3: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "18px",
      padding: "4px",
    },

    caption1: {
      fontFamily: "Inter",
      fontStyle: "bold",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "20px",
    },

    caption2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
    },

    caption3: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "18px",
      textTransform: "none",
    },

    caption4: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
      textTransform: "none",
    },

    button: {
      fontFamily: "Inter",
      fontStyle: "bold",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "20px",
      textTransform: "none",
    },

    overline: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      textTransform: "none",
    },

    faq: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
    },

    overline2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "18px",
    },

    payment: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "18px",
    },
    overlineR: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "18px",
    },


    review: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      color: "#757380",
    },

    review2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "16px",
      color: "#757380",
    },

    home: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "28px",
    },
  },
});

export default theme;
