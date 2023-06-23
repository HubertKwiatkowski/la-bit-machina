import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { SoundIcon } from "./icons";

import "./App.css";

const App = () => {
  const sounds = [
    "kick",
    "snare",
    "hh open",
    "hh closed",
    "clap",
    "rim",
    "tom",
  ];

  const tones = () => {
    return Array.from({ length: 16 }, (_, i) => (
      <Button variant="light" className="pad"></Button>
    ));
  };

  const gridToDisplay = () => {
    return (
      <Container className="center-block">
        {sounds.map((sound, index) => {
          return (
            <div className="sound-row" key={index}>
              <Button variant="light" className="sound-button">
                {sound}
                <SoundIcon />
              </Button>
              {tones()}
            </div>
          );
        })}
      </Container>
    );
  };

  return <div className="app">{gridToDisplay()}</div>;
};

export default App;
