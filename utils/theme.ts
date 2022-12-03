import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface TypographyVariants {
    cardTitle: React.CSSProperties;
    cardPrice: React.CSSProperties;
    cardPriceGrey: React.CSSProperties;
    cardSells: React.CSSProperties;
    ProductTitleLink: React.CSSProperties;
    ProductTitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    cardTitle: React.CSSProperties;
    cardPrice: React.CSSProperties;
    cardPriceGrey: React.CSSProperties;
    cardSells: React.CSSProperties;
    ProductTitleLink: React.CSSProperties;
    ProductTitle: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    cardTitle: true;
    cardPrice: true;
    cardPriceGrey: true;
    cardSells: true;
    ProductTitleLink: true;
    ProductTitle: true;
  }
}

const base = createTheme({
  palette: {
    primary: {
      main: "#8A3FFC",
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          // padding: '16px',
          "&:last-child": {
            paddingBottom: '8px'
          }
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: 0,
          justifyContent: 'space-around',
          alignItems: 'center'
        }
      }
    }
  },
  typography: {
    fontFamily: "Proxima Nova",
    fontSize: 16,

    /* ProductCard fontSize styles */
    cardTitle: {
      color: "#031A61",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      // "@media (max-width:1920px)": {
      //   fontSize: "1rem",
      // },
      // "@media (max-width:1536px)": {
      //   fontSize: "0.9rem",
      // },
      // "@media (max-width:1200px)": {
      //   fontSize: "0.7rem",
      // },
      // "@media (max-width:900px)": {
      //   fontSize: "1rem",
      // },
      // "@media (max-width:600px)": {
      //   fontSize: "0.75rem",
      // },
    },
    cardPrice: {
      color: "#031A61",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      // "@media (max-width:1920px)": {
      //   fontSize: "1.3rem",
      // },
      // "@media (max-width:1536px)": {
      //   fontSize: "1.2rem",
      // },
      // "@media (max-width:1200px)": {
      //   fontSize: "1.1rem",
      // },
      // "@media (max-width:900px)": {
      //   fontSize: "1rem",
      // },
      // "@media (max-width:600px)": {
      //   fontSize: ".9rem",
      // },
    },
    cardPriceGrey: {
      color: "#BBBBBB",
      textDecoration: "line-through",
      fontSize: "18px",
      marginInline: "0.5rem",
      // "@media (max-width:1920px)": {
      //   fontSize: "1.3rem",
      // },
      // "@media (max-width:1536px)": {
      //   fontSize: "1.2rem",
      // },
      // "@media (max-width:1200px)": {
      //   fontSize: "1.1rem",
      // },
      // "@media (max-width:900px)": {
      //   fontSize: "1rem",
      // },
      // "@media (max-width:600px)": {
      //   fontSize: ".9rem",
      // },
    },
    cardSells: {
      color: "#031A61",
      fontSize: "0.75rem",
      // "@media (max-width:1920px)": {
      //   fontSize: "0.9rem",
      // },
      // "@media (max-width:1536px)": {
      //   fontSize: "0.85rem",
      // },
      // "@media (max-width:1200px)": {
      //   fontSize: "0.75rem",
      // },
      // "@media (max-width:600px)": {
      //   fontSize: ".70rem",
      // },
    },
    //ProductSection
    ProductTitleLink: {
      color: "#333333",
      fontWeight: "bold",
      // "@media (max-width:1920px)": {
      //   fontSize: "2.45rem",
      // },
      // "@media (max-width:1536px)": {
      //   fontSize: "2.35rem",
      // },
      // "@media (max-width:1200px)": {
      //   fontSize: "2.25rem",
      // },
      // "@media (max-width:900px)": {
      //   fontSize: "2.15rem",
      // },
      // "@media (max-width:600px)": {
      //   fontSize: "2.5rem",
      // },
    },
    ProductTitle: {
      color: "#333333",
      fontSize: "28px",
      fontWeight: "bold",
      // "@media (max-width:1920px)": {
      //   fontSize: "2.45rem",
      // },
      // "@media (max-width:1536px)": {
      //   fontSize: "2.35rem",
      // },
      // "@media (max-width:1200px)": {
      //   fontSize: "2.25rem",
      // },
      // "@media (max-width:900px)": {
      //   fontSize: "2.15rem",
      // },
      // "@media (max-width:600px)": {
      //   fontSize: "2.05rem",
      // },
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
