import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material/";
import avatar from "./images/avatar.png";
import reactimg from "./images/reactimg.svg";
import gitlogo from "./images/gitlogo.png";
import css from "./images/css.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Skills from "./Components/Skills";
import Intro from "./Components/Intro";
import Contact from "./Components/Contact";

const App = (props) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "3vh",
          marginBottom: "3vh",
          borderRadius: 2,
          backgroundColor: "#cfe8fc",
        }}
      >
        <Grid container justify="space-around" spacing={2} marginLeft="1vh">
          <Grid
            item
            xs={3}
            justifyContent="left"
            sx={{
              display: { xs: "none", lg: "block" },
            }}
          >
            <img src={avatar} />
          </Grid>
          <Grid
            item
            xs={7}
            justifyContent="right"
            marginTop="2vh"
            marginLeft="6vh"
          >
            <Intro />
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              marginTop="4vh"
            >
              Skills
            </Typography>
          </Grid>
          <Grid
            container
            justify="space-around"
            spacing={2}
            marginLeft="1vh"
            direction="row"
            justifyContent="center"
            paddingBottom="2vh"
          >
            <Grid item xs={3} marginTop="3vh">
              <Skills
                skills={"React"}
                image={reactimg}
                width={"110"}
                heigth={"95"}
              />
            </Grid>
            <Grid item xs={3} marginTop="3vh">
              <Skills skills={"CSS"} image={css} width={"110"} heigth={"95"} />
            </Grid>
            <Grid item xs={3} marginTop="3vh">
              <Skills
                skills={"Git"}
                image={gitlogo}
                width={"110"}
                heigth={"95"}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4" gutterBottom component="div">
              About
            </Typography>

            <Typography variant="h6" gutterBottom component="div">
              I am a 25 year old Student from Helsinki. Im interested in web
              development and especially Javascript, React and it's various
              libraries.
            </Typography>
          </Grid>
          <Grid item xs={8} marginTop="3vh">
            <Contact />
          </Grid>
        </Grid>

        <Grid
          marginTop="6vh"
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={2}>
            <Link
              href="https://www.linkedin.com/in/joonas-kirvesm%C3%A4ki-836632227/"
              target="_blank"
            >
              <LinkedIn sx={{ fontSize: 80, color: "#666666" }} />
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link href="https://github.com/Jkirvesmaki" target="_blank">
              <GitHubIcon sx={{ fontSize: 80, color: "#666666" }} />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
