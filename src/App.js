import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import avatar from "./images/avatar.png";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import "@fontsource/abel";
import LinkedIn from "@mui/icons-material/LinkedIn";

const App = () => {
  const [progressReact, setProgressReact] = React.useState(0);
  const [progressGit, setProgressGit] = React.useState(0);
  const [progressCss, setProgressCss] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgressReact((oldProgress) => {
        const diff = 5;
        return Math.min(oldProgress + diff, 70);
      });
      setProgressGit((oldProgress) => {
        const diff = 5;
        return Math.min(oldProgress + diff, 80);
      });
      setProgressCss((oldProgress) => {
        const diff = 5;
        return Math.min(oldProgress + diff, 50);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
            <img src={avatar}></img>
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

          <Grid item xs={8} marginTop="3vh">
            <Typography variant="h4" gutterBottom component="div">
              Skills
              <br />
              <br />
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              React
            </Typography>
            <LinearProgress variant="determinate" value={progressReact} />
            <br />
            <br />
            <Typography variant="h6" gutterBottom component="div">
              CSS
            </Typography>
            <LinearProgress variant="determinate" value={progressCss} />

            <br />
            <br />
            <Typography variant="h6" gutterBottom component="div">
              Git
            </Typography>
            <LinearProgress variant="determinate" value={progressGit} />
          </Grid>

          <Grid item xs={8} marginTop="3vh">
            <Typography variant="h4" gutterBottom component="div">
              Contact
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
