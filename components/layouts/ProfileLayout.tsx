import { Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import ProfileMenu from "../ProfileMenu";


const ProfileLayout: React.FC = ({ children }) => {

  return (
    <Grid container spacing={2} columns={4} gridAutoColumns="1fr">
      <Hidden mdDown>
        <Grid item xs={4} sm={4} md={1.5} lg={1} xl={1}>
          <ProfileMenu />
        </Grid>
      </Hidden>
      <Grid item xs={4} sm={4} md={2.5} lg={3} xl={3}>
        {children}
      </Grid>
    </Grid>
  );
};

export default ProfileLayout;
