import { Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";

export const StyledTooltop = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    color: 'rgba(0, 0, 0, 0.87)',
    minWidth: '720px',
    // fontSize: theme.typography.pxToRem(12),
  },
}));