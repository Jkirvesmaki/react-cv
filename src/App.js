import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import avatar from "./images/avatar.png";
import reactimg from "./images/reactimg.svg";
import gitlogo from "./images/gitlogo.png";
import css from "./images/css.png";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Skills from "./Components/Skills";

const App = (props) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "5vh",
          paddingBottom: "5vh",
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
            <Typography variant="h3" gutterBottom component="div">
              Joonas Kirvesmäki
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Third year IT student at Haaga-Helia. Currently looking for a
              front-end development internship.
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              I mainly use React for my projects.
            </Typography>
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
