import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material/";
import avatar from "./images/avatar.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Skills from "./Components/Skills";
import Intro from "./Components/Intro";
import Contact from "./Components/Contact";
import Avatar from "@mui/material/Avatar";
const App = (props) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          flexGrow: 1,
          borderRadius: 3,
          backgroundColor: "#cfe8fc",
          paddingLeft: "1vh",
          paddingTop: "1vh",
        }}
      >
        <Grid container justify="space-around" spacing={2}>
          <Grid
            item
            xs={5}
            justifyContent="left"
           
          >
            <Avatar
              alt="avatar"
              src={avatar}
              sx={{ width: '77%', height: 'auto' }}
              variant="square"
            />
          </Grid>
          <Grid item xs={7} justifyContent="center" marginTop="2.5vh">
            <Intro />
          </Grid>

          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              marginTop="2vh"
              sx={{ fontWeight: "bold" }}
            >
              About
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              I am a 25 year old student from Helsinki. Im interested in web
              development and especially Javascript, React and it's various
              libraries.
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              marginTop="2vh"
              sx={{ fontWeight: "bold" }}
            >
              Skills
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              marginBottom="2vh"
            >
              I am familiar with HTML, CSS, Javascript, React, HTTP request,
              JSON, SQL and various other technologies such as Git and Linux.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Skills />
          </Grid>
          <Grid item xs={8} marginTop="3vh">
            <Contact />
          </Grid>
        </Grid>

        <Grid
          container
          marginTop="1vh"
          spacing={1}
          direction="row"
          justify="space-around"
        >
          <Grid item>
            <Link
              href="https://www.linkedin.com/in/joonas-kirvesm%C3%A4ki-836632227/"
              target="_blank"
            >
              <LinkedIn sx={{ fontSize: 50, color: "#666666" }} />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://github.com/Jkirvesmaki" target="_blank">
              <GitHubIcon sx={{ fontSize: 50, color: "#666666" }} />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
