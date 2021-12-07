import React from "react";
import { Typography } from "@mui/material/";

const Contact = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom component="div">
        Contact me
      </Typography>
      <Typography
        display="block"
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        Joonas.kirvesmaki@gmail.com
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
