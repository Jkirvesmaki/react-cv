import React from "react";
import { Typography } from "@mui/material/";

const Contact = () => {
  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        Contact me
      </Typography>
      <Typography
        display="block"
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        <a href={`mailto:$Joonas.kirvesmaki@gmail.com}`}>
          Joonas.kirvesmaki@gmail.com
        </a>
      </Typography>
      <Typography
        display="block"
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        +358 456366277
      </Typography>
    </div>
  );
};
export default Contact;
