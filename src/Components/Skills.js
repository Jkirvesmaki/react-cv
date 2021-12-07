import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

const Skills = ({ skills, image, width, heigth }) => {
  return (
    <div>
      <img src={image} width={width} height={heigth} />
      <Typography variant="h4" gutterBottom component="div">
        {skills}
      </Typography>
    </div>
  );
};

export default Skills;
