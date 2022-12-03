import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { SwitchProps } from "@mui/material";

export const StyledCardSwitch = styled((props: SwitchProps) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 50,
    height: 30,
    padding: 0,
    content: '""',
    borderRadius: "16px",
    boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",

    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        color: "#E4E4E4",

        "&.Mui-checked": {
            transform: "translateX(20px)",
            color: "#E4E4E4",
            "& + .MuiSwitch-track": {
                backgroundColor: "#8A3FFC",
                opacity: 1,
                border: 0,
            },
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 26,
        height: 26,
    },
    "& .MuiSwitch-track": {
        borderRadius: "16px",
        backgroundColor: "#fff",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
    },
}));
