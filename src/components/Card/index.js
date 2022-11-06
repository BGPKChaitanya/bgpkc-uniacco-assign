import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#ffffff",
      contrastText: "#000000",
    },
  },
});

const Card = (props) => {
  const { each } = props;
  const { imageUrl, text } = each;
  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className="card">
      <div className="card-description">
        <p className="card-col">Collection</p>
        <h1 className="card-text">{text}</h1>
      </div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="neutral">
          Show All
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default Card;
