import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import reactimg from "../images/reactimg.jpg";
import gitlogo from "../images/gitlogo.png";
import css from "../images/css.png";
const Skills = ({ skills, image, width, heigth }) => {
  return (
    <div>
      <Grid
        container
        justify="space-around"
        spacing={2}
        direction="row"
        justifyContent="center"
      >
        <Grid item>
          <Avatar alt="react" src={reactimg} sx={{ width: 95, height: 95 }} />
        </Grid>
        <Grid item>
          <Avatar alt="react" src={gitlogo} sx={{ width: 95, height: 95 }} />
        </Grid>
        <Grid item>
          <Avatar alt="react" src={css} sx={{ width: 95, height: 95 }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
