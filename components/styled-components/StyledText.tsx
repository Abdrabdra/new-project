import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTitle = styled((props: TypographyProps) => (
  <Typography
    {...props}
  />
))(({ theme }) => ({
  mb: "8px",
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px'
  }
}));

export const StyledText = styled((props: TypographyProps) => (
  <Typography
    {...props}
  />
))(({ theme }) => ({
  mb: "8px",
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px'
  }
}));