import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { SoundIcon, Triangle } from "./icons";
import { Howl } from "howler";
import { BpmMetronome } from "./containers";

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

  const callMySound = (src) => {
    const sound = new Howl({
      src: ["/samples/samples.mp3", "/samples/samples.webm"],
      sprite: {
        clap: [0, 2000],
        "hh closed": [3000, 2000],
        "hh open": [6000, 2000],
        kick: [9000, 2000],
        rim: [12000, 2000],
        snare: [15000, 2000],
        tom: [18000, 2000],
      },
    });
    sound.play(src);
  };

  const tones = () => {
    return Array.from({ length: 16 }, (_, i) => (
      <Button variant="light" className="pad"></Button>
    ));
  };

  const gridToDisplay = () => {
    return (
      <Container className="center-block">
        <div className="header">
          <h1>La Bit Machina</h1>
          <Button
            variant="light"
            className="play"
          >
            Play <Triangle />
          </Button>
        </div>
        <BpmMetronome />
        {sounds.map((sound, index) => {
          return (
            <div className="sound-row" key={index}>
              <Button
                onClick={() => callMySound(sound)}
                variant="light"
                className="sound-button"
              >
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
