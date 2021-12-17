import React from "react";
import { Typography } from "@mui/material/";
const Intro = () => {
  return (
    <div>
      <Typography
        variant="title"
        gutterBottom
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        Joonas Kirvesmäki
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        Third year IT student at Haaga-Helia. Currently looking for a front-end
        development internship.
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        I mainly use React for my projects.
      </Typography>
    </div>
  );
};
export default Intro;
