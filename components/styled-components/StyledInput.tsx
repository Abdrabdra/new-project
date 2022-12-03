import { Input, InputProps, TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledProfileInput = styled((props: TextFieldProps) => (
    <TextField variant="outlined" fullWidth {...props} />
))(({ theme }) => ({
    // border: "1px solid #E4E4E4",
    // borderRadius: "10px",
    color: "#333333",
    // transition: "all 150ms ease",
    // padding: "10px 15px",
    maxHeight: "50px",
    "&:hover": {
        borderColor: "#B2BAC2",
        stroke: "#B2BAC2",
    },
    "&:focus": {
        stroke: "#B2BAC2",
        outline: "2px solid #80BFFF",
        outlineOffset: "2px",
    },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "#B2BAC2",
        },
    },
    "& .MuiFormHelperText-root": {
        textAlign: "right",
    },
}));

export const StyledCardInput = styled((props: TextFieldProps) => (
    <TextField fullWidth {...props} />
))(({ theme }) => ({
    background: "#F2F4F5",
    borderRadius: "5px",
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "#B2BAC2",
        },
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: '#B2BAC2',
        },
    },
}));
