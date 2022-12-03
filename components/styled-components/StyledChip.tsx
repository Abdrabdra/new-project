import { Chip, ChipProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FunctionComponent } from "react";

// export const StyledChip = styled((props: ChipProps) => (
//   <Chip
//     size='small'
//     variant='outlined'
//     {...props}
//   />
// ))(() => ({
//   backgroundColor: '#F2F4F5',
//   color: '#000000',
//   borderRadius: '5px',
//   border: 'none',
//   mr: '0.5rem',
//   mb: '0.5rem'
// }));

interface Props {
  title: string;
  icon?: any;
  backcolor?: string;
  textColor?: string;
}

export const StyledChip: FunctionComponent<Props> = ({
  title,
  icon,
  backcolor,
  textColor,
}) => {
  return (
    <Chip
      size="small"
      label={title}
      icon={icon}
      variant="outlined"
      sx={{
        backgroundColor: backcolor ? backcolor : "#F2F4F5",
        color: textColor,
        borderRadius: "5px",
        border: "none",
        fontSize: "16px",
        p: "1rem",
        mr: "0.5rem",
        mb: "0.5rem",
      }}
    />
  );
};

export const StyledChipNew = styled((props: ChipProps) => (
  <Chip
    size='small'
    variant='outlined'
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#F2F4F5",
  color: "#000000",
  borderRadius: "5px",
  border: "none",
  fontSize: "12px",
  padding: "0.5rem",
  marginRight: "8px",
  marginBottom: "8px",
  [theme.breakpoints.down('sm')] : {
    fontSize: '9px'
  }
}));

export const StyledOrderStatusChip = styled((props: ChipProps) => (
  <Chip {...props} />
))(({ theme }) => ({
  backgroundColor: "#6FDC8C",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "5px",
  fontSize: "14px",
  color: "#fff",
  padding: "7px",
}));
